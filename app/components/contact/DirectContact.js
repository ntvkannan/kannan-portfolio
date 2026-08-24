import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import Link from "@/app/components/foundation/Link";
import { contactMethods } from "@/app/data/contact";

export default function DirectContact() {
  return (
    <Section variant="normal">
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
            Direct Contact
          </h2>

          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                Email
              </p>
              <Link
                href={contactMethods.emailHref}
                className="text-lg text-text-primary hover:text-accent font-medium"
              >
                {contactMethods.email}
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-3">
                Phone
              </p>
              <Link
                href={contactMethods.phoneHref}
                className="text-lg text-text-primary hover:text-accent font-medium"
              >
                {contactMethods.phone}
              </Link>
            </div>

            <div>
              <p className="text-sm font-semibold text-accent uppercase tracking-wide mb-4">
                Resume
              </p>
              <a
                href={contactMethods.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-button h-12 px-6 bg-accent text-white font-medium text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
