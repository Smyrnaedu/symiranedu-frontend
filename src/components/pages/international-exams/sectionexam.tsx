// SectionExam.tsx
import React from "react";
import { ExamSection } from "./types/programTypes";
import "./section.scss";

interface Props {
  section: ExamSection;
}

const renderList = (list?: { title: string; description?: string }[]) => {
  if (!list) return null;
  return (
    <ul>
      {list.map((item, index) => (
        <li key={index}>
          <strong>{item.title}</strong>
          {item.description && <>: {item.description}</>}
        </li>
      ))}
    </ul>
  );
};

type SubSectionType = {
  title: string;
  idTag: string;
  description?: string;
  list?: { title: string; description?: string }[];
  sub_desc?: string;
  duration?: string;
};

const renderSubSection = (data?: SubSectionType) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p className="text-dark" dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {renderList(data.list)}
      {data.sub_desc && <p>{data.sub_desc}</p>}
    </div>
  );
};

const renderReadingSection = (data?: ExamSection["reading"]) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {data.sub_desc && <p>{data.sub_desc}</p>}
      {renderList(data.list)}
      {data.sub_desc2_title && <strong>{data.sub_desc2_title}</strong>}
      {data.sub_desc2 && <p>{data.sub_desc2}</p>}
      {data.sub_desc2_alt && <p>{data.sub_desc2_alt}</p>}
      {data.sub_desc3_title && <strong>{data.sub_desc3_title}</strong>}
      {data.sub_desc3 && <p>{data.sub_desc3}</p>}
    </div>
  );
};

const renderListeningSection = (data?: ExamSection["listening"]) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {renderList(data.list)}
      {data.sub_desc && <p>{data.sub_desc}</p>}
    </div>
  );
};

const renderWritingSection = (data?: ExamSection["writing"]) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {renderList(data.list)}
      {data.sub_desc_title && <strong>{data.sub_desc_title}</strong>}
      {data.sub_desc && <p>{data.sub_desc}</p>}
      {data.sub_desc_alt && <p>{data.sub_desc_alt}</p>}
      {data.sub_desc2_title && <strong>{data.sub_desc2_title}</strong>}
      {data.sub_desc2 && <p>{data.sub_desc2}</p>}
      {data.sub_desc2_alt && <p>{data.sub_desc2_alt}</p>}
    </div>
  );
};

const renderSpeakingSection = (data?: ExamSection["speaking"]) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {data.sub_desc && <p>{data.sub_desc}</p>}
      {renderList(data.list)}
      {data.details && <p>{data.details}</p>}
      {data.list1 && (
        <ul>
          {data.list1.map((item, index) => (
            <li key={index}>
              <strong>{item.title}</strong>
              {item.description && <>: {item.description}</>}
            </li>
          ))}
        </ul>
      )}
      {data.sub_desc2 && <p>{data.sub_desc2}</p>}
    </div>
  );
};

const renderExamProcess = (data?: ExamSection["exam_process"]) => {
  if (!data) return null;
  return (
    <div id={data.idTag.replace("#", "")}>
      <h5>{data.title}</h5>
      {data.duration && (
        <p>
          <strong>Süre:</strong> {data.duration}
        </p>
      )}
      {data.description && (
        <p className="text-dark" dangerouslySetInnerHTML={{ __html: data.description }}></p>
      )}
      {renderList(data.list)}
      {data.sub_desc && <p>{data.sub_desc}</p>}
    </div>
  );
};

const SectionExam: React.FC<Props> = ({ section }) => {
  return (
    <div id={section.idTag.replace("#", "")}>
      <h3>{section.title}</h3>
      {section.description && (
        <p dangerouslySetInnerHTML={{ __html: section.description }}></p>
      )}
      {renderList(section.list)}
      {section.sub_desc && <p>{section.sub_desc}</p>}
      {section.sub_desc2 && <p>{section.sub_desc2}</p>}
      {section.sub_desc3 && <p>{section.sub_desc3}</p>}
      {section.sub_desc4 && <p>{section.sub_desc4}</p>}

      {renderSubSection(section.exam_types)}
      {renderExamProcess(section.exam_process)}
      {renderListeningSection(section.listening)}
      {renderReadingSection(section.reading)}
      {renderWritingSection(section.writing)}
      {renderSpeakingSection(section.speaking)}
      {renderSubSection(section.verbal_reasoning)}
      {renderSubSection(section.quantitative_reasoning)}
      {renderSubSection(section.ir_reasoning)}
      {renderSubSection(section.speaking_writing)}
      {renderSubSection(section.reading_writing)}
      {renderSubSection(section.math)}

      {section.example && (
        <div>
          <h6>{section.example.title}</h6>
          {renderList(section.example.list)}
          {section.example.sub_desc_exam && (
            <p>{section.example.sub_desc_exam}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SectionExam;
