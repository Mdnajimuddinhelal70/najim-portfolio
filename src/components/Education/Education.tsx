"use client";

import { motion } from "framer-motion";
import { FaGraduationCap, FaLaptopCode, FaUniversity } from "react-icons/fa";
import { IoIosSchool } from "react-icons/io";
import { MdSchool } from "react-icons/md";

const Education = () => {
  const primaryColor = "#00ff94";
  const primaryFaded = `${primaryColor}20`;

  const educationData = [
    {
      icon: <FaUniversity className="text-3xl" />,
      title: "M,A in Hadith",
      institution:
        "Hazrat Shahjalal Darussunnah Yakubiah Kamil Madrasah, Subhanighat, Sylhet",
      details: [
        { label: "Department", value: "Hadith" },
        { label: "Session", value: "2026" },
        { label: "Current Status", value: "Level-1, Semester-1 (Appeared)" },
      ],
      year: "2026 - Present",
    },
    {
      icon: <IoIosSchool className="text-3xl" />,
      title: "Higher Secondary Certificate (Alim)/(HSC)",
      institution: "Lala Bazar Fazil (Degree) Madrasha",
      details: [
        { label: "Board", value: "Dhaka" },
        { label: "Group", value: "Science" },
        { label: "Passing Year", value: "2020" },
        { label: "GPA", value: "5.00/5.00" },
      ],
      year: "2018 - 2020",
    },
    {
      icon: <MdSchool className="text-3xl" />,
      title: "Secondary School Certificate (Dakhil)/(SSC)",
      institution: "Konda High School",
      details: [
        { label: "Board", value: "Dhaka" },
        { label: "Group", value: "Science" },
        { label: "Passing Year", value: "2018" },
        { label: "GPA", value: "5.00/5.00" },
      ],
      year: "2016 - 2018",
    },
  ];

  const coursesData = [
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Full Stack Web Development",
      institution: "Programming Hero",
      description:
        "Completed comprehensive training in full-stack web development using MongoDB, PostgresSql, NoSQL Express, NextJs, ReactJs, Prisma, and Node.js",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "Advanced JavaScript",
      institution: "Online Course",
      description:
        "Mastered modern JavaScript concepts including ES6+, async/await, and design patterns",
    },
    {
      icon: <FaLaptopCode className="text-3xl" />,
      title: "UI/UX Design Fundamentals",
      institution: "Creative IT Institute",
      description:
        "Learned principles of user interface and experience design with Figma",
    },
  ];

  return (
    <section
      id="education"
      className="relative overflow-hidden bg-slate-50 px-4 py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* Animated background elements */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 8 + 2}px`,
              height: `${Math.random() * 8 + 2}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: primaryFaded,
              opacity: 0.15,
            }}
            animate={{
              y: [0, (Math.random() - 0.5) * 100],
              x: [0, (Math.random() - 0.5) * 100],
              opacity: [0.1, 0.3, 0.1],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12 w-full text-center md:mb-20"
        >
          <h2
            className="mb-4 text-4xl font-bold sm:text-5xl"
            style={{ color: primaryColor }}
          >
            Education Journey
          </h2>

          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto mt-3 h-1 w-24 origin-center md:mt-4 md:h-1.5 md:w-32"
            style={{ backgroundColor: primaryColor }}
          />

          <p className="mx-auto mt-4 max-w-2xl text-base text-slate-600 sm:text-lg md:mt-6 md:max-w-3xl md:text-xl dark:text-slate-400">
            My academic path and professional certifications
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mb-24">
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white"
          >
            <FaGraduationCap style={{ color: primaryColor }} />
            <span>Academic Background</span>
          </motion.h3>

          <div className="relative">
            {/* Timeline line */}
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{
                duration: 1.5,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="absolute left-6 top-0 h-full w-1 origin-top md:left-1/2 md:-translate-x-1/2"
              style={{ backgroundColor: primaryColor }}
            />

            {educationData.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative mb-12 pl-10 md:w-1/2 md:pl-0 ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-10 md:text-right"
                    : "md:ml-auto md:pl-10"
                }`}
              >
                {/* Year badge */}
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className={`absolute top-0 z-10 rounded-full border px-3 py-1 text-xs font-bold tracking-wide ${
                    index % 2 === 0
                      ? "md:right-0 md:-mr-14"
                      : "md:left-0 md:-ml-14"
                  }`}
                  style={{
                    backgroundColor: primaryFaded,
                    color: primaryColor,
                    borderColor: `${primaryColor}40`,
                  }}
                >
                  {edu.year}
                </motion.div>

                {/* Timeline dot */}
                <motion.div
                  className="absolute left-0 top-4 z-10 h-5 w-5 -translate-x-1/2 transform rounded-full border-4 border-slate-50 dark:border-slate-950 md:left-1/2"
                  style={{ backgroundColor: primaryColor }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: index * 0.2,
                    type: "spring",
                    stiffness: 200,
                    damping: 10,
                  }}
                  whileHover={{ scale: 1.2 }}
                />

                {/* Timeline pulse */}
                <motion.div
                  className="absolute left-0 top-4 z-0 h-5 w-5 -translate-x-1/2 transform rounded-full md:left-1/2"
                  style={{ backgroundColor: primaryColor }}
                  animate={{
                    scale: [1, 1.5, 1.8],
                    opacity: [0.4, 0.2, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeOut",
                    delay: index * 0.3,
                  }}
                />

                {/* Education Card */}
                <motion.div
                  whileHover={{
                    y: -8,
                    boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                  }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70"
                  style={{
                    borderLeftColor: primaryColor,
                    borderLeftWidth: "4px",
                  }}
                >
                  {/* Glow */}
                  <div className="absolute inset-0 overflow-hidden">
                    <div
                      className="absolute -left-10 -top-10 h-32 w-32 rounded-full opacity-0 blur-[40px] transition-opacity duration-300 group-hover:opacity-20"
                      style={{ backgroundColor: primaryColor }}
                    />
                  </div>

                  <div
                    className={`relative z-10 mb-4 flex items-center gap-4 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 10 }}
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/70"
                      style={{
                        color: primaryColor,
                        boxShadow: `0 0 20px ${primaryColor}20`,
                      }}
                    >
                      {edu.icon}
                    </motion.div>

                    <div>
                      <h4 className="text-xl font-bold text-slate-900 dark:text-white">
                        {edu.title}
                      </h4>

                      <p className="text-sm text-slate-600 dark:text-slate-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <ul
                    className={`relative z-10 space-y-2 text-sm ${
                      index % 2 === 0 ? "md:text-right" : ""
                    }`}
                  >
                    {edu.details.map((detail, i) => (
                      <motion.li
                        key={i}
                        className="text-slate-600 dark:text-slate-300"
                        initial={{
                          opacity: 0,
                          x: index % 2 === 0 ? -10 : 10,
                        }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span
                          className="font-semibold"
                          style={{ color: primaryColor }}
                        >
                          {detail.label}:{" "}
                        </span>

                        <span>{detail.value}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Professional Courses */}
        <div>
          <motion.h3
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-8 flex items-center gap-3 text-2xl font-semibold text-slate-900 dark:text-white"
          >
            <FaLaptopCode style={{ color: primaryColor }} />
            <span>Professional Courses</span>
          </motion.h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {coursesData.map((course, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -10,
                  boxShadow: `0 20px 40px -10px ${primaryColor}30`,
                }}
                className="relative group"
              >
                {/* Course Card */}
                <div
                  className="relative h-full overflow-hidden rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-colors duration-300 dark:border-slate-800 dark:bg-slate-900/70"
                  style={{
                    boxShadow: `0 10px 30px -10px ${primaryColor}20`,
                    borderTopColor: primaryColor,
                    borderTopWidth: "3px",
                  }}
                >
                  {/* Gradient background */}
                  <div className="absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                    <div
                      className="absolute inset-0"
                      style={{
                        background: `linear-gradient(135deg, ${primaryColor}10 0%, transparent 70%)`,
                      }}
                    />
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                      whileHover={{ rotate: 15, scale: 1.1 }}
                      className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-800/70"
                      style={{
                        color: primaryColor,
                        boxShadow: `0 0 20px ${primaryColor}20`,
                      }}
                    >
                      {course.icon}
                    </motion.div>

                    <h4 className="mb-2 text-xl font-bold text-slate-900 dark:text-white">
                      {course.title}
                    </h4>

                    <p className="mb-4 text-sm font-medium text-slate-600 dark:text-slate-400">
                      {course.institution}
                    </p>

                    <p className="text-sm leading-6 text-slate-600 dark:text-slate-300">
                      {course.description}
                    </p>

                    {/* Floating dots */}
                    <div className="absolute -bottom-4 -right-4 h-20 w-20 opacity-10 transition-opacity group-hover:opacity-30">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className="absolute rounded-full"
                          style={{
                            width: `${Math.random() * 6 + 2}px`,
                            height: `${Math.random() * 6 + 2}px`,
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            backgroundColor: primaryColor,
                          }}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
