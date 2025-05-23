export interface ProgramItem {
  title: string;
  description?: string;
  subdescription?: string;
}

export interface ProgramSection {
  title: string;
  description: string;
  sub_desc_for_main?: string;
  sub_desc?: string;
  abroad_edu_general?: { title: string; description: string; sub_desc: string };
  abroad_edu_adv_list?: { title: string; description: string }[];
  countries?: { name: string; description: string }[];
  list?: {
    title?: string;
    description?: string;
    uni1?: string;
    uni2?: string;
    uni3?: string;
  }[];
  abroad_edu_app_date?: { title: string; description: string }[];
}
export interface ProgramData {
  title: string;
  description: string;
  sub_desc_for_main?: string;
  sub_desc?: string;
  sections: Record<string, any>;
}

export interface ProgramsData {
  highSchool: ProgramData;
  undergraduate: ProgramData;
  master: ProgramData;
  doctorate: ProgramData;
  onlineUniversity: ProgramData;
  exchange: ProgramData;
  ivyLeague: ProgramData;
}
