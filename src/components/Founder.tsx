import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus } from "lucide-react";

export default function Founder() {
  const [showTeam, setShowTeam] = useState(false);

  const bullets = [
    "Ex-Founder, Sukham",
    "10+ years across branding building",
    "7+ years across venture building",
    "As Seen on Shark Tank India"
  ];

  const teamMembers = [
    {
      name: "Himanshu Popli",
      role: "Tech",
      bio: "5+ Years Building Digital Products, specializing in scalable platforms, technical systems, and full stack performance optimization.",
      avatar: "https://lh3.googleusercontent.com/d/1wCTlZ2gXzgLOxnFGvhdVk2Ijbzm29e-f"
    },
    {
      name: "Pragati Singh",
      role: "Content",
      bio: "9+ Years in Content & Communications, expert in government, media & brand storytelling. Research-driven content strategist & ex-journalist.",
      avatar: "https://lh3.googleusercontent.com/d/1C_BZh0UkjxZnI8qiiel72hmvUn-frLTb"
    },
    {
      name: "Shubham Soni",
      role: "Growth",
      bio: "9+ Years in D2C & E-commerce Growth, specializing in Shopify, Meta & Google Ads, and custom analytics-driven growth systems.",
      avatar: "https://lh3.googleusercontent.com/d/1t5mWm0SdcDh35DFCtJGkqjKN2x_YbORY"
    }
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
                src="https://lh3.googleusercontent.com/d/1KYCh6JslUoRBcp57J63drp1Y5557_Yew"
                alt="Ananya Sarkar - Founder"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale"
              />
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

        {/* Meet the Team Divider & Button */}
        <div className="mt-20 border-t border-neutral-900 pt-10 flex flex-col items-center">
          <button
            onClick={() => setShowTeam(!showTeam)}
            className="group flex flex-col items-center text-center font-mono text-xs tracking-[0.3em] text-neutral-400 hover:text-white transition-all py-4 focus:outline-none"
          >
            <span className="mb-2 flex items-center gap-2">
              {showTeam ? "HIDE TEAM MEMBERS" : "MEET THE TEAM"}
              <Plus className={`w-3.5 h-3.5 transition-transform duration-300 ${showTeam ? "rotate-45 text-[#FF4500]" : ""}`} />
            </span>
            <span className={`h-[1px] bg-neutral-800 transition-all duration-500 ${showTeam ? "w-24 bg-[#FF4500]" : "w-12 group-hover:w-24"}`}></span>
          </button>
        </div>

        {/* Dynamic Staggered Team Display */}
        <AnimatePresence>
          {showTeam && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-12">
                {teamMembers.map((member, index) => (
                  <motion.div
                    key={member.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="group bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800 p-6 text-left transition-all duration-300 rounded-none"
                  >
                    <div className="aspect-[4/5] rounded-none overflow-hidden bg-neutral-900 mb-6 relative">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        loading="lazy"
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                      />
                    </div>
                    <h4 className="font-display text-xl font-bold text-white mb-1 group-hover:text-[#FF4500] transition-colors">
                      {member.name}
                    </h4>
                    <span className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase block mb-4">
                      {member.role}
                    </span>
                    <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                      {member.bio}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
