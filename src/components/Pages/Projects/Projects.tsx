import { getProjects } from "@/utils/getProjects";
import { FC } from "react";
import s from "./Projects.module.css";
import Slider from "./Slider";

const Projects: FC = async () => {
  const projects = await getProjects();

  if (!projects) return;

  return (
    <div className={s.Projects}>
      <h2>Наши проекты</h2>
      <Slider projects={projects} />
    </div>
  );
};

export default Projects;
