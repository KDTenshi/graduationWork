import Menu from "@/components/Pages/Menu/Menu";
import MenuSkeleton from "@/components/Pages/Menu/MenuSkeleton";
import { FC, Suspense } from "react";

const Page: FC = () => {
  return (
    <Suspense fallback={<MenuSkeleton />}>
      <Menu />
    </Suspense>
  );
};

export default Page;
