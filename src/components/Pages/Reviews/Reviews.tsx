import { getReviews } from "@/utils/getReviews";
import { FC } from "react";
import Slider from "./Slider";
import s from "./Reviews.module.css";

const Reviews: FC = async () => {
  const reviews = await getReviews();

  if (!reviews) return;

  return (
    <div className={s.Reviews}>
      <h2>Отзывы наших клиентов</h2>
      <Slider reviews={reviews} />
    </div>
  );
};

export default Reviews;
