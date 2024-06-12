import { FC } from "react";
import s from "./Category.module.css";
import { getCategory } from "@/utils/getCategory";

interface CategoryProps {
  id: string;
}

const Category: FC<CategoryProps> = async ({ id }) => {
  const category = await getCategory(id);

  if (!category) return;

  return (
    <div className={s.Category}>
      <h1>{id}</h1>
      <h1>{category.title}</h1>
    </div>
  );
};

export default Category;
