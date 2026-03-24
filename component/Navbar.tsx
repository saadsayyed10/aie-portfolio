"use client";

import { useRouter } from "next/navigation";

const Navbar = () => {
  const router = useRouter();

  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-6 bg-black text-white">
      <h3 className="lg:text-3xl capitalize tracking-tighter text-green-500 font-bold">
        Saad Sayyed.
      </h3>
      <button
        onClick={() => router.push("/assets/SWE_Saad_Resume.pdf")}
        className="text-black rounded-md font-semibold cursor-pointer bg-green-500 hover:bg-green-500/70 transition duration-300 lg:px-4 lg:py-1.5 lg:text-sm"
      >
        Resume
      </button>
    </div>
  );
};

export default Navbar;
