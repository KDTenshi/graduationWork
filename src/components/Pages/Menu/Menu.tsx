import { FC } from "react";
import s from "./Menu.module.css";
import { getSections } from "@/utils/getSections";
import { redirect } from "next/navigation";
import Link from "next/link";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import MailLink from "@/components/UI/MailLink/MailLink";

const Menu: FC = async () => {
  const sections = await getSections();

  if (!sections) redirect("/");

  return (
    <div className={s.Menu}>
      <nav className={s.Nav}>
        {sections.map((section) => (
          <Link href={`/sections/${section.id}`} key={section.id}>
            {section.title}
          </Link>
        ))}
        <MailLink />
        <PhoneLink />
      </nav>
    </div>
  );
};

export default Menu;
