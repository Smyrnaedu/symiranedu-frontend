export interface ExamSection {
  title: string;
  idTag: string;
  description: string;
  sub_desc?: string;
  sub_desc2?: string;
  validity?: string;
  sub_desc3?: string;
  listening?: {
    title: string;
    idTag: string;
    duration?: string;
    description: string;
    list?: { title: string, description?: string }[];
    sub_desc?: string;
  };
  reading?: {
    title: string;
    idTag: string;
    duration?: string;
    description: string;
    sub_desc?: string;
    list?: { title: string, description?: string }[];
    sub_desc2_title?: string;
    sub_desc2?: string;
    sub_desc2_alt?: string;
    sub_desc3_title?: string;
    sub_desc3?: string;
  };
  writing?: {
    title: string;
    idTag: string;
    description: string;
    duration?: string;
    list?: { title: string; description?: string }[];
    sub_desc_title?: string;
    sub_desc?: string;
    sub_desc_alt?: string;
    sub_desc2_title?: string;
    sub_desc2?: string;
    sub_desc2_alt?: string;
  };
  speaking?: {
    title: string;
    idTag: string;
    duration?: string;
    description: string;
    sub_desc?: string;
    list?: { title: string; description?: string }[];
    sub_desc2?: string;
    details?: string;
    list1?: { title: string; description?: string }[];
  };
  exam_types?: {
    title: string;
    idTag: string;
    description: string;
    sub_desc?: string;
    list?: { title: string; description?: string }[];
  };
  speaking_writing?: {
    title: string;
    idTag: string;
    description?: string;
    list?: { title: string; description?: string }[];
    sub_desc?: string;
  };

  
}
export interface ExamData {
  title: string;
  idTag?: string;
  description: string;
  sub_desc?: string;
  sub_desc2?: string;
  sub_desc3?: string;
  sections: Record<string, ExamSection>;
}
export interface ExamDataWithFormat extends ExamData {
  format?: {
    title: string;
    description: string;
    listening?: ExamSection;
    speaking?: ExamSection;
    reading?: ExamSection;
    writing?: ExamSection;
    additional?: ExamSection;
  };
}

export interface ProgramsData {
  ielts: ExamData;
  toefl: ExamData;
  pte: ExamData;
  gmat: ExamData;
  gre: ExamData;
  sat: ExamData;
  ap: ExamData;
  duolingo: ExamData;
}

export interface ExamSection {
  title: string;
  idTag: string;
  description: string;
  sub_desc?: string;
  list?: { title: string; description?: string }[];
}

