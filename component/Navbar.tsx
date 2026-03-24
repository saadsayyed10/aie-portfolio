const Navbar = () => {
  return (
    <div className="flex justify-between items-center w-full lg:px-10 lg:py-6 bg-black text-white">
      <h3>Saad Sayyed</h3>
      <button className="text-black rounded-md font-semibold cursor-pointer bg-green-500 hover:bg-green-500/70 transition duration-300 lg:px-4 lg:py-1.5 lg:text-sm">
        Resume
      </button>
    </div>
  );
};

export default Navbar;
