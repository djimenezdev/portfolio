import { ImArrowUpRight2 } from "react-icons/im";

type ExperienceProps = {
  experience: {
    ariaLabel: string;
    label: string;
    companyURL: string;
    urlAriaLabel: string;
    role: string;
    company: string;
    jobDescription: string;
    technologies: string[];
  };
};

const Experience = ({ experience }: ExperienceProps) => {
  return (
    <li className="mb-12 cursor-pointer">
      <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 xl:hover:!opacity-100 xl:group-hover/list:opacity-50 cursor">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none xl:-inset-x-6 xl:block xl:group-hover:bg-gray-200 xl:group-hover:shadow-[inset_0_30px_13px_30px_rgba(246, 246, 246, 0.885)] xl:group-hover:drop-shadow-lg dark:xl:group-hover:bg-slate-800/50 dark:xl:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:xl:group-hover:drop-shadow-lg" />
        <header
          className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-gray-700 dark:text-slate-500 sm:col-span-2"
          aria-label={experience.ariaLabel}
        >
          {experience.label}
        </header>
        <div className="z-10 sm:col-span-6">
          <h3 className="font-medium leading-snug">
            <div>
              <a
                href={experience.companyURL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={experience.urlAriaLabel}
                className="inline-flex items-baseline font-medium leading-tight text-gray-700 dark:text-slate-200 hover:text-blue-600 focus-visible:text-blue-600 dark:hover:text-teal-300 dark:focus-visible:text-teal-300  group/link text-base"
              >
                <span className="absolute -inset-x-4 -inset-y-2.5 rounded md:-inset-x-6 md:-inset-y-4"></span>
                <span>
                  {experience.role} ·{" "}
                  <span className="inline-block">
                    {experience.company}
                    <ImArrowUpRight2
                      className="inline-block mb-2 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                      aria-hidden="true"
                    />
                  </span>
                </span>
              </a>
            </div>
          </h3>
          <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-slate-400">
            {experience.jobDescription}
          </p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {experience.technologies.map((technology, i) => (
              <li className="mr-1.5 mt-2" key={i}>
                <div className="flex items-center rounded-full bg-blue-600/10 dark:bg-teal-400/10 px-3 py-1 text-xs font-bold dark:font-medium leading-5 text-blue-600 dark:text-teal-300">
                  {technology}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
};
export default Experience;
