import { createTRPCRouter } from "./trpc";

import { lipsRouter } from "./routers/lips";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here
 */
export const appRouter = createTRPCRouter({
  lips: lipsRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
