const Skills = () => {
  return (
    <div className="flex justify-center items-center w-full flex-col lg:gap-y-2">
      <h6 className="lg:text-lg font-semibold uppercase tracking-wide">
        The Arsenal
      </h6>
      <h2 className="lg:text-5xl font-bold">Core Technologies</h2>
      <div className="flex justify-center items-center w-full lg:gap-x-10 lg:mt-8">
        <div className="border w-24 h-24 rounded-lg"></div>
        <div className="border w-24 h-24 rounded-lg"></div>
        <div className="border w-24 h-24 rounded-lg"></div>
        <div className="border w-24 h-24 rounded-lg"></div>
        <div className="border w-24 h-24 rounded-lg"></div>
        <div className="border w-24 h-24 rounded-lg"></div>
      </div>
    </div>
  );
};

export default Skills;
