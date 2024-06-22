import Menu from "@/components/Pages/Menu/Menu";
import MenuSkeleton from "@/components/Pages/Menu/MenuSkeleton";
import { Metadata } from "next";
import { FC, Suspense } from "react";

export const metadata: Metadata = {
  title: "Товары и Услуги",
};

const Page: FC = () => {
  return (
    <main>
      <Suspense fallback={<MenuSkeleton />}>
        <Menu />
      </Suspense>
    </main>
  );
};

export default Page;
