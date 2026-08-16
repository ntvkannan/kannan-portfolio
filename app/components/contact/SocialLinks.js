import Link from "@/app/components/foundation/Link";
import { socialLinks } from "@/app/data/contact";

export default function SocialLinks() {
  return (
    <div className="py-16 sm:py-16 lg:py-24">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold text-text-primary mb-6">
            Connect
          </h2>

          <div className="flex flex-col sm:flex-row gap-4">
            {socialLinks.map((link) => (
              <Link
                key={link.platform}
                href={link.url}
                external={link.platform !== "email"}
                className="text-base font-medium text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
