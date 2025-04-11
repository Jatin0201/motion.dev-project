"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function ScrollTriggered() {
  return (
    <div style={container} 
    className="flex flex-col md:flex-row justify-evenly items-center gap-8">

      {food.map(([emoji, hueA, hueB], i) => (
        <Card key={emoji} i={i} emoji={emoji} hueA={hueA} hueB={hueB} />
      ))}
    </div>
  );
}

interface CardProps {
  emoji: string;
  hueA: number;
  hueB: number;
  i: number;
}

function Card({ emoji, hueA, hueB }: CardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

  return (
    <motion.div
      style={cardContainer}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="flex flex-row"
    >
      <motion.div
        style={{
          ...splash,
          background,
          transform: isHovered ? "scale(0.9)" : "scale(1)",
          filter: isHovered ? "blur(8px) brightness(0.8)" : "none",
          opacity: isHovered ? 0.4 : 0.7,
        }}
      />
      <motion.div
        style={card}
        variants={cardVariants}
        initial="initial"
        animate={isHovered ? "hover" : "initial"}
      >
        {emoji}
      </motion.div>
    </motion.div>
  );
}

const cardVariants: Variants = {
  initial: {
    y: 100,
    scale: 0.5,
    opacity: 0,
  },
  hover: {
    y: -20,
    scale: 1.2,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
};

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

// 🧠 Styles
const container: React.CSSProperties = {
  marginTop:"400px",
  width: "100%",
  display: "flex",
  flexDirection:"row",
  justifyContent: "space-evenly",
};

const cardContainer: React.CSSProperties = {
  position: "relative",
  width: 200,
  height: 200,
  borderRadius: 20,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  overflow: "visible",
};

const splash: React.CSSProperties = {
  position: "absolute",
  top: "-40px",
  left: "-40px",
  right: "-40px",
  bottom: "-40px",
  borderRadius: 30,
  zIndex: 0,
  transition: "all 0.3s ease",
};

const card: React.CSSProperties = {
  fontSize: 64,
  width: 110,
  height: 110,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "40%",
  background: "#fff",
  boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
  position: "relative",
  zIndex: 2,
};

// 🍉 Data
const food: [string, number, number][] = [
  ["🍅", 340, 10],
  ["🍊", 20, 40],
  ["🍋", 60, 90],
];
