import Application from "@/components/Pages/Application/Application";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Product from "@/components/Pages/Product/Product";
import { getProduct } from "@/utils/getProduct";
import { Metadata } from "next";
import { redirect } from "next/navigation";
import { FC } from "react";

interface PageProps {
  params: {
    id: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = await getProduct(params.id);

  if (!product) {
    const metadata: Metadata = {
      title: "Ошибка",
    };

    return metadata;
  }

  const metadata: Metadata = {
    title: product.title,
  };

  return metadata;
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
