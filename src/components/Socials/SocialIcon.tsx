import { VscGithub } from "react-icons/vsc";
import { LiaLinkedin } from "react-icons/lia";
import { FaXTwitter, FaInstagram } from "react-icons/fa6";

type IconType = "github" | "linkedin" | "twitter" | "instagram";

const iconComponents = {
  github: VscGithub,
  linkedin: LiaLinkedin,
  twitter: FaXTwitter,
  instagram: FaInstagram,
};

interface SocialIconProps {
  icon: IconType;
  size?: number;
  className?: string;
}

const SocialIcon: React.FC<SocialIconProps> = ({
  icon,
  size = 30,
  className = "",
}) => {
  const IconComponent = iconComponents[icon];
  return <IconComponent size={size} className={className} />;
};

export default SocialIcon;
