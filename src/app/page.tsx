import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import Projects from "./components/Projects";

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
    </div>
  );
};

export default page;
