import { FC } from "react";
import s from "./Promo.module.css";

const Promo: FC = () => {
  return (
    <div className={s.Promo}>
      <h2>Наше промо видео</h2>
      <div className={s.Video}>
        <iframe
          src="https://www.youtube.com/embed/Lx_1R5Tm2Oo"
          title="19 мая 2022 г."
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Promo;
