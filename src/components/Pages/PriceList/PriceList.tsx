import { FC } from "react";
import s from "./PriceList.module.css";
import Link from "next/link";

const PriceList: FC = () => {
  return (
    <div className={s.PriceList}>
      <h2>Прайс лист на нашу продукцию</h2>
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

export default PriceList;
