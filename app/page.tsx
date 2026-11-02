import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import EclipseCountdown from "@/components/home/EclipseCountdown";

export const metadata: Metadata = {
  title: siteConfig.title,
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
};

const websiteStructuredData = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: siteConfig.name,
  url: siteConfig.url,
};

export default function HomePage() {
  return (
    <main className="flex-1">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteStructuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <section className="relative isolate flex min-h-[calc(100svh-4rem)] items-center overflow-hidden bg-[#050608] lg:min-h-[calc(100svh-4.5rem)]">
        {/* Hero image */}
        <Image
          src="/images/solar-eclipse-2027.webp"
          alt="The Sun's bright corona surrounding the Moon during a total solar eclipse"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[center_40%] sm:object-center"
        />

        {/* Darken the image for readable text */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-[#050608]/60"
        />

        {/* Fade smoothly into the page background */}
        <div
          aria-hidden="true"
          className="absolute inset-0 -z-10 bg-linear-to-b from-[#050608]/30 via-[#050608]/35 to-[#050608]"
        />

        {/* Hero content */}
        <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col items-center justify-center px-5 py-10 text-center sm:px-6 sm:py-12">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent sm:text-sm">
            Future Event: Solar Eclipse
          </p>

          <h1 className="mt-4 text-4xl font-bold tracking-tight text-foreground drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] sm:text-5xl lg:text-7xl">
            Total Solar Eclipse 2027
          </h1>

          <p className="mt-4 max-w-xl text-sm leading-6 text-muted drop-shadow-[0_1px_6px_rgba(0,0,0,0.7)] sm:mt-5 sm:text-base sm:leading-7">
            One Sun. One Moon. A moment of total darkness.
            Count down to the great solar eclipse of August 2, 2027.
          </p>

          <EclipseCountdown />

          <div className="mt-8 flex flex-col gap-3 text-sm sm:flex-row sm:items-center sm:gap-5">
              <time dateTime="2027-08-02T07:30:11Z">
                Monday, August 2, 2027
              </time>

              <span className="hidden text-white/85 sm:inline" aria-hidden="true">
                /
              </span>

              <span>07:30:11 UTC · Global partial eclipse begins</span>
            </div>
            <div className="mt-9">
              <Link
                href="/total-solar-eclipse-2027"
                className="inline-flex min-h-11 items-center justify-center border border-white/20 px-5 py-3 text-sm font-medium text-white transition-colors hover:border-white/50 hover:bg-white/5"
              >
                Explore the eclipse
                <span className="ml-3" aria-hidden="true">
                  →
                </span>
              </Link>
            </div>
        </div>
      </section>
    </main>
  );
}
