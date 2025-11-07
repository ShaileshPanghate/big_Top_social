"use client";

import { motion } from "framer-motion";
import React from "react";

export default function InfiniteWords() {
    const words = ["Growth",
        "Visibility",
        "Conversion",
        "Influence",
        "Branding",
        "Growth",
        "Branding"];

    // Duplicate the array for seamless scrolling
    const items = [...words, ...words];

    return (
        <div className="overflow-hidden w-full">
            <motion.div
                className="flex items-center whitespace-nowrap"
                animate={{ x: ["0%", "-100%"] }}
                transition={{ x: { repeat: Infinity, repeatType: "loop", duration: 14, ease: "linear" } }}
            >
                {items.map((word, i) => (
                    <React.Fragment key={i}>
                        <h1 className="inline-block text-[8vw] md:text-[6vw] font-medium mr-12 bg-gradient-to-b from-black to-blue-600 bg-clip-text text-transparent">
                        <p  className="inline-block mr-4 h-[60px] w-[60px] rounded-full bg-[#4f0afe]"></p>
                            {word.toUpperCase()}
                        </h1>
                    </React.Fragment>
                ))}
            </motion.div>

        </div>
    );
}
