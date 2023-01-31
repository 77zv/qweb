import { PrismaClient } from "@prisma/client";
import { S3Client } from "@aws-sdk/client-s3";

import { env } from "../env/server.mjs";

declare global {
  // eslint-disable-next-line no-var
  var prisma: PrismaClient | undefined;
  // eslint-disable-next-line no-var
  var r2: S3Client | undefined;
}

export const prisma =
  global.prisma ||
  new PrismaClient({
    log:
      env.NODE_ENV === "development" ? ["query", "error", "warn"] : ["error"]
  });

export const r2 =
  global.r2 ||
  new S3Client({
    region: "auto",
    endpoint: env.S3_ENDPOINT,
    credentials: {
      accessKeyId: env.S3_ACCESS_KEY_ID,
      secretAccessKey: env.S3_SECRET_ACCESS_KEY,
    },
  });

if (env.NODE_ENV !== "production") {
  global.prisma = prisma;
}