import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Contact Space Riots",
  description:
    "Get in touch with Space Riots for general enquiries, feedback, corrections, and suggestions about space exploration, astronomy, events, and technology.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <InfoPageLayout
      eyebrow="Contact"
      title="We'd like to hear from you."
      description="Have a question, spotted something that needs correcting, or have an idea for future coverage? Get in touch with Space Riots."
    >
      <section>
        <h2>General enquiries</h2>
        <p>
          Whether you have a question about Space Riots,
          need information about our content, or want to
          share feedback, we'd be happy to hear from you.
        </p>
      </section>

      <section>
        <h2>Corrections and feedback</h2>
        <p>
          Accuracy matters when covering space missions,
          rocket launches, astronomical events, and
          technology developments. If you notice an
          incorrect detail or outdated information,
          please let us know.
        </p>
        <p>
          When reporting an issue, include the relevant
          page URL, a description of the information
          that needs attention, and a reliable source
          supporting the correction where possible.
        </p>
      </section>

      <section>
        <h2>Suggest a topic</h2>
        <p>
          Have an idea for an article or a space-related
          development we should explore? We welcome
          suggestions about upcoming launches, exploration
          missions, astronomical events, spacecraft,
          satellites, space technology, and the
          commercial space industry.
        </p>
        <p>
          Links to official announcements, research,
          and other relevant sources are always helpful.
        </p>
      </section>

      <section>
        <h2>Contact by email</h2>
        <p>
          For general enquiries, feedback, corrections,
          and content suggestions, reach us at:
        </p>
        <p>
          <a href="mailto:info.spaceriots@gmail.com">
            info.spaceriots@gmail.com
          </a>
        </p>
      </section>

      <section>
        <h2>Response times</h2>
        <p>
          We aim to review incoming messages and respond
          where appropriate. Response times may vary
          depending on the nature and volume of enquiries.
        </p>
        <p>
          For details about how personal information
          submitted through email is handled, please
          read our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
