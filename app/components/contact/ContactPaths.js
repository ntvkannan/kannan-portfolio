"use client";

import { useState } from "react";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import { contactPaths } from "@/app/data/contact";

export default function ContactPaths({ onPathSelect }) {
  const [selectedPath, setSelectedPath] = useState(null);

  const handlePathClick = (path) => {
    setSelectedPath(path.id);
    if (onPathSelect) {
      onPathSelect(path.projectType);
    }
    // Scroll to form
    setTimeout(() => {
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 0);
  };

  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-text-secondary mb-8">
            What's your project about?
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {contactPaths.map((path) => (
              <button
                key={path.id}
                onClick={() => handlePathClick(path)}
                className={`p-6 rounded-lg border-2 transition-all text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
                  selectedPath === path.id
                    ? "border-accent bg-surface-secondary"
                    : "border-border hover:border-border-strong bg-surface"
                }`}
                aria-pressed={selectedPath === path.id}
              >
                <h3 className="font-semibold text-text-primary mb-2">
                  {path.title}
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  {path.description}
                </p>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </Section>
  );
}
