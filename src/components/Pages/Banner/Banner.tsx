import { FC } from "react";
import s from "./Banner.module.css";

const Banner: FC = () => {
  return (
    <div className={s.Banner}>
      <video autoPlay muted loop disablePictureInPicture>
        <source src="/banner.mp4" type="video/mp4" />
      </video>
      <div className={s.Text}>
        <h1>Альфа групп</h1>
        <h2>Спорт должен приносить удовольствие и быть безопасным</h2>
      </div>
    </div>
  );
};

export default Banner;
