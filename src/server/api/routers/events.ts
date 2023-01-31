import { z } from "zod";
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";

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

  upsertEvent: adminProcedure.input(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      file: z.instanceof(File),
      submissionsOpen: z.optional(z.date()),
      submissionsClose: z.optional(z.date())
    })).mutation(async ({ ctx, input }) => {
    const {
      id,
      title,
      description,
      file,
      submissionsOpen,
      submissionsClose
    } = input;
    try {

      // upload file to r2

      return await ctx.prisma.event.upsert({
        where: {
          id: id
        },
        create: {
          title,
          description,
          fileUrl: "https://www.google.com",
          submissionsOpen,
          submissionsClose
        },
        update: {
          title,
          description,
          submissionsOpen,
          submissionsClose
        }
      });
    } catch (error) {
      console.log(error);
    }
  }),
/*
  updateEvent: adminProcedure.input(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
      submissionsOpen: z.optional(z.date()),
      submissionsClose: z.optional(z.date())
    })
  ).mutation(async ({ ctx, input }) => {
    const { id, title, description, submissionsOpen, submissionsClose } = input;
    try {
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
    } catch (error) {
      console.log(error);
    }
  }),
  createEvent: adminProcedure.input(
    z.object({
      title: z.string(),
      description: z.string(),
      submissionsOpen: z.optional(z.date()),
      submissionsClose: z.optional(z.date())
    })
  ).mutation(async ({ ctx, input }) => {
    const { title, description, submissionsOpen, submissionsClose } = input;
    try {
      return await ctx.prisma.event.create({
        data: {
          title,
          description,
          submissionsOpen,
          submissionsClose
        }
      });
    } catch (error) {
      console.log(error);
    }
  })
  */
});