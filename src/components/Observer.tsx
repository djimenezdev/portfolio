"use client";

import { useStore } from "@/providers/dataProvider";
import { useIntersectionObserver } from "@uidotdev/usehooks";
import { useEffect } from "react";

type ObserverProps = {
  id: string;
  ariaLabel: string;
  children: React.ReactNode;
  activeNumber: number;
  observerProps: {
    threshold: number;
    root: null;
    rootMargin: string;
  };
};

const Observer = ({
  id,
  ariaLabel,
  children,
  activeNumber,
  observerProps,
}: ObserverProps) => {
  const [ref, entry] = useIntersectionObserver(observerProps);
  const setActive = useStore((state) => state.setActive);

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActive(activeNumber);
    }
  }, [entry]);

  return (
    <section
      ref={ref}
      id={id}
      aria-label={ariaLabel}
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
    >
      {children}
    </section>
  );
};
export default Observer;
