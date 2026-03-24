const Skills = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col lg:gap-y-2 bg-black">
      <h6 className="lg:text-lg font-semibold uppercase tracking-wide text-green-500">
        The Arsenal
      </h6>
      <h2 className="lg:text-5xl text-white font-bold">
        Core Technologies<span className="text-green-500">.</span>
      </h2>
      <div className="flex justify-center items-center w-full lg:gap-x-10 lg:mt-8">
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
        <div className="border-2 border-green-500 w-24 h-24 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Skills;
