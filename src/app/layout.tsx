import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "CULTURECODE — Modern Digital Agency",
    template: "%s — CULTURECODE",
  },
  description:
    "CULTURECODE is a modern Indonesian digital agency specializing in Web Development, SaaS Development, UI/UX Design, and Digital Product Development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} min-h-dvh bg-background text-foreground antialiased`}>
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(1200px_circle_at_20%_0%,rgba(99,102,241,.18),transparent_40%),radial-gradient(1000px_circle_at_80%_20%,rgba(139,92,246,.14),transparent_45%)]" />
        <div className="pointer-events-none fixed inset-0 -z-10 bg-[linear-gradient(to_right,rgba(255,255,255,.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-[0.18] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_72%)]" />
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
