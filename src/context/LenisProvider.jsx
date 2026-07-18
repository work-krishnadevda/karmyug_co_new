import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { LenisContext } from "./lenisContext";

/**
 * Mounts the single app-wide Lenis smooth-scroll instance and exposes it
 * (via a ref, so reading it never triggers extra re-renders) to any
 * descendant that needs to imperatively control scrolling — e.g. jumping to
 * top on route change, or pausing smooth-scroll while the mobile drawer is
 * open.
 */
export function LenisProvider({ children }) {
  const lenisRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReduced) return undefined;

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
    });
    lenisRef.current = lenis;

    let rafId;
    function raf(time) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return (
    <LenisContext.Provider value={lenisRef}>{children}</LenisContext.Provider>
  );
}

export default LenisProvider;
