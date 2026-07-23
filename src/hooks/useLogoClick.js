import { useCallback } from "react";
import { useLocation } from "react-router-dom";
import { useLenisRef } from "@/context/lenisContext";

/**
 * Click handler for the site logo (or any "go home" link).
 *
 * - On any other route: does nothing extra — the surrounding <Link to="/">
 *   already navigates to the homepage as normal.
 * - Already on "/": a normal <Link to="/"> is a no-op (React Router won't
 *   re-render for a same-path navigation), which is why the logo used to
 *   appear "broken" when scrolled down on the homepage. This intercepts
 *   that case and smooth-scrolls back to the top instead, through Lenis so
 *   it matches the site's smooth-scroll everywhere else (falling back to a
 *   native smooth scroll if Lenis hasn't mounted, e.g. reduced-motion).
 *
 * Usage: <Link to="/" onClick={useLogoClick()}>...</Link>
 */
export function useLogoClick() {
  const { pathname } = useLocation();
  const lenisRef = useLenisRef();

  return useCallback(
    (event) => {
      if (pathname !== "/") return;

      event.preventDefault();

      const lenis = lenisRef?.current;
      if (lenis) {
        lenis.scrollTo(0, { duration: 1.2 });
      } else {
        window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      }
    },
    [pathname, lenisRef],
  );
}

export default useLogoClick;