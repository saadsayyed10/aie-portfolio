import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-6 bg-black text-white">
      <h3>Saad Sayyed</h3>
      <h4>&copy; Some quote here</h4>
      <div className="flex justify-end items-center w-full lg:gap-x-4">
        <Link href={"/"}>GitHub</Link>
        <Link href={"/"}>LinkedIn</Link>
        <Link href={"/"}>Email</Link>
      </div>
    </div>
  );
};

export default Footer;
