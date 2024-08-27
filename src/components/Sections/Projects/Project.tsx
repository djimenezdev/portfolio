import Image, { StaticImageData } from "next/image";
import { ImArrowUpRight2 } from "react-icons/im";

type ProjectProps = {
  href: string;
  ariaLabel: string;
  title: string;
  description: string;
  imageSrc: StaticImageData;
  imageAlt: string;
  technologies?: string[];
};

const Project = ({
  href,
  ariaLabel,
  title,
  description,
  imageSrc,
  imageAlt,
  technologies = [],
}: ProjectProps) => {
  return (
    <li className="mb-12 cursor-pointer">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 xl:hover:!opacity-100 xl:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none xl:-inset-x-6 xl:block xl:group-hover:bg-gray-200 xl:group-hover:shadow-[inset_0_30px_13px_30px_rgba(246, 246, 246, 0.885)] xl:group-hover:drop-shadow-lg dark:xl:group-hover:bg-slate-800/50 dark:xl:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] dark:xl:group-hover:drop-shadow-lg" />
        <div className="z-10 sm:order-2 sm:col-span-5">
          <h3>
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-baseline font-medium leading-tight text-gray-700 hover:text-blue-600 focus-visible:text-blue-600 dark:text-slate-200 dark:hover:text-teal-300 dark:focus-visible:text-teal-300  group/link text-base"
              aria-label={ariaLabel}
            >
              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 xl:block"></span>
              <span>
                {title}
                <span className="inline-block">
                  <ImArrowUpRight2
                    className="inline-block mb-2 h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  />
                </span>
              </span>
            </a>
          </h3>
          <p className="mt-2 text-sm leading-normal text-gray-700 dark:text-slate-400">
            {description}
          </p>
          {technologies.length > 0 && (
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {technologies.map((technology) => (
                <li key={technology} className="mr-1.5 mt-2">
                  <div className="flex items-center rounded-full bg-blue-600/10 dark:bg-teal-400/10 px-3 py-1 text-xs font-bold dark:font-medium leading-5 text-blue-600 dark:text-teal-300">
                    {technology}
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <div className="relative sm:order-1 sm:col-span-3">
          <Image
            className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30"
            src={imageSrc}
            alt={imageAlt}
            quality={50}
          />
        </div>
      </div>
    </li>
  );
};
export default Project;
