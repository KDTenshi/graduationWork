import { FC } from "react";
import s from "./NavBar.module.css";

const NavBarSkeleton: FC = () => {
  return (
    <nav className={s.NavBar}>
      <div className={s.Loader}></div>
    </nav>
  );
};

export default NavBarSkeleton;
