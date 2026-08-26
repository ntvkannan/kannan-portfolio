"use client";

import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/app/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const pathname = usePathname();

  // The header establishes a containing block for fixed positioning
  // (backdrop-filter), so the drawer is portalled to the body instead.
  useEffect(() => setMounted(true), []);

  const closeMenu = () => setIsOpen(false);

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !triggerRef.current?.contains(e.target)
      ) {
        closeMenu();
      }
    };

    document.addEventListener("keydown", handleEscape);
    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <>
      {/* Menu Trigger Button */}
      <button
        ref={triggerRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="mobile-menu"
        className="relative p-2.5 text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        <span className="sr-only">Open menu</span>
        <svg
          className="h-6 w-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>

      {mounted &&
        createPortal(
          <>
            {/* Menu Overlay */}
            {isOpen && (
              <div
                className="fixed inset-0 z-40 bg-black/20"
                onClick={closeMenu}
              />
            )}

            {/* Viewport clip - keeps the off-canvas panel from extending document width */}
            <div className="fixed inset-0 z-50 overflow-hidden pointer-events-none">
              {/* Menu Panel */}
              <nav
                ref={menuRef}
                id="mobile-menu"
                aria-label="Navigation menu"
                className={`absolute right-0 top-0 h-screen w-full max-w-[90vw] sm:max-w-sm bg-surface shadow-lg transition-transform duration-200 pointer-events-auto ${
                  isOpen ? "translate-x-0" : "translate-x-full"
                }`}
              >
                {/* Close Button */}
                <div className="flex items-center justify-between border-b border-border px-5 py-4">
                  <span className="text-lg font-semibold text-text-primary">
                    Menu
                  </span>
                  <button
                    onClick={closeMenu}
                    aria-label="Close menu"
                    className="p-2 text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    <svg
                      className="h-6 w-6"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <ul className="space-y-1 px-5 py-6">
                  {navigationItems.map((item) => {
                    const active = isActive(item.href);
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={closeMenu}
                          aria-current={active ? "page" : undefined}
                          className={`block rounded-md px-3 py-2.5 text-base font-medium focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 ${
                            active
                              ? "text-primary hover:text-primary"
                              : "text-text-primary hover:bg-surface-secondary hover:text-accent"
                          }`}
                        >
                          {item.label}
                        </Link>
                      </li>
                    );
                  })}
                </ul>

                {/* Mobile Menu CTA */}
                <div className="border-t border-border px-5 py-4 space-y-3">
                  <Link
                    href="/contact"
                    onClick={closeMenu}
                    className="block w-full rounded-lg bg-accent px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                  >
                    Work With Me
                  </Link>
                </div>
              </nav>
            </div>
          </>,
          document.body,
        )}
    </>
  );
}
