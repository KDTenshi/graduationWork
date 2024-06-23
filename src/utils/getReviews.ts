import { TReview } from "@/Types";

export async function getReviews() {
  try {
    const reviewsRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/reviews");

    if (!reviewsRes.ok) throw new Error("Something went wrong");

    const reviews: TReview[] = await reviewsRes.json();

    return reviews;
  } catch (e) {
    console.error(e);
  }
}
