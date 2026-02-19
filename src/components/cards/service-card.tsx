"use client";

import { motion } from "framer-motion";
import { Code2, Layout, Sparkles, Workflow, type LucideIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export type ServiceIcon = "code" | "layout" | "workflow" | "sparkles";

const iconMap: Record<ServiceIcon, LucideIcon> = {
  code: Code2,
  layout: Layout,
  workflow: Workflow,
  sparkles: Sparkles,
};

export function ServiceCard({
  icon,
  title,
  description,
  className,
}: {
  icon: ServiceIcon;
  title: string;
  description: string;
  className?: string;
}) {
  const Icon = iconMap[icon];

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <Card className={cn("group h-full", className)}>
        <CardHeader>
          <div className="flex items-center gap-3">
            <div className="grid size-10 place-items-center rounded-lg border border-white/10 bg-white/5 shadow-[0_10px_30px_rgba(0,0,0,.35)]">
              <Icon className="text-indigo-200" />
            </div>
            <CardTitle className="text-[15px]">{title}</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-sm leading-6 text-foreground/65">{description}</p>
          <div className="mt-5 h-px w-full bg-gradient-to-r from-white/10 via-white/5 to-transparent" />
          <div className="mt-4 text-xs text-foreground/50">
            Strategy • Design • Engineering
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

