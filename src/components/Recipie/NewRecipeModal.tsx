import {
  Button,
  Dialog,
  Form,
  FormNumberInput,
  FormTextArea,
  FormTextInput,
  IngredientsInput,
} from '@/components';
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
  name: z.string().min(1, 'Cannot be empty'),
  description: z.string().optional(),
  servings: z.number().gte(1, 'Must be at least 1 serving'),
  prepTime: z.number(),
  cookTime: z.number(),
  ingredients: z
    .array(
      z.object({
        name: z.string(),
        quantity: z.number().optional(),
        unit: z.string().optional(),
        note: z.string().optional(),
      }),
    )
    .min(2),
  directions: z.array(z.string()),
  photos: z.array(z.string()),
});

export default function NewRecipeModal({ trigger, open, onOpenChange }: Props) {
  const { mutateAsync: createRecipe, isLoading } = trpc.recipe.create.useMutation();

  const onSubmit: SubmitHandler<Recipe> = async (newRecipe) => {
    console.log({ newRecipe });

    const response = await createRecipe(newRecipe);
    console.log(response);
    onOpenChange && onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="New Recipe" trigger={trigger} size="lg">
      <Form<Recipe>
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
        defaultValues={{
          name: '',
          servings: 10,
          ingredients: [],
          directions: ['Step one', 'Step two'],
          photos: ['https://vero.cooking/chilli.jpg'],
        }}
        schema={newRecipeSchema}
      >
        <FormTextInput<Recipe> label="Name" name="name" showAsterisk />
        <FormTextArea<Recipe> label="Description" name="description" />

        <div className="flex gap-4">
          <FormNumberInput<Recipe>
            className="flex-1"
            label="Servings"
            name="servings"
            showAsterisk
            min={0}
          />
          <FormNumberInput<Recipe>
            className="flex-1"
            label="Prep Time"
            labelNote="(min)"
            name="prepTime"
            showAsterisk
            clearable
            min={0}
          />
          <FormNumberInput<Recipe>
            className="flex-1"
            label="Cook time"
            labelNote="(min)"
            name="cookTime"
            showAsterisk
            min={0}
          />
        </div>

        <IngredientsInput controlled name="ingredients" />

        <FormTextArea<Recipe> label="Notes" name="notes" />

        <div className="flex space-x-2">
          <Button className="w-32" type="reset" variant="default">
            Reset
          </Button>
          <Button className="flex-1" type="submit" loading={isLoading}>
            Submit
          </Button>
        </div>
      </Form>
    </Dialog>
  );
}
