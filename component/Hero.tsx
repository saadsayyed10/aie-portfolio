const Hero = () => {
  return (
    <div className="flex justify-start items-start w-full flex-col lg:gap-y-2 lg:mb-10 lg:mt-24">
      <h5 className="lg:text-lg font-semibold uppercase tracking-wide text-green-500">
        Full-Stack Engineer & AI Specialist
      </h5>
      <h1 className="lg:text-7xl w-[60%] font-bold capitalize text-white">
        AI Engineering <span className="text-green-500">&</span>
        <br />
        <span className="border-b-4 border-green-500">Full-Stack</span>{" "}
        Solutions<span className="text-green-500">.</span>
      </h1>
      <p className="lg:text-base font-medium w-[60%] lg:mt-4">
        Building intelligent agents and SaaS platforms that solve real-world
        problems. Synthesizing advanced logic with ethereal user experiences.
      </p>
      <div className="flex justify-start items-start w-full lg:gap-x-4 lg:mt-4">
        <button className="border-green-500 border-2 text-black rounded-md font-semibold cursor-pointer bg-green-500 hover:bg-green-500/80 hover:border-green-500/80 transition duration-300 lg:px-6 lg:py-2">
          View My Work
        </button>
        <button className="border-green-500 border-2 text-white rounded-md font-semibold cursor-pointer hover:bg-green-500/40 transition duration-300 lg:px-6 lg:py-2">
          Contact Me
        </button>
      </div>
    </div>
  );
};

export default Hero;
