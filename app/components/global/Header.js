import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenuTrigger from "./MobileMenuTrigger";

export default function Header() {
  return (
    <header className="border-b border-border bg-surface py-4 sticky top-0 z-40">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Name */}
          <Link
            href="/"
            className="text-lg font-semibold text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            Kannan Thangavel
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-12">
            <Navigation />
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-2.5 text-sm font-medium text-white hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              Work With Me
            </Link>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="lg:hidden">
            <MobileMenuTrigger />
          </div>
        </div>
      </div>
    </header>
  );
}
