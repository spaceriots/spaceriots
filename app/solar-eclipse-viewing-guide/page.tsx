import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "How to View a Solar Eclipse Safely",
  description:
    "Learn how to watch a solar eclipse safely, choose the right eclipse glasses, use cameras correctly, and avoid dangerous viewing mistakes.",
  alternates: {
    canonical: "/solar-eclipse-viewing-guide",
  },
  openGraph: {
    title: "Solar Eclipse Viewing Guide",
    description:
      "A practical guide to safely watching a solar eclipse, including what to do and what to avoid.",
    type: "article",
  },
};

export default function SolarEclipseViewingGuidePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <article>
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-red-400">
            Solar Eclipse Guide
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            How to View a Solar Eclipse Safely
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            Watching a solar eclipse can be an unforgettable experience.
            However, looking directly at the Sun without proper protection
            can seriously damage your eyes. Learn how to prepare, what
            equipment to use, and what you should never do.
          </p>
        </header>

        {/* Important safety notice */}
        <section className="mt-8 rounded-xl border border-red-500/30 bg-red-500/[0.06] p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-white">
            Important: Protect Your Eyes
          </h2>

          <p className="mt-3 text-sm leading-7 text-gray-300">
            Never look directly at the Sun without proper solar viewing
            protection, except during the brief total phase of a total
            solar eclipse when the Moon completely covers the Sun&apos;s
            bright disk. Regular sunglasses are not safe for eclipse viewing.
          </p>
        </section>

        <div className="mx-auto mt-10 max-w-3xl space-y-10 text-base leading-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              1. What Do You Need to Watch a Solar Eclipse?
            </h2>

            <p className="mt-4">
              You do not need expensive equipment to enjoy a solar eclipse.
              A few simple preparations can help you observe the event
              safely and comfortably.
            </p>

            <ul className="mt-4 list-inside list-disc space-y-3">
              <li>
                <strong className="text-white">Eclipse glasses:</strong>{" "}
                Use undamaged solar viewing glasses that comply with the
                ISO 12312-2 standard.
              </li>
              <li>
                <strong className="text-white">A safe viewing location:</strong>{" "}
                Choose a place with a clear view of the Sun and check the
                weather forecast.
              </li>
              <li>
                <strong className="text-white">A viewing plan:</strong>{" "}
                Check the eclipse start time, maximum eclipse, and end time
                for your location.
              </li>
              <li>
                <strong className="text-white">Sun protection:</strong>{" "}
                Bring water, sunscreen, a hat, and suitable clothing if
                you will be outdoors for a long period.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              2. What You Should Do
            </h2>

            <ul className="mt-4 list-inside list-disc space-y-3">
              <li>
                Inspect your eclipse glasses before every use. Do not use
                glasses with scratched, torn, punctured, or damaged filters.
              </li>
              <li>
                Put your eclipse glasses on before looking toward the Sun.
                Turn away from the Sun before removing them.
              </li>
              <li>
                Keep your eclipse glasses on throughout every partial
                phase of the eclipse.
              </li>
              <li>
                Supervise children and make sure they use their solar
                viewers correctly.
              </li>
              <li>
                Use only solar filters specifically designed for cameras,
                telescopes, and binoculars, securely fitted over the
                front of the equipment.
              </li>
              <li>
                Follow the manufacturer&apos;s instructions for your
                viewing equipment.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              3. What You Should Never Do
            </h2>

            <ul className="mt-4 list-inside list-disc space-y-3">
              <li>
                <strong className="text-white">
                  Never use ordinary sunglasses.
                </strong>{" "}
                Even very dark sunglasses do not provide adequate
                protection for looking directly at the Sun.
              </li>
              <li>
                Never look at the Sun through a camera, telescope,
                or binoculars without a properly installed solar filter.
              </li>
              <li>
                Never look through optical equipment while wearing
                ordinary eclipse glasses. Concentrated sunlight can
                cause severe eye injury.
              </li>
              <li>
                Never use scratched, damaged, or unverified solar viewers.
              </li>
              <li>
                Never assume that clouds make it safe to look directly
                at the Sun without protection.
              </li>
              <li>
                Never remove your eclipse glasses during a partial
                eclipse just because most of the Sun is covered.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              4. How to Watch Each Stage of the Eclipse
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-semibold text-white">
                  Before the eclipse
                </h3>

                <p className="mt-2">
                  Find out when the eclipse begins in your area. Prepare
                  your eclipse glasses, inspect your equipment, and
                  choose a suitable viewing location.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  During the partial phases
                </h3>

                <p className="mt-2">
                  Wear certified eclipse glasses whenever you look
                  directly at the Sun. This applies before and after
                  totality during a total solar eclipse, and throughout
                  the entire event during a partial or annular eclipse.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  During totality
                </h3>

                <p className="mt-2">
                  If you are inside the path of a total solar eclipse,
                  you may look directly at the completely eclipsed Sun
                  without eclipse glasses only while the bright solar
                  disk is entirely covered by the Moon.
                </p>

                <p className="mt-3">
                  Remove your glasses only after totality has begun
                  completely. Put them back on before any part of the
                  bright Sun reappears. If you are unsure whether
                  totality has begun or ended, keep your glasses on.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  After the eclipse
                </h3>

                <p className="mt-2">
                  Continue using proper eye protection whenever you
                  look directly at the Sun. Review your photos and
                  recordings after the event rather than risking
                  your eyesight to get a better view.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              5. Can You Use a Camera or Telescope?
            </h2>

            <p className="mt-4">
              Yes, but cameras, telescopes, and binoculars require
              solar filters specifically designed for the equipment.
              The filter must be securely attached to the front of
              the optical system to reduce sunlight before it enters.
            </p>

            <p className="mt-4">
              Eclipse glasses alone are not sufficient protection
              when looking through these devices. Never point an
              unfiltered optical instrument at the Sun and look
              through it, even if you are wearing eclipse glasses.
            </p>

            <p className="mt-4">
              If you are a beginner, consider enjoying the eclipse
              with certified eclipse glasses or using an indirect
              projection method instead.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              6. How to Watch Without Eclipse Glasses
            </h2>

            <p className="mt-4">
              If you do not have suitable eclipse glasses, you can
              observe the eclipse indirectly using a simple pinhole
              projector.
            </p>

            <p className="mt-4">
              Make a small hole in a piece of card and allow sunlight
              to pass through it onto a separate white surface. With
              your back to the Sun, look at the projected image on
              the surface, not at the Sun or through the hole.
            </p>

            <p className="mt-4">
              You can also observe the changing crescent shapes
              projected through the small openings in a colander
              or other suitable perforated object.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              7. Frequently Asked Questions
            </h2>

            <div className="mt-5 space-y-6">
              <div>
                <h3 className="font-semibold text-white">
                  Are regular sunglasses safe for a solar eclipse?
                </h3>

                <p className="mt-2">
                  No. Ordinary sunglasses, including very dark ones,
                  do not provide adequate protection for directly
                  viewing the Sun.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Can I look at a partial solar eclipse without glasses?
                </h3>

                <p className="mt-2">
                  No. Use proper solar viewing protection whenever
                  looking directly at the Sun during a partial eclipse.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Is it safe to photograph an eclipse with my phone?
                </h3>

                <p className="mt-2">
                  Pointing a phone camera at the Sun can damage
                  equipment under some conditions and does not protect
                  your eyes. Use appropriate solar protection for
                  direct viewing and follow your device manufacturer&apos;s
                  guidance for solar photography.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Can children watch a solar eclipse?
                </h3>

                <p className="mt-2">
                  Yes, with suitable supervision and proper solar
                  viewing protection. An indirect pinhole projector
                  is another option.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  What if I do not know whether my eclipse glasses are safe?
                </h3>

                <p className="mt-2">
                  Do not use them until their suitability can be
                  verified. Use a safe indirect viewing method instead.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Official Safety Resources
            </h2>

            <p className="mt-4">
              Read these expert resources for more detailed guidance
              before observing a solar eclipse.
            </p>

            <ul className="mt-4 list-inside list-disc space-y-3">
              <li>
                <a
                  href="https://science.nasa.gov/eclipses/safety/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  NASA: Eclipse Viewing Safety
                </a>
              </li>

              <li>
                <a
                  href="https://www.nei.nih.gov/research-and-training/research-news/how-watch-eclipse-safely"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  National Eye Institute: How to Watch an Eclipse Safely
                </a>
              </li>

              <li>
                <a
                  href="https://eclipse.aas.org/eye-safety"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  American Astronomical Society: Solar Eclipse Eye Safety
                </a>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/total-solar-eclipse-2027"
            className="text-sm font-medium text-white transition-colors hover:text-red-400"
          >
            ← Explore the Total Solar Eclipse 2027
          </Link>
        </footer>
      </article>
    </main>
  );
}
