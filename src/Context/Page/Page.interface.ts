export type FallbackType = NonNullable<React.ReactNode> | null;

export interface FallbackContextType {
  updateFallback: (fallback: FallbackType) => void;
}
