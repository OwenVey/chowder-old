'use client';

import { Button } from '@/app/components';
import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div>
      <h1 className="text-xl font-bold">Error</h1>
      <p>{error?.message}</p>
      <Button onClick={() => reset()} color="red">
        Retry
      </Button>
    </div>
  );
}
