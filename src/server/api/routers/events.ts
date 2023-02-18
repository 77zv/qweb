import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

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
            filetype: z.string()
          })
        ),
        submissionsOpen: z.optional(z.date()),
        submissionsClose: z.optional(z.date())
      })
    )
    .mutation(async ({ ctx, input }) => {
      const {
        id,
        title,
        description,
        file,
        submissionsOpen,
        submissionsClose
      } = input;
      try {
        let fileUrl: string | undefined = undefined;
        let signedUrl: string = "";
        if (file) {
          const command = new PutObjectCommand({
            Bucket: "qweb",
            Key: file.name,
            ContentType: file.filetype,
            Body: "BODY"
          });

          signedUrl = await getSignedUrl(ctx.r2, command, {
            expiresIn: 3600,
          });

          fileUrl = env.S3_PUBLIC_URL + file.name;
        }

        await ctx.prisma.event.upsert({
          where: {
            id
          },
          create: {
            title,
            description,
            fileUrl,
            submissionsOpen,
            submissionsClose
          },
          update: {
            title,
            description,
            fileUrl,
            submissionsOpen,
            submissionsClose
          }
        });

        return signedUrl;

      } catch (error) {
        return "fuck this";
        console.log(error);
      }
    })
});
