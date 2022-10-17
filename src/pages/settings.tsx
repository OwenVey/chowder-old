import { Button } from '@/components';
import { ArrowRightIcon, MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Settings() {
  const [loading, setIsLoading] = useState(false);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-10">
      <Button loading={loading} onClick={() => setIsLoading(!loading)}>
        Toggle Loading
      </Button>
      <div className="flex gap-2">
        <Button
          loading={loading}
          variant="filled"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button loading={loading} variant="filled" color="gray" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="filled" color="red" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="filled" color="green" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="filled" color="blue" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button
          loading={loading}
          variant="filled"
          color="yellow"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          variant="default"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button loading={loading} variant="default" color="gray" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="default" color="red" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button
          loading={loading}
          variant="default"
          color="green"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button loading={loading} variant="default" color="blue" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button
          loading={loading}
          variant="default"
          color="yellow"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          variant="light"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button loading={loading} variant="light" color="gray" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="light" color="red" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="light" color="green" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="light" color="blue" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
        <Button loading={loading} variant="light" color="yellow" leftIcon={<MagnifyingGlassIcon />}>
          Button
        </Button>
      </div>
    </main>
  );
}
