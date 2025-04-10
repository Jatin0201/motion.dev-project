"use client";
import { useState } from "react";
import { motion } from "framer-motion";

interface CardProps {
   emoji: string;
   hueA: number;
   hueB: number;
   i: number;
}

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

const cardVariants = {
   hidden: {
      clipPath: "inset(200% 0% 0% 0%)",
  opacity: 0,
  transition: { duration: 0.3 }
   },
   visible: {
      clipPath: "inset(0% 0% 0% 0%)",
  opacity: 1,
  transition: { duration: 0.3 }
   },
};

export default function ScrollTriggered() {
   const food: [string, number, number][] = [
      ["🍅", 340, 10],
      ["🍊", 20, 40],
      ["🍋", 60, 90],
   ];

   return (
      <div style={container} className="flex flex-col md:flex-row justify-evenly items-center gap-8">
         {food.map(([emoji, hueA, hueB], i) => (
            <Card key={emoji} emoji={emoji} hueA={hueA} hueB={hueB} i={i} />
         ))}
      </div>
   );
}

function Card({ emoji, hueA, hueB, i }: CardProps) {
   const [isHovered, setIsHovered] = useState(false);
   const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

   return (
      <div
         className={`card-container-${i}`}
         style={cardContainer}
         onMouseEnter={() => setIsHovered(true)}
         onMouseLeave={() => setIsHovered(false)}
      >
         <motion.div style={{ ...splash, background }} />

         <motion.div
            style={card}
            className="card mt-100"
            initial="hidden"
            animate={isHovered ? "visible" : "hidden"}
            variants={cardVariants}
         >
            {emoji}
         </motion.div>
      </div>
   );
}

const container: React.CSSProperties = {
   margin: "200px auto",
   maxWidth: "auto",
   paddingBottom: 100,
   width: "100%",
   display: "flex",
   justifyContent: "space-evenly",
};

const cardContainer: React.CSSProperties = {
   overflow: "hidden",
   display: "flex",
   justifyContent: "center",
   alignItems: "center",
   position: "relative",
   paddingTop: 50,
   marginBottom: 50,
   borderRadius: 20,
   background: "#f5f5f5",
   boxShadow: "0 0 4px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)",
   height: 400,
   width: 350,
};

const splash: React.CSSProperties = {
   position: "absolute",
   top: "-50px",
   left: "-50px",
   right: "-50px",
   bottom: "-50px",
   filter: "blur(50px)",
   opacity: 0.7,
};

const card: React.CSSProperties = {
   fontSize: 164,
   width: "100%",
   height: "150%",
   display: "flex",
   justifyContent: "center",
   alignItems: "baseline",
   borderRadius: 20,
   background: "#f5f5f5",
   boxShadow:
      "0 0 1px hsl(0deg 0% 0% / 0.075), 0 0 2px hsl(0deg 0% 0% / 0.075), 0 0 4px hsl(0deg 0% 0% / 0.075), 0 0 8px hsl(0deg 0% 0% / 0.075), 0 0 16px hsl(0deg 0% 0% / 0.075)",
   transformOrigin: "10% 60%",
};


/**
 * ==============   Data   ================
 */

const food: [string, number, number][] = [
   ["🍅", 340, 10],
   ["🍊", 20, 40],
   ["🍋", 60, 90],
   
];

