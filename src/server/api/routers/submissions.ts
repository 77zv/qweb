import { z } from "zod";
import { judgesProcedure, createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";


export const submissionsRouter = createTRPCRouter({
    getSubmissions: judgesProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.submission.findMany();
        } catch (error) {
            console.log(error);
        }
    }),
    postSubmission: protectedProcedure.input(z.object({
        eventId: z.string(),
        userId: z.string(),
        file: z.object({
            name: z.string(),
            body: z.string()
        })

    }))
      .mutation(async ({ ctx, input }) => {
          const { eventId, userId, file } = input;
          try {
              // upload to r2
              await ctx.r2.send(
                new PutObjectCommand({
                    Bucket: "qweb",
                    Key: file.name,
                    Body: file.body
                })
              );

              const fileUrl = env.S3_PUBLIC_URL + file.name;

              return await ctx.prisma.submission.create({
                  data: {
                      fileUrl,
                      eventId,
                      userId
                  }
              });
          } catch (error) {
              console.log(error);
          }
      })
});