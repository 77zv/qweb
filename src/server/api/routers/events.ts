import { z } from "zod";

import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";

export const eventRouter = createTRPCRouter({
    getEvent: publicProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.event.findFirst(
                {
                    select: {
                        id: true,
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
        })
    ).mutation(async ({ ctx, input }) => {
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
    }),
    createEvent: adminProcedure.input(
        z.object({
            title: z.string(),
            description: z.string(),
        })
    ).mutation(async ({ ctx, input }) => {
        const { title, description } = input;
        try {
            return await ctx.prisma.event.create({
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