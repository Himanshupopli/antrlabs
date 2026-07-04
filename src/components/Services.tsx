import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Heading from PDF */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-white uppercase"
          >
            HOW WE CREATE ANTR
          </motion.h2>
        </div>

        {/* 3x3 Collapsing-Border Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-t border-l border-neutral-900">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="border-b border-r border-neutral-900 py-16 px-6 flex items-center justify-center text-center hover:bg-neutral-950/50 transition-colors duration-300 group relative overflow-hidden"
            >
              <span className="font-display text-lg sm:text-xl tracking-[0.2em] font-medium text-neutral-400 group-hover:text-white group-hover:scale-[1.02] transition-all duration-300 uppercase leading-snug z-10">
                {service.title}
              </span>
              
              {/* Subtle orange indicator that glows on hover */}
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-[2px] bg-[#FF4500] group-hover:w-1/3 transition-all duration-500 ease-out shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
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
