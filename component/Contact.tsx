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
      await axios.post("http://localhost:3000/api/message", {
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
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded-lg placeholder:lg:text-sm text-sm lg:py-1 lg:px-2"
              placeholder="Who are you?"
            />
          </div>
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 lg:mt-2">
            <span className="lg:text-sm font-medium uppercase">
              Inquiry Email
            </span>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded-lg placeholder:lg:text-sm text-sm lg:py-1 lg:px-2"
              placeholder="Your business or regular email ID"
            />
          </div>
          <div className="flex justify-start items-start w-full flex-col lg:gap-y-1 lg:mt-2">
            <span className="lg:text-sm font-medium uppercase">
              Project Details
            </span>
            <textarea
              value={vision}
              onChange={(e) => setVision(e.target.value)}
              className="w-full border rounded-lg placeholder:lg:text-sm text-sm lg:py-1 lg:px-2"
              placeholder="Briefly describe your vision..."
              cols={20}
              rows={10}
            />
            <button
              onClick={handleSubmit}
              disabled={isLoading}
              className="w-full lg:px-4 lg:py-1.5 border rounded-lg lg:mt-4 cursor-pointer"
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
