import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Certificates from "@/components/Pages/Certificates/Certificates";
import { FC } from "react";

const Page: FC = () => {
  return (
    <main>
      <Banner />
      <Benefits />
      <Certificates />
    </main>
  );
};

export default Page;
