const Experience = () => {
  return (
    <div className="flex justify-between items-start w-full">
      <div className="flex justify-start items-start w-[40%] flex-col lg:gap-y-2">
        <h6 className="lg:text-lg font-semibold tracking-wide uppercase">
          Chronicles
        </h6>
        <h2 className="lg:text-5xl font-bold">
          Experience &<br /> Evolution.
        </h2>
        <p className="lg:text-base font-medium lg:mt-4">
          Mapping the professional trajectory from academic excellence to
          engineering complex digital ecosystems.
        </p>
      </div>
      <div className="flex justify-end items-start w-[60%] flex-col lg:gap-y-6 lg:ml-20">
        <div className="border rounded-lg w-full h-60"></div>
        <div className="border rounded-lg w-full h-60"></div>
      </div>
    </div>
  );
};

export default Experience;
