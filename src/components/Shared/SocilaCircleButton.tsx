"use client";

import { motion } from "framer-motion";
import { IconType } from "react-icons";

type Props = {
  icon: IconType;
  onClick?: () => void;
  size?: "sm" | "md" | "lg";
  bgColor?: string;
  glowColor?: string;
};

const SocialCircleButton = ({
  icon: Icon,
  onClick,
  size = "md",
  bgColor = "rgba(0,0,0,0.7)",
  glowColor = "#00ff94",
}: Props) => {
  const sizeClasses = {
    sm: "w-10 h-10 text-sm",
    md: "w-14 h-14 text-base",
    lg: "w-20 h-20 text-lg",
  };

  return (
    <motion.button
      onClick={onClick}
      className={`flex items-center justify-center rounded-full ${sizeClasses[size]}`}
      style={{
        color: glowColor,
        background: bgColor,
        boxShadow: `0 0 10px ${glowColor}`,
      }}
      whileHover={{
        scale: 1.1,
        boxShadow: `0 0 20px ${glowColor}`,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Icon />
    </motion.button>
  );
};

export default SocialCircleButton;
