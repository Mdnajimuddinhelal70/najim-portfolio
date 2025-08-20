import { Github, Linkedin, Mail } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import myImg from "../../../public/projects/najimpic.png";

const Hero = () => {
  return (
    <section className="py-16 container max-w-7xl mx-auto px-4">
      <div className="flex flex-col items-center text-center">
        {/* Profile Image */}
        <div className="mb-6">
          <Image
            src={myImg}
            alt="profile image"
            width={150}
            height={150}
            className="rounded-full w-36 h-36 object-cover ring-4 ring-primary shadow-lg"
          />
        </div>

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Hi, I am <span className="text-primary">Najim</span>
        </h1>

        {/* Subtitle */}
        <h2 className="text-lg md:text-2xl font-medium text-gray-600 dark:text-gray-300 mb-4">
          Full Stack Developer | MERN Enthusiast 🚀
        </h2>

        {/* Short Description */}
        <p className="max-w-2xl text-gray-500 dark:text-gray-400 mb-6">
          I love building modern web applications with clean UI and scalable
          backend solutions. Passionate about solving problems with code and
          learning new technologies every day.
        </p>

        {/* CTA Buttons */}
        <div className="flex gap-4 mb-6">
          <Link
            href="#contact"
            className="px-6 py-3 bg-primary text-white rounded-xl shadow hover:bg-primary/90 transition"
          >
            Hire Me
          </Link>
          <Link
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 border rounded-xl shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
          >
            Download CV
          </Link>
        </div>

        {/* Social Links */}
        <div className="flex gap-6">
          <Link
            href="https://github.com/yourusername"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Github size={24} />
          </Link>
          <Link
            href="https://linkedin.com/in/yourusername"
            target="_blank"
            className="hover:text-primary transition"
          >
            <Linkedin size={24} />
          </Link>
          <Link
            href="mailto:yourmail@gmail.com"
            className="hover:text-primary transition"
          >
            <Mail size={24} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
