const Projects = () => {
  return (
    <div className="flex justify-start items-start flex-col w-full lg:gap-y-6 bg-black">
      <div className="flex justify-between items-center w-full">
        <div className="flex justify-start items-start w-full flex-col lg:gap-y-2">
          <h6
            id="Projects"
            className="lg:text-lg font-semibold uppercase tracking-wide text-green-500"
          >
            Featured Works
          </h6>
          <h2 className="lg:text-5xl font-bold text-white">
            The Lab Records<span className="text-green-500">.</span>
          </h2>
        </div>
        <p className="text-left font-medium text-white">
          A curation of engineered systems, from cognitive focus aids to
          enterprise-scale commerce architectures.
        </p>
      </div>
      <div className="flex justify-center items-center w-full lg:gap-x-6">
        <div className="h-100 border-green-500 border-2 rounded-lg w-[50%] flex justify-start items-start flex-col lg:gap-y-4 lg:p-4">
          <h4 className="font-semibold lg:text-2xl text-white">
            SaaS AI Mock Interview Web App
          </h4>
          <ul className="flex justify-start items-start flex-col lg:gap-y-2 lg:text-sm font-medium text-white list-disc marker:text-green-500 lg:px-6">
            <li>
              Pexer is a native Android & iOS app that helps ADHD CS Grads
              improve focus by 60 to 75% through a corporate style environment
              designed for personal development and job readiness.
            </li>
            <li>
              The platform bundles multiple tools in one app including Mock
              Coding Interviews, a Syllabus, and a Resume Analyzer, all guided
              by a strict and fair AI Manager.
            </li>
            <li>
              Engagement is boosted by gamification, featuring RPG leveling and
              corporate style login/logout mechanics to keep users motivated and
              accountable.
            </li>
          </ul>
          <div className="flex justify-between items-center w-full lg:mt-20">
            <button className="border-green-500 border-2 text-black rounded-md font-semibold cursor-pointer bg-green-500 hover:bg-green-500/80 hover:border-green-500/80 transition duration-300 lg:px-4 lg:py-1 lg:text-sm">
              Check Out
            </button>
            <button className="border-green-500 border-2 text-white rounded-md font-semibold cursor-pointer hover:bg-green-500/40 transition duration-300 lg:px-4 lg:py-1 lg:text-sm">
              Source Code
            </button>
          </div>
        </div>
        <div className="h-100 border-green-500 border-2 rounded-lg w-[50%] flex justify-start items-start flex-col lg:gap-y-4 lg:p-4">
          <h4 className="font-semibold lg:text-2xl text-white">
            SaaS Ecommerce Web and Native Mobile App
          </h4>
          <ul className="flex justify-start items-start flex-col lg:gap-y-2 lg:text-sm font-medium text-white list-disc marker:text-green-500 lg:px-6">
            <li>
              Barb is a SaaS e-commerce platform for approved businesses and
              customers dealing in electronic home appliances, featuring a web
              panel for businesses to manage operations, customers, and orders.
            </li>
            <li>
              A companion native mobile app gives customers control over their
              orders, discounts, and account management on the go.
            </li>
            <li>
              The platform integrates GSTIN API to auto-fetch verified business
              details during sign-up, and Stripe to handle seamless UPI-based
              payments for a smooth and trusted transaction experience.
            </li>
          </ul>
          <div className="flex justify-between items-center w-full lg:mt-20">
            <button className="border-green-500 border-2 text-black rounded-md font-semibold cursor-pointer bg-green-500 hover:bg-green-500/80 hover:border-green-500/80 transition duration-300 lg:px-4 lg:py-1 lg:text-sm">
              Check Out
            </button>
            <button className="border-green-500 border-2 text-white rounded-md font-semibold cursor-pointer hover:bg-green-500/40 transition duration-300 lg:px-4 lg:py-1 lg:text-sm">
              Source Code
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
