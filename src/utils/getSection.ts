import { TCategory, TSection } from "@/Types";

export async function getSection(id: string) {
  try {
    const sectionRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/sections?id=${id}`);

    if (!sectionRes.ok) throw new Error("Something went wrong");

    const sectionParsed = await sectionRes.json();

    const section: TSection = sectionParsed[0];

    const categoriesRes = await fetch(`https://1ae6dad7db0c881d.mokky.dev/categories?sectionId=${section.id}`);

    if (!categoriesRes.ok) throw new Error("Something went wrong");

    const categories: TCategory[] = await categoriesRes.json();

    section.categories = categories;

    return section;
  } catch (e) {
    console.error(e);
  }
}
