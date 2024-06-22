import { FC } from "react";
import s from "./Loading.module.css";

const Loading: FC = () => {
  return (
    <div className={s.Loading}>
      <div></div>
      <h2>Подождите, идёт загрузка</h2>
    </div>
  );
};

export default Loading;
