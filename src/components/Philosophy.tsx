import { motion } from "motion/react";

export default function Philosophy() {
  const steps = [
    {
      action: "Difference",
      connector: "becomes",
      result: "Differentiation.",
    },
    {
      action: "Differentiation",
      connector: "shapes",
      result: "Perception.",
    },
    {
      action: "Perception",
      connector: "creates",
      result: "Demand.",
    }
  ];

  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative"
    >
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        {/* Core Philosophy Statement */}
        <div className="text-center mb-16 max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-display text-2xl sm:text-3xl tracking-widest text-white font-medium uppercase mb-4"
          >
            ANTR means Difference.
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="font-sans text-base sm:text-lg text-neutral-400 font-light space-y-2 mt-6"
          >
            <p>Every business has one.</p>
            <p>Most fail to articulate it.</p>
          </motion.div>
        </div>

        {/* Vertical Flowchart Cascade */}
        <div className="w-full flex flex-col items-center select-none mt-12">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center w-full">
              {/* Step Block */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="flex flex-col items-center text-center py-4"
              >
                <h3 className="font-display text-3xl sm:text-4xl font-light text-white tracking-widest uppercase">
                  {step.action}
                </h3>
                <span className="font-sans text-sm text-neutral-500 italic my-4 tracking-widest block">
                  {step.connector}
                </span>
                <h4 className="font-display text-3xl sm:text-4xl font-semibold text-white tracking-widest uppercase">
                  {step.result}
                </h4>
              </motion.div>

              {/* Connecting Vertical Line (omitted after the final block) */}
              {index < steps.length - 1 && (
                <div className="py-12 flex flex-col items-center">
                  <motion.div
                    initial={{ height: 0 }}
                    whileInView={{ height: 96 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 }}
                    className="w-[1px] bg-neutral-800 relative"
                  >
                    <motion.div
                      initial={{ top: "0%", opacity: 0 }}
                      whileInView={{ top: "100%", opacity: [0, 1, 1, 0] }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 1.5,
                        delay: 0.6,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 1.5
                      }}
                      className="absolute left-1/2 -translate-x-1/2 w-1.5 h-1.5 rounded-full bg-[#FF4500] shadow-[0_0_8px_rgba(255,69,0,0.8)]"
                    />
                  </motion.div>
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
