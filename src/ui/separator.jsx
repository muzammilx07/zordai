import React from "react";
import { cn } from "@/lib/utils"; // Optional

export function Separator({ className, orientation = "horizontal", ...props }) {
  return (
    <div
      role="separator"
      className={cn(
        "shrink-0 bg-border",
        orientation === "horizontal" ? "h-px w-full my-2" : "h-full w-px mx-2",
        className
      )}
      {...props}
    />
  );
}
