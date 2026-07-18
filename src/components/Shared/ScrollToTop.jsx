import { useLayoutEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenisRef } from "@/context/lenisContext";

const INSTANT = "instant" in window ? "instant" : "auto";

/**
 * Resets scroll position on every route change so pages always render from
 * the top — regardless of navbar links, sidebar links, footer links, or
 * buttons that trigger a route change. Hash links (e.g. `/services#slug`)
 * are scrolled to their target section instead of the top.
 *
 * Because the site uses Lenis for smooth scrolling, a plain
 * `window.scrollTo()` isn't enough — Lenis keeps its own internal scroll
 * state and will fight a native scroll reset. Both are updated together,
 * and `immediate: true` skips Lenis's easing so the jump is instant.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();
  const lenisRef = useLenisRef();

  useLayoutEffect(() => {
    const lenis = lenisRef?.current;

    if (hash) {
      const id = hash.slice(1);
      let attempts = 0;
      let rafId;

      // Lazy-loaded route pages may not have rendered the target element
      // yet, so retry across a few frames instead of giving up instantly.
      const tryScroll = () => {
        const el = document.getElementById(id);
        if (el) {
          if (lenis) lenis.scrollTo(el, { immediate: true });
          else el.scrollIntoView({ behavior: INSTANT });
          return;
        }
        attempts += 1;
        if (attempts < 30) rafId = requestAnimationFrame(tryScroll);
      };

      tryScroll();
      return () => cancelAnimationFrame(rafId);
    }

    if (lenis) lenis.scrollTo(0, { immediate: true });
    window.scrollTo({ top: 0, left: 0, behavior: INSTANT });
    return undefined;
  }, [pathname, hash, lenisRef]);

  return null;
}
