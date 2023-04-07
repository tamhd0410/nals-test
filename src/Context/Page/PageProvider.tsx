import { Suspense, useCallback, useMemo, useState } from 'react';

import { FallbackType } from './Page.interface';
import { PageContext } from './PageContext';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const PageProvider = ({ children }: any) => {
  const [fallback, setFallback] = useState<FallbackType>(null);

  const updateFallback = useCallback((fallback: FallbackType) => {
    setFallback(() => fallback);
  }, []);

  const renderChildren = useMemo(() => {
    return children;
  }, [children]);

  return (
    <PageContext.Provider value={{ updateFallback }}>
      <Suspense fallback={fallback}>{renderChildren}</Suspense>
    </PageContext.Provider>
  );
};
