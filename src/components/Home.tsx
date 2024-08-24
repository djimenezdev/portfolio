"use client";

import { useEffect, useMemo, useState } from "react";
import { useMouse } from "@uidotdev/usehooks";
import ProfileHeaderContent from "./ProfileHeaderContent";
import Nav from "./Navigation/Nav";
import Socials from "./Socials/Socials";

type HomeProps = {
  isMobile: boolean;
  isDark: boolean;
};

const Home = ({ isMobile, isDark }: HomeProps) => {
  const [darkMode, setDarkMode] = useState<boolean | null>(null);
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
      ? `radial-gradient(400px at ${mouse.x}px ${
          mouse.y
        }px, rgba(14, 165, 233, ${
          darkModeValue ? 0.11 : 0.5
        }), transparent 70%)`
      : "";

  // sets intial mode based on system settings but will still allow user to change mode
  /* useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []); */

  return (
    <div
      className={`${
        darkModeValue ? "dark" : ""
      } flex justify-center h-screen w-screen bg-gray-200 dark:bg-slate-950 relative`}
    >
      <div
        className="pointer-events-none absolute inset-0 z-30 transition duration-300"
        style={{
          background: radial,
        }}
      />

      <div className="lg:flex lg:justify-between lg:gap-4 min-h-screen w-full max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
          <div
            onClick={() => {
              setDarkMode((prev) => (prev === null ? !isDark : !prev));
            }}
          >
            <ProfileHeaderContent />
            <Nav />
          </div>
          <Socials isDark={darkModeValue} />
        </header>
      </div>
    </div>
  );
};
export default Home;
