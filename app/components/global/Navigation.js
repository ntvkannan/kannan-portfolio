"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigationItems } from "@/app/data/navigation";

export default function Navigation() {
  const pathname = usePathname();

  const isActive = (href) => {
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/work") {
      return pathname === "/work" || pathname.startsWith("/work/");
    }
    return pathname === href || pathname.startsWith(href + "/");
  };

  return (
    <nav>
      <ul className="flex items-center gap-8">
        {navigationItems.map((item) => {
          const active = isActive(item.href);

          return (
            <li key={item.href}>
              <div className="relative">
                <Link
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative text-sm font-medium transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent group ${
                    active
                      ? "text-primary hover:text-primary"
                      : "text-text-primary hover:text-text-secondary"
                  }`}
                >
                  {item.label}
                  {/* Hover underline - only for non-active items */}
                  {!active && (
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-text-secondary transition-all duration-200 group-hover:w-full"></span>
                  )}
                </Link>
                {/* Active chevron - only for active items */}
                {active && (
                  <svg
                    className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-3 h-3 text-primary"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                )}
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
