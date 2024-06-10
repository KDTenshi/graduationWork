import { FC } from "react";
import s from "./Footer.module.css";
import Logo from "@/components/UI/Logo/Logo";
import { getSections } from "@/utils/getSections";
import Link from "next/link";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import MailLink from "@/components/UI/MailLink/MailLink";

const Footer: FC = async () => {
  const sections = await getSections();

  if (!sections) return;

  return (
    <footer className={s.Footer}>
      <div className={s.Wrap}>
        <div className={s.Logo}>
          <Logo color="white" small />
          <div className={s.Link}>
            <PhoneLink />
          </div>
          <div className={s.Link}>
            <MailLink />
          </div>
        </div>
        <div className={s.Links}>
          {sections.map((section) => (
            <div key={section.id} className={s.Link}>
              <Link href={`/sections/${section.id}`}>{section.title}</Link>
            </div>
          ))}
        </div>
        <div className={s.Info}>
          <p>ООО &quot;АЛЬФА-ГРУПП&quot;</p>
          <p>610 035</p>
          <p>г. Киров, ул Потребкооперации, 17а</p>
          <p>Офис 202</p>
          <p>ОГРН: 1204300001982</p>
        </div>
      </div>
      <div className={s.Policy}>
        <Link href={"/policy"} target="_blank">
          Политика конфиденциальности
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
