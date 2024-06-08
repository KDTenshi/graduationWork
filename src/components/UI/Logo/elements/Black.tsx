import { FC } from "react";
import s from "../Logo.module.css";
import Logo from "/public/icons/logo_black.svg";
import Image from "next/image";
import Link from "next/link";

const Black: FC = () => {
  return (
    <Link href={"/"} className={[s.Logo, s.Black].join(" ")}>
      <Image src={Logo} alt="Logo Black" priority />
      <h1>Альфа Групп</h1>
    </Link>
  );
};

export default Black;
