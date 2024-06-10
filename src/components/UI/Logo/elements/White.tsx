import { FC } from "react";
import s from "../Logo.module.css";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/icons/logo_white.svg";

interface WhiteProps {
  small: boolean;
}

const White: FC<WhiteProps> = ({ small }) => {
  return (
    <Link href={"/"} className={[s.Logo, s.White].join(" ")}>
      <Image src={Logo} alt="Logo Black" priority />
      {!small && <h1>Альфа Групп</h1>}
    </Link>
  );
};

export default White;
