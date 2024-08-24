import { useState } from "react";
import NavUrl from "./NavUrl";

const Nav = () => {
  const [active, setActive] = useState(1);
  return (
    <nav className="nav hidden lg:block" aria-label="In-page jump links">
      <ul className="mt-14 w-max">
        <NavUrl
          href="#about"
          title="About"
          active={active}
          setActive={setActive}
        />
        <NavUrl
          href="#experience"
          title="Experience"
          active={active}
          setActive={setActive}
        />
        <NavUrl
          href="#projects"
          title="Projects"
          active={active}
          setActive={setActive}
        />
      </ul>
    </nav>
  );
};
export default Nav;
