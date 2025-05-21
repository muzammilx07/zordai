import * as React from "react"
import { cn } from "@/lib/utils" // If you don't have this utility, replace `cn` with a simple `className` merge or delete it.

const Label = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <label
      ref={ref}
      className={cn("text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", className)}
      {...props}
    />
  )
})

Label.displayName = "Label"

export { Label }
