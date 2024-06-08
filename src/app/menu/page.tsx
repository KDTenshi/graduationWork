import Menu from "@/components/Pages/Menu/Menu";
import MenuSkeleton from "@/components/Pages/Menu/MenuSkeleton";
import { FC, Suspense } from "react";

const MenuPage: FC = () => {
  return (
    <main>
      <Suspense fallback={<MenuSkeleton />}>
        <Menu />
      </Suspense>
    </main>
  );
};

export default MenuPage;
