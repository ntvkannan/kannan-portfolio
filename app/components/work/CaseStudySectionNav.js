"use client";

import { useEffect, useRef, useState } from "react";
import { slugify } from "@/app/utils/slugify";

export default function CaseStudySectionNav({ sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const drawerRef = useRef(null);

  if (!sections || sections.length === 0) {
    return null;
  }

  const navigableSections = sections.filter(
    (section) => section.title && section.type !== "next-project"
  );

  if (navigableSections.length === 0) {
    return null;
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        let currentActive = null;
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            currentActive = entry.target.id;
          }
        });
        if (currentActive) {
          setActiveSection(currentActive);
        }
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    );

    navigableSections.forEach((section) => {
      const id = slugify(section.title);
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [navigableSections]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        drawerRef.current &&
        !drawerRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [isOpen]);

  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("keydown", handleEscape);
      };
    }
  }, [isOpen]);

  function handleSectionClick(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementTop - headerHeight - 20;

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  }

  return (
    <>
      {/* CLOSED STATE: Only hamburger button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          aria-expanded="false"
          aria-controls="case-study-sections-drawer"
          aria-label="Open table of contents"
          className="fixed left-0 top-1/2 -translate-y-1/2 w-12 h-12 inline-flex items-center justify-center bg-surface border-r border-border text-text-primary hover:bg-surface-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors z-40"
          style={{
            boxShadow: "1px 0 3px rgba(0, 0, 0, 0.08)"
          }}
        >
          <svg
            className="w-5 h-5 flex-shrink-0"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      )}

      {/* OPEN STATE: Only drawer with internal close button */}
      {isOpen && (
        <div
          ref={drawerRef}
          id="case-study-sections-drawer"
          className="fixed left-0 top-1/2 -translate-y-1/2 w-72 md:w-80 max-h-[75vh] bg-surface border-r border-border overflow-hidden z-40 flex flex-col"
          style={{
            maxWidth: "calc(min(90vw, 300px))",
          }}
        >
          {/* Drawer Header */}
          <div className="px-4 py-2 border-b border-border bg-surface-secondary flex items-center justify-between">
            <h3 className="text-[18px] font-medium text-text-primary uppercase tracking-wide leading-tight flex-1">
              Contents
            </h3>
            <button
              onClick={() => setIsOpen(false)}
              aria-label="Close table of contents"
              className="flex-shrink-0 p-1 ml-3 text-text-primary hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          {/* Sections List */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-border">
              {navigableSections.map((section, index) => {
                const sectionId = slugify(section.title);
                const isActive = activeSection === sectionId;
                const displayTitle = section.title.replace(/^\d+\s*[—–-]?\s*/, "");

                return (
                  <li key={sectionId}>
                    <a
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSectionClick(sectionId);
                      }}
                      className={`block px-4 py-1.5 text-sm transition-colors ${
                        isActive
                          ? "bg-surface-secondary text-text-primary border-l-2 border-accent"
                          : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary border-l-2 border-transparent"
                      }`}
                    >
                      <span className="text-text-muted text-xs font-semibold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="ml-2.5 text-sm">{displayTitle}</span>
                    </a>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      )}
    </>
  );
}
