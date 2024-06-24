import Loading from "@/components/Pages/Loading/Loading";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Товары и Услуги",
};

const Page: FC = () => {
  return (
    <main>
      <Loading />
    </main>
  );
};

export default Page;
