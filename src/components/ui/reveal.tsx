/* eslint-disable @typescript-eslint/no-explicit-any */
import React from "react";
import useInView from "@/hooks/use-in-view";

interface RevealProps {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
  delay?: number; // ms
  duration?: number; // ms
  easing?: string;
  threshold?: number | number[];
  rootMargin?: string;
  once?: boolean;
  style?: React.CSSProperties;
}

export const Reveal: React.FC<RevealProps> = ({
  children,
  as = "div",
  className,
  delay = 0,
  duration = 700,
  easing = "cubic-bezier(.16,.84,.24,1)",
  threshold,
  rootMargin,
  once = false,
  style,
}) => {
  const { ref, inView } = useInView<HTMLDivElement>(
    { threshold, rootMargin },
    { once }
  );

  const Comp: React.ElementType = as;

  const transition = `opacity ${duration}ms ${easing} ${delay}ms, transform ${duration}ms ${easing} ${delay}ms`;

  const defaultStyle: React.CSSProperties = {
    opacity: inView ? 1 : 0,
    transform: inView ? "translateY(0)" : "translateY(12px)",
    transition,
    willChange: "opacity, transform",
    ...style,
  };

  return (
    // cast required because ElementType may not accept ref in its typings
    <Comp ref={ref as any} className={className} style={defaultStyle}>
      {children}
    </Comp>
  );
};

export default Reveal;
