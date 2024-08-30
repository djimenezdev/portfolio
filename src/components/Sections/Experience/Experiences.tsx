import { Fragment } from "react";
import { experiences } from "@/data/experiences";
import Experience from "./Experience";
import { ImArrowUpRight2 } from "react-icons/im";
import Link from "next/link";

const Experiences = () => {
  return (
    <>
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-300/35 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-slate-200 xl:sr-only">
          Experience
        </h2>
      </div>
      <div>
        <ol className="group/list">
          {experiences.map((experience, i) => (
            <Fragment key={i}>
              <Experience experience={experience} />
            </Fragment>
          ))}
        </ol>
        <div className="mt-12">
          <Link
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View My Full Resume(opens in new tab)"
            className="inline-flex items-baseline font-bold leading-tight text-gray-700 dark:text-slate-200 hover:text-blue-600 focus-visible:text-blue-600 dark:hover:text-teal-300 dark:focus-visible:text-teal-300  group/link text-base"
          >
            <span>
              View Full{" "}
              <span className="inline-block">
                Resume
                <ImArrowUpRight2
                  className="inline-block mb-2 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                />
              </span>
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};
export default Experiences;
