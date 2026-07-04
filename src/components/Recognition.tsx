import { motion } from "motion/react";
import { CLIENT_LOGOS } from "../data";

export default function Recognition() {
  return (
    <section id="recognition" className="py-24 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              PARTNERS & ACCLAIM
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
              RECOGNITION
            </h2>
          </motion.div>
        </div>

        {/* Client Logos Grid */}
        {/* Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-8 md:gap-x-12 items-center justify-items-center max-w-5xl mx-auto">
          {CLIENT_LOGOS.map((logo, index) => (
            <motion.div
              key={logo.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
              className="w-full flex items-center justify-center py-6 px-4 bg-neutral-950/20 border border-neutral-900/50 hover:border-neutral-800/80 rounded-xl hover:bg-neutral-950/80 transition-all duration-300 group cursor-default select-none"
            >
              <div className="flex items-center gap-3 opacity-30 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500">
                {/* Modern Geometric Logo Icon representing high-end aesthetic */}
                <div className="w-5 h-5 rounded-md border-2 border-white group-hover:border-[#FF4500] flex items-center justify-center flex-shrink-0 transition-colors duration-300">
                  <div className="w-1.5 h-1.5 rounded-sm bg-white group-hover:bg-[#FF4500] transition-colors duration-300"></div>
                </div>
                
                {/* Brand name */}
                <span className="font-display text-sm md:text-base font-bold tracking-[0.15em] text-white group-hover:text-white transition-colors duration-300">
                  {logo.name}
                </span>
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
