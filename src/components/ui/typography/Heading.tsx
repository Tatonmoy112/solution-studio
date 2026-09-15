import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const headingVariants = {
  global:
    "font-display text-[clamp(2rem,3vw,2.5rem)] font-bold leading-none tracking-[-0.03em]",
  hero: "font-display text-[clamp(2.75rem,4.2vw,4.125rem)] font-bold leading-[clamp(3rem,4.6vw,4.5rem)] tracking-[-0.03em]",
  card: "font-display text-base font-bold leading-6 tracking-normal",
  feature:
    "font-display text-[clamp(1.75rem,2.4vw,2rem)] font-bold leading-none tracking-[-0.03em]",
  serviceCard:
    "font-display text-xl font-bold leading-7 tracking-normal",
  founderName:
    "font-display text-[clamp(5rem,14vw,16.875rem)] font-bold leading-none tracking-normal",
  founderLabel:
    "font-display text-[clamp(1.75rem,3vw,2.25rem)] font-bold leading-none tracking-[-0.03em]",
} as const;

type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";

type HeadingProps<T extends HeadingElement = "h2"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof headingVariants;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Heading<T extends HeadingElement = "h2">({
  as,
  children,
  className,
  variant = "global",
  ...props
}: HeadingProps<T>) {
  const Component = (as ?? "h2") as ElementType;

  return (
    <Component className={cn(headingVariants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
