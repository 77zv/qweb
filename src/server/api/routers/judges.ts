import {z} from 'zod';
import { adminProcedure, createTRPCRouter, publicProcedure } from "../trpc";
import { PutObjectCommand } from "@aws-sdk/client-s3";
import { env } from "../../../env/server.mjs";

export const judgesRouter = createTRPCRouter({
    getJudges: publicProcedure.query(async ({ ctx }) => {
        try {
            return await ctx.prisma.user.findMany(
                {
                    where: {
                        role: "judge"
                    }
                }
            );
        } catch (error) {
            console.log(error);
        }
    }),
});

