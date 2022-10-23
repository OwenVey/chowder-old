// src/server/trpc/router/index.ts
import { t } from '../trpc';
import { authRouter } from './auth';
import { exampleRouter } from './example';
import { recipeRouter } from './recipe';

export const appRouter = t.router({
  example: exampleRouter,
  auth: authRouter,
  recipe: recipeRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
