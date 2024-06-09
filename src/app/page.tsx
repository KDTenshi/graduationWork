import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Sections from "@/components/Pages/Sections/Sections";
import { FC } from "react";

const HomePage: FC = () => {
  return (
    <main>
      <Banner />
      <Sections />
      <Benefits />
    </main>
  );
};

export default HomePage;
