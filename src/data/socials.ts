import { VscGithub } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

type IconType = "github" | "linkedin" | "twitter" | "instagram";

type Social = {
  href: string;
  ariaLabel: string;
  title: string;
  icon: IconType;
  className: string;
  size: number;
};

export const socials: Social[] = [
  {
    href: "https://github.com/djimenezdev",
    ariaLabel: "GitHub (opens in a new tab)",
    title: "GitHub",
    icon: "github",
    className:
      "dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200",
    size: 30,
  },
  {
    href: "https://www.linkedin.com/in/djimenezdev/",
    ariaLabel: "LinkedIn (opens in a new tab)",
    title: "LinkedIn",
    icon: "linkedin",
    className:
      "dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200",
    size: 38,
  },
  {
    href: "https://x.com/djimenezdev",
    ariaLabel: "X (opens in a new tab)",
    title: "X",
    icon: "twitter",
    className:
      "dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200",
    size: 30,
  },
  {
    href: "https://www.instagram.com/djimenezdev/",
    ariaLabel: "Instagram (opens in a new tab)",
    title: "Instagram",
    icon: "instagram",
    className:
      "dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200",
    size: 30,
  },
];
