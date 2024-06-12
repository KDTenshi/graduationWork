import { FC } from "react";
import s from "./NotFound.module.css";

const NotFound: FC = () => {
  return (
    <div className={s.NotFound}>
      <h2>Запрашиваемая вами страница не была найдена</h2>
    </div>
  );
};

export default NotFound;
