import Image from "next/image";
import { Layers, Link as LinkIcon } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const projects = [
  {
    title: "SaaS analytics dashboard",
    description:
      "A metrics-first dashboard for a B2B SaaS product with cohort analysis, MRR insights and billing funnels.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    tags: ["SaaS", "Dashboard", "Design & build"],
  },
  {
    title: "Restaurant booking experience",
    description:
      "A cinematic web experience and booking flow for a Jakarta-based restaurant group.",
    image:
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?auto=format&fit=crop&w=1200&q=80",
    tags: ["Web", "Booking", "Brand"],
  },
  {
    title: "Booking platform for studios",
    description:
      "A responsive platform to manage studio slots, pricing, and self-serve bookings for creators.",
    image:
      "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1200&q=80",
    tags: ["Platform", "Product design", "React"],
  },
  {
    title: "Corporate innovation website",
    description:
      "A clean, credibility-focused site for a corporate innovation arm showcasing ventures and programs.",
    image:
      "https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1200&q=80",
    tags: ["Corporate", "Web", "Storytelling"],
  },
];

export default function ProjectsPage() {
  return (
    <div className="pb-16 pt-8 sm:pt-10">
      <Section className="space-y-8">
        <Reveal>
          <div>
            <Badge variant="accent">Projects</Badge>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Digital products and websites designed to feel sharp, calm and premium.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
              A sample of projects CULTURECODE has designed and built — from SaaS dashboards and
              booking products to experiential marketing sites.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {projects.map((project, idx) => (
            <Reveal key={project.title} delay={0.04 * idx}>
              <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-[0_22px_80px_rgba(0,0,0,.8)]">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="absolute left-0 top-0 flex items-center gap-2 rounded-br-xl bg-black/60 px-3 py-2 text-[11px] text-foreground/75">
                    <Layers className="size-3" />
                    Product & engineering
                  </div>
                </div>
                <div className="space-y-3 px-5 py-5">
                  <h2 className="text-sm font-semibold tracking-tight sm:text-base">
                    {project.title}
                  </h2>
                  <p className="text-xs leading-6 text-foreground/70 sm:text-sm">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap items-center gap-2 text-[11px] text-foreground/65">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full border border-white/12 bg-white/5 px-2 py-0.5"
                      >
                        {tag}
                      </span>
                    ))}
                    <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-foreground/60">
                      <LinkIcon className="size-3" />
                      Case study available on request
                    </span>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

