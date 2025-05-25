import { useState, useEffect, useRef } from "react";

export function useOnScreen(threshold = 0.5) {
  const ref = useRef(null);
  const [hasBeenVisible, setHasBeenVisible] = useState(false);

  useEffect(() => {
    if (!ref.current || hasBeenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasBeenVisible(true);
          observer.disconnect();
        }
      },
      { threshold }
    );

    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold, hasBeenVisible]);

  return [ref, hasBeenVisible];
}
