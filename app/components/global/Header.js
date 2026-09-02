import Image from "next/image";
import Link from "next/link";
import Navigation from "./Navigation";
import MobileMenuTrigger from "./MobileMenuTrigger";

export default function Header() {
  return (
    <header className="border-b border-border/60 bg-surface/92 backdrop-blur-md py-4 sticky top-0 z-40">
      <div className="mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Mobile: logo + trigger via flex. Desktop: 1fr / auto / 1fr grid so the
            nav column is centered on the container (and thus the viewport), not
            merely on the space left over between the logo and the CTA. */}
        <div className="flex items-center justify-between lg:grid lg:grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)]">
          {/* Logo / Name */}
          <Link
            href="/"
            className="flex items-center gap-2.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent rounded lg:justify-self-start"
          >
            <Image
              src="/images/Kannan.jpg"
              alt="Kannan"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-cover flex-shrink-0"
            />
            <span className="text-lg font-semibold text-text-primary hover:text-accent transition-colors">
              Kannan T.
            </span>
          </Link>

          {/* Desktop Navigation — centered grid column */}
          <div className="hidden lg:block">
            <Navigation />
          </div>

          {/* Desktop CTA — right grid column */}
          <div className="hidden lg:block lg:justify-self-end">
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
