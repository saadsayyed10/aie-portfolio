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
      <div className="flex justify-end items-start w-[60%] flex-col lg:gap-y-1 lg:ml-20">
        <div className="border-2 border-green-500 rounded-lg w-full h-70 flex justify-start items-start flex-col lg:gap-y-2 lg:p-6">
          <h4 className="lg:text-3xl font-semibold text-white">
            Contract Software Developer
          </h4>
          <h6 className="lg:text-lg font-semibold text-white">
            nXtribe IT Solutions
            <span className="font-medium text-neutral-500 text-sm lg:ml-2">
              Nov 2024 - June 2025
            </span>
          </h6>
          <ul className="flex justify-start items-start flex-col lg:gap-y-2 lg:mt-2 list-disc marker:text-green-500 lg:text-sm lg:px-6 text-white font-medium">
            <li>
              Built a full-stack ARISS dashboard with role-based authentication,
              a RAG-powered AI support agent, and comprehensive admin modules
              for products, customers, employees, discounts, and returns with
              built-in analytics and reporting.
            </li>
            <li>
              Developed a full-stack CMS for a private educational institute
              with curriculum management, Markdown-based course authoring, exam
              creation, and a structured document-focused learning experience.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
