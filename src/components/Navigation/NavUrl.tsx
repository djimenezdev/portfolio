import { Dispatch, SetStateAction } from "react";

type NewUrlProps = {
  title: string;
  href: string;
  active: number;
  setActive: Dispatch<SetStateAction<number>>;
};

const NavUrl = ({ title, href, active, setActive }: NewUrlProps) => {
  return (
    <li>
      <a className="group flex items-center py-3 active" href={`${href}`}>
        <span className="nav-indicator mr-4 h-px w-8 bg-slate-500 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none"></span>
        <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
          {title}
        </span>
      </a>
    </li>
  );
};
export default NavUrl;
