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
                  {/* Underline - persistent for active, animated on hover otherwise */}
                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-200 ${
                      active
                        ? "w-full bg-accent"
                        : "w-0 bg-text-secondary group-hover:w-full"
                    }`}
                  ></span>
                </Link>
                {/* Active chevron above the label, pointing down at it */}
                {active && (
                  <svg
                    className="absolute -top-3 left-1/2 -translate-x-1/2 w-3 h-3 text-accent"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M6 9l6 6 6-6" />
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
