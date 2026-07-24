import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "secondary" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  asChild?: boolean;
}

const variants = {
  default: "bg-[var(--plum)] text-white hover:bg-[var(--plum-deep)] shadow-sm",
  secondary: "bg-[var(--blush)] text-white hover:bg-[var(--blush-deep)] shadow-sm",
  outline: "border border-[var(--line)] bg-transparent text-[var(--ink)] hover:border-[var(--plum)] hover:text-[var(--plum)]",
  ghost: "bg-transparent text-[var(--ink)] hover:bg-[var(--plum-soft)]",
};

const sizes = {
  default: "h-11 px-6 text-sm",
  sm: "h-9 px-4 text-xs",
  lg: "h-12 px-8 text-sm",
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => (
    <button
      ref={ref}
      className={cn(
        "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--plum)] disabled:pointer-events-none disabled:opacity-50",
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    />
  )
);
Button.displayName = "Button";
