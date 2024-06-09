import { FC } from "react";
import s from "./Application.module.css";
import Link from "next/link";

const Application: FC = () => {
  return (
    <div className={s.Application}>
      <h2>Оставьте заяку сегодня</h2>
      <h3>и закрепите за собой скидку в 12%</h3>
      <form className={s.Form}>
        <input type="text" required placeholder="Введите имя" />
        <input type="text" required placeholder="Введите email" />
        <input type="text" required placeholder="+7(999)999-99-99" />
        <button type="submit">Получить прайс</button>
        <p>
          Нажимая на кнопку, вы даете согласие на обработку персональных данных и соглашаетесь с{" "}
          <Link href={"/policy"} target="_blank">
            Политикой конфиденциальности
          </Link>
        </p>
      </form>
    </div>
  );
};

export default Application;
