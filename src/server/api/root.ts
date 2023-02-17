import { createTRPCRouter } from "./trpc";
import { eventRouter } from "./routers/events";
import { usersRouter } from "./routers/users";
import { submissionsRouter } from "./routers/submissions";
import { judgesRouter } from "./routers/judges";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
    events: eventRouter,
    users: usersRouter,
    submissions: submissionsRouter,
    judges: judgesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;