import type { Metadata } from "next";
import { Mulish } from "next/font/google";
import { TemplateString } from "next/dist/lib/metadata/types/metadata-types";
import { FC, PropsWithChildren, ReactNode } from "react";
import "@/styles/App.css";
import Header from "@/components/Layout/Header/Header";
import Footer from "@/components/Layout/Footer/Footer";

const mulish = Mulish({ subsets: ["cyrillic", "latin"], weight: ["400", "700", "900"] });

const title: TemplateString = {
  default: "Альфа Групп - Спортивное Оборудование",
  template: "%s | Альфа Групп",
};

const description =
  "Производство, реализация и полная подготовка к эксплуатации Скейтпарков, Хоккейных кортов, Синтетического льда, Резиновых покрытий и Спортивного оборудования.";

export const metadata: Metadata = {
  title,
  description,
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body className={mulish.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
};

export default RootLayout;
