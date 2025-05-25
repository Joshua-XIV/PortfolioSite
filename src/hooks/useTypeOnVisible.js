// hooks/useTypeOnVisible.js
import { useEffect, useRef, useState } from 'react';

export default function useTypeOnVisible(fullText, delay = 150) {
  const [typedText, setTypedText] = useState('');
  const [index, setIndex] = useState(0);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  // Watch for visibility
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setHasAnimated(true);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [hasAnimated]);

  // Typing logic
  useEffect(() => {
    if (!hasAnimated || index >= fullText.length) return;

    const timeout = setTimeout(() => {
      setTypedText((prev) => prev + fullText[index]);
      setIndex((i) => i + 1);
    }, delay);

    return () => clearTimeout(timeout);
  }, [index, hasAnimated, fullText, delay]);

  return { typedText, ref };
}
