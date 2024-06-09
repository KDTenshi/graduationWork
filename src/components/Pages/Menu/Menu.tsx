import { FC } from "react";
import s from "./Menu.module.css";
import Link from "next/link";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import MailLink from "@/components/UI/MailLink/MailLink";
import { getCategories } from "@/utils/getCategories";

const Menu: FC = async () => {
  const categories = await getCategories();

  if (!categories) return;

  return (
    <div className={s.Menu}>
      <nav className={s.Nav}>
        {categories.map((category) => (
          <Link href={`/categories/${category.id}`} key={category.id} replace>
            {category.title}
          </Link>
        ))}
        <Link href={"/about"} replace>
          О нас
        </Link>
        <MailLink />
        <PhoneLink />
      </nav>
    </div>
  );
};

export default Menu;
