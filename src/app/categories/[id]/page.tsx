import Category from "@/components/Pages/Category/Category";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = ({ params }) => {
  return (
    <main>
      <Category id={params.id} />
    </main>
  );
};

export default Page;
