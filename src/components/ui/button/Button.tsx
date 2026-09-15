import type {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  ReactNode,
} from "react";
import Link from "next/link";
import { cn } from "@/lib/cn";

const buttonVariants = {
  primary:
    "bg-brand text-white hover:bg-brand-strong focus-visible:outline-brand",
  dark: "bg-action text-white hover:bg-brand-strong focus-visible:outline-brand",
  inverse:
    "border border-white/35 bg-white/10 text-white backdrop-blur-sm hover:border-white/60 hover:bg-white/15 focus-visible:outline-white",
} as const;

type ButtonVariant = keyof typeof buttonVariants;

type SharedButtonProps = {
  children: ReactNode;
  className?: string;
  endIcon?: ReactNode;
  variant?: ButtonVariant;
};

type ButtonLinkProps = SharedButtonProps &
  Omit<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    "children" | "className" | "href"
  > & {
    href: string;
  };

type NativeButtonProps = SharedButtonProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children" | "className"> & {
    href?: never;
  };

type ButtonProps = ButtonLinkProps | NativeButtonProps;

export function Button({
  children,
  className,
  endIcon,
  href,
  variant = "primary",
  ...elementProps
}: ButtonProps) {
  const classes = cn(
    "inline-flex h-[42px] items-center justify-center gap-2.5 rounded-[20px] px-4 text-base font-medium leading-none transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50",
    buttonVariants[variant],
    className,
  );

  const content = (
    <>
      <span>{children}</span>
      {endIcon ? (
        <span aria-hidden="true" className="shrink-0">
          {endIcon}
        </span>
      ) : null}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={classes}
        {...(elementProps as Omit<
          ButtonLinkProps,
          keyof SharedButtonProps | "href"
        >)}
      >
        {content}
      </Link>
    );
  }

  return (
    <button
      type="button"
      className={classes}
      {...(elementProps as Omit<NativeButtonProps, keyof SharedButtonProps>)}
    >
      {content}
    </button>
  );
}
