"use client";

import { useEffect, useMemo, useState } from "react";
import { useMouse } from "@uidotdev/usehooks";
import { PiSunBold } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa";
import ProfileHeaderContent from "./ProfileHeaderContent";
import Nav from "./Navigation/Nav";
import Socials from "./Socials/Socials";
import About from "./Sections/About";
import Experiences from "./Sections/Experience/Experiences";
import Projects from "./Sections/Projects/Projects";
import Contact from "./Sections/Contact";
import Footer from "./Footer";

type HomeProps = {
  isMobile: boolean;
  isDark: boolean;
};

const Home = ({ isMobile, isDark }: HomeProps) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
  const [active, setActive] = useState<number>(1);
  const [mouse] = useMouse();

  const darkModeValue: boolean = useMemo(() => {
    // use isDark value only if darkMode on client side is null
    if (darkMode === null) {
      return isDark;
    } else {
      // returns client side trigger
      return darkMode;
    }
  }, [darkMode, isDark]);

  // combined with mouse coordinates, made gradient dynamically follow mouse cursor
  const radial =
    !isMobile && mouse.x > 0 && mouse.y > 0
      ? `radial-gradient(500px at ${mouse.x}px ${mouse.y}px, ${
          darkModeValue ? "rgba(14, 165, 233,0.16)" : "rgba(37, 99, 235, 0.1)"
        }, transparent 70%)`
      : "";

  return (
    <div
      className={`${
        darkModeValue ? "dark" : ""
      } flex justify-center min-h-screen w-screen bg-gray-200 dark:bg-slate-950 relative`}
    >
      <div
        className="absolute w-12 h-12 max-[425px]:top-0 max-[425px]:right-2 top-3 right-6  sm:top-6 sm:right-10 flex items-center justify-center cursor-pointer"
        onClick={() => setDarkMode((prev) => !prev)}
      >
        {darkModeValue ? (
          <PiSunBold className="text-white text-3xl max-[425px]:text-2xl" />
        ) : (
          <FaRegMoon className="text-black text-3xl max-[425px]:text-2xl" />
        )}
      </div>
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: radial,
        }}
      />

      <div className="xl:flex xl:justify-between xl:gap-14 min-h-screen w-full max-w-[1350px] px-6 py-12 md:px-12 md:py-20 xl:px-24 xl:py-0">
        <header
          id="header"
          className="xl:sticky xl:top-0 xl:flex xl:max-h-screen xl:w-1/2 xl:flex-col xl:justify-between xl:py-24"
        >
          <div>
            <ProfileHeaderContent />
            <Nav active={active} />
          </div>
          <Socials />
        </header>
        <main id="content" className="pt-24 xl:w-1/2 xl:py-24">
          <About setActive={setActive} />
          <Experiences setActive={setActive} />
          <Projects setActive={setActive} />
          <Contact setActive={setActive} />
          <Footer setActive={setActive} />
        </main>
      </div>
    </div>
  );
};
export default Home;
