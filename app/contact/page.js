"use client";

import { useState } from "react";
import ContactHero from "@/app/components/contact/ContactHero";
import ContactPaths from "@/app/components/contact/ContactPaths";
import ContactForm from "@/app/components/contact/ContactForm";
import DirectContact from "@/app/components/contact/DirectContact";
import SocialLinks from "@/app/components/contact/SocialLinks";

export default function ContactPage() {
  const [preSelectedProjectType, setPreSelectedProjectType] = useState(null);

  const handlePathSelect = (projectType) => {
    setPreSelectedProjectType(projectType);
  };

  return (
    <>
      <ContactHero />
      <ContactPaths onPathSelect={handlePathSelect} />
      <ContactForm preSelectedProjectType={preSelectedProjectType} />
      <DirectContact />
      <SocialLinks />
    </>
  );
}
