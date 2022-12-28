import {
  Button,
  Dialog,
  DirectionsInput,
  FileInput,
  Form,
  FormNumberInput,
  FormTextArea,
  FormTextInput,
  IngredientsInput,
} from '@/components';
import { trpc } from '@/utils/trpc';
import type { Recipe } from '@prisma/client';
import { useQueryClient } from '@tanstack/react-query';
import { z } from 'zod';

type Props = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

export const newRecipeSchema = z.object({
  name: z.string().min(1, 'Cannot be empty'),
  description: z.string(),
  servings: z.number().gte(1, 'Must be at least 1 serving'),
  prepTime: z.number(),
  cookTime: z.number(),
  ingredients: z.array(
    z.object({
      name: z.string(),
      quantity: z.number().optional(),
      unit: z.string().optional(),
      note: z.string().optional(),
    }),
  ),
  directions: z.array(z.string()),
  photo: typeof window === 'undefined' ? z.undefined() : z.instanceof(File).optional(),
  note: z.string().optional(),
});

export default function NewRecipeModal({ trigger, open, onOpenChange }: Props) {
  const queryClient = useQueryClient();

  const { mutateAsync: createRecipe, isLoading } = trpc.recipe.create.useMutation({
    onSuccess: (newRecipe) => {
      const previousRecipes = queryClient.getQueryData<Recipe[]>([['recipe', 'getAll']]);

      if (previousRecipes) {
        queryClient.setQueryData([['recipe', 'getAll']], [...previousRecipes, newRecipe]);
      }
    },
  });

  const onSubmit = async (newRecipe: z.infer<typeof newRecipeSchema>) => {
    await createRecipe(newRecipe);
    onOpenChange && onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="New Recipe" trigger={trigger} size="xl">
      <Form<typeof newRecipeSchema>
        onSubmit={onSubmit}
        className="flex flex-col gap-4"
        defaultValues={{
          servings: 1,
          ingredients: [],
          directions: [],
          // photo: 'https://vero.cooking/chilli.jpg',
        }}
        schema={newRecipeSchema}
      >
        <FormTextInput<Recipe> label="Name" name="name" showAsterisk />

        <div className="flex gap-4">
          <FileInput name="photo" label="Photo" controlled />
          <FormTextArea<Recipe>
            className="flex-1"
            label="Description"
            name="description"
            rows={4}
          />
        </div>

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
            clearable
            min={0}
          />
          <FormNumberInput<Recipe>
            className="flex-1"
            label="Cook Time"
            labelNote="(min)"
            name="cookTime"
            min={0}
          />
        </div>

        <IngredientsInput controlled name="ingredients" />

        <DirectionsInput controlled name="directions" />

        <FormTextArea<Recipe> label="Note" name="note" />

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
