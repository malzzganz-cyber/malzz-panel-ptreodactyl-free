"use client";

import { forwardRef, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";
import { Loader2 } from "lucide-react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "soft" | "ghost" | "danger";
  size?: "sm" | "md" | "lg";
  loading?: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", loading, disabled, children, ...props }, ref) => {
    const base =
      "inline-flex items-center justify-center gap-2 font-semibold rounded-2xl transition-all duration-200 ease-out active:scale-[0.97] disabled:opacity-50 disabled:pointer-events-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-malzz-blue/40 focus-visible:ring-offset-2";

    const variants = {
      primary:
        "bg-gradient-to-r from-malzz-blue to-malzz-purple text-white shadow-glass-blue hover:shadow-[0_6px_20px_rgba(108,158,255,0.45)] hover:opacity-95",
      soft:
        "bg-white/90 text-malzz-textDark border border-gray-200/80 shadow-soft hover:bg-white hover:border-gray-300/60 hover:shadow-card",
      ghost:
        "bg-transparent text-malzz-textMid hover:bg-malzz-blueLight hover:text-malzz-blue",
      danger:
        "bg-gradient-to-r from-red-400 to-rose-500 text-white shadow-[0_4px_14px_rgba(239,68,68,0.25)] hover:shadow-[0_6px_20px_rgba(239,68,68,0.4)] hover:opacity-95",
    };

    const sizes = {
      sm: "text-xs px-4 py-2",
      md: "text-sm px-6 py-3",
      lg: "text-base px-8 py-4",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="w-4 h-4 animate-spin" />}
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
