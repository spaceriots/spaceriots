import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Read the Space Riots Privacy Policy to understand how information, cookies, analytics, and advertising technologies may be used when you visit our website.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="Learn how Space Riots handles information, cookies, analytics, and third-party services when you visit our website."
    >
      <p>Last updated: November 2, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Space Riots
          ("we", "us", or "our") collects, uses, and
          handles information when you visit
          spaceriots.com (the "Website").
        </p>
        <p>
          We respect your privacy and aim to be
          transparent about the information that may
          be collected through the Website and the
          services used to operate it.
        </p>
        <p>
          This policy should be read alongside our{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </section>

      <section>
        <h2>2. Information we may collect</h2>
        <p>
          Depending on how you use the Website and
          which services are enabled, the following
          types of information may be collected:
        </p>
        <ul>
          <li>
            <strong>Information you provide:</strong>{" "}
            Your email address, message, and other
            information you voluntarily provide when
            contacting us.
          </li>
          <li>
            <strong>Technical information:</strong>{" "}
            Your IP address, browser type, device
            information, operating system, and
            technical information recorded through
            hosting and security services.
          </li>
          <li>
            <strong>Usage information:</strong>{" "}
            Pages visited, referring websites,
            approximate location derived from
            technical information, and interactions
            with the Website, where analytics
            services are enabled.
          </li>
          <li>
            <strong>Cookies and identifiers:</strong>{" "}
            Information stored through cookies,
            browser storage, and similar technologies
            used by the Website or third-party
            services.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How we use information</h2>
        <p>
          Information may be used, where applicable,
          for the following purposes:
        </p>
        <ul>
          <li>Operating and maintaining the Website.</li>
          <li>Responding to questions and enquiries.</li>
          <li>Reviewing corrections and reader feedback.</li>
          <li>Understanding website usage and improving content.</li>
          <li>Maintaining website security and preventing abuse.</li>
          <li>Supporting advertising and measuring ad performance.</li>
          <li>Meeting applicable legal and regulatory obligations.</li>
        </ul>
      </section>

      <section>
        <h2>4. Cookies and similar technologies</h2>
        <p>
          Space Riots and certain third-party services
          may use cookies and similar technologies
          to support website functionality, security,
          preferences, analytics, advertising, and
          measurement.
        </p>
        <p>
          Cookies are small files stored on your
          device by websites. Similar technologies
          may include browser storage, pixels,
          web beacons, and advertising identifiers.
        </p>
        <p>
          You can manage or disable cookies through
          your browser settings. However, disabling
          certain cookies or storage technologies
          may affect some website features.
        </p>
        <p>
          Where required, applicable consent choices
          will be provided through an appropriate
          privacy or cookie consent mechanism.
        </p>
      </section>

      <section>
        <h2>5. Advertising and Google AdSense</h2>
        <p>
          Space Riots may display advertisements
          through third-party advertising services,
          including Google AdSense.
        </p>
        <p>
          When advertising services are enabled,
          third-party advertising providers,
          including Google, may use cookies,
          web beacons, IP addresses, device
          information, and similar technologies
          to serve, personalize, limit, and measure
          advertisements.
        </p>
        <p>
          These technologies may allow advertising
          providers to recognize your browser or
          device across websites and use information
          about your visits to deliver relevant
          advertisements, subject to your privacy
          choices and applicable laws.
        </p>
        <p>
          Google's use of advertising cookies enables
          Google and its partners to serve ads based
          on visits to this Website and other
          websites, where applicable.
        </p>
        <p>
          You can learn more about how Google uses
          information from websites and apps that
          use its services here:{" "}
          <a
            href="https://policies.google.com/technologies/partner-sites"
            target="_blank"
            rel="noopener noreferrer"
          >
            How Google uses information from sites
            or apps that use our services
          </a>.
        </p>
        <p>
          You can also review Google's{" "}
          <a
            href="https://policies.google.com/privacy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Privacy Policy
          </a>{" "}
          for additional information about its
          data practices.
        </p>
        <p>
          Advertising preferences and available
          privacy choices may depend on your
          location, applicable regulations, and
          the advertising services in use.
        </p>
      </section>

      <section>
        <h2>6. Analytics and third-party services</h2>
        <p>
          We may use analytics services to understand
          how visitors interact with the Website,
          identify usage patterns, and improve
          website content and performance.
        </p>
        <p>
          When enabled, these services may collect
          technical and usage information, including
          page visits, browser information, device
          details, and referral sources.
        </p>
        <p>
          We may also rely on third-party providers
          for website hosting, security, analytics,
          advertising, and other operational
          services.
        </p>
        <p>
          These providers may process information
          as necessary to provide their services,
          subject to their applicable privacy
          policies and legal obligations.
        </p>
      </section>

      <section>
        <h2>7. Sharing of information</h2>
        <p>
          We do not sell personal information
          directly to third parties.
        </p>
        <p>
          Information may be shared with service
          providers that help operate, maintain,
          secure, analyze, or support advertising
          on the Website.
        </p>
        <p>
          Information may also be disclosed where
          required by law, to respond to lawful
          requests, or to protect the rights,
          security, and integrity of the Website
          and its users.
        </p>
      </section>

      <section>
        <h2>8. Data retention and security</h2>
        <p>
          Information is retained for as long as
          reasonably necessary to fulfill the
          purposes described in this policy,
          comply with applicable legal obligations,
          resolve disputes, and maintain website
          security.
        </p>
        <p>
          We take reasonable measures to protect
          information against unauthorized access,
          loss, misuse, or disclosure.
          However, no method of electronic
          transmission or storage can be guaranteed
          to be completely secure.
        </p>
      </section>

      <section>
        <h2>9. Your privacy choices and rights</h2>
        <p>
          Depending on your location and applicable
          privacy laws, you may have rights regarding
          your personal information, including the
          right to:
        </p>
        <ul>
          <li>Request access to personal information.</li>
          <li>Request correction of inaccurate information.</li>
          <li>Request deletion of certain information.</li>
          <li>Object to or restrict certain processing.</li>
          <li>Withdraw consent where processing is based on consent.</li>
        </ul>
        <p>
          You may also have additional rights under
          the privacy laws applicable to your location.
        </p>
        <p>
          To submit a privacy-related request,
          please contact us through our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>

      <section>
        <h2>10. International visitors</h2>
        <p>
          Space Riots may be accessed by visitors
          from different countries. Information
          processed through website hosting,
          analytics, advertising, and other
          third-party services may be transferred
          to or processed in countries outside
          your own.
        </p>
        <p>
          Where required by applicable law,
          appropriate safeguards will be used
          for relevant international transfers
          of personal information.
        </p>
      </section>

      <section>
        <h2>11. Children's privacy</h2>
        <p>
          Space Riots is intended for a general
          audience and is not directed specifically
          at children.
        </p>
        <p>
          We do not knowingly collect personal
          information from children in violation
          of applicable privacy laws. If you
          believe a child has provided personal
          information inappropriately, please
          contact us so that the matter can
          be reviewed.
        </p>
      </section>

      <section>
        <h2>12. Changes to this Privacy Policy</h2>
        <p>
          We may update this Privacy Policy from
          time to time to reflect changes in our
          website features, services, data practices,
          or applicable legal requirements.
        </p>
        <p>
          Any updates will be published on this
          page along with a revised last updated
          date.
        </p>
      </section>

      <section>
        <h2>13. Contact us</h2>
        <p>
          If you have questions about this Privacy
          Policy or how information is handled
          through Space Riots, please visit our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
