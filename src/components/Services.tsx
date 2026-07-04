import { ComponentType } from "react";
import { motion } from "motion/react";
import { SERVICES } from "../data";
import {
  Compass,
  Target,
  Layers,
  MessageSquare,
  Video,
  Smartphone,
  TrendingUp,
  Palette,
  Box,
} from "lucide-react";

const ICON_MAP: Record<string, ComponentType<any>> = {
  strategy: Compass,
  positioning: Target,
  identity: Layers,
  communication: MessageSquare,
  content: Video,
  digital: Smartphone,
  growth: TrendingUp,
  creative: Palette,
  product: Box,
};

export default function Services() {
  return (
    <section
      id="services"
      className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative overflow-hidden"
    >
      {/* Subtle Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#FF4500]/5 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Heading */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-[11px] tracking-[0.4em] text-[#FF4500] uppercase block mb-3">
              Operational Blueprint
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase mb-6">
              HOW WE CREATE ANTR
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
              We translate raw, unfiltered brand differences into elite digital storefronts, sustainable physical products, and viral narrative systems.
            </p>
          </motion.div>
        </div>

        {/* 3x3 Methodology Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {SERVICES.map((service, index) => {
            const IconComponent = ICON_MAP[service.id] || Compass;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.08 }}
                whileHover={{ y: -6 }}
                className="group flex flex-col justify-between p-8 rounded-2xl bg-neutral-950/40 border border-neutral-900/60 hover:border-[#FF4500]/30 hover:bg-neutral-950/80 transition-all duration-300 text-left"
              >
                <div>
                  {/* Icon & Index Number */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 rounded-xl bg-neutral-900/50 border border-neutral-800 text-neutral-400 group-hover:border-[#FF4500]/50 group-hover:text-[#FF4500] group-hover:shadow-[0_0_15px_rgba(255,69,0,0.15)] transition-all duration-300">
                      <IconComponent className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[10px] text-neutral-600 tracking-widest group-hover:text-[#FF4500]/70 transition-colors duration-300">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Service Title */}
                  <h3 className="font-display text-xl font-semibold tracking-wide text-white mb-3">
                    {service.title}
                  </h3>

                  {/* Service Description */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 leading-relaxed font-light group-hover:text-neutral-300 transition-colors duration-300">
                    {service.description}
                  </p>
                </div>

                {/* Corner detail accent */}
                <div className="mt-8 flex justify-end">
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 group-hover:bg-[#FF4500] transition-colors duration-300" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
