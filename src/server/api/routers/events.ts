import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { PutObjectCommand } from "@aws-sdk/client-s3";
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
                fileUrl: z.optional(z.string()),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { id, title, description, submissionsOpen, submissionsClose } = input;
            try {
                let fileUrl: string | undefined = undefined;
                if (fileUrl) {
                    // copy object command

                    fileUrl = env.S3_PUBLIC_URL + fileUrl;
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
    createPresignedUrls: adminProcedure
        .input(
            z.object({
                contentType: z.optional(z.string()),
                extension: z.optional(z.string()),
            })
        )
        .query(async ({ input, ctx }): Promise<{ key: string; url: string }> => {
            if (!input.contentType) {
                throw new Error("contentType is required");
            }

            const key = crypto.randomUUID();

            const url = await getSignedUrl(
                ctx.r2,
                new PutObjectCommand({
                    Bucket: "qweb",
                    Key: key + "." + input.extension,
                    ContentType: input.contentType,
                })
            );

            return { key, url };
        }),
});
