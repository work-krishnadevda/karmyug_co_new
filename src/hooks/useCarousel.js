import { useEffect, useState } from "react";

const AUTO_PLAY = 3500;

export default function useCarousel(totalItems) {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = () => {
    setActive((prev) => (prev + 1) % totalItems);
  };

  const previous = () => {
    setActive((prev) => (prev === 0 ? totalItems - 1 : prev - 1));
  };

  useEffect(() => {
    if (paused) return;

    const timer = setInterval(next, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [paused, totalItems]);

  return {
    active,
    next,
    previous,
    setPaused,
  };
}
