import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-6 bg-black">
      <h3 className="lg:text-3xl capitalize tracking-tighter text-green-500 font-bold w-full">
        Saad Sayyed.
      </h3>
      <div className="flex justify-end items-center w-full lg:gap-x-4 font-semibold lg:text-sm text-white">
        <Link href={"https://github.com/saadsayyed10"}>GitHub</Link>
      </div>
    </div>
  );
};

export default Footer;
