"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="mx-auto flex w-full max-w-6xl flex-col gap-10 px-4 pb-16 pt-10 sm:px-6 lg:flex-row lg:items-center lg:pb-20 lg:pt-14">
      <div className="relative flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.21, 0.61, 0.35, 1] }}
          className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/5 px-2 py-1 text-xs text-foreground/75 backdrop-blur"
        >
          <Badge variant="accent">New</Badge>
          CULTURECODE — Modern Indonesian Digital Agency
        </motion.div>

        <motion.h1
          className="mt-6 max-w-2xl text-balance text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl"
          initial={{ opacity: 0, y: 26 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.05, ease: [0.21, 0.61, 0.35, 1] }}
        >
          Building modern digital experiences for ambitious teams.
        </motion.h1>

        <motion.p
          className="mt-4 max-w-xl text-pretty text-sm leading-7 text-foreground/70 sm:text-base"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.12, ease: [0.21, 0.61, 0.35, 1] }}
        >
          CULTURECODE partners with startups and brands across Indonesia to craft premium web,
          SaaS, and digital products — from first prototype to production-scale platforms.
        </motion.p>

        <motion.div
          className="mt-8 flex flex-wrap items-center gap-3"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.18, ease: [0.21, 0.61, 0.35, 1] }}
        >
          <Button asChild size="lg">
            <Link href="/contact">Start a project</Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/projects">View projects</Link>
          </Button>
          <span className="text-xs text-foreground/55">
            Available for web, SaaS & product engagements.
          </span>
        </motion.div>

        <motion.div
          className="mt-8 grid max-w-md grid-cols-3 gap-4 text-xs text-foreground/55"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.24, ease: [0.21, 0.61, 0.35, 1] }}
        >
          <div>
            <div className="text-foreground/80">Web & SaaS</div>
            <div className="mt-1 text-foreground/55">Marketing sites, dashboards, booking flows.</div>
          </div>
          <div>
            <div className="text-foreground/80">Product design</div>
            <div className="mt-1 text-foreground/55">Systematic, UX-first interfaces.</div>
          </div>
          <div>
            <div className="text-foreground/80">Engineering culture</div>
            <div className="mt-1 text-foreground/55">Modern stacks & clean delivery.</div>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="relative mt-4 flex-1 lg:mt-0"
        initial={{ opacity: 0, scale: 0.94, y: 12 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.15, ease: [0.18, 0.75, 0.25, 1] }}
      >
        <div className="pointer-events-none absolute -inset-6 -z-10 bg-[radial-gradient(circle_at_top,rgba(129,140,248,.5),transparent_55%)] opacity-60" />
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(circle_at_top_left,rgba(129,140,248,.18),transparent_55%)] bg-zinc-950/80 shadow-[0_24px_80px_rgba(0,0,0,.85)] backdrop-blur">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-xs text-foreground/60">
            <span>culturecode.work</span>
            <span>Jakarta · UTC+7</span>
          </div>
          <div className="grid gap-4 px-5 py-5">
            <div className="flex items-center justify-between gap-4">
              <div className="text-xs text-foreground/60">
                Focused on{" "}
                <span className="text-foreground">
                  web, SaaS, product design,{" "}
                </span>
                and clean builds.
              </div>
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-2 text-[11px] text-foreground/60">
                <span className="size-2 rounded-full bg-emerald-400" />
                Taking new projects
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3 text-xs">
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="text-[10px] text-foreground/55">Stacks</div>
                <div className="mt-1 text-[11px] text-foreground">
                  Next.js, TypeScript, Tailwind, Framer Motion.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="text-[10px] text-foreground/55">Formats</div>
                <div className="mt-1 text-[11px] text-foreground">
                  Marketing, SaaS dashboards, product flows.
                </div>
              </div>
              <div className="rounded-xl border border-white/10 bg-white/5 p-3">
                <div className="text-[10px] text-foreground/55">Location</div>
                <div className="mt-1 text-[11px] text-foreground">
                  Based in Jakarta. Working with teams globally.
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

