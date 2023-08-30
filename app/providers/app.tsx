'use client';
import * as React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';

import { Button, Spinner } from '@/components/Elements';
import { Notifications } from '@/components/Notifications/Notifications';
import { queryClient } from '@/lib/react-query';

type AppProviderProps = {
  children: React.ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return (
    <React.Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Spinner size="xl" />
        </div>
      }
    >
      <QueryClientProvider client={queryClient}>
        {process.env.NODE_ENV !== 'test' && <ReactQueryDevtools />}
        <Notifications />
        {children}
      </QueryClientProvider>
    </React.Suspense>
  );
};
