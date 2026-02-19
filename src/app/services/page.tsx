import { Section } from "@/components/section";
import { Reveal } from "@/components/reveal";
import { ServiceCard } from "@/components/cards/service-card";
import { Badge } from "@/components/ui/badge";

const services = [
  {
    icon: "code",
    title: "Web & Marketing Sites",
    description:
      "High-conversion marketing websites, product launch pages and editorial experiences built with modern stacks.",
  },
  {
    icon: "code",
    title: "SaaS Platforms & Dashboards",
    description:
      "Application architecture, dashboards, admin portals and self-serve flows tailored for SaaS products.",
  },
  {
    icon: "layout",
    title: "UI/UX & Design Systems",
    description:
      "Design systems, component libraries and interaction patterns that scale with your roadmap.",
  },
  {
    icon: "workflow",
    title: "Product Discovery & Prototyping",
    description:
      "Collaborative workshops, user flows and prototypes to de-risk features before committing engineering time.",
  },
  {
    icon: "sparkles",
    title: "Digital Product Launches",
    description:
      "End-to-end delivery of new products — from naming and visual direction to build, QA and launch.",
  },
  {
    icon: "workflow",
    title: "Ongoing Product Partnership",
    description:
      "Retainers for teams who need a long-term design and engineering partner, not just one-off projects.",
  },
];

export default function ServicesPage() {
  return (
    <div className="pb-16 pt-8 sm:pt-10">
      <Section className="space-y-8">
        <Reveal>
          <div>
            <Badge variant="accent">Services</Badge>
            <h1 className="mt-4 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
              A modern digital agency for teams who care about craft.
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-foreground/70 sm:text-base">
              CULTURECODE blends UI/UX design, product thinking and engineering to ship experiences
              that feel carefully made — from hero sections to complex product flows.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-5 md:grid-cols-2">
          {services.map((service, idx) => (
            <Reveal key={service.title} delay={0.03 * idx}>
              <ServiceCard {...service} />
            </Reveal>
          ))}
        </div>
      </Section>
    </div>
  );
}

