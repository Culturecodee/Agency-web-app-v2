import { Mail, Phone, MapPin } from "lucide-react";

import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactPage() {
  return (
    <div className="pb-16 pt-8 sm:pt-10">
      <Section className="space-y-10">
        <Reveal>
          <div className="max-w-2xl">
            <Badge variant="accent">Contact</Badge>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              Tell us about your next product, website or platform.
            </h1>
            <p className="mt-3 text-sm leading-7 text-foreground/70 sm:text-base">
              Share your context, timelines and constraints. We&apos;ll respond with a simple,
              honest overview of how CULTURECODE can help — or point you in the right direction.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
          <Reveal>
            <form className="space-y-4 rounded-2xl border border-white/10 bg-white/5 p-6 shadow-[0_18px_60px_rgba(0,0,0,.8)]">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2 text-sm">
                  <label htmlFor="name" className="text-xs font-medium text-foreground/75">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>
                <div className="space-y-2 text-sm">
                  <label htmlFor="company" className="text-xs font-medium text-foreground/75">
                    Company
                  </label>
                  <Input id="company" placeholder="Company or product name" />
                </div>
              </div>

              <div className="space-y-2 text-sm">
                <label htmlFor="email" className="text-xs font-medium text-foreground/75">
                  Email
                </label>
                <Input id="email" type="email" placeholder="you@company.com" />
              </div>

              <div className="space-y-2 text-sm">
                <label htmlFor="project" className="text-xs font-medium text-foreground/75">
                  Project details
                </label>
                <Textarea
                  id="project"
                  placeholder="What are you looking to build? Please include scope, goals and any timelines."
                />
              </div>

              <div className="space-y-2 text-sm">
                <label htmlFor="budget" className="text-xs font-medium text-foreground/75">
                  Approximate budget
                </label>
                <Input id="budget" placeholder="Optional, helps us respond precisely" />
              </div>

              <div className="flex items-center justify-between gap-4 pt-2">
                <Button type="submit">Send message</Button>
                <p className="hidden text-[11px] text-foreground/55 sm:block">
                  This form is UI only — we&apos;ll integrate your preferred inbox or CRM.
                </p>
              </div>
            </form>
          </Reveal>

          <Reveal delay={0.05}>
            <aside className="space-y-5 rounded-2xl border border-white/10 bg-white/3 p-5 text-sm text-foreground/75">
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.22em] text-foreground/55">
                  <Mail className="size-3.5" />
                  Contact
                </div>
                <a
                  href="mailto:hello@culturecode.id"
                  className="block text-sm font-medium text-foreground hover:underline"
                >
                  hello@culturecode.id
                </a>
                <p className="text-xs text-foreground/60">
                  Prefer email? Share links or decks and we&apos;ll get back within one business
                  day.
                </p>
              </div>

              <div className="space-y-1 text-xs text-foreground/65">
                <div className="flex items-center gap-2">
                  <Phone className="size-3.5" />
                  <span>+62 812-0000-0000</span>
                </div>
                <div className="flex items-start gap-2">
                  <MapPin className="mt-0.5 size-3.5" />
                  <span>Jakarta, Indonesia</span>
                </div>
              </div>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/5 p-4 text-xs text-foreground/70">
                <div className="font-medium text-foreground/80">How we usually work</div>
                <ul className="mt-2 space-y-1">
                  <li>• 30–45 min intro call</li>
                  <li>• Short written proposal with clear scope</li>
                  <li>• Collaborative kick-off with design and engineering present</li>
                </ul>
              </div>
            </aside>
          </Reveal>
        </div>
      </Section>
    </div>
  );
}

