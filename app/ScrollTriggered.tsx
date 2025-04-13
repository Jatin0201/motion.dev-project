"use client";
import { useState } from "react";
import { motion, Variants } from "framer-motion";

export default function ScrollTriggered() {
   return (
      <div
         style={container}
         className="flex flex-col md:flex-row items-center md:justify-evenly gap-30"
      >
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

function Card({ emoji, hueA, hueB, i }: CardProps) {
   const [isHovered, setIsHovered] = useState(false);

   // 🟥🟦🖤 Custom card colors: dark red, black, dark blue
   const cardColors = ["#1e3a8a", "#000000", "#7f1d1d"]; // dark blue, black, dark red
   const glowColors = ["#3b82f6", "#ffffff", "#ef4444"]; // glow: blue, white, red
   const cardBg = cardColors[i];
   const glow = glowColors[i];

   return (
      <motion.div
         style={cardContainer}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
         className="relative"
      >
         {/* 🌟 Middle card: White Glow + Sharp Black Splash */}
         {i === 1 && (
            <>
               {/* White Glow (Blurred Behind) */}
               <motion.div
                  style={{
                     position: "absolute",
                     top: "-60px",
                     left: "-60px",
                     right: "-60px",
                     bottom: "-60px",
                     borderRadius: 60,
                     background: "#ffffff",
                     opacity: isHovered ? 0.2 : 0.5,
                     filter: isHovered
                        ? "blur(80px) brightness(1)"
                        : "blur(120px) brightness(1.8)",
                     zIndex: 0,
                  }}
               />
               {/* Sharp Black Splash */}
               <motion.div
                  style={{
                     ...splash,
                     background: "#000000",
                     transform: isHovered ? "scale(0.95)" : "scale(1)",
                     filter: "brightness(0.9)",
                     opacity: isHovered ? 0.3 : 0.6,
                     zIndex: 1,
                  }}
               />
            </>
         )}

         {/* ✨ Side cards: Colored Splash with Glow */}
         {i !== 1 && (
            <>
               {/* Bright Glow Behind Splash */}
               <motion.div
                  style={{
                     position: "absolute",
                     top: "-60px",
                     left: "-60px",
                     right: "-60px",
                     bottom: "-60px",
                     borderRadius: 60,
                     background: glow,
                     opacity: isHovered ? 0.25 : 0.4,
                     filter: isHovered
                        ? "blur(60px) brightness(1.1)"
                        : "blur(90px) brightness(1.6)",
                     zIndex: 0,
                  }}
               />

               {/* Colored Splash */}
               <motion.div
                  style={{
                     ...splash,
                     background: glow,
                     transform: isHovered ? "scale(0.95)" : "scale(1)",
                     filter: "brightness(0.9)",
                     opacity: isHovered ? 0.3 : 0.6,
                     zIndex: 1,
                  }}
               />
            </>
         )}

         {/* 🃏 The Card */}
         <motion.div
            style={{
               ...card,
               background: cardBg,
               boxShadow: `0 0 60px ${glow}`,
               zIndex: 2,
            }}
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

// 💅 Styles
const container: React.CSSProperties = {
   marginTop: "400px",
   marginBottom: "200px",
   width: "100%",
   marginLeft: "auto",
   marginRight: "auto",
};

const cardContainer: React.CSSProperties = {
   position: "relative",
   width: 200,
   height: 200,
   borderRadius: 20,
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   padding: "60px", // space for glowing fade
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
   border: "2px solid white",
};

const card: React.CSSProperties = {
   fontSize: 50,
   width: 150,
   height: 100,
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   borderRadius: "20%",
  //  background: "#fff",
   boxShadow: "0 12px 24px rgba(0,0,0,0.2)",
   position: "relative",
   zIndex: 2,
   border: "3px solid white",
};

// 🍉 Data
const food: [string, number, number][] = [
   ["🍅", 340, 10],
   ["🍊", 20, 40],
   ["🍋", 60, 90],
];
