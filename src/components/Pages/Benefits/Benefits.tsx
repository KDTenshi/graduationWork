import { FC } from "react";
import BenefitCard from "./elements/BenefitCard";
import Factory from "/public/icons/factory.svg";
import Delivery from "/public/icons/delivery.svg";
import Star from "/public/icons/star.svg";
import Tools from "/public/icons/tools.svg";
import s from "./Benefits.module.css";

const benefits = [
  {
    title: "Собственные производственные мощности",
    body: "Налаженные производственные процессы позволяют сохранять постоянное качество всех изделий. На всех этапах трудятся опытные специалисты, исключающие появления некондиционных образцов. Для изготовления используется высокотехнологичное оборудование.",
    img: Factory,
  },
  {
    title: "Доставка по России и ближайшему зарубежью",
    body: "Мы  полностью упакуем ваше изделие, чтобы сохранить целостность во время  транспортировки. Возьмём на себя всю нагрузку по организации доставки  оборудования до места размещения. Сохраним гарантию на все материалы в  процессе транспортировки.",
    img: Delivery,
  },
  {
    title: "Альфа-Гарантия",
    body: "В течение всего гарантийного срока мы осуществляем полное обслуживание. Гарантия распространяется на всю продукцию реализуемую нашей компанией. Мы контролируем все этапы производства, доставки и сборки, поэтому полностью отвечаем за качество наших изделий.",
    img: Star,
  },
  {
    title: "Монтаж и сборка в любом регионе России",
    body: "Одновременно с поставкой готового изделия приедут наши сертифицированные специалисты и в кратчайшие сроки произведут монтаж. Мы готовы полностью взять на себя все сложности, связанные с установкой оборудования. После нашего отъезда изделие будет полностью готово к эксплуатации.",
    img: Tools,
  },
];

const Benefits: FC = () => {
  return (
    <div className={s.Benefits}>
      <h2>Мы предлагаем</h2>
      <div className={s.Wrap}>
        {benefits.map((benefit) => (
          <BenefitCard key={benefit.title} {...benefit} />
        ))}
      </div>
    </div>
  );
};

export default Benefits;
