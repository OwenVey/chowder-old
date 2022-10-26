import {
  Button,
  Dialog,
  Form,
  FormNumberInput,
  FormTextArea,
  FormTextInput,
  IngredientsInput,
} from '@/components';
import { Ingredient, Recipe } from '@/types/chowder';
import { trpc } from '@/utils/trpc';
import { useState } from 'react';
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
  ingredients: z.array(
    z.object({
      id: z.string(),
      name: z.string(),
    }),
  ),
  directions: z.array(z.string()),
  photos: z.array(z.string()),
});

export default function NewRecipeModal({ trigger, open, onOpenChange }: Props) {
  const { mutateAsync: createRecipe, isLoading } = trpc.recipe.create.useMutation();

  const [ingredients, setIngredients] = useState<Ingredient[]>([
    { id: '0', name: 'Fettuccine', quantity: 12, unit: 'ounce' },
    { id: '1', name: 'Bacon', quantity: 4, unit: 'slice' },
  ]);

  const onSubmit: SubmitHandler<Recipe> = async (newRecipe) => {
    // console.log({ newRecipe });

    const response = await createRecipe(newRecipe);
    // console.log(response);
    // onOpenChange && onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange} title="New Recipe" trigger={trigger} size="lg">
      <IngredientsInput name="ingredients" ingredients={ingredients} onChange={setIngredients} />
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

        {/* <Controller
        name="MyCheckbox"
        control={control}
        // defaultValue={false}
        // rules={{ required: true }}
        render={({ field }) => <FormTextArea<Recipe> label="Notes" name="notes" {...field} />}
      /> */}

        <FormTextArea<Recipe> label="Notes" name="notes" />

        <Button type="reset">Reset</Button>
        <Button type="submit" loading={isLoading}>
          Submit
        </Button>
      </Form>
    </Dialog>
  );
}
