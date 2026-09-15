import type { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";
import { cn } from "@/lib/cn";

const textVariants = {
  global: "font-sans text-lg font-normal leading-7 tracking-normal",
  hero: "font-sans text-[19px] font-normal leading-8 tracking-normal",
  card: "font-sans text-[15px] font-normal leading-[25px] tracking-normal",
  feature: "font-sans text-base font-normal leading-7 tracking-normal",
  serviceCard: "font-sans text-base font-normal leading-[22px] tracking-normal",
} as const;

type TextElement = "p" | "span" | "div";

type TextProps<T extends TextElement = "p"> = {
  as?: T;
  children: ReactNode;
  className?: string;
  variant?: keyof typeof textVariants;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "className">;

export function Text<T extends TextElement = "p">({
  as,
  children,
  className,
  variant = "global",
  ...props
}: TextProps<T>) {
  const Component = (as ?? "p") as ElementType;

  return (
    <Component className={cn(textVariants[variant], className)} {...props}>
      {children}
    </Component>
  );
}
