import { getSections } from "@/utils/getSections";
import { FC } from "react";
import s from "./NavBar.module.css";
import Link from "next/link";

const NavBar: FC = async () => {
  const sections = await getSections();

  if (!sections) return;

  return (
    <nav className={s.NavBar}>
      {sections.map((section) => (
        <div key={section.id} className={s.Item}>
          <p>{section.title}</p>
          {section.categories && (
            <div className={s.SubMenu}>
              {section.categories.map((category) => (
                <Link key={category.id} href={`/categories/${category.id}`}>
                  {category.title}
                </Link>
              ))}
            </div>
          )}
        </div>
      ))}
    </nav>
  );
};

export default NavBar;
