import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Sections from "@/components/Pages/Sections/Sections";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Товары и Услуги",
};

const Page: FC = () => {
  return (
    <main>
      <Banner />
      <Sections />
      <Benefits />
    </main>
  );
};

export default Page;
