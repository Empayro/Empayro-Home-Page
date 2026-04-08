// useInView.js
import { useState, useEffect, useRef } from "react";

/**
 * Custom hook to detect when an element enters the viewport
 * @param {number} threshold - Percentage of element visible to trigger (0 to 1)
 * @returns [ref, isVisible] - ref to attach + boolean if element is visible
 */
export function useInView(threshold = 0.2) {
  const ref = useRef();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // optional: trigger once
        }
      },
      { threshold }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, [threshold]);

  return [ref, isVisible];
}