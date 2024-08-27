import Link from "next/link";

const ProfileHeaderContent = () => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tight text-gray-800 dark:text-slate-200 sm:text-5xl">
        <Link href="/">Daniel Jimenez</Link>
      </h1>
      <h2 className="mt-3 text-lg font-medium tracking-tight text-gray-700 dark:text-slate-200 sm:text-xl">
        Full-Stack Developer
      </h2>
      <p className="mt-3 text-lg text-gray-700 dark:text-slate-400 max-w-xs leading-normal">
        Crafting beautiful and well-built Web applications with passion
      </p>
    </>
  );
};
export default ProfileHeaderContent;
