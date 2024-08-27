import { Dispatch, SetStateAction } from "react";
import NavUrl from "./NavUrl";
import { navLinks } from "@/data/navlinks";

type NavProps = {
  active: number;
};

const Nav = ({ active }: NavProps) => {
  return (
    <nav className="nav hidden xl:block" aria-label="In-page jump links">
      <ul className="mt-14 w-max">
        {navLinks.map((link) => (
          <NavUrl
            key={link.urlNum}
            urlNum={link.urlNum}
            href={link.href}
            title={link.title}
            active={active}
          />
        ))}
      </ul>
    </nav>
  );
};
export default Nav;
