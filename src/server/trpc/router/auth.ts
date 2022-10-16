import { recipes } from '@/utils/mocks';
import { z } from 'zod';
import { t, authedProcedure } from '../trpc';

export const authRouter = t.router({
  getSession: t.procedure.query(({ ctx }) => {
    return ctx.session;
  }),
  getSecretMessage: authedProcedure.query(() => {
    return 'You are logged in and can see this secret message!';
  }),
  getRecipeById: authedProcedure.input(z.string()).query(({ input: id }) => {
    return recipes.find((recipe) => recipe.id === id);
  }),
});
