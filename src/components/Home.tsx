"use client";

import { useEffect, useState } from "react";
import { useMouse } from "@uidotdev/usehooks";
import Link from "next/link";

type HomeProps = {
  isMobile: boolean;
};

const Home = ({ isMobile }: HomeProps) => {
  const [darkMode, setDarkMode] = useState(false);
  const [mouse] = useMouse();

  const radial =
    !isMobile && mouse.x > 0 && mouse.y > 0
      ? `radial-gradient(400px at ${mouse.x}px ${
          mouse.y
        }px, rgba(14, 165, 233, ${darkMode ? 0.15 : 0.5}), transparent 90%)`
      : "";
  // sets intial mode based on system settings but will still allow user to change mode
  useEffect(() => {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }, []);

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
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
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-black dark:text-slate-200 sm:text-6xl">
              <Link href="/">Daniel Jimenez</Link>
            </h1>
            <h2 className="mt-2 text-xl font-medium tracking-tight text-slate-200 sm:text-2xl">
              Full-Stack Developer
            </h2>
            <p className="mt-3 text-lg text-slate-300 max-w-xs leading-normal">
              Crafting beautiful and well-built Web applications with passion
            </p>
          </div>
        </header>
      </div>
    </div>
  );
};
export default Home;
