import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "Learn how Space Riots handles personal information, cookies, analytics, and advertising technologies.",
  alternates: {
    canonical: "/privacy",
  },
};

export default function PrivacyPage() {
  return (
    <InfoPageLayout
      eyebrow="Legal"
      title="Privacy Policy"
      description="How information may be collected, used, and shared when you visit Space Riots."
    >
      <p>Last updated: October 11, 2026</p>

      <section>
        <h2>1. Introduction</h2>
        <p>
          This Privacy Policy explains how Space Riots ("we", "us",
          or "our") handles information in connection with your use
          of spaceriots.com.
        </p>
        <p>
          This policy should be read alongside our{" "}
          <Link href="/terms">Terms of Use</Link>.
        </p>
      </section>

      <section>
        <h2>2. Information we may collect</h2>
        <p>
          Depending on the website features and services enabled,
          information may include:
        </p>
        <ul>
          <li>
            Information you provide when contacting us, such as
            your email address and message.
          </li>
          <li>
            Technical information, such as browser type, device
            information, IP address, and server logs.
          </li>
          <li>
            Usage information, such as pages visited, referral
            sources, and interactions, if analytics are enabled.
          </li>
          <li>
            Cookie identifiers and similar information used by
            the website or third-party services, where applicable.
          </li>
        </ul>
      </section>

      <section>
        <h2>3. How information may be used</h2>
        <p>
          Where applicable, information may be used to operate
          and secure the website, respond to enquiries, understand
          traffic, improve content, prevent abuse, and support
          advertising services.
        </p>
      </section>

      <section>
        <h2>4. Cookies and similar technologies</h2>
        <p>
          The website or third-party services may use cookies
          and similar technologies for security, preferences,
          analytics, advertising, and measurement.
        </p>
        <p>
          The technologies used depend on the services enabled
          and your privacy settings. You can manage cookies
          through your browser, although disabling some cookies
          may affect website functionality.
        </p>
      </section>

      <section>
        <h2>5. Advertising</h2>
        <p>
          If advertising services such as Google AdSense are
          enabled, advertising providers may use cookies,
          identifiers, IP addresses, or similar technologies
          to deliver, personalize, limit, or measure ads,
          subject to applicable settings and law.
        </p>
        <p>
          Where required, we will provide appropriate information
          and consent choices for advertising technologies.
          Available choices may depend on your location and
          the services in use.
        </p>
      </section>

      <section>
        <h2>6. Analytics and third-party services</h2>
        <p>
          If analytics tools are enabled, they may process
          information about website visits, devices, referral
          sources, and interactions.
        </p>
        <p>
          Hosting providers, security services, analytics
          providers, and advertising partners may process
          information as necessary to provide their services.
          Their own privacy policies may also apply.
        </p>
      </section>

      <section>
        <h2>7. Data retention and security</h2>
        <p>
          Information should be retained only for as long as
          reasonably necessary for the relevant purpose or as
          required by law.
        </p>
        <p>
          We aim to use appropriate measures to protect
          information. However, no method of transmission
          or storage can be guaranteed completely secure.
        </p>
      </section>

      <section>
        <h2>8. Your privacy rights</h2>
        <p>
          Depending on your location and applicable law, you
          may have rights to access, correct, delete, or
          restrict the processing of certain personal information.
          You may also have other rights, including withdrawing
          consent where applicable.
        </p>
        <p>
          To make a privacy-related request, contact us through
          our <Link href="/contact">Contact page</Link>.
        </p>
      </section>

      <section>
        <h2>9. Children's privacy</h2>
        <p>
          We do not intend to knowingly collect children's
          personal information in violation of applicable law.
          If you believe information has been provided
          inappropriately, please contact us.
        </p>
      </section>

      <section>
        <h2>10. Changes to this policy</h2>
        <p>
          We may update this policy when our practices,
          services, or legal requirements change. Updates
          will be published on this page with a revised date.
        </p>
      </section>

      <section>
        <h2>11. Contact</h2>
        <p>
          For privacy questions, visit our{" "}
          <Link href="/contact">Contact page</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
