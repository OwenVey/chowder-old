import { Button } from '@/components';
import { MagnifyingGlassIcon } from '@heroicons/react/20/solid';
import { useState } from 'react';

export default function Settings() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  return (
    <main className="flex h-full w-full flex-col items-center justify-center gap-10">
      <div className="flex gap-2">
        <Button onClick={() => setLoading(!loading)}> Loading</Button>
        <Button onClick={() => setDisabled(!disabled)}>Disabled</Button>
      </div>
      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="gray"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="red"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="green"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="blue"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
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
          disabled={disabled}
          variant="default"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="gray"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="red"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="green"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="blue"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
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
          disabled={disabled}
          variant="light"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="gray"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="red"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="green"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="blue"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="yellow"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="primary"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="gray"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="red"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="green"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="blue"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="yellow"
          leftIcon={<MagnifyingGlassIcon />}
        >
          Button
        </Button>
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="primary"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="gray"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="red"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="green"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="blue"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="filled"
          color="yellow"
          icon={<MagnifyingGlassIcon />}
        />
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="primary"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="gray"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="red"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="green"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="blue"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="default"
          color="yellow"
          icon={<MagnifyingGlassIcon />}
        />
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="primary"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="gray"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="red"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="green"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="blue"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="light"
          color="yellow"
          icon={<MagnifyingGlassIcon />}
        />
      </div>

      <div className="flex gap-2">
        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="primary"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="gray"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="red"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="green"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="blue"
          icon={<MagnifyingGlassIcon />}
        />

        <Button
          loading={loading}
          disabled={disabled}
          variant="subtle"
          color="yellow"
          icon={<MagnifyingGlassIcon />}
        />
      </div>
    </main>
  );
}
