import Link from "next/link";
import { navigationItems } from "@/app/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-text-primary">
              Kannan Thangavel
            </h2>
            <p className="mt-2 text-sm text-text-secondary">
              Senior UX/UI Designer & Frontend Developer
            </p>
          </div>

          {/* Navigation */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Navigation
            </h3>
            <ul className="mt-4 space-y-2">
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-sm text-text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links (Placeholder - no fake URLs) */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:ntvkannan@gmail.com"
                  className="text-sm text-text-secondary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Email
                </a>
              </li>
            </ul>
          </div>

          {/* Resume (Placeholder - no fake file) */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Resume
            </h3>
            <p className="mt-4 text-sm text-text-muted">
              Coming soon
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-secondary">
            © {currentYear} Kannan Thangavel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
