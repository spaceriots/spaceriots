import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "About Space Riots",
  description:
    "Learn about Space Riots, an independent website exploring space events, rocket launches, missions, astronomy, and the technologies shaping the future of space exploration.",
  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <InfoPageLayout
      eyebrow="About us"
      title="Exploring space, one discovery at a time."
      description="Discover the missions, events, and technologies shaping our understanding of space and the future of exploration."
    >
      <section>
        <h2>What is Space Riots?</h2>
        <p>
          Space Riots is an independent information website
          dedicated to space exploration, astronomy, and
          emerging space technologies. We bring together
          information about important space events, missions,
          launches, and developments to help readers explore
          what is happening beyond Earth.
        </p>
        <p>
          From upcoming rocket launches and lunar missions
          to spectacular astronomical events and advances
          in spacecraft technology, our goal is to make
          interesting developments in space easier to
          discover and understand.
        </p>
      </section>

      <section>
        <h2>What we cover</h2>
        <p>
          Space Riots explores different areas of space
          exploration and the growing space industry,
          including:
        </p>
        <ul>
          <li>
            <strong>Space missions:</strong> Exploration
            programs, lunar missions, planetary exploration,
            and human spaceflight.
          </li>
          <li>
            <strong>Rocket launches:</strong> Launch vehicles,
            spacecraft, launch schedules, and commercial
            spaceflight developments.
          </li>
          <li>
            <strong>Space events:</strong> Solar and lunar
            eclipses, meteor showers, planetary events,
            and other astronomical phenomena.
          </li>
          <li>
            <strong>Space technology:</strong> Satellites,
            spacecraft engineering, reusable rockets,
            and emerging technologies.
          </li>
          <li>
            <strong>Space industry:</strong> Commercial
            spaceflight, the space economy, major companies,
            and developments shaping the future of the
            industry.
          </li>
          <li>
            <strong>Discoveries and research:</strong>
            Interesting developments in astronomy,
            planetary science, and space research.
          </li>
        </ul>
      </section>

      <section>
        <h2>Our approach</h2>
        <p>
          We believe information about space should be
          accessible, understandable, and useful. Our aim
          is to explain important developments clearly,
          provide relevant context, and help readers
          understand why different missions, technologies,
          and events matter.
        </p>
        <p>
          We use publicly available information and
          relevant sources to develop our content. Where
          appropriate, articles include references to
          official space agencies, research organizations,
          scientific publications, and other relevant
          sources.
        </p>
      </section>

      <section>
        <h2>Accuracy and updates</h2>
        <p>
          Space missions, launch schedules, and astronomical
          event information can change. We aim to keep
          information accurate and clearly communicate
          important updates when new information becomes
          available.
        </p>
        <p>
          Dates, launch times, countdowns, and astronomical
          visibility can depend on official schedules,
          geographical location, and local viewing
          conditions. Readers should consult the relevant
          official sources for the latest information.
        </p>
      </section>

      <section>
        <h2>Independent website</h2>
        <p>
          Space Riots is an independently operated website
          and is not affiliated with, endorsed by, or
          officially associated with NASA, ESA, SpaceX,
          or any other space agency or commercial space
          organization.
        </p>
        <p>
          All third-party names, logos, and trademarks
          belong to their respective owners and are used
          for identification and informational purposes.
        </p>
      </section>

      <section>
        <h2>Explore Space Riots</h2>
        <p>
          Interested in learning more about space?
          Explore our{" "}
          <Link href="/articles">articles</Link>{" "}
          for information about space missions, upcoming
          events, rocket launches, astronomy, and
          technology.
        </p>
      </section>

      <section>
        <h2>Contact us</h2>
        <p>
          Have a question, suggestion, or correction?
          We welcome feedback from our readers. Visit
          our{" "}
          <Link href="/contact">Contact page</Link>{" "}
          to get in touch.
        </p>
      </section>
    </InfoPageLayout>
  );
}
