import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for Space Riots, including website usage, content accuracy, intellectual property, and external links.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <InfoPageLayout
      eyebrow="Legal"
      title="Terms of Use"
      description="Terms governing your access to and use of Space Riots."
    >
      <p>Last updated: October 11, 2026</p>

      <section>
        <h2>1. About these terms</h2>
        <p>
          These Terms of Use apply to your access to and use of
          spaceriots.com ("Space Riots", "we", "us", or "our").
          By using the website, you agree to comply with these
          terms and applicable laws.
        </p>
        <p>
          If you do not agree to these terms, please discontinue
          use of the website.
        </p>
      </section>

      <section>
        <h2>2. Website content</h2>
        <p>
          Space Riots provides informational content about rocket
          launches, space missions, satellites, spaceflight news,
          and other space-related events.
        </p>
        <p>
          Content is provided for general informational purposes.
          It is not a substitute for official announcements,
          launch-provider instructions, or emergency information.
        </p>
      </section>

      <section>
        <h2>3. Accuracy and schedule changes</h2>
        <p>
          Launch dates, countdowns, mission timelines, and event
          details may change without notice. Information may
          occasionally be incomplete, delayed, estimated, or
          inaccurate.
        </p>
        <p>
          Always check the relevant space agency, launch provider,
          observatory, or other authoritative source before
          relying on time-sensitive information.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You must not use the website to:
        </p>
        <ul>
          <li>Violate applicable laws or another person's rights.</li>
          <li>Attempt unauthorized access to website systems.</li>
          <li>Interfere with the website's security or operation.</li>
          <li>Abuse website services through automated or other means.</li>
          <li>Use our content in ways that infringe applicable rights.</li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          Unless otherwise stated, original Space Riots content,
          branding, and website design are owned by or licensed
          to their respective rights holders and are protected
          by applicable intellectual property laws.
        </p>
        <p>
          You may link to publicly available pages on our website.
          Reproducing or redistributing our original content may
          require permission, except where permitted by law.
        </p>
        <p>
          Third-party names, images, logos, and materials belong
          to their respective owners and may be subject to
          separate rights or licensing requirements.
        </p>
      </section>

      <section>
        <h2>6. External links</h2>
        <p>
          Our website may link to external websites, livestreams,
          launch providers, news sources, and other services.
          These links are provided for convenience and further
          information.
        </p>
        <p>
          We do not control external websites and cannot guarantee
          their accuracy, availability, or privacy practices.
          Your use of those services is subject to their
          applicable terms and policies.
        </p>
      </section>

      <section>
        <h2>7. Advertising</h2>
        <p>
          Space Riots may display advertisements or link to
          third-party services. Such advertisements and links
          do not necessarily represent an endorsement by
          Space Riots.
        </p>
      </section>

      <section>
        <h2>8. Availability and disclaimers</h2>
        <p>
          We aim to maintain a useful and reliable website but
          cannot guarantee uninterrupted availability or that
          all information will always be complete, current,
          or error-free.
        </p>
        <p>
          To the extent permitted by applicable law, the website
          and its content are provided on an "as is" and
          "as available" basis. Nothing in these terms excludes
          or limits liability or rights that cannot lawfully
          be excluded or limited.
        </p>
      </section>

      <section>
        <h2>9. Changes to these terms</h2>
        <p>
          We may update these terms as our website, services,
          or legal requirements change. Updated terms will be
          published on this page with a revised date.
        </p>
      </section>

      <section>
        <h2>10. Applicable law</h2>
        <p>
          The governing law and resolution of disputes depend
          on the website operator's circumstances and
          applicable legal requirements. This section should
          be finalized before publication to reflect the
          applicable jurisdiction.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          If you have questions about these terms, visit our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
