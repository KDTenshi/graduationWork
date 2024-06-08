import { FC } from "react";
import s from "./Menu.module.css";

const MenuSkeleton: FC = () => {
  return (
    <div className={s.Menu}>
      <div className={s.Loader}>
        <h2>Идет загрузка...</h2>
        <div></div>
      </div>
    </div>
  );
};

export default MenuSkeleton;
