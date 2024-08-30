import Project from "./Project";
import { projects } from "@/data/projects";

const Projects = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-300/35 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-slate-200 xl:sr-only">
          Projects
        </h2>
      </div>
      <div>
        <ul className="group/list">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </ul>
      </div>
    </>
  );
};
export default Projects;
