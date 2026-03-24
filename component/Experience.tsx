const Experience = () => {
  return (
    <div className="flex justify-between items-start w-full bg-black">
      <div className="flex justify-start items-start w-[40%] flex-col lg:gap-y-2">
        <h6 className="lg:text-lg font-semibold tracking-wide uppercase text-green-500">
          Chronicles
        </h6>
        <h2 className="lg:text-5xl font-bold text-white">
          Experience &<br /> Evolution<span className="text-green-500">.</span>
        </h2>
        <p className="lg:text-base font-medium lg:mt-4 text-white">
          Mapping the professional trajectory from academic excellence to
          engineering complex digital ecosystems.
        </p>
      </div>
      <div className="flex justify-end items-start w-[60%] flex-col lg:gap-y-6 lg:ml-20">
        <div className="border-2 border-green-500 rounded-lg w-full h-60"></div>
        <div className="border-2 border-green-500 rounded-lg w-full h-60"></div>
      </div>
    </div>
  );
};

export default Experience;
