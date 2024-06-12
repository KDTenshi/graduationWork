import { FC } from "react";
import s from "./Contacts.module.css";
import Link from "next/link";

const Contacts: FC = () => {
  return (
    <div className={s.Contacts}>
      <div className={s.Links}>
        <p>
          Отдел продаж: <Link href={"tel:+79229451646"}>+7(922)945-16-46</Link>
        </p>
        <p>
          Бухгалтерия: <Link href={"tel:+79229325686"}>+7(922)932-56-86</Link>
        </p>
        <p>
          WhatsApp: <Link href={"tel:+79229063202"}>+7(922)906-32-02</Link>
        </p>
        <p>
          Почта: <Link href={"mailto:sales@alfagroup-sport.ru"}>sales@alfagroup-sport.ru</Link>
        </p>
      </div>
      <div className={s.Socials}>
        <Link href={"https://wa.me/79229063202"}>Написать нам в whatsapp</Link>
        <Link href={"https://vk.com/alfagroup_sport"}>Группа вконтакте</Link>
        <Link href={"https://t.me/Agsport_bot"}>Чат-бот в telegram</Link>
      </div>
    </div>
  );
};

export default Contacts;
