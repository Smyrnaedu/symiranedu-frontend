export interface PreparationListItem {
  title: string;
  description?: string;
  alt_list?: { title: string }[];
}

export interface PreparationSection {
  title: string;
  idTag: string;
  description?: string;
  sub_desc?: string;
  list?: PreparationListItem[];
}

export interface PreparationSections {
  [key: string]: PreparationSection;
}

export interface PreparationEntry {
  title: string;
  idTag: string;
  description: string;
  sub_desc?: string;
  sub_desc_alt?: string;
  sections: PreparationSections;
}

export interface PreparationData {
  [key: string]: PreparationEntry;
}
