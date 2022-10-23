import { Button, Dialog, Form, FormNumberInput, FormTextInput } from '@/components';
import { Recipe } from '@/types/chowder';
import { trpc } from '@/utils/trpc';
import { SubmitHandler } from 'react-hook-form';
import { z } from 'zod';

type Props = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

export const newRecipeSchema = z.object({
  name: z.string(),
  description: z.string().optional(),
  servings: z.number().gte(1, 'Must be at least 1 serving'),
  prepTime: z.number(),
  cookTime: z.number(),
  ingredients: z.array(
    z.object({
      name: z.string(),
    }),
  ),
  directions: z.array(z.string()),
  photos: z.array(z.string()),
});

export default function NewRecipeModal({ trigger, open, onOpenChange }: Props) {
  const { mutateAsync: createRecipe, isLoading } = trpc.recipe.create.useMutation();

  const onSubmit: SubmitHandler<Recipe> = async (newRecipe) => {
    const response = await createRecipe(newRecipe);
    console.log(response);
    onOpenChange && onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="New Recipe" trigger={trigger}>
      <Form<Recipe>
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
        defaultValues={{
          name: 'Test',
          servings: 1,

          ingredients: [],
          directions: ['Step one', 'Step two'],
          photos: ['https://vero.cooking/chilli.jpg'],
        }}
        schema={newRecipeSchema}
      >
        <FormTextInput<Recipe>
          label="Name"
          name="name"
          showAsterisk
          options={{ required: 'This is a required field' }}
        />
        <FormTextInput<Recipe> label="Description" name="description" />
        <FormNumberInput<Recipe>
          label="Servings"
          name="servings"
          showAsterisk
          min={1}
          defaultValue={1}
        />
        <div className="flex gap-4">
          <FormNumberInput<Recipe> label="Prep Time (min)" name="prepTime" showAsterisk min={0} />
          <FormNumberInput<Recipe> label="Cook time (min)" name="cookTime" showAsterisk min={0} />
        </div>
        <FormTextInput<Recipe> label="Notes" name="notes" />

        <Button loading={isLoading}>Submit</Button>
      </Form>
    </Dialog>
  );
}
