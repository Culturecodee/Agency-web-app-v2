"use client";

import * as React from "react";

import { cn } from "@/lib/utils";

function Textarea({ className, ...props }: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "min-h-[120px] w-full resize-none rounded-md border border-white/10 bg-white/[0.03] px-3 py-2 text-sm text-foreground shadow-[0_1px_0_rgba(255,255,255,.05)] outline-none placeholder:text-foreground/40 focus:border-indigo-400/35 focus:ring-2 focus:ring-[color:var(--ring)]",
        className,
      )}
      {...props}
    />
  );
}

export { Textarea };

