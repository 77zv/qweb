import { z } from "zod";
import {
    judgesProcedure,
    createTRPCRouter,
    publicProcedure,
    protectedProcedure,
    adminProcedure
} from "../trpc";
import { CopyObjectCommand, DeleteObjectsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";
import crypto from "crypto";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const submissionsRouter = createTRPCRouter({
    getSubmissions: judgesProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.submission.findMany();
        } catch (error) {
            console.log(error);
        }
    }),
    submitSolution: protectedProcedure
        .input(
            z.object({
                eventId: z.string(),
                userId: z.string(),
                fileInfo: z.object({
                    fileKey: z.optional(z.string()),
                    fileContentType: z.optional(z.string()),
                    fileExtension: z.optional(z.string()),
                }),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { eventId, userId, fileInfo } = input;
            let fileUrl: string | undefined = undefined;
            try {
                if (fileInfo.fileExtension && fileInfo.fileKey && fileInfo.fileContentType) {
                    // copy object command
                    const copyObjectCommand = new CopyObjectCommand({
                        Bucket: "qweb",
                        CopySource: "qweb/" + fileInfo.fileKey,
                        Key: userId + "." + fileInfo.fileExtension,
                        ContentType: fileInfo.fileContentType,
                    });

                    // copy object
                    await ctx.r2.send(copyObjectCommand);

                    // delete original
                    const deleteObjectCommand = new DeleteObjectsCommand({
                        Bucket: "qweb",
                        Delete: {
                            Objects: [
                                {
                                    Key: fileInfo.fileKey,
                                },
                            ],
                        },
                    });

                    await ctx.r2.send(deleteObjectCommand);

                    fileUrl = env.S3_PUBLIC_URL + fileInfo.fileKey + "." + fileInfo.fileExtension;
                }

                // check if user exists
                const user = await ctx.prisma.user.findUnique({
                    where: {
                        id: userId,
                    },
                });

                if (!user) {
                    throw new Error("User not found");
                }

                return await ctx.prisma.submission.create({
                    data: {
                        fileUrl,
                        eventId,
                        userId,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        }),
    createSubmissionPresignedUrls: protectedProcedure.query(async ({ ctx }): Promise<{ key: string; url: string }> => {
        const key = crypto.randomUUID();

        const url = await getSignedUrl(
          ctx.r2,
          new PutObjectCommand({
              Bucket: "qweb",
              Key: key,
          })
        );

        return { key, url };
    }),
});
