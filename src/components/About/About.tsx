"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaReact,
  FaWhatsapp,
} from "react-icons/fa";
import {
  SiExpress,
  SiFirebase,
  SiJavascript,
  SiMongodb,
  SiMongoose,
  SiMysql,
  SiNextdotjs,
  SiPostgresql,
  SiPostman,
  SiPrisma,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import profilePic from "../../assets/images/myPic1.jpeg";

const About = () => {
  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <section id="about" className="py-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Image Section with Floating Animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { type: "spring", damping: 10 },
          }}
          className="flex justify-center mb-16"
        >
          <div className="relative w-64 h-64">
            <Image
              src={profilePic}
              alt="Najim Uddin"
              className="w-full h-full object-cover rounded-full border-4 dark:border-gray-700 border-primary/50 shadow-2xl z-10 relative"
            />
            {/* Floating Tech Icons Around Image */}
            {[FaReact, FaNodeJs, SiMongodb, SiTailwindcss].map((Icon, i) => (
              <motion.div
                key={i}
                className="absolute rounded-full dark:bg-gray-600 bg-primary/80 border dark:border-gray-600 border-primary/50 flex items-center justify-center"
                style={{
                  width: 50,
                  height: 50,
                  left: `${Math.cos(i * 1.57) * 140 + 100}px`,
                  top: `${Math.sin(i * 1.57) * 140 + 100}px`,
                }}
                animate={{
                  y: [0, -15, 0],
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    delay: i * 0.5,
                  },
                }}
              >
                <Icon className="text-2xl" />
              </motion.div>
            ))}
            {/* Glow Effect */}
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-transparent"
              animate={{
                boxShadow: [
                  "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                  "0 0 30px 10px rgba(0, 255, 148, 0.5)",
                  "0 0 20px 5px rgba(0, 255, 148, 0.3)",
                ],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
              }}
            />
          </div>
        </motion.div>

        {/* About Content with Staggered Animations */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="space-y-8"
        >
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full text-center mb-12 md:mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-6 text-primary">
              About <span className="dark:text-white text-gray-800">Me</span>
            </h2>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-1 md:h-1.5 mt-3 md:mt-4 mx-auto w-24 md:w-32 bg-primary"
            />
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-100 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              <span className="mr-2"> I am</span>
              <span className="text-primary font-semibold mr-1">
                Md Najim Uddin
              </span>
              ,<span className="mr-1">a student of</span>
              <span className="text-primary font-semibold">
                Hazrat Shahjalal Darussunnah Yakubiah Kamil Madrasah,
                Subhanighat, Sylhet
              </span>
              . Alongside my academic journey, I am a passionate MERN stack
              developer with a strong interest in building modern, user-friendly
              web applications. I combine my foundational knowledge of hardware
              with contemporary web technologies to create innovative,
              efficient, and reliable digital solutions.
            </p>
          </motion.div>

          <motion.div
            variants={item}
            className="bg-gray-100 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <p className="text-lg md:text-xl text-gray-700 dark:text-gray-300 leading-relaxed">
              As a graduate of{" "}
              <span className="text-[#a855f7]">
                Programming Hero’s Full Stack Development
              </span>{" "}
              program, I have developed{" "}
              <span className="text-primary font-semibold">
                20+ production-ready applications
              </span>
              , including advanced dashboards, scalable e-commerce systems, and
              real-time collaborative tools.
            </p>
          </motion.div>

          {/* Tech Stack with Hover Effects */}

          <motion.div
            variants={item}
            className="bg-gray-100 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-primary mb-4 flex items-center">
              <span className="ml-2">Tech Stack</span>
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                {
                  icon: <FaReact className="text-2xl" />,
                  name: "React.js",
                  color: "#00d8ff",
                },
                {
                  icon: <SiNextdotjs className="text-2xl" />,
                  name: "Next.js",
                  color: "currentColor",
                },
                {
                  icon: <SiJavascript className="text-2xl" />,
                  name: "Javascript",
                  color: "currentColor",
                },
                {
                  icon: <SiTypescript className="text-2xl" />,
                  name: "Typescript",
                  color: "currentColor",
                },
                {
                  icon: <SiTailwindcss className="text-2xl" />,
                  name: "Tailwind",
                  color: "#38bdf8",
                },
                {
                  icon: <FaNodeJs className="text-2xl" />,
                  name: "Node.js",
                  color: "#68a063",
                },
                {
                  icon: <SiExpress className="text-2xl" />,
                  name: "Express",
                  color: "currentColor",
                },
                {
                  icon: <SiPrisma className="text-2xl" />,
                  name: "Prisma",
                  color: "currentColor",
                },
                {
                  icon: <SiMongodb className="text-2xl" />,
                  name: "MongoDB",
                  color: "#589636",
                },
                {
                  icon: <SiMongoose className="text-2xl" />,
                  name: "Mongoose",
                  color: "#589636",
                },
                {
                  icon: <SiFirebase className="text-2xl" />,
                  name: "Firebase",
                  color: "#ffca28",
                },
                {
                  icon: <SiPostgresql className="text-2xl" />,
                  name: "PostgreSQL",
                  color: "#336791",
                },
                {
                  icon: <SiMysql className="text-2xl" />,
                  name: "MySQL",
                  color: "#00758f",
                },
                {
                  icon: <FaGithub className="text-2xl" />,
                  name: "GitHub",
                  color: "currentColor",
                },
                {
                  icon: <SiPostman className="text-2xl" />,
                  name: "Postman",
                  color: "#ff6c37",
                },
              ].map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -5, scale: 1.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg bg-gray-200 dark:bg-gray-700/50 hover:bg-gray-300 dark:hover:bg-gray-700 transition-all"
                >
                  <div
                    style={{ color: tech.color }}
                    className="text-gray-700 dark:text-white"
                  >
                    {tech.icon}
                  </div>
                  <span className="text-gray-700 dark:text-gray-300">
                    {tech.name}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* Unique Skills */}
          <motion.div
            variants={item}
            className="bg-gray-100 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#00d1ff] mb-4 flex items-center">
              <span className="ml-2">What Sets Me Apart</span>
            </h3>

            <ul className="space-y-3">
              {[
                "Unique blend of engineering logic and creative design",
                "Strong problem-solving & system design skills",
                "Experience with authentication & dashboard UIs",
                "Eager to learn and grow in fast-paced environments",
              ].map((skill, i) => (
                <motion.li
                  key={i}
                  className="flex items-start text-lg text-gray-700 dark:text-gray-300"
                  whileHover={{ x: 5 }}
                >
                  <span className="text-primary mr-2">▹</span>
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Goals Section */}
          <motion.div
            variants={item}
            className="bg-gray-200 dark:bg-gray-800/40 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 backdrop-blur-sm"
          >
            <h3 className="text-2xl font-semibold text-[#a855f7] mb-3 flex items-center">
              <span className="ml-2">My Goal</span>
            </h3>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Seeking <span className="text-primary">internships</span> or{" "}
              <span className="text-primary">entry-level roles</span> where I
              can contribute, tackle real-world challenges, and grow with a
              team.
            </p>
          </motion.div>

          {/* Quote */}
          <motion.div
            variants={item}
            className="border-l-4 border-primary pl-5 py-3 bg-gradient-to-r from-gray-800/40 to-transparent"
          >
            <p className="text-xl italic dark:text-gray-200">
              {
                "Every line of code I write takes me one step closer to the future I dream of"
              }
            </p>
          </motion.div>

          {/* Social Links */}
          <motion.div
            variants={item}
            className="flex justify-center gap-4 pt-6"
          >
            {[
              {
                icon: <FaGithub />,
                link: "https://github.com/nazmulxdev",
                color: "#ffffff",
              },
              {
                icon: <FaLinkedin />,
                link: "https://linkedin.com/in/nazmulxdev",
                color: "#0a66c2",
              },
              {
                icon: <FaWhatsapp />,
                link: "https://wa.me/+8801600106065",
                color: "#25d366",
              },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -5, scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
                style={{
                  backgroundColor: `${social.color}20`,
                  color: social.color,
                }}
              >
                {social.icon}
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
