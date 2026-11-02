"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "TSE2027", href: "/total-solar-eclipse-2027" },
  { label: "Guide", href: "/solar-eclipse-viewing-guide" },
  { label: "Articles", href: "/articles" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    if (!menuOpen) return;

    const handlePointerDown = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setMenuOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-[#050608]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:h-[4.5rem] lg:px-8">
        <Link
          href="/"
          aria-label="Space Riots home"
          className="flex shrink-0 items-center"
          onClick={() => setMenuOpen(false)}
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

        {/* Desktop navigation */}
        <nav
          aria-label="Main navigation"
          className="hidden items-center gap-1 md:flex"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative px-3.5 py-2 text-sm text-white"
            >
              {link.label}
              <span
                aria-hidden="true"
                className="absolute bottom-1 left-3.5 right-3.5 hidden border-b-2 border-dashed border-white/80 group-hover:block"
              />
            </Link>
          ))}
        </nav>

        {/* Mobile menu */}
        <div ref={menuRef} className="md:hidden">
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center text-white"
          >
            {menuOpen ? (
              <X aria-hidden="true" size={23} strokeWidth={1.8} />
            ) : (
              <Menu aria-hidden="true" size={23} strokeWidth={1.8} />
            )}
          </button>

          {/* Mobile navigation */}
          {menuOpen && (
            <nav
              id="mobile-navigation"
              aria-label="Mobile navigation"
              className="absolute inset-x-0 top-full border-b border-white/5 bg-[#050608] px-4 py-3 sm:px-6"
            >
              {navLinks.map((link) => {
                const isActive =
                  link.href === "/"
                    ? pathname === "/"
                    : pathname === link.href ||
                      pathname.startsWith(`${link.href}/`);

                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    aria-current={isActive ? "page" : undefined}
                    className={`block px-3 py-3 text-sm font-medium transition-colors ${
                      isActive
                        ? "text-white"
                        : "text-white/65 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
