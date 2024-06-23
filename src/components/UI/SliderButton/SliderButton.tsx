import { FC } from "react";
import { useSwiper } from "swiper/react";
import Left from "/public/icons/slider_left.svg";
import Right from "/public/icons/slider_right.svg";
import Image from "next/image";

interface SliderButtonProps {
  direction: "next" | "prev";
  className: string;
}

const SliderButton: FC<SliderButtonProps> = ({ direction, className }) => {
  const swiper = useSwiper();

  if (direction === "next") {
    return (
      <button onClick={() => swiper.slideNext()} className={className}>
        <Image src={Right} alt="Next" />
      </button>
    );
  }

  return (
    <button onClick={() => swiper.slidePrev()} className={className}>
      <Image src={Left} alt="Prev" />
    </button>
  );
};

export default SliderButton;
