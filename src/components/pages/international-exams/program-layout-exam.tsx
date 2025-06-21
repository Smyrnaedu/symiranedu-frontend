"use client";

import React, { useEffect, useState } from "react";
import { ExamData } from "./types/programTypes";
import SectionExam from "./sectionexam";

interface ProgramLayoutExamProps {
  examData: ExamData;
}

const ProgramLayoutExam: React.FC<ProgramLayoutExamProps> = ({ examData }) => {
  const [activeSectionId, setActiveSectionId] = useState<string | null>(null);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.4,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        const id = entry.target.getAttribute("id");
        if (entry.isIntersecting && id) {
          setActiveSectionId(`#${id}`);
          window.history.replaceState(null, "", `#${id}`);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    Object.values(examData.sections).forEach((section) => {
      const el = document.getElementById(section.idTag.replace("#", ""));
      if (el) observer.observe(el);
    });

    return () => {
      observer.disconnect();
    };
  }, [examData.sections]);

  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">{examData.title}</h2>
      <p className="text-lg mb-4">{examData.description}</p>

      {examData.sub_desc && <p className="mb-2">{examData.sub_desc}</p>}
      {examData.sub_desc2 && <p className="mb-2">{examData.sub_desc2}</p>}

      {Object.entries(examData.sections).map(([key, section]) => (
        <SectionExam
          key={`${section.idTag}-${key}`}
          section={section}
          isActive={activeSectionId === section.idTag}
        />
      ))}
      {examData.sub_desc_pte_2 && (
        <p className="mb-2">{examData.sub_desc_pte_2}</p>
      )}
      {examData.sub_desc3 && <p className="mb-2">{examData.sub_desc3}</p>}
      {examData.sub_desc4 && <p className="mb-6">{examData.sub_desc4}</p>}
    </section>
  );
};

export default ProgramLayoutExam;
