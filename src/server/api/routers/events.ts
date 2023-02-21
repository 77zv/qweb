import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { CopyObjectCommand, DeleteObjectsCommand, PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import crypto from "crypto";

export const eventRouter = createTRPCRouter({
    getEvent: publicProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.event.findFirst();
        } catch (error) {
            console.log(error);
        }
    }),
    upsertEvent: adminProcedure
        .input(
            z.object({
                id: z.string(),
                title: z.string(),
                description: z.string(),
                submissionsOpen: z.optional(z.date()),
                submissionsClose: z.optional(z.date()),
                fileInfo: z.object({
                    fileKey: z.optional(z.string()),
                    fileContentType: z.optional(z.string()),
                    fileExtension: z.optional(z.string()),
                }),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { id, title, description, submissionsOpen, submissionsClose, fileInfo } = input;
            try {
                let fileUrl: string | undefined = undefined;
                if (fileInfo.fileExtension && fileInfo.fileKey && fileInfo.fileContentType) {
                    // copy object command
                    const copyObjectCommand = new CopyObjectCommand({
                        Bucket: "qweb",
                        CopySource: "qweb/" + fileInfo.fileKey,
                        Key: fileInfo.fileKey + "." + fileInfo.fileExtension,
                        ContentType: fileInfo.fileContentType,
                    });

                    // copy object
                    await ctx.r2.send(copyObjectCommand);

                    fileUrl = env.S3_PUBLIC_URL + fileInfo.fileKey + "." + fileInfo.fileExtension;
                }

                return await ctx.prisma.event.upsert({
                    where: {
                        id,
                    },
                    create: {
                        title,
                        description,
                        fileUrl,
                        submissionsOpen,
                        submissionsClose,
                    },
                    update: {
                        title,
                        description,
                        fileUrl,
                        submissionsOpen,
                        submissionsClose,
                    },
                });
            } catch (error) {
                console.log(error);
            }
        }),
    createPresignedUrls: adminProcedure.query(async ({ ctx }): Promise<{ key: string; url: string }> => {
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
