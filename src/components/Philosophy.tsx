import { motion } from "motion/react";

export default function Philosophy() {
  const steps = [
    {
      action: "Difference",
      connector: "becomes",
      result: "Differentiation.",
      desc: "Every enterprise starts with an inherent divergence. Our mandate is to find, refine, and champion that spark."
    },
    {
      action: "Differentiation",
      connector: "shapes",
      result: "Perception.",
      desc: "Unique values mean nothing in silence. We sculpt raw distinction into intuitive, compelling visual narratives."
    },
    {
      action: "Perception",
      connector: "creates",
      result: "Demand.",
      desc: "When perception is aligned with absolute quality, attraction replaces pursuit. Desire is born."
    }
  ];

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Core Philosophy Statement */}
        <div className="text-center mb-24 max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl tracking-wide leading-relaxed text-neutral-100 font-light"
          >
            ANTR means <span className="font-medium text-[#FF4500]">Difference</span>.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-lg sm:text-xl text-neutral-400 mt-8 leading-relaxed font-light"
          >
            Every business has one. <br className="hidden sm:inline" />
            Most fail to articulate it.
          </motion.p>
        </div>

        {/* Vertical Flowchart Cascade */}
        <div className="w-full flex flex-col items-center select-none">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group relative flex flex-col items-center text-center max-w-lg p-8 rounded-2xl border border-transparent hover:border-neutral-900 hover:bg-neutral-950/40 transition-all duration-500"
              >
                <div className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase mb-2">
                  PHASE 0{index + 1}
                </div>
                <h3 className="font-display text-3xl sm:text-4xl font-light text-white group-hover:text-[#FF4500] transition-colors duration-300">
                  {step.action}
                </h3>
                <span className="font-mono text-xs text-neutral-500 italic my-3 tracking-widest block">
                  {step.connector}
                </span>
                <h4 className="font-display text-3xl sm:text-4xl font-medium text-white">
                  {step.result}
                </h4>
                <p className="mt-4 text-xs sm:text-sm text-neutral-400 font-light leading-relaxed max-w-sm opacity-0 group-hover:opacity-100 h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                  {step.desc}
                </p>
              </motion.div>

              {/* Connecting Vertical Line (omitted after the final block) */}
              {index < steps.length - 1 && (
                <div className="py-8 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 64 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-[1px] bg-neutral-800"
                  />
                  <div className="w-1.5 h-1.5 rounded-full bg-neutral-800 my-1"></div>
                </div>
              )}
            </div>
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
