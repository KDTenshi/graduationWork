import Image from "next/image";
import { FC } from "react";
import s from "../Benefits.module.css";

interface BenefitCardProps {
  title: string;
  body: string;
  img: any;
}

const BenefitCard: FC<BenefitCardProps> = ({ title, body, img }) => {
  return (
    <div className={s.Card}>
      <h3>{title}</h3>
      <p>{body}</p>
      <Image src={img} alt={title} />
    </div>
  );
};

export default BenefitCard;
