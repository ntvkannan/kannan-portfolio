"use client";

import { useState, useEffect } from "react";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import { contactPaths } from "@/app/data/contact";

export default function ContactPaths({ onPathSelect }) {
  const [selectedPath, setSelectedPath] = useState(null);
  const [shouldScroll, setShouldScroll] = useState(false);

  useEffect(() => {
    if (shouldScroll) {
      const formElement = document.getElementById("contact-form");
      if (formElement) {
        formElement.scrollIntoView({ behavior: "smooth", block: "start" });
      }
      setShouldScroll(false);
    }
  }, [shouldScroll]);

  const handlePathClick = (path) => {
    setSelectedPath(path.id);
    if (onPathSelect) {
      onPathSelect(path.projectType);
    }
    setShouldScroll(true);
  };

  return (
    <Section variant="normal">
      <Container size="wide">
        <div className="max-w-4xl mx-auto">
          <p className="text-center text-text-body mb-8">
            What's your project about?
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
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
                <p className="text-sm text-text-body leading-relaxed">
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
