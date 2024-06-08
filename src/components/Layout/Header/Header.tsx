import { FC, Suspense } from "react";
import s from "./Header.module.css";
import Logo from "@/components/UI/Logo/Logo";
import Link from "next/link";
import Image from "next/image";
import Burger from "/public/icons/burger.svg";
import PhoneLink from "@/components/UI/PhoneLink/PhoneLink";
import MailLink from "@/components/UI/MailLink/MailLink";
import { getSections } from "@/utils/getSections";
import NavBar from "../NavBar/NavBar";
import NavBarSkeleton from "../NavBar/NavBarSkeleton";

const Header: FC = () => {
  return (
    <header className={s.Header}>
      <div className={s.Wrap}>
        <Logo />
        <Link href={"/menu"} className={s.MenuBtn}>
          <Image src={Burger} alt="Burger" priority />
        </Link>
        <div className={s.Contacts}>
          <PhoneLink />
          <MailLink />
        </div>
      </div>
      <Suspense fallback={<NavBarSkeleton />}>
        <NavBar />
      </Suspense>
    </header>
  );
};

export default Header;
