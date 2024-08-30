import Anchor from "./Anchor";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="mb-16 scroll-mt-16 md:mb-24 xl:mb-36 xl:scroll-mt-24"
      aria-label="Footer"
    >
      <p className="text-gray-700 dark:text-slate-400 text-base max-w-xl xl:text-lg text-center mx-auto">
        Thanks for visting! Credits to{" "}
        <Anchor
          href="https://www.brittanychiang.com"
          text="Brittany Chiang"
          ariaLabel="Brittany Chiang Portfolio (opens in new tab)"
        />{" "}
        for this awesome portfolio design she&apos;s an extremely talented
        developer! Definitely check out more of her work as well:&#41;
      </p>
    </footer>
  );
};
export default Footer;
