import React from "react";
import { cn } from "@/lib/utils";

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full px-4 py-3 bg-white border-3 border-brutal-border shadow-brutal-sm",
          "focus:outline-none focus:shadow-brutal focus:translate-x-[-2px] focus:translate-y-[-2px]",
          "placeholder:text-gray-400 text-brutal-text",
          "transition-all",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);

Input.displayName = "Input";
