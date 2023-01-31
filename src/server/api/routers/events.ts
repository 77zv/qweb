import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import {
  GetObjectCommand,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

export const eventRouter = createTRPCRouter({
  getEvent: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.event.findFirst(
        {
          select: {
            id: true
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }),
  updateEvent: adminProcedure.input(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      file: z.optional(z.instanceof(File)),
      submissionsOpen: z.optional(z.date()),
      submissionsClose: z.optional(z.date())
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, title, description, file, submissionsOpen, submissionsClose } = input;
    try {
      // check if we need to upload file to r2, if so update fileUrl also
      if (file) {
        // upload to r2
        await ctx.r2.send(new PutObjectCommand({
          Bucket: "qweb",
          Key: file.name,
          Body: file
        }));

        // expires in one year
        const fileUrl = await getSignedUrl(ctx.r2, new GetObjectCommand({
          Bucket: "qweb",
          Key: file.name
        }), { expiresIn: 31536000 });

        return await ctx.prisma.event.update({
          where: {
            id: id
          },
          data: {
            title,
            description,
            fileUrl,
            submissionsOpen,
            submissionsClose
          }
        });
      } else {
        // we don't need to upload the file, just update the event
        return await ctx.prisma.event.update({
          where: {
            id: id
          },
          data: {
            title,
            description,
            submissionsOpen,
            submissionsClose
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }),
  createEvent: adminProcedure.input(
    z.object({
      title: z.string(),
      description: z.string(),
      file: z.instanceof(File),
      submissionsOpen: z.optional(z.date()),
      submissionsClose: z.optional(z.date())
    })
  ).mutation(async ({ ctx, input }) => {
    const {
      title,
      description,
      file,
      submissionsOpen,
      submissionsClose
    } = input;
    try {
      // upload to r2
      await ctx.r2.send(new PutObjectCommand({
        Bucket: "qweb",
        Key: file.name,
        Body: file
      }));

      // expires in one year
      const fileUrl = await getSignedUrl(ctx.r2, new GetObjectCommand({
        Bucket: "qweb",
        Key: file.name
      }), { expiresIn: 31536000 });


      return await ctx.prisma.event.create({
        data: {
          title,
          description,
          fileUrl,
          submissionsOpen,
          submissionsClose
        }
      });
    } catch (error) {
      console.log(error);
    }
  })

});