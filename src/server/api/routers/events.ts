import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
  getAll: publicProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.event.findMany();
    } catch (error) {
      console.log(error);
    }
  }),
  getEvent: publicProcedure.input(
    z.object({
      id: z.string()
    }))
    .query(async ({ ctx, input }) => {
      const { id } = input;
      try {
        return await ctx.prisma.event.findUnique({
          where: {
            id: id
          }
        });
      } catch (error) {
        console.log(error);
      }
    }),
  test : protectedProcedure.query( ({ ctx }) => {
    console.log(ctx.session)
    return "test"
  })
});