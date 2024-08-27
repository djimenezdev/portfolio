import { ReactNode } from "react";

type SocialLinkProps = {
  href: string;
  ariaLabel: string;
  title: string;
  children: ReactNode;
};

const SocialLink = ({ href, ariaLabel, title, children }: SocialLinkProps) => {
  return (
    <li className="mr-5 text-xs shrink-0 cursor-pointer">
      <a
        className="block hover:text-slate-200"
        href={href}
        target="_blank"
        rel="noreferrer noopener"
        aria-label={ariaLabel}
        title={title}
      >
        {children}
      </a>
    </li>
  );
};
export default SocialLink;
