import Benefits from "@/components/Pages/Benefits/Benefits";
import CategoryTitle from "@/components/Pages/CategoryTitle/CategoryTitle";
import Products from "@/components/Pages/Products/Products";
import SectionBanner from "@/components/Pages/SectionBanner/SectionBanner";
import { getCategory } from "@/utils/getCategory";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const category = await getCategory(params.id);

  if (!category) {
    const metadata: Metadata = {
      title: "Ошибка",
    };

    return metadata;
  }

  const metadata: Metadata = {
    title: category.title,
  };

  return metadata;
}

const Page: FC<PageProps> = async ({ params }) => {
  const category = await getCategory(params.id);

  if (!category) redirect("/not-found");

  return (
    <main>
      {category.section && <SectionBanner section={category.section} />}
      <CategoryTitle title={category.title} />
      <Products id={category.id} />
      <Benefits />
    </main>
  );
};

export default Page;
