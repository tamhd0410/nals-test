import { createContext } from 'react';

import { FallbackContextType } from './Page.interface';

export const PageContext = createContext<FallbackContextType>({
  updateFallback: () => null,
});
