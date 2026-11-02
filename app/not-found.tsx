import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex w-full max-w-3xl flex-1 flex-col justify-center px-4 py-24">
      <h1 className="text-4xl font-semibold text-white">
        This destination doesn't exist.
      </h1>

      <p className="mt-2 leading-7 text-zinc-400">
        The page may have moved, or this space experience may not
        have been published yet.
      </p>

      <Link
        href="/"
        className="mt-6 w-fit text-sm text-red-400 transition-colors hover:text-red-300"
      >
        Return to Space Riots →
      </Link>
    </main>
  );
}
