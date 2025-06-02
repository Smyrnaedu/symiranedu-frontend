"use client";

import React, { useEffect, useState } from "react";
import Section from "./section";
import {
  ProgramData,
  ProgramSection,
} from "@/components/pages/academic-program-pages/types/programTypes";

interface ProgramLayoutProps {
  programData: ProgramData;
}

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ programData }) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  // IntersectionObserver ile scroll edilen section'ı yakala
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4, // %40 görünür olunca aktif say
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && id) {
          setActiveSectionId(id);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(programData.sections).forEach((section) => {
      if (section.idTag) {
        const el = document.getElementById(section.idTag);
        if (el) {
          observer.observe(el);
        }
      }
    });

    return () => {
      observer.disconnect();
    };
  }, [programData.sections]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{programData.title}</h2>
      <p className="text-lg mb-8">{programData.description}</p>
      {programData.sub_desc_for_main && (
        <p className="text-lg mb-8">{programData.sub_desc_for_main}</p>
      )}

      {/* Seçilen section varsa sadece onu göster */}
      {activeSectionId
        ? Object.values(programData.sections)
            .filter((section) => section.idTag === activeSectionId)
            .map((section) => (
              <Section
                key={section.idTag}
                section={section as ProgramSection}
                isActive={activeSectionId === section.idTag}
              />
            ))
        : Object.values(programData.sections).map((section) => (
            <Section
              key={section.idTag}
              section={section as ProgramSection}
              isActive={false}
            />
          ))}

      {programData.sub_desc && (
        <div className="mt-8">
          <p className="text-lg">{programData.sub_desc}</p>
        </div>
      )}
    </section>
  );
};

export default ProgramLayout;
