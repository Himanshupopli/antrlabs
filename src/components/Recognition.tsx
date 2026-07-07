import React from "react";
import { motion } from "motion/react";

interface LogoConfig {
  id: string;
  name: string;
  imageUrl: string;
}

const LOGOS: LogoConfig[] = [
  { id: "partner-1", name: "Client Partner 1", imageUrl: "https://lh3.googleusercontent.com/d/1Z6Bby9atL2dd5EMknCD9NUj-Xw717KFH" },
  { id: "partner-2", name: "Client Partner 2", imageUrl: "https://lh3.googleusercontent.com/d/1Yj9zJjScXBEIZTdzsvmvGC-sc0VGo14C" },
  { id: "partner-3", name: "Client Partner 3", imageUrl: "https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54" },
  { id: "partner-4", name: "Client Partner 4", imageUrl: "https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp" },
  { id: "partner-5", name: "Client Partner 5", imageUrl: "https://lh3.googleusercontent.com/d/14M4u9-nmrqOmqcwbtkEQdLwsZfAo9UYQ" },
  { id: "partner-6", name: "Client Partner 6", imageUrl: "https://lh3.googleusercontent.com/d/1vU9ueXtQQZYdkNTASbUmGTsuoCgzGwt5" },
  { id: "partner-7", name: "Client Partner 7", imageUrl: "https://lh3.googleusercontent.com/d/1bX9LcggZq7x9a0wbDa-F8p5ceBkuZNku" },
  { id: "partner-8", name: "Client Partner 8", imageUrl: "https://lh3.googleusercontent.com/d/1kU5lp4S23wk07CHtv89l2HaqhKRxSlrf" },
  { id: "partner-9", name: "Client Partner 9", imageUrl: "https://lh3.googleusercontent.com/d/1hWwwSZ4O48N8reZCCtH49b0-OhltyAFM" },
  { id: "partner-10", name: "Client Partner 10", imageUrl: "https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54" },
  { id: "partner-11", name: "Client Partner 11", imageUrl: "https://lh3.googleusercontent.com/d/1sf_8WMzQFvgV7gPu5JDDRHX8c5k1bhPT" },
  { id: "partner-12", name: "Client Partner 12", imageUrl: "https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp" },
];

export default function Recognition() {
  return (
    <section id="recognition" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              CLIENT PARTNERS
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
              CLIENTS
            </h2>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-16 gap-x-12 items-center justify-items-center max-w-5xl mx-auto mt-16">
          {LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.05 }}
              className="w-full flex items-center justify-center select-none"
            >
              <div className="flex items-center justify-center w-full h-16 relative">
                <img
                  src={logo.imageUrl}
                  alt={logo.name}
                  referrerPolicy="no-referrer"
                  className="max-h-12 max-w-[140px] sm:max-w-[160px] object-contain filter grayscale hover:grayscale-0 opacity-90 hover:opacity-100 hover:scale-[1.05] transition-all duration-300 ease-out cursor-pointer"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
