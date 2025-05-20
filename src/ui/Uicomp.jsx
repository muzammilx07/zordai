
import React from "react";

// Badge component
export function Badge({ children, variant = "primary", className = "" }) {
  const baseStyles =
    "inline-block font-semibold select-none";

  const variants = {
    primary: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
  };

  return (
    <span className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`}>
      {children}
    </span>
  );
}

// Button component
export function Button({ children, size = "md", variant = "solid", className = "", ...props }) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 rounded";

  const sizeClasses = {
    sm: "h-8 px-3 text-sm",
    md: "h-10 px-4 text-base",
    lg: "h-12 px-8 text-base",
  };

  const variantClasses = {
    solid:
      "bg-primary text-primary-foreground hover:bg-primary/90 focus:ring-primary",
    outline:
      "border border-primary text-primary hover:bg-primary/10 focus:ring-primary",
  };

  return (
    <button
      {...props}
      className={`${baseStyles} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`}
    >
      {children}
    </button>
  );
}

// Card component
export function Card({ children, className = "", ...props }) {
  return (
    <div
      {...props}
      className={`rounded-xl border border-border/40 bg-background shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

// CardContent component
export function CardContent({ children, className = "", ...props }) {
  return (
    <div {...props} className={`p-6 ${className}`}>
      {children}
    </div>
  );
}
