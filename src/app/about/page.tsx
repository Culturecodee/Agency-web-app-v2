import { Users, Target, Sparkles } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";

const team = [
  {
    name: "Alya Pratama",
    role: "Product & UX",
    bio: "Leads discovery, UX flows and product strategy for web and SaaS projects.",
  },
  {
    name: "Rizky Setiawan",
    role: "Engineering",
    bio: "Focuses on frontend architecture, performance and clean code.",
  },
  {
    name: "Dimas Surya",
    role: "Visual & Brand",
    bio: "Crafts visual systems, art direction and premium UI details.",
  },
];

export default function AboutPage() {
  return (
    <div className="pb-16 pt-8 sm:pt-10">
      <Section className="space-y-10">
        <Reveal>
          <div className="max-w-2xl">
            <Badge variant="accent">About</Badge>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              CULTURECODE is a modern Indonesian digital agency focused on product-quality work.
            </h1>
            <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
              We sit between product studios and traditional agencies — combining design, engineering
              and startup-level execution. Every engagement is led by people who care about
              typography, interaction and shipping real products.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,.75)]">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                <Sparkles className="size-3.5 text-indigo-200" />
                Story
              </div>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                CULTURECODE was created to bring premium, product-level craft to teams across
                Indonesia — without importing entire teams from overseas.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,.75)]">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                <Target className="size-3.5 text-indigo-200" />
                Mission
              </div>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Help modern Indonesian teams ship digital experiences that feel calm, sharp and
                globally competitive — from first launch to version ten.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-[0_18px_60px_rgba(0,0,0,.75)]">
              <div className="flex items-center gap-2 text-xs font-medium text-foreground/75">
                <Users className="size-3.5 text-indigo-200" />
                Vision
              </div>
              <p className="mt-2 text-sm leading-7 text-foreground/70">
                Become a trusted partner for startups and brands who value modern engineering
                culture and long-term product thinking.
              </p>
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.22em] text-foreground/55">
              Team
            </p>
            <div className="mt-3 grid gap-4 md:grid-cols-3">
              {team.map((member) => (
                <div
                  key={member.name}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 text-sm text-foreground/80"
                >
                  <div className="font-medium">{member.name}</div>
                  <div className="text-xs text-foreground/55">{member.role}</div>
                  <p className="mt-3 text-xs leading-6 text-foreground/70">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </Section>
    </div>
  );
}

