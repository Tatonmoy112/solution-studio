import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/cn";

type EyebrowProps = {
  children: ReactNode;
  className?: string;
} & Omit<ComponentPropsWithoutRef<"span">, "children" | "className">;

export function Eyebrow({ children, className, ...props }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex min-h-[30px] min-w-[94px] items-center justify-center rounded-[20px] border px-2.5 py-1 font-accent text-[13px] font-normal leading-none tracking-[-0.03em] capitalize",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
