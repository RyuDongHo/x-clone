'use client';

import { ReactNode } from 'react';

// 나중에 추가할 Provider들을 여기서 조합
// 예: ThemeProvider, ReduxProvider, ReactQueryProvider 등

interface AppProvidersProps {
  children: ReactNode;
}

export const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <>
      {/* 여기에 필요한 Provider들을 추가 */}
      {/* <ThemeProvider> */}
      {/* <ReduxProvider> */}
      {children}
      {/* </ReduxProvider> */}
      {/* </ThemeProvider> */}
    </>
  );
};
