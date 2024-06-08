import { TCategory, TSection } from "@/Types";

export async function getSections() {
  try {
    const sectionsRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/sections");
    const categoriesRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/categories");

    if (!sectionsRes.ok || !categoriesRes.ok) throw new Error("Something went wrong");

    const sections: TSection[] = await sectionsRes.json();
    const categories: TCategory[] = await categoriesRes.json();

    const sectionsWithCategories: TSection[] = sections.map((section) => ({
      ...section,
      categories: categories.filter((category) => category.sectionId === section.id),
    }));

    return sectionsWithCategories;
  } catch (e) {
    console.error(`Fetching error: ${e}`);
  }
}
