import { z } from "zod";
import { judgesProcedure, createTRPCRouter, publicProcedure } from "../trpc";
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
    // file submission (make it override the old shit)
});