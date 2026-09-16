"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import {
  FaCode,
  FaGithub,
  FaLinkedin,
  FaNodeJs,
  FaProjectDiagram,
  FaReact,
  FaServer,
  FaWhatsapp,
} from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useInView } from "react-intersection-observer";
import Typewriter from "typewriter-effect";
import profileImage from "../../assets/images/myPic1.jpeg";

import { IoMdContacts } from "react-icons/io";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

import Image from "next/image";
import { useRouter } from "next/navigation";
import GlowingButton from "../Shared/GlowingButton";
import SocialCircleButton from "../Shared/SocilaCircleButton";

const HomeContent = () => {
  const primaryColor = "#00ff94";
  const router = useRouter();

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/Md-Nazmul-Hossen-MERN-Developer-Resume.pdf";
    link.download = "Md-Nazmul-Hossen-MERN-Developer-Resume.pdf";
    link.click();
  };

  const handleContactButton = () => {
    router.push("/contact");
  };

  const stats = [
    {
      value: 20,
      label: "Projects Completed",
      icon: <FaProjectDiagram />,
    },
    {
      value: 350,
      label: "GitHub Commits",
      icon: <FaCode />,
    },
    {
      value: 24,
      label: "Technologies",
      icon: <FaServer />,
    },
  ];

  const techIcons = [FaReact, FaNodeJs, SiMongodb, SiTailwindcss];

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-slate-50 px-4 py-20 text-slate-900 transition-colors duration-300 dark:bg-slate-950 dark:text-white"
    >
      {/* =========================================
          Background Decoration
          ========================================= */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        {/* Top-right glow */}
        <div
          className="absolute -right-40 -top-40 h-96 w-96 rounded-full opacity-10 blur-3xl dark:opacity-15"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Bottom-left glow */}
        <div
          className="absolute -bottom-40 -left-40 h-96 w-96 rounded-full opacity-5 blur-3xl dark:opacity-10"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.025] dark:opacity-[0.04]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(100,116,139,0.5) 1px, transparent 1px),
              linear-gradient(90deg, rgba(100,116,139,0.5) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl">
        {/* =========================================
            Mobile Profile Image
            ========================================= */}

        <div className="mb-12 flex justify-center lg:hidden">
          <ProfileImage
            profileImage={profileImage}
            techIcons={techIcons}
            primaryColor={primaryColor}
            mobile
          />
        </div>

        {/* =========================================
            Main Grid
            ========================================= */}

        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-3 lg:gap-16">
          {/* =========================================
              Left Content
              ========================================= */}

          <div className="order-2 lg:col-span-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {/* Small Badge */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
                className="mb-6 inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm dark:border-slate-800 dark:bg-slate-900/70 dark:text-slate-300"
              >
                <span
                  className="h-2 w-2 animate-pulse rounded-full"
                  style={{ backgroundColor: primaryColor }}
                />
                Available for opportunities
              </motion.div>

              {/* Main Heading */}
              <h1 className="mb-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl dark:text-white">
                Hi, I&apos;m
                <span
                  className="block sm:inline"
                  style={{ color: primaryColor }}
                >
                  {" "}
                  Najim Uddin
                </span>
              </h1>

              {/* Typewriter */}
              <div
                className="mb-6 h-10 text-2xl font-semibold sm:text-3xl md:text-4xl"
                style={{ color: primaryColor }}
              >
                <Typewriter
                  options={{
                    strings: [
                      "Full Stack Developer",
                      "MERN Specialist",
                      "Problem Solver",
                      "Tech Enthusiast",
                    ],
                    autoStart: true,
                    loop: true,
                    delay: 50,
                    deleteSpeed: 30,
                  }}
                />
              </div>

              {/* Description */}
              <p className="mb-8 max-w-2xl text-base leading-7 text-slate-600 sm:text-lg dark:text-slate-400">
                I build exceptional digital experiences with modern web
                technologies. Currently specializing in MERN stack development
                and creating responsive, user-friendly applications.
              </p>

              {/* =========================================
                  Stats
                  ========================================= */}

              <div
                ref={ref}
                className="mb-8 grid max-w-2xl grid-cols-3 gap-3 sm:gap-4"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5 }}
                    className="group rounded-2xl border border-slate-200 bg-white p-3 text-center shadow-sm transition-all duration-300 hover:shadow-lg sm:p-4 dark:border-slate-800 dark:bg-slate-900/70"
                  >
                    <div
                      className="mb-2 flex justify-center text-xl sm:text-2xl"
                      style={{ color: primaryColor }}
                    >
                      {stat.icon}
                    </div>

                    <div className="text-xl font-bold text-slate-900 sm:text-2xl dark:text-white">
                      {inView ? (
                        <CountUp end={stat.value} duration={2} suffix="+" />
                      ) : (
                        0
                      )}
                    </div>

                    <div className="mt-1 text-[10px] leading-4 text-slate-500 sm:text-xs dark:text-slate-400">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* =========================================
                  Action Buttons
                  ========================================= */}

              <div className="mb-8 flex flex-wrap gap-4">
                <GlowingButton
                  onClick={handleDownloadCV}
                  icon={HiDownload}
                  size="lg"
                >
                  Resume
                </GlowingButton>

                <GlowingButton onClick={handleContactButton} size="lg">
                  <IoMdContacts />
                  Contact Me
                </GlowingButton>
              </div>

              {/* =========================================
                  Social Links
                  ========================================= */}

              <div className="flex items-center gap-4">
                <span className="text-sm text-slate-500 dark:text-slate-500">
                  Find me on
                </span>

                <SocialCircleButton
                  icon={FaGithub}
                  onClick={() =>
                    window.open("https://github.com/nazmulxdev", "_blank")
                  }
                  glowColor={primaryColor}
                />

                <SocialCircleButton
                  icon={FaLinkedin}
                  onClick={() =>
                    window.open("https://linkedin.com/in/nazmulxdev", "_blank")
                  }
                  glowColor={primaryColor}
                />

                <SocialCircleButton
                  icon={FaWhatsapp}
                  onClick={() =>
                    window.open("https://wa.me/+8801600106065", "_blank")
                  }
                  glowColor={primaryColor}
                />
              </div>
            </motion.div>
          </div>

          {/* =========================================
              Desktop Profile Image
              ========================================= */}

          <div className="order-1 hidden justify-center lg:order-2 lg:flex lg:col-span-1">
            <ProfileImage
              profileImage={profileImage}
              techIcons={techIcons}
              primaryColor={primaryColor}
            />
          </div>
        </div>

        {/* =========================================
            Scroll Indicator
            ========================================= */}

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-12 flex justify-center lg:mt-20"
        >
          <motion.button
            type="button"
            animate={{
              y: [0, 10, 0],
              opacity: [0.5, 1, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
            style={{ color: primaryColor }}
            className="flex flex-col items-center"
            onClick={() =>
              document
                .getElementById("about")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            aria-label="Scroll to about section"
          >
            <span className="mb-2 text-xs uppercase tracking-[0.2em] text-slate-500 dark:text-slate-500">
              Scroll
            </span>

            <span className="text-xl">↓</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

/* =========================================
   Profile Image Component
   ========================================= */

interface ProfileImageProps {
  profileImage: typeof import("../../assets/images/myPic1.jpeg").default;
  techIcons: React.ComponentType<{ className?: string }>[];
  primaryColor: string;
  mobile?: boolean;
}

const ProfileImage = ({
  profileImage,
  techIcons,
  primaryColor,
  mobile = false,
}: ProfileImageProps) => {
  const imageSize = mobile ? "h-64 w-64" : "h-80 w-80 xl:h-96 xl:w-96";

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        type: "spring",
        damping: 10,
      }}
    >
      <div className={`relative ${imageSize}`}>
        {/* Image */}
        <div className="relative z-10 h-full w-full">
          <Image
            src={profileImage}
            alt="Najim Uddin"
            fill
            sizes={
              mobile
                ? "(max-width: 768px) 256px"
                : "(max-width: 1280px) 320px, 384px"
            }
            className="rounded-full border-4 border-slate-200 object-cover shadow-2xl dark:border-slate-700"
            priority
          />

          {/* Inner glow */}
          <div
            className="absolute inset-2 rounded-full opacity-10 blur-xl dark:opacity-20"
            style={{
              boxShadow: `0 0 60px 20px ${primaryColor}`,
            }}
          />
        </div>

        {/* Floating Tech Icons */}
        {techIcons.map((Icon, i) => {
          const angle = i * 1.57;

          const radius = mobile ? 140 : 190;

          return (
            <motion.div
              key={i}
              className="absolute z-20 flex items-center justify-center rounded-full border border-slate-200 bg-white shadow-lg dark:border-slate-700 dark:bg-slate-900"
              style={{
                width: 50,
                height: 50,
                left: `calc(50% + ${Math.cos(angle) * radius}px - 25px)`,
                top: `calc(50% + ${Math.sin(angle) * radius}px - 25px)`,
              }}
              animate={{
                y: [0, -12, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.5,
              }}
            >
              <span style={{ color: primaryColor }}>
                <Icon className="text-xl sm:text-2xl" />
              </span>
            </motion.div>
          );
        })}

        {/* Outer Glow */}
        <motion.div
          className="pointer-events-none absolute inset-0 rounded-full"
          animate={{
            boxShadow: [
              `0 0 20px 5px ${primaryColor}30`,
              `0 0 35px 10px ${primaryColor}50`,
              `0 0 20px 5px ${primaryColor}30`,
            ],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
        />

        {/* Outer Ring */}
        <motion.div
          className="pointer-events-none absolute -inset-3 rounded-full border border-dashed opacity-30"
          style={{ borderColor: primaryColor }}
          animate={{ rotate: 360 }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </motion.div>
  );
};

export default HomeContent;
