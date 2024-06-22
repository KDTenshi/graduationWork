import { FC } from "react";
import s from "./CategoryTitle.module.css";

interface CategoryTitleProps {
  title: string;
}

const CategoryTitle: FC<CategoryTitleProps> = ({ title }) => {
  return (
    <div className={s.CategoryTitle}>
      <h2>{title}</h2>
    </div>
  );
};

export default CategoryTitle;
