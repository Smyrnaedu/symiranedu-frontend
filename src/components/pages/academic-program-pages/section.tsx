import React from "react";
import CountryCard from "./country-card";
import AdvantageCard from "./advantages-card";
import ListItem from "./list-item";
import { ProgramSection } from "@/components/pages/academic-program-pages/types/programTypes";
import ListItemForUni from "./list-item-for-uni";

interface SectionProps {
  section: ProgramSection;
  isActive: boolean;
}

const Section: React.FC<SectionProps> = ({ section, isActive }) => {
  return (
    <section
      className={`py-8 ${isActive ? "bg-gray-100" : ""}`}
      id={(section.idTag ?? "").replace("#", "")}
    >
      <h3 className="text-2xl font-semibold mb-4">{section.title}</h3>
      {section.description && <p className="mb-4">{section.description}</p>}

      {section.list &&
        (section.list.some((item) => item.uni1 || item.uni2 || item.uni3) ? (
          <ListItemForUni list={section.list} />
        ) : (
          <ol className="space-y-2 mb-4">
            {section.list.map((item, index) => (
              <ListItem
                key={index}
                item={{ ...item, title: item.title || "" }}
              />
            ))}
          </ol>
        ))}

      {section.sub_desc && <p className="mb-4">{section.sub_desc}</p>}

      {section.abroad_edu_general && (
        <div className="mb-4">
          <strong>{section.abroad_edu_general.title}</strong>:{" "}
          {section.abroad_edu_general.description}
          {section.abroad_edu_general.sub_desc && (
            <p className="mt-2">{section.abroad_edu_general.sub_desc}</p>
          )}
        </div>
      )}

      {section.abroad_edu_app_date &&
        Array.isArray(section.abroad_edu_app_date) && (
          <div className="mb-4">
            {section.abroad_edu_app_date.map((item, idx) => (
              <div key={idx}>
                <strong>{item.title}</strong>: {item.description}
              </div>
            ))}
          </div>
        )}

      {section.countries && (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
          {section.countries.map((country, index) => (
            <CountryCard key={index} country={country} />
          ))}
        </div>
      )}

      {section.abroad_edu_adv_list && (
        <div className="grid md:grid-cols-2 gap-4 mb-4">
          {section.abroad_edu_adv_list.map((advantage, index) => (
            <AdvantageCard key={index} advantage={advantage} />
          ))}
        </div>
      )}
    </section>
  );
};

export default Section;
