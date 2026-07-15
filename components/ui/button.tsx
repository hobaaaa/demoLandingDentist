import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-[#0f5f5c] text-white shadow-[0_16px_38px_rgba(15,95,92,0.24)] hover:bg-[#0b4d4b] focus-visible:ring-[#0f5f5c]",
        secondary:
          "border border-[#b7d8d4] bg-white text-[#103d3b] hover:border-[#0f5f5c] hover:bg-[#eef8f6] focus-visible:ring-[#0f5f5c]",
        dark: "bg-[#13233a] text-white hover:bg-[#0d192a] focus-visible:ring-[#13233a]",
        ghost: "text-[#173d3a] hover:bg-[#edf7f5] focus-visible:ring-[#0f5f5c]",
      },
      size: {
        sm: "h-10 px-4",
        md: "h-12 px-6",
        lg: "h-14 px-7 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export function buttonClassName(
  props?: VariantProps<typeof buttonVariants> & { className?: string },
) {
  const { className, ...variants } = props ?? {};
  return cn(buttonVariants(variants), className);
}
