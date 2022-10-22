import { Button, Dialog, Form, FormTextInput, TextInput } from '@/components';
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
  const { register, handleSubmit, watch, formState } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
  const onSubmit2: SubmitHandler<Recipe> = (data) => console.log(data);

  // console.log(watch('example')); // watch input value by passing the name of it

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

      <Form<Recipe> onSubmit={onSubmit2}>
        <FormTextInput<Recipe>
          label="Name"
          name="name"
          options={{ required: 'This is a required field' }}
        />
        <Button>Submit</Button>
      </Form>
    </Dialog>
  );
}
