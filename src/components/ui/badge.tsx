import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-2.5 py-0.5 text-xs font-medium text-foreground/90",
  {
    variants: {
      variant: {
        default: "",
        subtle: "bg-white/4 text-foreground/80",
        accent:
          "border-indigo-400/20 bg-indigo-500/10 text-indigo-200 shadow-[0_0_0_1px_rgba(99,102,241,.12)]",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

function Badge({
  className,
  variant,
  ...props
}: React.ComponentProps<"span"> & VariantProps<typeof badgeVariants>) {
  return <span data-slot="badge" className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };

