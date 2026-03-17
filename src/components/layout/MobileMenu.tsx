"use client";

import { useEffect } from "react";
import Link from "next/link";
import { NAV_LINKS, PHONE } from "@/lib/constants";
import Button from "@/components/ui/Button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex">
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden="true"
      />
      <nav
        className="relative ml-auto flex h-full w-4/5 max-w-sm flex-col bg-navy shadow-2xl overflow-y-auto"
        aria-label="Mobile navigation"
      >
        <div className="flex items-center justify-between p-5 border-b border-white/10">
          <span className="text-white font-display font-bold text-lg">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 text-white hover:text-orange transition-colors rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange"
            aria-label="Close menu"
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <ul className="flex flex-col py-4 flex-1">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                onClick={onClose}
                className="block px-6 py-3 text-white font-display font-semibold text-lg hover:text-orange hover:bg-white/5 transition-colors"
              >
                {link.label}
              </Link>
              {link.children && (
                <ul className="bg-white/5">
                  {link.children.map((child) => (
                    <li key={child.href}>
                      <Link
                        href={child.href}
                        onClick={onClose}
                        className="block pl-10 pr-6 py-2.5 text-white/70 hover:text-orange text-sm font-sans transition-colors"
                      >
                        {child.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>

        <div className="p-6 space-y-3 border-t border-white/10">
          <a
            href={`tel:+1${PHONE.replace(/\D/g, "")}`}
            className="flex items-center gap-2 text-orange font-display font-bold text-xl"
          >
            <svg
              className="h-5 w-5"
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
          <Button href="/quote" fullWidth size="lg" onClick={onClose}>
            Get a Free Quote
          </Button>
        </div>
      </nav>
    </div>
  );
}
