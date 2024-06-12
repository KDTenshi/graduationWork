import Section from "@/components/Pages/Section/Section";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <main>
      <Section id={params.id} />
    </main>
  );
};

export default Page;
