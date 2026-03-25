"use client";

import axios from "axios";
import { useState } from "react";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vision, setVision] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    if (!name || !email || !vision) {
      alert("Name, Email and Detail: All are required");
      return;
    }
    setIsLoading(true);
    try {
      await axios.post("https://saad-aie-portfolio.vercel.app/api/message", {
        name,
        email,
        vision,
      });
      alert(
        `Hey ${name}, I have received your message, I will contact you as soon as possible. Thank ya.`,
      );

      setName("");
      setEmail("");
      setVision("");
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center w-full lg:p-10 border-2 rounded-lg border-green-500 lg:mb-20">
      <div className="flex justify-center items-start w-full lg:gap-x-6 rounded-lg">
        <div className="flex justify-start items-start w-full flex-col lg:gap-y-6">
          <h2 className="lg:text-5xl font-bold text-white">
            Let<span className="text-green-500">&apos;</span>s build the
            <br />
            next frontier
            <span id="Contact" className="text-green-500">
              .
            </span>
          </h2>
          <p className="lg:text-base font-medium text-white">
            Available for high-impact AI engineering roles and complex SaaS
            architecture consultations.
          </p>
          <span className="text-left font-semibold lg:text-xs lg:mt-64 text-gray-200">
            saadsyed950@gmail.com
          </span>
        </div>
        <div className="flex justify-start items-start w-full lg:p-2 rounded-lg flex-col lg:gap-y-2">
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 text-green-500">
            <span className="lg:text-sm font-medium uppercase">
              Inquiry Name
            </span>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-md placeholder:lg:text-sm text-sm lg:py-2 lg:px-4 text-white border-green-500 font-medium"
              placeholder="Who are you?"
            />
          </div>
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 lg:mt-2 text-green-500">
            <span className="lg:text-sm font-medium uppercase">
              Inquiry Email
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-md placeholder:lg:text-sm text-sm lg:py-2 lg:px-4 text-white border-green-500 font-medium"
              placeholder="Your business or regular email ID"
            />
          </div>
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 lg:mt-2 text-green-500">
            <span className="lg:text-sm font-medium uppercase">
              Project Details
            </span>
            <textarea
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              className="w-full border rounded-md placeholder:lg:text-sm text-sm lg:py-2 lg:px-4 text-white border-green-500 font-medium"
              placeholder="Briefly describe your vision..."
              cols={20}
              rows={10}
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full lg:px-4 lg:py-1.5 text-black font-semibold capitalize bg-green-500 hover:bg-green-500/80 transition duration-300 rounded-lg lg:mt-4 cursor-pointer"
            >
              {isLoading ? "Sending..." : "Send Message"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
