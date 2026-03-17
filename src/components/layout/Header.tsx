"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { clsx } from "clsx";
import { NAV_LINKS, PHONE, SITE_NAME } from "@/lib/constants";
import MobileMenu from "./MobileMenu";
import Button from "@/components/ui/Button";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => {
    setOpenDropdown(null);
  }, [pathname]);

  return (
    <>
      <header
        className={clsx(
          "fixed top-0 left-0 right-0 z-40 transition-all duration-300",
          scrolled
            ? "bg-navy shadow-lg shadow-navy/20"
            : "bg-navy/90 backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2.5 flex-shrink-0 group"
              aria-label={`${SITE_NAME} home`}
            >
              <div className="flex items-center justify-center h-9 w-9 rounded-md bg-orange group-hover:bg-orange-dark transition-colors">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                >
                  <path
                    d="M4 7C4 5.89543 4.89543 5 6 5H18C19.1046 5 20 5.89543 20 7V16C20 17.1046 19.1046 18 18 18H6C4.89543 18 4 17.1046 4 16V7Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M4 10H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                  <path
                    d="M8 5L6 2M16 5L18 2"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="hidden sm:block">
                <p className="font-display font-bold text-white text-sm leading-tight">
                  Southwest
                </p>
                <p className="font-display font-bold text-orange text-sm leading-tight">
                  Auto Glass
                </p>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
              {NAV_LINKS.map((link) =>
                link.children ? (
                  <div key={link.href} className="relative">
                    <button
                      onClick={() =>
                        setOpenDropdown(
                          openDropdown === link.href ? null : link.href
                        )
                      }
                      onBlur={() => setTimeout(() => setOpenDropdown(null), 150)}
                      className={clsx(
                        "flex items-center gap-1 px-3 py-2 rounded-md text-sm font-display font-semibold transition-colors",
                        pathname.startsWith(link.href)
                          ? "text-orange"
                          : "text-white/90 hover:text-white hover:bg-white/10"
                      )}
                      aria-expanded={openDropdown === link.href}
                      aria-haspopup="true"
                    >
                      {link.label}
                      <svg
                        className={clsx(
                          "h-4 w-4 transition-transform",
                          openDropdown === link.href && "rotate-180"
                        )}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        aria-hidden="true"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                    {openDropdown === link.href && (
                      <ul
                        className="absolute top-full left-0 mt-1 w-56 rounded-lg bg-white shadow-xl border border-gray-100 py-1 z-50"
                        role="menu"
                      >
                        {link.children.map((child) => (
                          <li key={child.href} role="none">
                            <Link
                              href={child.href}
                              className="block px-4 py-2.5 text-sm text-navy font-sans hover:bg-glass hover:text-orange transition-colors"
                              role="menuitem"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={clsx(
                      "px-3 py-2 rounded-md text-sm font-display font-semibold transition-colors",
                      pathname === link.href
                        ? "text-orange"
                        : "text-white/90 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {link.label}
                  </Link>
                )
              )}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <a
                href={`tel:+1${PHONE.replace(/\D/g, "")}`}
                className="hidden md:flex items-center gap-1.5 text-white hover:text-orange transition-colors text-sm font-display font-semibold"
                aria-label={`Call ${PHONE}`}
              >
                <svg
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                {PHONE}
              </a>
              <Button href="/quote" size="sm" className="hidden sm:inline-flex">
                Free Quote
              </Button>
              {/* Hamburger */}
              <button
                className="lg:hidden p-2 text-white hover:text-orange transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
                onClick={() => setMenuOpen(true)}
                aria-label="Open menu"
                aria-expanded={menuOpen}
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
    </>
  );
}
