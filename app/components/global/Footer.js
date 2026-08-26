import Link from "next/link";
import { navigationItems } from "@/app/data/navigation";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-surface py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Footer Content */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-4 mb-12">
          {/* Brand Section */}
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold text-text-primary">
              Kannan Thangavel
            </h2>
            <p className="mt-2 text-sm text-text-body">
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
                    className="text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Connect
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="mailto:ntvkannan@gmail.com"
                  className="text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/kannan-thangavel/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/ntvkannan"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>

          {/* Resume */}
          <div className="md:col-span-1">
            <h3 className="text-sm font-semibold text-text-primary">
              Resume
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <a
                  href="/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-body hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  Download PDF
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border" />

        {/* Copyright */}
        <div className="mt-8 text-center">
          <p className="text-sm text-text-body">
            © {currentYear} Kannan Thangavel. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
