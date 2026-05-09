"use client";

import { forwardRef, InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: React.ReactNode;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, icon, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label className="text-xs font-semibold text-malzz-textMid tracking-wide uppercase">
            {label}
          </label>
        )}
        <div className="relative">
          {icon && (
            <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-malzz-textLight">
              {icon}
            </div>
          )}
          <input
            ref={ref}
            className={cn(
              "w-full bg-white/80 backdrop-blur-sm border border-gray-200/80 rounded-xl",
              "px-4 py-3 text-sm text-malzz-textDark placeholder-malzz-textLight/60",
              "focus:outline-none focus:border-malzz-blue/50 focus:ring-2 focus:ring-malzz-blue/12",
              "transition-all duration-200 ease-out",
              "disabled:opacity-50 disabled:cursor-not-allowed",
              error && "border-red-300 focus:border-red-400 focus:ring-red-200/30",
              icon && "pl-10",
              className
            )}
            {...props}
          />
        </div>
        {error && (
          <p className="text-xs text-red-500 font-medium">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
