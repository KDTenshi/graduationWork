import { TSection } from "@/Types";
import Image from "next/image";
import { FC } from "react";
import s from "./SectionBanner.module.css";
import Link from "next/link";

interface SectionBannerProps {
  section: TSection;
}

const SectionBanner: FC<SectionBannerProps> = ({ section }) => {
  return (
    <div className={s.SectionBanner}>
      <div className={s.Image}>
        <Image src={`/sections${section.img}`} fill alt={section.title} />
        <h2>{section.description}</h2>
      </div>
      <div className={s.Form}>
        <form>
          <h2>Узнайте цену прямо сейчас</h2>
          <input type="text" required placeholder="Введите имя" />
          <input type="text" required placeholder="Введите email" />
          <input type="text" required placeholder="+7(999)999-99-99" />
          <button type="submit">Узнать цену</button>
          <p>
            Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{" "}
            <Link href={"/policy"} target="_blank">
              Политикой конфиденциальности
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SectionBanner;
