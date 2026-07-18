import { useEffect } from "react";
import { useLenisRef } from "@/context/lenisContext";

export function useScrollLock(active) {
  const lenisRef = useLenisRef();

  useEffect(() => {
    const lenis = lenisRef?.current;

    if (active) {
      lenis?.stop();
      document.body.style.overflow = "hidden";
    } else {
      lenis?.start();
      document.body.style.overflow = "";
    }

    return () => {
      lenis?.start();
      document.body.style.overflow = "";
    };
  }, [active, lenisRef]);
}
