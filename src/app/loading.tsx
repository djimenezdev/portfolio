"use client";

import { DNA } from "react-loader-spinner";

export default function Loading() {
  // Or a custom loading skeleton component
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      <DNA visible height="120" width="120" />
      <h1 className="text-4xl sm:text-6xl mt-2 font-inter">
        Portfolio loading...
      </h1>
    </div>
  );
}
