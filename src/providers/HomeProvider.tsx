"use client";

import { useMemo } from "react";
import { useStore } from "./dataProvider";
import { PiSunBold } from "react-icons/pi";
import { FaRegMoon } from "react-icons/fa6";
import MouseGradient from "@/components/MouseGradient";
import ProfileHeaderContent from "@/components/ProfileHeaderContent";
import Socials from "@/components/Socials/Socials";
import Nav from "@/components/Navigation/Nav";

type HomeProviderProps = {
  isDark: boolean;
  children: React.ReactNode;
  isMobile: boolean;
};

const HomeProvider = ({ children, isDark, isMobile }: HomeProviderProps) => {
  const darkMode = useStore((state) => state.darkMode);
  const setDarkMode = useStore((state) => state.setDarkMode);
  const active = useStore((state) => state.active);

  const darkModeValue = useMemo(() => {
    // use isDark value only if darkMode on client side is null
    if (darkMode === null) {
      return isDark;
    } else {
      // returns client side trigger
      return darkMode;
    }
  }, [darkMode, isDark]);

  return (
    <div
      className={`${
        darkModeValue ? "dark" : ""
      } flex justify-center min-h-screen w-screen bg-gray-200 dark:bg-slate-950 relative`}
    >
      <div
        className="absolute w-12 h-12 max-[425px]:top-0 max-[425px]:right-2 top-3 right-6  sm:top-6 sm:right-10 flex items-center justify-center cursor-pointer"
        onClick={() =>
          !darkModeValue ? setDarkMode(true) : setDarkMode(false)
        }
      >
        {darkModeValue ? (
          <PiSunBold className="text-white text-3xl max-[425px]:text-2xl" />
        ) : (
          <FaRegMoon className="text-black text-3xl max-[425px]:text-2xl" />
        )}
      </div>
      <MouseGradient darkModeValue={darkModeValue} isMobile={isMobile} />
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
        {children}
      </div>
    </div>
  );
};
export default HomeProvider;
