const Projects = () => {
  return (
    <div className="flex justify-start items-start flex-col w-full lg:gap-y-6">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-start w-full flex-col lg:gap-y-2">
          <h6 className="lg:text-lg font-bold uppercase tracking-wide">
            Feature Works
          </h6>
          <h2 className="lg:text-5xl font-bold">The Lab Records</h2>
        </div>
        <p className="text-left font-medium">
          A curation of engineered systems, from cognitive focus aids to
          enterprise-scale commerce architectures.
        </p>
      </div>
      <div className="flex justify-center items-center w-full lg:gap-x-6">
        <div className="h-100 border rounded-lg w-[50%]"></div>
        <div className="h-100 border rounded-lg w-[50%]"></div>
      </div>
    </div>
  );
};

export default Projects;
