"use client";

import { useEffect, useRef, useState } from "react";
import { slugify } from "@/app/utils/slugify";

export default function CaseStudySectionNav({ sections }) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState(null);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  if (!sections || sections.length === 0) {
    return null;
  }

  // Filter sections that have titles (skip next-project and others without titles for navigation)
  const navigableSections = sections.filter(
    (section) => section.title && section.type !== "next-project"
  );

  if (navigableSections.length === 0) {
    return null;
  }

  // Setup IntersectionObserver for active section detection
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

    // Observe all navigable sections
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

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
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

  // Handle Escape key
  useEffect(() => {
    function handleEscape(event) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
        buttonRef.current?.focus();
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
      // Get header height for offset
      const header = document.querySelector("header");
      const headerHeight = header ? header.offsetHeight : 0;
      const elementTop = element.getBoundingClientRect().top + window.scrollY;
      const scrollPosition = elementTop - headerHeight - 20; // 20px extra padding

      window.scrollTo({
        top: scrollPosition,
        behavior: "smooth",
      });

      setIsOpen(false);
      // Update URL hash
      window.history.replaceState(null, "", `#${sectionId}`);
    }
  }

  return (
    <>
      {/* Floating Button - Left Side */}
      <button
        ref={buttonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-controls="case-study-sections-menu"
        aria-label="Open case study table of contents"
        className="fixed left-6 sm:left-8 top-20 sm:top-24 inline-flex items-center gap-2 px-3 py-2 rounded-md border border-border bg-surface hover:bg-surface-secondary text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors text-xs sm:text-sm font-medium z-30"
      >
        <svg
          className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
          />
        </svg>
        <span className="hidden sm:inline">Contents</span>
      </button>

      {/* Floating Menu - Compact */}
      {isOpen && (
        <div
          ref={menuRef}
          id="case-study-sections-menu"
          className="fixed left-6 sm:left-8 top-32 sm:top-36 w-56 sm:w-64 max-h-[55vh] bg-surface border border-border rounded-md shadow-lg overflow-hidden z-40 flex flex-col"
        >
          {/* Menu Header */}
          <div className="px-4 py-3 border-b border-border bg-surface-secondary">
            <h3 className="text-xs font-semibold text-text-primary uppercase tracking-wider">
              Contents
            </h3>
          </div>

          {/* Sections List - Compact */}
          <nav className="flex-1 overflow-y-auto">
            <ul className="divide-y divide-border">
              {navigableSections.map((section, index) => {
                const sectionId = slugify(section.title);
                const isActive = activeSection === sectionId;

                // Extract title without numbering for cleaner display
                const displayTitle = section.title.replace(/^\d+\s*[—–-]?\s*/, "");

                return (
                  <li key={sectionId}>
                    <a
                      href={`#${sectionId}`}
                      onClick={(e) => {
                        e.preventDefault();
                        handleSectionClick(sectionId);
                      }}
                      className={`block px-4 py-2 text-xs sm:text-sm transition-colors ${
                        isActive
                          ? "bg-surface-secondary text-text-primary border-l-2 border-accent pl-3"
                          : "text-text-secondary hover:bg-surface-secondary hover:text-text-primary border-l-2 border-transparent"
                      }`}
                    >
                      <span className="text-text-muted text-xs font-medium">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <span className="ml-2">{displayTitle}</span>
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
