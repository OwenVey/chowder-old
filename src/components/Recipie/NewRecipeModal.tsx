import { Button, Dialog, Form, FormNumberInput, FormTextInput, TextInput } from '@/components';
import { Recipe } from '@/types/chowder';
import { SubmitHandler, useForm } from 'react-hook-form';

type Props = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

type Inputs = {
  title: string;
  description: string;
};

export default function NewRecipeModal({ trigger, onOpenChange }: Props) {
  const { register, handleSubmit, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onSubmit2: SubmitHandler<Recipe> = (data) => console.log(data);

  return (
    <Dialog onOpenChange={onOpenChange} title="New Recipe" trigger={trigger}>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
        <TextInput
          label="Title"
          {...register('title', {
            minLength: { value: 5, message: 'Must be at least 5 characters' },
            required: { value: true, message: 'This field is required' },
          })}
          error={formState.errors.title?.message}
        />

        <TextInput
          label="Description"
          {...register('description', {
            minLength: { value: 5, message: 'Must be at least 5 characters' },
            required: { value: true, message: 'This field is required' },
          })}
          error={formState.errors.description?.message}
        />

        <Button>Submit</Button>
      </form>

      <Form<Recipe> onSubmit={onSubmit2} className="mt-10 flex flex-col gap-4">
        <FormTextInput<Recipe>
          label="Name"
          name="name"
          showAsterisk
          options={{ required: 'This is a required field' }}
        />
        <FormTextInput<Recipe> label="Description" name="description" />
        <FormNumberInput<Recipe> label="Servings" name="servings" min={0} />
        <Button>Submit</Button>
      </Form>
    </Dialog>
  );
}
