"use client";

import { useState } from "react";

const CATEGORIES = [
  { id: "all", label: "All", value: null },
  { id: "professional", label: "Professional UX/UI", value: "professional" },
  { id: "client", label: "Client & Brand", value: "client" },
  { id: "product", label: "Product & Development", value: "product" }
];

export default function WorkFilter({ onFilterChange }) {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleFilter = (categoryId, categoryValue) => {
    setActiveCategory(categoryId);
    onFilterChange(categoryValue);
  };

  return (
    <div className="flex flex-wrap gap-3 justify-center sm:justify-start">
      {CATEGORIES.map(category => (
        <button
          key={category.id}
          onClick={() => handleFilter(category.id, category.value)}
          className={`inline-flex items-center justify-center rounded-button h-11 px-5 font-medium text-sm transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent ${
            activeCategory === category.id
              ? "bg-accent text-white hover:bg-accent-hover"
              : "bg-transparent border border-border-strong text-text-primary hover:bg-surface-secondary"
          }`}
          aria-pressed={activeCategory === category.id}
        >
          {category.label}
        </button>
      ))}
    </div>
  );
}
