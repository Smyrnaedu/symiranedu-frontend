"use client";
import React from "react";
import type { PreparationEntry } from "./types/preperationTypes";

interface Props {
  prepationsData: PreparationEntry;
}

const ProgramLayoutPreparation: React.FC<Props> = ({ prepationsData }) => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id.replace("#", ""));
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sectionKeys = Object.keys(prepationsData.sections);

  return (
    <div className="container mx-auto px-4 py-8">
      <h2>{prepationsData.title}</h2>
      <p>{prepationsData.description}</p>
      {prepationsData.sub_desc && <p>{prepationsData.sub_desc}</p>}

      {/* === Sections === */}
      {Object.values(prepationsData.sections).map((section) => (
        <section
          key={section.idTag}
          id={section.idTag.replace("#", "")}
         
        >
          <h3>{section.title}</h3>
          {section.description && <p>{section.description}</p>}
          {section.sub_desc && <p>{section.sub_desc}</p>}
          {section.list && (
            <ul>
              {section.list.map((item, idx) => (
                <li key={idx} className="mb-2">
                  <h5 className="d-inline">{item.title}</h5>
                  {item.description && `: ${item.description}`}
                </li>
              ))}
            </ul>
          )}
        </section>
      ))}

      {prepationsData.sub_desc_alt && <p>{prepationsData.sub_desc_alt}</p>}
    </div>
  );
};

export default ProgramLayoutPreparation;
