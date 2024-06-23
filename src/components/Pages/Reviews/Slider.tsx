"use client";

import { TReview } from "@/Types";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./Reviews.module.css";
import SliderButton from "@/components/UI/SliderButton/SliderButton";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface SliderProps {
  reviews: TReview[];
}

const Slider: FC<SliderProps> = ({ reviews }) => {
  return (
    <Swiper
      className={s.Slider}
      loop
      pagination
      modules={[Pagination]}
      slidesPerView={1}
      breakpoints={{
        750: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
        1400: {
          slidesPerView: 4,
        },
      }}
    >
      <SliderButton className={[s.SliderBtn, s.Prev].join(" ")} direction="prev" />
      <SliderButton className={[s.SliderBtn, s.Next].join(" ")} direction="next" />
      {reviews.map((review) => (
        <SwiperSlide key={review.img} className={s.Slide}>
          <img src={`/reviews${review.img}`} alt="Отзыв" />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
