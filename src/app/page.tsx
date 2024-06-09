import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import PriceList from "@/components/Pages/PriceList/PriceList";
import Sections from "@/components/Pages/Sections/Sections";
import { FC } from "react";

const Page: FC = () => {
  return (
    <main>
      <Banner />
      <Sections />
      <Benefits />
      <PriceList />
    </main>
  );
};

export default Page;
