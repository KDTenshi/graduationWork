import SectionBanner from "@/components/Pages/SectionBanner/SectionBanner";
import { getSection } from "@/utils/getSection";
import { FC } from "react";
import { redirect } from "next/navigation";
import Categories from "./../../../components/Pages/Categories/Categories";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Application from "@/components/Pages/Application/Application";
import { Metadata } from "next";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const section = await getSection(params.id);

  if (!section) {
    const metadata: Metadata = {
      title: "Ошибка",
    };

    return metadata;
  }

  const metadata: Metadata = {
    title: section.title,
  };

  return metadata;
}

const Page: FC<PageProps> = async ({ params }) => {
  const section = await getSection(params.id);

  if (!section) redirect("/not-found");

  return (
    <main>
      <SectionBanner section={section} />
      {section.categories && <Categories categories={section.categories} />}
      <Benefits />
      <Application />
    </main>
  );
};

export default Page;
