import Link from "next/link";

import { Section } from "@/components/section";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="mt-20 border-t border-white/10">
      <Section className="py-12">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-md">
            <div className="text-sm font-semibold tracking-[0.18em]">CULTURECODE</div>
            <p className="mt-3 text-sm text-foreground/65">
              Modern Indonesian digital agency crafting clean, premium web & SaaS products.
            </p>
            <div className="mt-6 text-sm text-foreground/55">
              <div>hello@culturecode.id</div>
              <div className="mt-1">Jakarta, Indonesia</div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-semibold text-foreground/70">Explore</div>
              <div className="mt-3 flex flex-col gap-2">
                {footerLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="text-sm text-foreground/65 transition-colors hover:text-foreground"
                  >
                    {l.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-span-2 sm:col-span-1">
              <div className="text-xs font-semibold text-foreground/70">Services</div>
              <div className="mt-3 flex flex-col gap-2">
                {[
                  "Web Development",
                  "SaaS Development",
                  "UI/UX Design",
                  "Digital Product",
                ].map((t) => (
                  <div key={t} className="text-sm text-foreground/65">
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-xs text-foreground/50 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} CULTURECODE. All rights reserved.</div>
          <div className="flex items-center gap-4">
            <div className="rounded-full border border-white/10 bg-white/5 px-3 py-1">
              Premium. Clean. Modern.
            </div>
          </div>
        </div>
      </Section>
    </footer>
  );
}

