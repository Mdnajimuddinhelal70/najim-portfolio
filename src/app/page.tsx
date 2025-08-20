import Blogs from "./components/Blogs";
import Hero from "./components/Hero";
import NewsLetter from "./components/NewsLetter";
import Projects from "./components/Projects";

const page = () => {
  return (
    <div>
      <Hero />
      <Projects />
      <Blogs />
      <NewsLetter />
    </div>
  );
};

export default page;
