import type { Metadata } from "next";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <section className="mx-auto flex min-h-screen max-w-7xl items-center px-6 py-20">
        <div className="max-w-3xl">
          <p className="mb-4 font-mono text-sm uppercase tracking-widest text-white/50">
            {siteConfig.name}
          </p>

          <h1 className="text-5xl font-semibold tracking-tight sm:text-6xl">
            Space, tracked.
          </h1>

          <p className="mt-6 text-lg leading-8 text-white/60">
            Track upcoming space launches, missions, satellite launches,
            countdowns, and important space events with Space Riots.
          </p>
        </div>
      </section>
    </main>
  );
}
