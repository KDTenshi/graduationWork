import { TCategory } from "@/Types";

export async function getCategory(id: string) {
  try {
    const categoryRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/categories?id=${id}`);

    if (!categoryRes.ok) throw new Error("Something went wrong");

    const category = await categoryRes.json();

    console.log(category);

    return category[0] as TCategory;
  } catch (e) {
    console.error(`Fetching error: ${e}`);
  }
}
