import { FC } from "react";
import s from "./Sections.module.css";
import { getSections } from "@/utils/getSections";
import Link from "next/link";

const Sections: FC = async () => {
  const sections = await getSections();

  if (!sections) return;

  return (
    <div className={s.Sections}>
      {sections.map((section) => (
        <Link
          href={`/sections/${section.id}`}
          key={section.id}
          style={{ backgroundImage: `url(/sections/${section.img})` }}
        >
          {section.title}
        </Link>
      ))}
    </div>
  );
};

export default Sections;
