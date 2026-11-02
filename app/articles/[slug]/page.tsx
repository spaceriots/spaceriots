import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { siteConfig } from "@/data/site";
import { getAllArticles, getArticle } from "@/data/articles";

type Props = {
  params: Promise<{ slug: string }>;
};

function formatDate(date: string) {
  return new Date(`${date}T12:00:00Z`).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "UTC",
  });
}

function createHeadingId(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

function getArticleUrl(slug: string) {
  return new URL(`/articles/${slug}`, siteConfig.url).toString();
}

export function generateStaticParams() {
  return getAllArticles().map((article) => ({
    slug: article.slug,
  }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    return { title: "Article Not Found" };
  }

  const articleUrl = getArticleUrl(article.slug);

  return {
    title: article.title,
    description: article.description,
    authors: [{ name: article.author }],
    alternates: {
      canonical: articleUrl,
    },

    openGraph: {
      title: article.title,
      description: article.description,
      url: articleUrl,
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      type: "article",
      images: [article.image],
      publishedTime: article.publishedAt,
    },

    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.description,
      images: [article.image],
    },
  };
}

export default async function ArticlePage({ params }: Props) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const articleUrl = getArticleUrl(article.slug);

  const headings = article.content.filter(
    (block) => block.type === "heading",
  );

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: article.title,
        description: article.description,
        articleSection: article.category,
        image: [new URL(article.image, siteConfig.url).toString()],
        datePublished: article.publishedAt,
        author: {
          "@type":
            article.author === siteConfig.name ? "Organization" : "Person",
          name: article.author,
        },
        publisher: {
          "@type": "Organization",
          name: siteConfig.name,
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": articleUrl,
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: siteConfig.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Articles",
            item: new URL("/articles", siteConfig.url).toString(),
          },
          {
            "@type": "ListItem",
            position: 3,
            name: article.title,
            item: articleUrl,
          },
        ],
      },
    ],
  };

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(
            /</g,
            "\\u003c",
          ),
        }}
      />

      <Link
        href="/articles"
        className="text-sm text-gray-400 transition-colors hover:text-red-400"
      >
        ← All articles
      </Link>

      <article className="mt-8">
        <header>
          <p className="text-xs font-medium uppercase tracking-widest text-red-400">
            {article.category}
          </p>

          <h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
            {article.title}
          </h1>

          <p className="mt-4 text-base leading-7 text-gray-400 sm:text-lg">
            {article.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2 text-xs text-gray-500">
            <span>By {article.author}</span>

            <time dateTime={article.publishedAt}>
              {formatDate(article.publishedAt)}
            </time>
          </div>
        </header>

        <figure className="mt-8">
          <Image
            src={article.image}
            alt={article.title}
            width={1200}
            height={675}
            preload
            sizes="(max-width: 639px) calc(100vw - 2rem), (max-width: 959px) calc(100vw - 3rem), 848px"
            className="aspect-video w-full object-cover"
          />
        </figure>

        {headings.length >= 3 && (
          <nav
            aria-label="Table of contents"
            className="mx-auto mt-8 max-w-3xl rounded-lg border border-white/10 p-5"
          >
            <h2 className="text-lg font-semibold text-white">
              In this article
            </h2>

            <ul className="mt-4 space-y-3">
              {headings.map((heading, index) => (
                <li key={index}>
                  <a
                    href={`#${createHeadingId(heading.text)}`}
                    className="text-sm leading-6 text-gray-400 transition-colors hover:text-red-400"
                  >
                    {heading.text}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}

        <div className="mx-auto mt-8 max-w-3xl space-y-6 text-base leading-8 text-gray-300">
          {article.content.map((block, index) => {
            return block.type === "heading" ? (
              <h2
                key={index}
                id={createHeadingId(block.text)}
                className="scroll-mt-24 pt-3 text-2xl font-semibold leading-tight text-white"
              >
                {block.text}
              </h2>
            ) : (
              <p key={index}>{block.text}</p>
            );
          })}
        </div>

        {article.sources && article.sources.length > 0 && (
          <section className="mx-auto mt-12 max-w-3xl border-t border-white/10 pt-6">
            <h2 className="text-lg font-semibold text-white">
              Sources & Further Reading
            </h2>

            <ul className="mt-4 space-y-3">
              {article.sources.map((source) => (
                <li key={source.url}>
                  <a
                    href={source.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm leading-6 text-gray-400 underline decoration-white/20 underline-offset-4 transition-colors hover:text-red-400"
                  >
                    {source.title}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}

        <footer className="mt-10 border-t border-white/10 pt-6">
          <Link
            href="/articles"
            className="text-sm font-medium text-white transition-colors hover:text-red-400"
          >
            ← Explore more articles
          </Link>
        </footer>
      </article>
    </main>
  );
}
