import { TCategory } from "@/Types";
import { getSection } from "./getSection";

export async function getCategory(id: string) {
  try {
    const categoryRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/categories?id=${id}`);

    if (!categoryRes.ok) throw new Error("Something went wrong");

    const categoryParsed = await categoryRes.json();

    const category: TCategory = categoryParsed[0];

    const section = await getSection(category.sectionId);

    category.section = section;

    return category;
  } catch (e) {
    console.error(`Fetching error: ${e}`);
  }
}
