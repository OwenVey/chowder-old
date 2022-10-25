import { newRecipeSchema } from '@/components/Recipie/NewRecipeModal';
import { recipes } from '@/utils/mocks';
import { z } from 'zod';
import { t } from '../trpc';

export const recipeRouter = t.router({
  getById: t.procedure.input(z.string()).query(({ input: id }) => {
    return recipes.find((recipe) => recipe.id === id);
  }),
  create: t.procedure.input(newRecipeSchema).mutation(async ({ input, ctx }) => {
    // console.log(ctx.prisma);
    // TODO: create prisma type for Recipe and save to DB
    await new Promise((r) => setTimeout(r, 1000));
    return input;
  }),
});
