import { motion } from "motion/react";
import { SERVICES } from "../data";

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Centered Section Heading */}
        <div className="mb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              METHODOLOGY
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-white uppercase">
              HOW WE CREATE ANTR
            </h2>
          </motion.div>
        </div>

        {/* 4x2 Collapsing-Border Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 border-t border-l border-neutral-900">
          {SERVICES.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.05 }}
              className="border-b border-r border-neutral-900 py-16 px-8 flex flex-col justify-start text-left hover:bg-neutral-950/50 transition-colors duration-300 group relative overflow-hidden h-full min-h-[300px]"
            >
              {/* Subtle dynamic index number */}
              <span className="font-mono text-[10px] text-neutral-600 group-hover:text-[#FF4500] transition-colors mb-6 tracking-widest block">
                [ 0{index + 1} ]
              </span>
              
              <h3 className="font-display text-base sm:text-lg tracking-[0.1em] font-bold text-neutral-200 group-hover:text-white transition-all duration-300 uppercase leading-snug mb-4 z-10">
                {service.title}
              </h3>

              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed group-hover:text-neutral-300 transition-colors z-10">
                {service.description}
              </p>
              
              {/* Subtle orange indicator that glows on hover */}
              <div className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#FF4500] group-hover:w-full transition-all duration-500 ease-out shadow-[0_0_8px_rgba(255,69,0,0.8)]" />
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
