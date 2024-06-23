import Banner from "@/components/Pages/Banner/Banner";
import Benefits from "@/components/Pages/Benefits/Benefits";
import Certificates from "@/components/Pages/Certificates/Certificates";
import Contacts from "@/components/Pages/Contacts/Contacts";
import Map from "@/components/Pages/Map/Map";
import Projects from "@/components/Pages/Projects/Projects";
import Promo from "@/components/Pages/Promo/Promo";
import Reviews from "@/components/Pages/Reviews/Reviews";
import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "О нас",
};

const Page: FC = () => {
  return (
    <main>
      <Banner />
      <Contacts />
      <Promo />
      <Benefits />
      <Certificates />
      <Reviews />
      <Projects />
      <Map />
    </main>
  );
};

export default Page;
