import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type NewUrlProps = {
  urlNum: number;
  title: string;
  href: string;
  active: number;
};

const NavUrl = ({ urlNum, title, href, active }: NewUrlProps) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <li>
      <a
        className="group flex items-center py-3"
        href={`${href}`}
        onClick={handleClick}
      >
        <span
          className={cn(
            `nav-indicator mr-4 h-px w-8 bg-gray-600 dark:bg-slate-400 transition-all group-hover:w-16 group-hover:bg-black dark:group-hover:bg-slate-100 group-focus-visible:w-16 group-focus-visible:bg-black dark:group-focus-visible:bg-slate-100 motion-reduce:transition-none ${
              active === urlNum ? " w-16 bg-black dark:bg-slate-100" : ""
            }`
          )}
        ></span>
        <span
          className={cn(
            `nav-text text-xs text-gray-600 dark:text-slate-400 font-bold uppercase tracking-widest group-hover:text-black dark:group-hover:text-slate-100 group-focus-visible:text-black dark:group-focus-visible:text-slate-100 ${
              active === urlNum ? "text-black dark:text-slate-100" : ""
            }`
          )}
        >
          {title}
        </span>
      </a>
    </li>
  );
};
export default NavUrl;
