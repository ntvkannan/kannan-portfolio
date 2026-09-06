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
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
