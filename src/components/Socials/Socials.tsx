import SocialLink from "./SocialLink";
import { socials } from "@/data/socials";
import SocialIcon from "./SocialIcon";

const Socials = () => {
  return (
    <ul className="ml-1 mt-8 flex items-center">
      {socials.map((social) => {
        return (
          <SocialLink
            key={social.href}
            href={social.href}
            ariaLabel={social.ariaLabel}
            title={social.title}
          >
            <span className="sr-only">{social.title}</span>
            <SocialIcon
              icon={social.icon}
              size={social.size}
              className="text-gray-600 hover:text-black dark:text-slate-400 dark:hover:text-slate-100 transition-colors duration-200"
            />
          </SocialLink>
        );
      })}
    </ul>
  );
};
export default Socials;
