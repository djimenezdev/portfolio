type AnchorProps = {
  href: string;
  text: string;
  ariaLabel?: string;
};

const Anchor = ({ href, text, ariaLabel }: AnchorProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      className="text-blue-600 hover:text-sky-500 dark:text-white font-bold dark:hover:text-[#0EA5E9] transition-colors duration-200"
    >
      {text}
    </a>
  );
};
export default Anchor;
