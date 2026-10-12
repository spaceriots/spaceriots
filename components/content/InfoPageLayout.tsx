import type { ReactNode } from "react";

type InfoPageLayoutProps = {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
};

export default function InfoPageLayout({
  eyebrow,
  title,
  description,
  children,
}: InfoPageLayoutProps) {
  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <header className="mb-10 border-b border-white/10 pb-8 sm:mb-12 sm:pb-10">
        <p className="mb-3 text-xs font-medium uppercase tracking-[0.2em] text-red-400">
          {eyebrow}
        </p>

        <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
          {title}
        </h1>

        <p className="mt-4 max-w-2xl text-base leading-7 text-white/60">
          {description}
        </p>
      </header>

      <div className="space-y-10 text-sm leading-7 text-white/70 sm:text-base sm:leading-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-white sm:[&_h2]:text-xl [&_h3]:mb-2 [&_h3]:font-medium [&_h3]:text-white [&_a]:text-red-400 [&_a]:underline [&_a]:underline-offset-4 [&_a:hover]:text-red-300 [&_li]:pl-1 [&_ol]:list-decimal [&_ol]:space-y-2 [&_ol]:pl-6 [&_p+p]:mt-4 [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-6">
        {children}
      </div>
    </main>
  );
}
