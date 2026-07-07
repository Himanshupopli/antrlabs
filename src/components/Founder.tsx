import { motion } from "motion/react";

export default function Founder() {
  const bullets = [
    "10+ years across branding building",
    "7+ years across venture building",
    "As Seen on Shark Tank India",
    "Ex-Founder, Sukham"
  ];

  return (
    <section id="team" className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Centered Section Heading from PDF */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-white uppercase"
          >
            FOUNDER
          </motion.h2>
        </div>

        {/* Founder Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Portrait (Sharp rectangle, clean border) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="md:col-span-5 relative"
          >
            <div className="relative z-10 aspect-[4/5] rounded-none overflow-hidden bg-neutral-950 border border-neutral-900">
              <img
                src="https://res.cloudinary.com/dqdvr35aj/image/upload/v1783329679/WhatsApp_Image_2026-07-06_at_2.48.33_PM_tjwvrl.jpg"
                alt="Ananya Sarkar - Founder"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
              {/* Shark Tank Logo sticker on top of Founder image */}
              <div className="absolute top-0 left-0 z-20 select-none pointer-events-none">
                <img
                  src="https://res.cloudinary.com/dqdvr35aj/image/upload/v1783330266/shark_tank_logo_sticker_l1svt1.png"
                  alt="Shark Tank India"
                  className="w-16 sm:w-20 h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </motion.div>

          {/* Founder Bio */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="md:col-span-7 text-left flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wider text-white mb-2">
              Ananya Sarkar
            </h3>
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-8">
              Founder & Brand Architect
            </p>

            {/* Bullet List matching PDF exactly */}
            <ul className="space-y-4 max-w-lg mb-10 list-none pl-0">
              {bullets.map((bullet, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: 5 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="font-sans text-base sm:text-lg text-neutral-300 font-light tracking-wide flex items-start gap-3"
                >
                  <span className="text-[#FF4500] mt-1 text-sm">•</span>
                  <span>{bullet}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

      </div>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
