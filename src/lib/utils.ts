
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { useEffect, useState, useRef, RefObject } from "react"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function useIsVisible<T extends HTMLElement>(
  options?: IntersectionObserverInit
): [RefObject<T>, boolean] {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (ref.current) {
      const observer = new IntersectionObserver(([entry]) => {
        setIsVisible(entry.isIntersecting);
      }, options);

      observer.observe(ref.current);

      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }
  }, [options]);

  return [ref, isVisible];
}
