const Contact = () => {
  return (
    <div className="flex justify-center items-center w-full lg:p-10 border rounded-lg">
      <div className="flex justify-center items-start w-full lg:gap-x-6">
        <div className="flex justify-start items-start w-full flex-col lg:gap-y-6">
          <h2 className="lg:text-5xl font-bold">
            Let&apos;s build the
            <br />
            next frontier.
          </h2>
          <p className="lg:text-base font-medium">
            Available for high-impact AI engineering roles and complex SaaS
            architecture consultations.
          </p>
          <span className="text-left font-semibold lg:text-xs lg:mt-32 text-black/60">
            saadsyed950@gmail.com
          </span>
        </div>
        <div className="flex justify-start items-start w-full lg:p-2 border rounded-lg flex-col lg:gap-y-2">
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1">
            <span className="lg:text-sm font-medium uppercase">
              Inquiry Name
            </span>
            <input
              className="w-full border rounded-lg placeholder:lg:text-sm text-sm"
              placeholder="Who are you?"
            />
          </div>
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 lg:mt-2">
            <span className="lg:text-sm font-medium uppercase">
              Project Details
            </span>
            <textarea
              className="w-full border rounded-lg placeholder:lg:text-sm text-sm"
              placeholder="Briefly describe your vision..."
              cols={20}
              rows={10}
            />
            <button className="w-full lg:px-4 lg:py-1.5 border rounded-lg lg:mt-4">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
