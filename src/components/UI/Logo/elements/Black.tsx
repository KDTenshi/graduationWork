import { FC } from "react";
import s from "../Logo.module.css";
import Logo from "/public/icons/logo_black.svg";
import Image from "next/image";
import Link from "next/link";

interface BlackProps {
  small: boolean;
}

const Black: FC<BlackProps> = ({ small }) => {
  return (
    <Link href={"/"} className={[s.Logo, s.Black].join(" ")}>
      <Image src={Logo} alt="Logo Black" priority />
      {!small && <h1>Альфа Групп</h1>}
    </Link>
  );
};

export default Black;
