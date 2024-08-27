import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function Loading() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <AiOutlineLoading3Quarters className="animate-spin" size={60} />
      <h1 className="text-2xl sm:text-4xl mt-4">Portfolio inbound...</h1>
    </div>
  );
}
