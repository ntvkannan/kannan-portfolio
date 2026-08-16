"use client";

import { useState } from "react";
import Container from "@/app/components/layout/Container";
import Section from "@/app/components/layout/Section";
import { projectTypeOptions, formspree } from "@/app/data/contact";

export default function ContactForm({ preSelectedProjectType = null }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: preSelectedProjectType || "",
    message: ""
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitError, setSubmitError] = useState("");

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Name must be at least 2 characters";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email address";
    } else if (!isValidEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Please select a project type";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter a message";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    return newErrors;
  };

  const isValidEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
    // Clear error for this field when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: ""
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      // Focus on first invalid field for accessibility
      const fieldOrder = ['name', 'email', 'projectType', 'message'];
      for (const field of fieldOrder) {
        if (validationErrors[field]) {
          const element = document.getElementById(field);
          if (element) {
            element.focus();
            element.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
          break;
        }
      }
      return;
    }

    setIsSubmitting(true);
    setSubmitError("");

    try {
      // Check if Formspree is configured
      if (formspree.status === "PENDING_CONFIGURATION") {
        throw new Error(
          "Form submission is not yet configured. Please try again later or contact directly."
        );
      }

      const response = await fetch(formspree.endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          projectType: formData.projectType,
          message: formData.message
        })
      });

      if (!response.ok) {
        throw new Error("Failed to send message. Please try again.");
      }

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        projectType: preSelectedProjectType || "",
        message: ""
      });
      setErrors({});

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setSubmitError(
        error.message ||
          "Unable to send message. Please try again or email directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Section variant="normal">
      <Container>
        <div className="max-w-2xl mx-auto">
          <div id="contact-form" className="scroll-mt-20">
            <h2 className="text-3xl sm:text-4xl font-semibold text-text-primary mb-8">
              Send a Message
            </h2>

            {submitStatus === "success" && (
              <div
                className="mb-6 p-4 rounded-lg bg-surface-secondary border border-accent text-text-primary"
                role="status"
                aria-live="polite"
              >
                Thanks for reaching out! I'll get back to you soon.
              </div>
            )}

            {submitStatus === "error" && (
              <div
                className="mb-6 p-4 rounded-lg bg-surface-secondary border border-accent text-text-primary"
                role="alert"
                aria-live="polite"
              >
                <p className="font-medium mb-1">Unable to send message</p>
                <p className="text-sm text-text-secondary">{submitError}</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Name <span className="text-accent">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                  placeholder="Your name"
                />
                {errors.name && (
                  <p
                    id="name-error"
                    className="mt-1 text-sm text-accent font-medium"
                  >
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Email <span className="text-accent">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                  placeholder="your@email.com"
                />
                {errors.email && (
                  <p
                    id="email-error"
                    className="mt-1 text-sm text-accent font-medium"
                  >
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="projectType"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Project Type <span className="text-accent">*</span>
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  value={formData.projectType}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.projectType)}
                  aria-describedby={
                    errors.projectType ? "projectType-error" : undefined
                  }
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border bg-surface text-text-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors"
                >
                  <option value="">Select a project type...</option>
                  {projectTypeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p
                    id="projectType-error"
                    className="mt-1 text-sm text-accent font-medium"
                  >
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-primary mb-2"
                >
                  Message <span className="text-accent">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  aria-invalid={Boolean(errors.message)}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  rows={5}
                  className="w-full px-3 py-2.5 sm:px-4 sm:py-3 rounded-lg border border-border bg-surface text-text-primary placeholder:text-text-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors resize-none"
                  placeholder="Tell me about your project..."
                />
                {errors.message && (
                  <p
                    id="message-error"
                    className="mt-1 text-sm text-accent font-medium"
                  >
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full sm:w-auto inline-flex items-center justify-center rounded-button h-12 px-6 bg-accent text-white font-medium text-base hover:bg-accent-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
        </div>
      </Container>
    </Section>
  );
}
