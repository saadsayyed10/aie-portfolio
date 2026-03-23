const Hero = () => {
  return (
    <div className="flex justify-start items-start w-full flex-col lg:gap-y-2 lg:mb-10 lg:mt-24">
      <h5 className="lg:text-lg font-semibold uppercase tracking-wide">
        Full-Stack Engineer & AI Specialist
      </h5>
      <h1 className="lg:text-7xl w-[60%] font-bold capitalize">
        AI Engineering &<br />
        Full-Stack Solutions.
      </h1>
      <p className="lg:text-base font-medium w-[60%] lg:mt-4">
        Building intelligent agents and SaaS platforms that solve real-world
        problems. Synthesizing advanced logic with ethereal user experiences.
      </p>
      <div className="flex justify-start items-start w-full lg:gap-x-4 lg:mt-4">
        <button className="border">View My Work</button>
        <button className="bg-black text-white">Contact Me</button>
      </div>
    </div>
  );
};

export default Hero;
