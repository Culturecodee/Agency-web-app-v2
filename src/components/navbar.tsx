"use client";

import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/section";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  React.useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50">
      <div
        className={cn(
          "border-b border-transparent transition-colors",
          scrolled && "border-white/10 bg-background/60 backdrop-blur-xl",
        )}
      >
        <Section className="flex h-16 items-center justify-between">
          <Link href="/" className="group inline-flex items-center gap-2">
            <span className="text-sm font-semibold tracking-[0.18em] text-foreground/90">
              CULTURECODE
            </span>
            <span className="hidden h-5 w-px bg-white/10 sm:block" />
            <span className="hidden text-xs text-foreground/55 sm:block">
              Indonesian Digital Agency
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {navItems.map((item) => {
              const active = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-md px-3 py-2 text-sm text-foreground/70 transition-colors hover:text-foreground",
                    active && "text-foreground",
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="hidden items-center gap-3 md:flex">
            <Button asChild variant="secondary">
              <Link href="/contact">Let’s talk</Link>
            </Button>
          </div>

          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
            >
              {open ? <X /> : <Menu />}
            </Button>
          </div>
        </Section>
      </div>

      <AnimatePresence>
        {open ? (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22, ease: [0.2, 0.8, 0.2, 1] }}
            className="md:hidden"
          >
            <div className="border-b border-white/10 bg-background/75 backdrop-blur-xl">
              <Section className="py-4">
                <div className="flex flex-col gap-1">
                  {navItems.map((item, idx) => {
                    const active =
                      item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                    return (
                      <motion.div
                        key={item.href}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.03 * idx, duration: 0.25 }}
                      >
                        <Link
                          href={item.href}
                          className={cn(
                            "block rounded-md px-3 py-2 text-sm text-foreground/80 hover:bg-white/5 hover:text-foreground",
                            active && "bg-white/5 text-foreground",
                          )}
                        >
                          {item.label}
                        </Link>
                      </motion.div>
                    );
                  })}
                  <div className="mt-3">
                    <Button asChild className="w-full">
                      <Link href="/contact">Start a project</Link>
                    </Button>
                  </div>
                </div>
              </Section>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}

