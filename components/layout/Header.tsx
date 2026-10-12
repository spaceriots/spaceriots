"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const navigation = [
  { name: "Launches", href: "/launches" },
  { name: "Missions", href: "/missions" },
  { name: "Events", href: "/events" },
  { name: "Live", href: "/live" },
  { name: "Articles", href: "/articles" },
] as const;

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050608]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          aria-label="Space Riots home"
          className="flex shrink-0 items-center"
        >
          <Image
            src="/brand/logo.svg"
            alt="Space Riots"
            width={160}
            height={32}
            priority
            className="h-7 w-auto"
          />
        </Link>

        <nav
          className="hidden items-center gap-1 md:flex"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="group relative px-3.5 py-2 text-sm text-white"
            >
              {item.name}
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-3.5 right-3.5 hidden border-b-2 border-dashed border-white/80 group-hover:block"
              />
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
