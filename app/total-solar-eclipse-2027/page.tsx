import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Total Solar Eclipse 2027",
  description:
    "Discover the August 2, 2027 total solar eclipse, its path across the world, where to see totality, what happens during the eclipse, and how to watch safely.",
  alternates: {
    canonical: "/total-solar-eclipse-2027",
  },
  openGraph: {
    title: "Total Solar Eclipse 2027",
    description:
      "Everything you need to know about the total solar eclipse on August 2, 2027.",
    type: "website",
  },
};

export default function TotalSolarEclipse2027Page() {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <article>
        <header>
          <p className="text-sm font-medium uppercase tracking-widest text-red-400">
            Space Events
          </p>

          <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            Total Solar Eclipse 2027
          </h1>

          <p className="mt-5 text-base leading-7 text-gray-400 sm:text-lg">
            On August 2, 2027, the Moon will completely cover the Sun
            along a narrow path across parts of Europe, North Africa,
            and the Middle East. Discover where to see the eclipse,
            how it happens, and what makes this event special.
          </p>
        </header>

        {/* Eclipse video */}
        <section className="mt-8">
          <div className="overflow-hidden rounded-xl border border-white/10 bg-black">
            <video
              className="aspect-video w-full object-cover"
              controls
              playsInline
              preload="metadata"
              poster="/images/total-solar-eclipse-2027.jpg"
            >
              <source
                src="/videos/total-solar-eclipse-2027.mp4"
                type="video/mp4"
              />
              Your browser does not support HTML video.
            </video>
          </div>

          <p className="mt-3 text-sm leading-6 text-gray-500">
            A visual guide to how a total solar eclipse happens.
          </p>
        </section>

        {/* Key facts */}
        <section className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          {[
            { label: "Date", value: "August 2, 2027" },
            { label: "Event", value: "Total Solar Eclipse" },
            { label: "Maximum totality", value: "About 6m 23s" },
            { label: "Best-known location", value: "Luxor, Egypt" },
          ].map((fact) => (
            <div
              key={fact.label}
              className="rounded-lg border border-white/10 bg-white/[0.03] p-4"
            >
              <p className="text-xs leading-5 text-gray-500">
                {fact.label}
              </p>
              <p className="mt-2 text-sm font-semibold leading-6 text-white">
                {fact.value}
              </p>
            </div>
          ))}
        </section>

        {/* Main content */}
        <div className="mx-auto mt-10 max-w-4xl space-y-8 text-base leading-8 text-gray-300">
          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              What Is the Total Solar Eclipse of 2027?
            </h2>

            <p className="mt-4">
              A total solar eclipse happens when the Moon passes
              directly between Earth and the Sun, completely blocking
              the Sun&apos;s bright disk for observers in a specific
              area. The sky can become noticeably darker, and the
              Sun&apos;s outer atmosphere, known as the corona, may
              become visible.
            </p>

            <p className="mt-4">
              The August 2, 2027 eclipse is a major astronomical event
              because totality will last more than six minutes at its
              longest point. The exact duration depends on where you
              observe it.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              What Will Happen During the Eclipse?
            </h2>

            <p className="mt-4">
              The eclipse develops through several stages. First, the
              Moon begins to cover part of the Sun. The visible solar
              disk gradually becomes smaller as the Moon moves across
              it.
            </p>

            <p className="mt-4">
              Inside the narrow path of totality, the Moon eventually
              covers the entire bright disk of the Sun. During this
              brief phase, the sky darkens and the solar corona can
              become visible. The Sun then gradually reappears as the
              Moon continues along its orbit.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Which Countries Can See the Eclipse?
            </h2>

            <p className="mt-4">
              The path of totality will cross parts of southern
              Europe, North Africa, and the Middle East. Locations
              along this path will experience a total eclipse, while
              many surrounding regions will see only a partial eclipse.
            </p>

            <h3 className="mt-5 text-lg font-semibold text-white">
              Where totality will be visible
            </h3>

            <ul className="mt-3 list-inside list-disc space-y-2">
              <li>Spain and Gibraltar</li>
              <li>Morocco and Algeria</li>
              <li>Tunisia and Libya</li>
              <li>Egypt and Sudan</li>
              <li>Saudi Arabia and Yemen</li>
              <li>Parts of Somalia</li>
            </ul>

            <p className="mt-4">
              Not every location within these countries will
              experience totality. You must be inside the eclipse&apos;s
              narrow path to see the Moon completely cover the Sun.
              Nearby areas may experience only a partial eclipse.
            </p>

            <p className="mt-4">
              <a
                href="https://science.nasa.gov/eclipses/future-eclipses/"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-red-400"
              >
                Check NASA&apos;s eclipse information
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              When Will the Eclipse Be Visible?
            </h2>

            <p className="mt-4">
              The eclipse will occur on August 2, 2027, but the local
              start time, maximum eclipse, and end time will differ
              from one location to another.
            </p>

            <p className="mt-4">
              For example, observers in Luxor, Egypt, will experience
              a much longer period of totality than observers near
              the edge of the path. Weather conditions and cloud
              cover will also affect whether the eclipse can be seen.
            </p>

            <p className="mt-4">
              Use an eclipse map or a location-specific calculator to
              find the exact viewing times and duration for your city.
            </p>

            <p className="mt-4">
              <a
                href="https://www.timeanddate.com/eclipse/solar/2027-august-2"
                target="_blank"
                rel="noreferrer"
                className="font-medium text-white underline decoration-white/30 underline-offset-4 transition-colors hover:text-red-400"
              >
                Explore the eclipse map and local times
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Can You See the Eclipse From Sri Lanka?
            </h2>

            <p className="mt-4">
              Yes. Sri Lanka will experience a partial solar eclipse
              on August 2, 2027, rather than a total solar eclipse.
              The amount of the Sun covered and the viewing times will
              depend on your location.
            </p>

            <p className="mt-4">
              In Colombo, the eclipse is expected to begin at around
              4:05 p.m., reach its maximum at around 5:01 p.m., and
              end at around 5:53 p.m. local time. These times are
              predictions and should be checked again closer to the
              event.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              How to Watch the Eclipse Safely
            </h2>

            <p className="mt-4">
              Looking directly at the Sun without appropriate eye
              protection can cause serious eye injury. Use certified
              eclipse glasses or a suitable solar viewer whenever
              any part of the Sun&apos;s bright disk is visible.
            </p>

            <p className="mt-4">
              Ordinary sunglasses are not safe for viewing the Sun.
              Never look through a camera, telescope, or binoculars
              without a properly fitted solar filter designed for
              that equipment.
            </p>

            <p className="mt-4">
              Direct viewing without solar filters is safe only
              during the brief total phase, and only for observers
              within the path of totality, when the Sun&apos;s bright
              disk is completely covered.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Why Is This Eclipse Special?
            </h2>

            <p className="mt-4">
              The 2027 eclipse offers an unusually long period of
              totality compared with many other total solar eclipses.
              It also crosses several regions with a long history of
              astronomical observation.
            </p>

            <p className="mt-4">
              For skywatchers, photographers, and researchers, it
              provides an opportunity to observe the solar corona,
              document changes in the environment, and experience
              one of nature&apos;s most striking astronomical events.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Frequently Asked Questions
            </h2>

            <div className="mt-5 space-y-5">
              <div>
                <h3 className="font-semibold text-white">
                  What date is the 2027 total solar eclipse?
                </h3>
                <p className="mt-2">
                  The eclipse will occur on Monday, August 2, 2027.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  How long will totality last?
                </h3>
                <p className="mt-2">
                  At its longest point, totality will last approximately
                  6 minutes and 23 seconds. The duration varies by
                  location.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Will the entire world see the total eclipse?
                </h3>
                <p className="mt-2">
                  No. Totality will be visible only along a narrow
                  path. Many other places will see a partial eclipse,
                  while some regions will not see it at all.
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-white">
                  Can I watch the eclipse online?
                </h3>
                <p className="mt-2">
                  Yes. Astronomy organizations and observatories may
                  provide live streams. Check their official websites
                  closer to the event.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold leading-tight text-white">
              Sources and Further Information
            </h2>

            <ul className="mt-4 list-inside list-disc space-y-2">
              <li>
                <a
                  href="https://science.nasa.gov/eclipses/future-eclipses/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  NASA — Future Eclipses
                </a>
              </li>

              <li>
                <a
                  href="https://www.timeanddate.com/eclipse/solar/2027-august-2"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  Time and Date — August 2, 2027 Eclipse
                </a>
              </li>

              <li>
                <a
                  href="https://nso.edu/eclipse-map-2027-aug2/"
                  target="_blank"
                  rel="noreferrer"
                  className="underline decoration-white/30 underline-offset-4 hover:text-red-400"
                >
                  National Solar Observatory — Eclipse Map
                </a>
              </li>
            </ul>
          </section>
        </div>

        <footer className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/solar-eclipse-viewing-guide"
            className="text-sm font-medium text-white transition-colors hover:text-red-400"
          >
            How to View a Solar Eclipse Safely →
          </Link>
        </footer>
      </article>
    </main>
  );
}
