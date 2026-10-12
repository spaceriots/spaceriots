import type { Metadata } from "next";
import Link from "next/link";
import InfoPageLayout from "@/components/content/InfoPageLayout";

export const metadata: Metadata = {
  title: "Contact Space Riots",
  description:
    "Contact Space Riots with questions, corrections, feedback, and suggestions about space launches, missions, and events.",
  alternates: {
    canonical: "/contact",
  },
};

export default function ContactPage() {
  return (
    <InfoPageLayout
      eyebrow="Contact"
      title="Get in touch."
      description="Questions, corrections, and thoughtful feedback help us improve Space Riots."
    >
      <section>
        <h2>General enquiries</h2>
        <p>
          Contact us with questions about the website, feedback
          on our content, or suggestions for improvements.
        </p>
      </section>

      <section>
        <h2>Report an error</h2>
        <p>
          Found an incorrect launch date, mission detail, or event
          time? Please include the page URL, the information that
          needs correcting, and a reliable source where possible.
        </p>
      </section>

      <section>
        <h2>Suggest a topic</h2>
        <p>
          Let us know about an upcoming launch, space mission,
          satellite development, or space event you think deserves
          coverage. Official sources are especially helpful.
        </p>
      </section>

      <section>
        <h2>Email us</h2>
        <p>
          For enquiries, email us at:
        </p>
        <p>
          <a href="mailto:info.spaceriots@gmail.com">
            info.spaceriots@gmail.com
          </a>
        </p>
        <p>
          Replace this placeholder and its mailto address with
          your actual monitored contact email before publishing.
        </p>
      </section>

      <section>
        <h2>Response times</h2>
        <p>
          We review messages as time permits, but we cannot
          guarantee a response to every enquiry.
        </p>
        <p>
          For more information about how contact messages are
          handled, read our{" "}
          <Link href="/privacy">Privacy Policy</Link>.
        </p>
      </section>
    </InfoPageLayout>
  );
}
