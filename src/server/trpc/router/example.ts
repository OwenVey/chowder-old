import { t } from '../trpc';
import { z } from 'zod';
import { recipes } from '@/utils/mocks';

export const exampleRouter = t.router({
  hello: t.procedure
    .input(z.object({ text: z.string().nullish() }).nullish())
    .query(({ input }) => {
      return {
        greeting: `Hello ${input?.text ?? 'world'}`,
      };
    }),
  getAll: t.procedure.query(({ ctx }) => {
    return ctx.prisma.example.findMany();
  }),
  getRecipeById: t.procedure.input(z.string()).query(({ input: id }) => {
    return recipes.find((recipe) => recipe.id === id);
  }),
});
