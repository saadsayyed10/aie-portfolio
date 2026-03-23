import Hero from "@/component/Hero";
import Projects from "@/component/Projects";

const Home = () => {
  return (
    <div className="flex justify-center items-center w-full min-h-screen flex-col lg:gap-y-40 lg:px-8 lg:py-4">
      <Hero />
      <Projects />
    </div>
  );
};

export default Home;
