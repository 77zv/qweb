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
    submitSolution: protectedProcedure.input(z.object({
        eventId: z.string(),
        userId: z.string(),
        file: z.optional(z.object({
            name: z.string(),
            body: z.string()
        }))
    }))
      .mutation(async ({ ctx, input }) => {
          const { eventId, userId, file } = input;
          let fileUrl: string | undefined = undefined;
          try {
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

              // check if user exists
              const user = await ctx.prisma.user.findUnique({
                  where: {
                      id: userId
                  }
              });
              if (!user) {
                  throw new Error("User not found");
              }

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