import { Sparkles } from "lucide-react";
import Image from "next/image";

import { Section } from "@/components/section";
import { Hero } from "@/components/hero";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const homeServices = [
  {
    icon: "code",
    title: "Modern Web & SaaS Development",
    description:
      "Next.js, TypeScript, Tailwind and robust architecture for marketing sites, dashboards and platforms.",
  },
  {
    icon: "layout",
    title: "Product-focused UI/UX Design",
    description:
      "Design systems, flows and prototypes that feel fast, considered and on-brand.",
  },
  {
    icon: "workflow",
    title: "End-to-end Digital Product",
    description:
      "From idea to launch — discovery, UX, design, engineering and handover documentation.",
  },
];

const previewProjects = [
  {
    title: "SaaS analytics dashboard",
    description: "Real-time metrics, cohort analysis and billing funnels for a B2B SaaS product.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
  },
  {
    title: "Experience-led restaurant website",
    description: "Reservations, tasting menus and brand storytelling for a Jakarta restaurant.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function Home() {
  return (
    <div className="pb-16 pt-4 sm:pt-6">
      <Hero />

      <Section className="mt-10 space-y-8 lg:mt-14">
        <Reveal>
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/55">
                Services
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                Built for modern digital teams.
              </h2>
            </div>
            <Button asChild variant="ghost" className="hidden text-xs sm:inline-flex">
              <a href="/services">View all services</a>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-4 md:grid-cols-3">
          {homeServices.map((service, idx) => (
            <Reveal key={service.title} delay={0.03 * idx}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mt-14 space-y-8 lg:mt-20">
        <Reveal>
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/55">
                Selected work
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                Interfaces that feel sharp, calm and intentional.
              </h2>
            </div>
            <Button asChild variant="outline" size="sm">
              <a href="/projects">Explore projects</a>
            </Button>
          </div>
        </Reveal>

        <div className="grid gap-5 lg:grid-cols-2">
          {previewProjects.map((project, idx) => (
            <Reveal key={project.title} delay={0.05 * idx}>
              <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_80px_rgba(0,0,0,.75)]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    priority={idx === 0}
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 p-4">
                    <p className="text-xs font-medium uppercase tracking-[0.18em] text-foreground/60">
                      Case study
                    </p>
                    <p className="mt-1 text-sm font-semibold">{project.title}</p>
                    <p className="mt-1 text-xs text-foreground/70">{project.description}</p>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section className="mt-16 space-y-8 lg:mt-24">
        <Reveal>
          <div className="grid gap-6 rounded-2xl border border-indigo-400/20 bg-gradient-to-r from-indigo-500/15 via-violet-500/10 to-transparent px-6 py-7 shadow-[0_20px_70px_rgba(79,70,229,.45)] sm:px-8 sm:py-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
            <div>
              <Badge variant="accent">Why CULTURECODE</Badge>
              <h2 className="mt-3 text-lg font-semibold tracking-tight sm:text-xl">
                Modern engineering culture, clean design, production thinking.
              </h2>
              <p className="mt-3 text-sm leading-7 text-foreground/75">
                We combine startup product strategy, UI/UX craft and pragmatic engineering. Every
                project is treated as a long-term product, not just a one-off website.
              </p>
            </div>
            <div className="grid gap-3 text-xs text-foreground/70 sm:grid-cols-2">
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3.5 text-indigo-200" />
                  <span className="font-medium text-foreground/85">Product mindset</span>
                </div>
                <p className="mt-1.5">
                  We think in systems: design tokens, components, content models and analytics.
                </p>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles className="size-3.5 text-indigo-200" />
                  <span className="font-medium text-foreground/85">Premium execution</span>
                </div>
                <p className="mt-1.5">
                  Carefully tuned typography, spacing and motion that feel crafted and calm.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </Section>

      <Section className="mt-16 lg:mt-20">
        <Reveal>
          <div className="flex flex-col items-center justify-between gap-4 rounded-2xl border border-white/10 bg-white/5 px-6 py-7 text-center shadow-[0_18px_60px_rgba(0,0,0,.75)] sm:flex-row sm:text-left">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/55">
                Ready to build?
              </p>
              <h2 className="mt-2 text-lg font-semibold tracking-tight sm:text-xl">
                Tell us about your next product, website or platform.
              </h2>
              <p className="mt-2 text-sm text-foreground/70">
                Share your idea, timeline and constraints. We’ll respond with a clear, honest plan.
              </p>
            </div>
            <div className="flex shrink-0 flex-col gap-2 sm:items-end">
              <Button asChild size="lg">
                <a href="/contact">Schedule a call</a>
              </Button>
              <span className="text-[11px] text-foreground/55">
                Or email{" "}
                <a href="mailto:hello@culturecode.id" className="underline underline-offset-4">
                  hello@culturecode.id
                </a>
              </span>
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}
