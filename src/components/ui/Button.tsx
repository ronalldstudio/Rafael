"use client";

import { type ButtonHTMLAttributes, forwardRef } from "react";
import Link from "next/link";
import { clsx } from "clsx";

type Variant = "primary" | "secondary" | "outline" | "ghost";
type Size = "sm" | "md" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  href?: string;
  external?: boolean;
  fullWidth?: boolean;
}

const base =
  "inline-flex items-center justify-center font-display font-semibold rounded-md transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

const variants: Record<Variant, string> = {
  primary:
    "bg-orange text-white hover:bg-orange-dark active:scale-[0.98] shadow-md hover:shadow-lg",
  secondary:
    "bg-navy text-white hover:bg-navy-light active:scale-[0.98] shadow-md hover:shadow-lg",
  outline:
    "border-2 border-orange text-orange bg-transparent hover:bg-orange hover:text-white active:scale-[0.98]",
  ghost: "text-navy hover:bg-navy/10 active:scale-[0.98]",
};

const sizes: Record<Size, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      href,
      external,
      fullWidth,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const classes = clsx(
      base,
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      className
    );

    if (href) {
      return (
        <Link
          href={href}
          className={classes}
          {...(external && { target: "_blank", rel: "noopener noreferrer" })}
        >
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
export default Button;
