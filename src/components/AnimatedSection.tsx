import { ReactNode } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";

type AnimationType = "fade-up" | "fade-left" | "fade-right" | "scale" | "fade";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animation?: AnimationType;
  delay?: number;
}

const animationClasses: Record<AnimationType, { initial: string; visible: string }> = {
  "fade-up": {
    initial: "opacity-0 translate-y-8",
    visible: "opacity-100 translate-y-0",
  },
  "fade-left": {
    initial: "opacity-0 -translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  "fade-right": {
    initial: "opacity-0 translate-x-8",
    visible: "opacity-100 translate-x-0",
  },
  scale: {
    initial: "opacity-0 scale-95",
    visible: "opacity-100 scale-100",
  },
  fade: {
    initial: "opacity-0",
    visible: "opacity-100",
  },
};

export function AnimatedSection({
  children,
  className,
  animation = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  const { initial, visible } = animationClasses[animation];

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-700 ease-out",
        isVisible ? visible : initial,
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
