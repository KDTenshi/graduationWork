import { TCategory } from "@/Types";

export async function getCategories() {
  try {
    const categoriesRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/categories");

    if (!categoriesRes.ok) throw new Error("Something went wrong");

    const categories: TCategory[] = await categoriesRes.json();

    return categories;
  } catch (e) {
    console.error(`Fetch error: ${e}`);
  }
}
