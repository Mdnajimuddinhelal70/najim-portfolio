"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { IconType } from "react-icons";

type Props = {
  children: ReactNode;
  onClick?: () => void;
  icon?: IconType;
  size?: "sm" | "md" | "lg";
  fullWidth?: boolean;
};

const GlowingButton = ({
  children,
  onClick,
  icon: Icon,
  size = "md",
  fullWidth = false,
}: Props) => {
  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`relative inline-flex items-center justify-center overflow-hidden rounded-full font-bold tracking-wider group transition-all duration-500
        border-2 border-transparent cursor-pointer
        ${sizeClasses[size]} 
        ${fullWidth ? "w-full" : ""}`}
      style={{
        color: "#00ff94",
        background: "rgba(0, 0, 0, 0.7)",
      }}
      initial={{
        boxShadow: "0 0 10px #00ff94",
        textShadow: "0 0 5px #00ff94",
      }}
      whileHover={{
        boxShadow: "0 0 20px #00ff94, 0 0 40px #00ff94",
        textShadow: "0 0 10px #00ff94",
        scale: 1.05,
        backgroundColor: "rgba(0, 255, 148, 0.1)",
      }}
      whileTap={{ scale: 0.95 }}
    >
      {/* Border */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 pointer-events-none"
        style={{ borderColor: "#00ff94" }}
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.95, 1, 0.95],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
        }}
      />

      {/* Glow */}
      <motion.span
        className="absolute inset-0 rounded-full bg-[#00ff94] pointer-events-none"
        animate={{
          opacity: [0, 0.1, 0],
          scale: [0.8, 1.2, 1.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
      />

      {/* Content */}
      <span className="relative z-10 flex items-center gap-2 dark:group-hover:text-white group-hover:text-black">
        {Icon && <Icon className="text-xl" />}
        {children}
      </span>
    </motion.button>
  );
};

export default GlowingButton;
