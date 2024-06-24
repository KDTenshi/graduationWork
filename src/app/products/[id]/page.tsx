import Application from "@/components/Pages/Application/Application";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Product from "@/components/Pages/Product/Product";
import { getProduct } from "@/utils/getProduct";
import { redirect } from "next/navigation";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

const Page: FC<PageProps> = async ({ params }) => {
  const product = await getProduct(params.id);

  if (!product) redirect("/not-found");

  return (
    <main>
      <Product product={product} />
      <Benefits />
      <Application />
    </main>
  );
};

export default Page;
