import { createContext, useContext } from "react";

/**
 * Holds a ref to the single app-wide Lenis instance (or `null` when the
 * user prefers reduced motion / Lenis hasn't mounted yet). Kept in its own
 * non-component module so the provider file can stay fast-refresh friendly.
 */
export const LenisContext = createContext(null);

/** Returns the mutable ref holding the Lenis instance (may be `null`). */
export function useLenisRef() {
  return useContext(LenisContext);
}
