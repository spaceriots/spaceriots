import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import { getAllArticles } from "@/data/articles";

export const metadata: Metadata = {
  title: "Space Articles & News",
  description:
    "Explore space events, launches, missions, astronomy, and technology through informative articles and the latest developments in space exploration.",
  alternates: {
    canonical: "/articles",
  },
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="mx-auto w-full max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
      <header className="mb-10">
        <h1 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Space Articles
        </h1>

        <p className="mt-3 max-w-2xl text-sm leading-7 text-gray-400 sm:text-base">
          Explore space exploration, astronomy, technology, missions,
          and the discoveries shaping our understanding of the universe.
        </p>
      </header>

      <section aria-label="Space articles" className="space-y-8">
        {articles.length > 0 ? (
          articles.map((article, index) => (
            <article
              key={article.slug}
              className="flex flex-col gap-4 sm:flex-row sm:gap-6"
            >
              <Link
                href={`/articles/${article.slug}`}
                className="block w-full shrink-0 overflow-hidden sm:w-56"
                tabIndex={-1}
                aria-hidden="true"
              >
                <Image
                  src={article.image}
                  alt=""
                  width={800}
                  height={450}
                  sizes="(max-width: 639px) calc(100vw - 2rem), 224px"
                  preload={index === 0}
                  className="aspect-video w-full object-cover"
                />
              </Link>

              <div className="flex min-w-0 flex-1 flex-col items-start">
                <p className="text-xs font-medium uppercase tracking-wider text-red-400">
                  {article.category}
                </p>

                <h2 className="mt-2 text-xl font-semibold leading-snug text-white">
                  <Link
                    href={`/articles/${article.slug}`}
                    className="transition-colors hover:text-red-400"
                  >
                    {article.title}
                  </Link>
                </h2>

                <p className="mt-2 line-clamp-3 text-sm leading-6 text-gray-400">
                  {article.description}
                </p>

                <div className="mt-4 flex w-full flex-wrap items-center justify-between gap-3">
                  <time
                    dateTime={article.publishedAt}
                    className="text-xs text-gray-500"
                  >
                    {formatDate(article.publishedAt)}
                  </time>

                  <Link
                    href={`/articles/${article.slug}`}
                    className="text-sm font-medium text-white transition-colors hover:text-red-400"
                  >
                    Read article →
                  </Link>
                </div>
              </div>
            </article>
          ))
        ) : (
          <p className="text-sm leading-6 text-gray-400">
            No articles are available yet. Please check back soon.
          </p>
        )}
      </section>
    </main>
  );
}
