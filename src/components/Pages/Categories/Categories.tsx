import { TCategory } from "@/Types";
import { FC } from "react";
import s from "./Categories.module.css";
import Link from "next/link";

interface CategoriesProps {
  categories: TCategory[];
}

const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={s.Categories}>
      {categories.map((category) => (
        <Link key={category.id} href={`/categories/${category.id}`}>
          {category.title}
        </Link>
      ))}
    </div>
  );
};

export default Categories;
