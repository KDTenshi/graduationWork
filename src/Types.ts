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
  sectionId: string;
};

export type TCertificate = {
  img: string;
};

export type TProduct = {
  id: string;
  categoryId: string;
  title: string;
  description: string;
  parameters: string[];
  img: string;
  price: number;
};
