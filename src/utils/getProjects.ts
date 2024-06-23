import { TProject } from "@/Types";

export async function getProjects() {
  try {
    const projectsRes = await fetch("https://1ae6dad7db0c881d.mokky.dev/projects");

    if (!projectsRes.ok) throw new Error("Something went wrong");

    const projects: TProject[] = await projectsRes.json();

    return projects;
  } catch (e) {
    console.error(e);
  }
}
