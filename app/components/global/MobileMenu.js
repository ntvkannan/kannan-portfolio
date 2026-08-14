"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { navigationItems } from "@/app/data/navigation";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const triggerRef = useRef(null);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        closeMenu();
        triggerRef.current?.focus();
      }
    };

    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target) && !triggerRef.current?.contains(e.target)) {
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
        className="relative p-2 text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
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

      {/* Menu Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-black/20" onClick={closeMenu} />
      )}

      {/* Menu Panel */}
      <nav
        ref={menuRef}
        id="mobile-menu"
        className={`fixed right-0 top-0 z-50 h-screen w-full max-w-sm bg-surface shadow-lg transition-transform duration-200 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between border-b border-border px-5 py-4">
          <span className="text-lg font-semibold text-text-primary">Menu</span>
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
          {navigationItems.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                onClick={closeMenu}
                className="block rounded-md px-3 py-2 text-base font-medium text-text-primary hover:bg-surface-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {item.label}
              </Link>
            </li>
          ))}
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
    </>
  );
}
