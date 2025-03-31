"use client";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

export default function ScrollTriggered() {
    return (
        <div style={container}>
            {food.map(([emoji, hueA, hueB], i) => (
                <Card i={i} emoji={emoji} hueA={hueA} hueB={hueB} key={emoji} />
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
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;

    return (
        <motion.div
            className={`card-container-${i}`}
            style={cardContainer}
            initial="offscreen"
            whileInView="onscreen"
            exit="offscreen"
            viewport={{ amount: 0.9, once: false }}
        >
            <motion.div style={{ ...splash, background }} 
        variants={splashVariants} // Add this!
    />
            <motion.div style={card} variants={cardVariants} className="card">
                {emoji}
            </motion.div>
        </motion.div>
    );
}

const cardVariants: Variants = {
    offscreen: {
        y: -500,  // Start from above
        // Slightly smaller to add a pop effect
    },
    onscreen: {
        y: -10,  // Move to normal position
        opacity: 1,
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 1,
        },
    },
};

const splashVariants: Variants = {
   offscreen: { opacity: 0, y: 300 },
   onscreen: { opacity: 1, y: 50, transition: { duration: 0.8 } },
};



const hue = (h: number) => `hsl(${h}, 100%, 50%)`;

/**
 * ==============   Styles   ================
 */

const container: React.CSSProperties = {
    margin: "100px auto",
    maxWidth: 500,
    paddingBottom: 100,
    width: "100%",
    
};

const cardContainer: React.CSSProperties = {
    overflow: "hidden",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    paddingTop: 20,
    marginBottom: 90,
    borderRadius: 20,
    background: "#f5f5f5",
    boxShadow: "0 0 4px rgba(0,0,0,0.1), 0 4px 10px rgba(0,0,0,0.1)",
};

const splash: React.CSSProperties = {
   position: "absolute",
   top: "-50px",
   left: "-50px",
   right: "-50px",
   bottom: "-50px",
   filter: "blur(50px)",
   opacity: 0.7, // Adjust for softer or stronger glow
};

const card: React.CSSProperties = {
    fontSize: 164,
    width: 300,
    height: 430,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
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
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320],
];
