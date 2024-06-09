export type TSection = {
  id: string;
  title: string;
  description: string;
  img: string;
  categories?: TCategory[];
};

export type TCategory = {
  id: string;
  title: string;
  section?: TSection;
  sectionId?: string;
};

export type TCertificate = {
  img: string;
};
