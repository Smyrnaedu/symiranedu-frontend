import React from "react";

import Section from "./section";
import {
  ProgramData,
  ProgramSection,
} from "@/components/pages/academic-program-pages/types/programTypes";

interface ProgramLayoutProps {
  programData: ProgramData;
}

const ProgramLayout: React.FC<ProgramLayoutProps> = ({ programData }) => {
  return (
    <section className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-4">{programData.title}</h2>
      <p className="text-lg mb-8">{programData.description}</p>
      {programData.sub_desc_for_main && (
        <p className="text-lg mb-8">{programData.sub_desc_for_main}</p>
      )}

      {Object.entries(programData.sections).map(([key, section]) => (
        <Section key={key} section={section as ProgramSection} />
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
