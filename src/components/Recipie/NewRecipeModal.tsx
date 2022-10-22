import { Dialog, TextInput } from '@/components';
import { useState } from 'react';

type Props = {
  trigger: React.ReactNode;
  open?: boolean;
  onOpenChange?(open: boolean): void;
};

export default function NewRecipeModal({ trigger, onOpenChange }: Props) {
  const [name, setName] = useState('');

  return (
    <Dialog onOpenChange={onOpenChange} title="New Recipe" trigger={trigger}>
      <div className="flex flex-col gap-4 py-10">
        <TextInput
          value={name}
          onChange={setName}
          label="Name"
          placeholder="Test placeholder"
          description="Must be at least 10 characters long"
          required
        />
        <pre>{name}</pre>
      </div>
    </Dialog>
  );
}
