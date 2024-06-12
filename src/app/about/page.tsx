import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Certificates from "@/components/Pages/Certificates/Certificates";
import Contacts from "@/components/Pages/Contacts/Contacts";
import Map from "@/components/Pages/Map/Map";
import Promo from "@/components/Pages/Promo/Promo";
import { FC } from "react";

const Page: FC = () => {
  return (
    <main>
      <Banner />
      <Contacts />
      <Promo />
      <Benefits />
      <Certificates />
      <Map />
    </main>
  );
};

export default Page;
