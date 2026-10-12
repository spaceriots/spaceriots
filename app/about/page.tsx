import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "About Space Riots",
  description:
    "Discover Space Riots, an independent space information website covering rocket launches, missions, satellites, and upcoming space events.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <InfoPageLayout
      eyebrow="About us"
      title="Space is happening. Stay informed."
      description="Follow the launches, missions, and events shaping humanity's exploration of space."
    >
      <section>
        <h2>What is Space Riots?</h2>
        <p>
          Space Riots is an independent space information website
          designed to make spaceflight activity and upcoming space
          events easier to discover and follow.
        </p>
        <p>
          Our goal is to bring useful information together so you can
          discover what's coming next, follow important developments,
          and understand the missions taking place beyond Earth.
        </p>
      </section>

      <section>
        <h2>What we cover</h2>
        <ul>
          <li>Rocket launches and launch schedules.</li>
          <li>Space missions, spacecraft, and exploration programs.</li>
          <li>Satellites and spaceflight developments.</li>
          <li>Upcoming space events and viewing opportunities.</li>
          <li>Space news, mission updates, and live coverage links.</li>
        </ul>
      </section>

      <section>
        <h2>Our approach</h2>
        <p>
          Spaceflight schedules and mission plans can change.
          We aim to present information clearly, distinguish
          confirmed details from estimates, and use reliable
          sources for important claims.
        </p>
        <p>
          Dates, countdowns, and event visibility may depend on
          official schedules, your location, and local conditions.
          Always check authoritative sources for the latest details.
        </p>
      </section>

      <section>
        <h2>Independent website</h2>
        <p>
          Space Riots is not an official NASA, ESA, or other
          space agency website. Third-party names, logos, and
          trademarks belong to their respective owners.
        </p>
      </section>

      <section>
        <h2>Get in touch</h2>
        <p>
          Have feedback, a correction, or a suggestion for future
          coverage? Visit our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
