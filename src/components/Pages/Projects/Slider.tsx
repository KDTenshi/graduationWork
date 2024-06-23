"use client";

import { TProject } from "@/Types";
import { FC } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SliderButton from "@/components/UI/SliderButton/SliderButton";
import s from "./Projects.module.css";
import Link from "next/link";
import Image from "next/image";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

interface SliderProps {
  projects: TProject[];
}

const Slider: FC<SliderProps> = ({ projects }) => {
  return (
    <Swiper
      className={s.Slider}
      pagination
      modules={[Pagination]}
      loop
      slidesPerView={1}
      breakpoints={{
        750: {
          slidesPerView: 2,
        },
        1200: {
          slidesPerView: 3,
        },
      }}
    >
      <SliderButton className={[s.SliderButton, s.Prev].join(" ")} direction="prev" />
      <SliderButton className={[s.SliderButton, s.Next].join(" ")} direction="next" />
      {projects.map((project) => (
        <SwiperSlide key={project.id} className={s.Slide}>
          <Link href={project.video} target="_blank" className={s.Project}>
            <Image src={`/projects${project.preview}`} alt={project.name} fill />
            <h3>{project.name}</h3>
            <p>{project.place}</p>
          </Link>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
