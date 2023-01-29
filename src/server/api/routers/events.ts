import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure, adminProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  getEvent: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.event.findMany();
    } catch (error) {
      console.log(error);
    }
  }),
  updateEvent: adminProcedure.input(
    z.object({
      id: z.string(),
      title: z.string(),
      description: z.string(),
    }))
    .mutation(async ({ ctx, input }) => {
      const { id, title, description } = input;
      try {
        return await ctx.prisma.event.update({
          where: {
            id: id
          },
          data: {
            title: title,
            description: description
          }
        });
      } catch (error) {
        console.log(error);
      }
    })
});