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
  vendorCode: string;
  categoryId: string;
  title: string;
  description: string;
  parameters: string[];
  img: string;
  price: number;
};

export type TProject = {
  id: string;
  name: string;
  place: string;
  video: string;
  preview: string;
};

export type TReview = {
  img: string;
};
