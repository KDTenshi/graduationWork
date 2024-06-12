import { getSection } from "@/utils/getSection";
import Link from "next/link";
import { FC } from "react";
import s from "./Section.module.css";

interface SectionProps {
  id: string;
}

const Section: FC<SectionProps> = async ({ id }) => {
  const section = await getSection(id);

  if (!section) return;

  return (
    <div className={s.Section}>
      <h1>{section.title}</h1>
      <div>
        {section.categories &&
          section.categories.map((category) => (
            <Link key={category.id} href={`/categories/${category.id}`}>
              {category.title}
            </Link>
          ))}
      </div>
    </div>
  );
};

export default Section;
