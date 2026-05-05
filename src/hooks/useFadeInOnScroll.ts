"use client";

import { useEffect, useRef } from "react";

interface FadeInOptions {
  threshold?: number;
  rootMargin?: string;
}

export function useFadeInOnScroll(options: FadeInOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const { threshold = 0.1, rootMargin = "0px" } = options;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      },
      { threshold, rootMargin }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold, rootMargin]);

  return ref;
}
