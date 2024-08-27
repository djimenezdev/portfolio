import { useIntersectionObserver } from "@uidotdev/usehooks";
import Anchor from "../Anchor";
import { Dispatch, SetStateAction, useEffect } from "react";

type AboutProps = {
  setActive: Dispatch<SetStateAction<number>>;
};

const About = ({ setActive }: AboutProps) => {
  const [ref, entry] = useIntersectionObserver({
    threshold: 1,
    root: null,
    rootMargin: "0px",
  });

  useEffect(() => {
    if (entry?.isIntersecting) {
      setActive((prev) => (prev !== 1 ? 1 : prev));
    }
  }, [entry]);

  return (
    <section
      id="about"
      ref={ref}
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
      aria-label="About Section"
    >
      {/* accessibility element */}
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-300/35 dark:bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 xl:sr-only xl:relative xl:top-auto xl:mx-auto xl:w-full xl:px-0 xl:py-0 xl:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest text-gray-700 dark:text-slate-200 xl:sr-only">
          About
        </h2>
      </div>
      {/* main content */}
      <div>
        <p className="mb-4 text-base text-gray-700 dark:text-slate-400 leading-7">
          My journey into web development began with a YouTube ad for a coding
          bootcamp called{" "}
          <Anchor
            href="https://www.cleverprogrammer.com/pwj"
            text="Profit with Javascript"
            ariaLabel="Profit with Javascript (opens in new tab)"
          />
          . The experience led me to completing the course and eventually
          becoming coach for them. I also did tutoring on{" "}
          <Anchor
            href="https://www.wyzant.com/"
            text="Wyzant"
            ariaLabel="Wyzant (opens in new tab)"
          />
          , enhancing my skills and solidifying my passion for web dev.
        </p>
        <p className="mb-4 text-base text-gray-700 dark:text-slate-400 leading-7">
          Soon after, I joined{" "}
          <Anchor
            href="https://www.nazaweb.com"
            text="Nazaweb"
            ariaLabel="Nazaweb (opens in new tab)"
          />
          . I honed my skills as a full stack dev, utilizing core technologies
          like{" "}
          <Anchor
            href="https://www.nextjs.org"
            text="Next.js"
            ariaLabel="Next.js (opens in new tab)"
          />{" "}
          and{" "}
          <Anchor
            href="https://www.nodejs.org"
            text="Node.js"
            ariaLabel="Node.js (opens in new tab)"
          />{" "}
          on top of other tools. I contributed on{" "}
          <Anchor
            href="https://learn.metamask.io/lessons/what-is-web3"
            text="Web3"
            ariaLabel="Web3 (opens in new tab)"
          />{" "}
          projects and collaborative endeavors like a 2D game to expand the
          brand. This humbling experience taught me what it takes to create
          great user experiences.
        </p>
        <p className="text-base text-gray-700 dark:text-slate-400 leading-7">
          Outside of my professional life, you'll see me either with my
          girlfriend, watching a ton of sports clips, fishing or watching a good
          movie. I'm also a devoted{" "}
          <Anchor
            href="https://www.avengedsevenfold.io/home"
            text="Avenged Sevenfold Deathbat"
            ariaLabel="Avenged Sevenfold Deathbat (opens in new tab)"
          />{" "}
          fan for life.
        </p>
      </div>
    </section>
  );
};
export default About;
