import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";

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
                file: z.optional(
                    z.object({
                        name: z.string(),
                        body: z.string(),
                    })
                ),
                submissionsOpen: z.optional(z.date()),
                submissionsClose: z.optional(z.date()),
            })
        )
        .mutation(async ({ ctx, input }) => {
            const { id, title, description, file, submissionsOpen, submissionsClose } = input;
            try {
                let fileUrl: string | undefined = undefined;
                if (file) {
                    // upload to r2
                    await ctx.r2.send(
                        new PutObjectCommand({
                            Bucket: "qweb",
                            Key: file.name,
                            Body: file.body,
                            ContentType: "application/pdf"
                        })
                    );

                    fileUrl = env.S3_PUBLIC_URL + file.name;
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
});
