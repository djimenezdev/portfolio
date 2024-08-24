import { VscGithub } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";
import SocialLink from "./SocialLink";

type SocialProps = {
  isDark: boolean;
};

const Socials = ({ isDark }: SocialProps) => {
  const iconColor = isDark ? "#fff" : "#000";
  return (
    <ul className="ml-1 mt-8 flex items-center">
      <SocialLink
        href="https://github.com/djimenezdev"
        ariaLabel="GitHub (opens in a new tab)"
        title="GitHub"
      >
        <span className="sr-only">GitHub</span>
        <VscGithub size={30} color={iconColor} />
      </SocialLink>
      <SocialLink
        href="https://github.com/djimenezdev"
        ariaLabel="LinkedIn (opens in a new tab)"
        title="LinkedIn"
      >
        <span className="sr-only">LinkedIn</span>
        <LiaLinkedin size={38} color={iconColor} />
      </SocialLink>
      <SocialLink
        href="https://github.com/djimenezdev"
        ariaLabel="X (opens in a new tab)"
        title="X"
      >
        <span className="sr-only">X</span>
        <FaXTwitter size={30} color={iconColor} />
      </SocialLink>
      <SocialLink
        href="https://github.com/djimenezdev"
        ariaLabel="Instagram (opens in a new tab)"
        title="Instagram"
      >
        <span className="sr-only">Instagram</span>
        <FaInstagram size={30} color={iconColor} />
      </SocialLink>
    </ul>
  );
};
export default Socials;
