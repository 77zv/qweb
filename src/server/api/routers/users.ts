import { z } from "zod";

import { createTRPCRouter, publicProcedure, protectedProcedure } from "../trpc";

export const usersRouter = createTRPCRouter({
  getUsers: protectedProcedure.query(async ({ ctx }) => {
    try {
      return await ctx.prisma.user.findMany({
          select: {
            id: true,
            name: true,
            email: true,
            role: true
          }
        }
      );
    } catch (error) {
      console.log(error);
    }
  }),
  updateUser: protectedProcedure.input(z.object({
    id: z.string(),
    role: z.string()
  }))
    .mutation(async ({ ctx, input }) => {
      const { id, role } = input;
      try {
        return await ctx.prisma.user.update({
          where: {
            id: id
          },
          data: role
        });
      } catch (error) {
        console.log(error);
      }
    })
});