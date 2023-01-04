'use client';

import { TooltipProvider } from '@radix-ui/react-tooltip';
import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from 'next-themes';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        <TooltipProvider>{children}</TooltipProvider>
      </ThemeProvider>
    </SessionProvider>
  );
}
