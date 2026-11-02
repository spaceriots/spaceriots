import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Terms of Use",
  description:
    "Read the Terms of Use for Space Riots, covering website access, content accuracy, intellectual property, advertising, and external links.",
  alternates: {
    canonical: "/terms",
  },
};

export default function TermsPage() {
  return (
    <InfoPageLayout
      eyebrow="Legal"
      title="Terms of Use"
      description="Please read these terms before using Space Riots."
    >
      <p>Last updated: November 2, 2026</p>

      <section>
        <h2>1. About these terms</h2>
        <p>
          These Terms of Use govern your access to and
          use of spaceriots.com ("Space Riots", "we",
          "us", or "our").
        </p>
        <p>
          By accessing or using the Website, you agree
          to these terms and any applicable laws and
          regulations. If you do not agree with these
          terms, please discontinue using the Website.
        </p>
      </section>

      <section>
        <h2>2. Website content and purpose</h2>
        <p>
          Space Riots is an independent informational
          website covering space exploration, rocket
          launches, missions, satellites, astronomy,
          space technology, and developments in the
          space industry.
        </p>
        <p>
          Our content may include articles, explanations,
          event information, countdowns, schedules,
          references, and links to external resources.
        </p>
        <p>
          All content is provided for general
          informational and educational purposes.
          It should not be treated as a substitute
          for official announcements, professional
          advice, or instructions from relevant
          authorities and organizations.
        </p>
      </section>

      <section>
        <h2>3. Accuracy and changing information</h2>
        <p>
          Space-related information can change as
          missions develop, launch schedules are
          revised, and new scientific findings become
          available.
        </p>
        <p>
          Although we aim to provide useful and
          accurate information, we do not guarantee
          that all content will always be complete,
          current, or free from errors.
        </p>
        <p>
          Launch dates, countdowns, mission timelines,
          astronomical predictions, event visibility,
          and other time-sensitive information may
          be updated, delayed, estimated, or changed
          without notice.
        </p>
        <p>
          Readers should verify important information
          through the relevant space agencies,
          launch providers, scientific organizations,
          observatories, and other authoritative
          sources before relying on it.
        </p>
      </section>

      <section>
        <h2>4. Acceptable use</h2>
        <p>
          You agree to use the Website responsibly
          and in accordance with applicable laws.
          You must not:
        </p>
        <ul>
          <li>
            Use the Website for unlawful purposes or
            activities that violate another person's
            rights.
          </li>
          <li>
            Attempt unauthorized access to the Website,
            its systems, or associated services.
          </li>
          <li>
            Interfere with the security, availability,
            or normal operation of the Website.
          </li>
          <li>
            Introduce malicious software, harmful code,
            or other disruptive material.
          </li>
          <li>
            Use automated methods to access or collect
            Website content in a manner that violates
            applicable laws or the rights of others.
          </li>
          <li>
            Reproduce, redistribute, or exploit
            protected content without appropriate
            authorization.
          </li>
        </ul>
      </section>

      <section>
        <h2>5. Intellectual property</h2>
        <p>
          Unless otherwise stated, original content
          published by Space Riots, including its
          written material, branding, and website
          design, is owned by or licensed to the
          respective rights holders and is protected
          by applicable intellectual property laws.
        </p>
        <p>
          You may access and share links to publicly
          available pages on the Website for personal
          and informational purposes.
        </p>
        <p>
          Reproducing, republishing, modifying, or
          redistributing original Space Riots content
          without permission may infringe applicable
          intellectual property rights, except where
          permitted by law.
        </p>
        <p>
          Third-party names, logos, images, videos,
          trademarks, and other materials remain the
          property of their respective owners and may
          be subject to separate copyright, licensing,
          and usage restrictions.
        </p>
      </section>

      <section>
        <h2>6. External links and third-party services</h2>
        <p>
          Space Riots may contain links to external
          websites, scientific publications, space
          agencies, launch providers, livestreams,
          videos, and other third-party services.
        </p>
        <p>
          These links are provided to help readers
          access additional information and resources.
          We do not control external websites and are
          not responsible for their content, accuracy,
          availability, security, or privacy practices.
        </p>
        <p>
          Visiting or using third-party websites and
          services is subject to their own terms,
          conditions, and privacy policies.
        </p>
      </section>

      <section>
        <h2>7. Advertising and sponsored content</h2>
        <p>
          Space Riots may display advertisements
          provided by third-party advertising
          networks, including Google AdSense.
        </p>
        <p>
          Advertisements may be selected or
          personalized by third-party providers
          according to their own technologies,
          policies, and applicable privacy choices.
        </p>
        <p>
          The appearance of an advertisement or
          third-party link does not necessarily
          represent an endorsement, recommendation,
          or guarantee by Space Riots of the
          advertised product, service, or organization.
        </p>
      </section>

      <section>
        <h2>8. Website availability and disclaimers</h2>
        <p>
          We aim to keep Space Riots accessible and
          functioning properly. However, we do not
          guarantee that the Website will always be
          available, uninterrupted, secure, or free
          from technical errors.
        </p>
        <p>
          To the extent permitted by applicable law,
          the Website and its content are provided
          on an "as is" and "as available" basis,
          without warranties or representations
          of any kind, whether express or implied.
        </p>
        <p>
          Nothing in these terms excludes or limits
          any rights, warranties, or liabilities
          that cannot legally be excluded or limited
          under applicable law.
        </p>
      </section>

      <section>
        <h2>9. Limitation of liability</h2>
        <p>
          To the extent permitted by applicable law,
          Space Riots and its operator will not be
          liable for indirect, incidental, special,
          or consequential losses arising from your
          access to or use of the Website, reliance
          on its content, or inability to access
          the Website.
        </p>
        <p>
          This section does not exclude or limit
          liability where such exclusion or
          limitation is prohibited by applicable law.
        </p>
      </section>

      <section>
        <h2>10. Changes to the Website and these terms</h2>
        <p>
          We may modify, update, suspend, or
          discontinue parts of the Website at any
          time, including its content, features,
          and services.
        </p>
        <p>
          We may also revise these Terms of Use
          to reflect changes in our Website,
          services, or legal requirements.
          Updated terms will be published on
          this page with a revised last updated
          date.
        </p>
        <p>
          Your continued use of the Website after
          updated terms are published constitutes
          acceptance of the revised terms to the
          extent permitted by applicable law.
        </p>
      </section>

      <section>
        <h2>11. Applicable law</h2>
        <p>
          These Terms of Use are subject to the
          laws and regulations applicable to
          the operation of Space Riots and the
          user's access to the Website.
        </p>
        <p>
          Any disputes arising in connection with
          these terms will be handled by the
          competent courts or authorities having
          jurisdiction, subject to applicable
          consumer protection laws and other
          mandatory legal requirements.
        </p>
      </section>

      <section>
        <h2>12. Contact us</h2>
        <p>
          If you have questions about these Terms
          of Use or the Website, please visit
          our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
