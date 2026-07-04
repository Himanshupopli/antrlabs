import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Award, Briefcase, Zap, Sparkles } from "lucide-react";

export default function Founder() {
  const [showTeam, setShowTeam] = useState(false);

  const bullets = [
    { text: "Ex-Founder, Sukham", icon: <Briefcase className="w-4 h-4 text-[#FF4500]" /> },
    { text: "10+ years across branding building", icon: <Sparkles className="w-4 h-4 text-[#FF4500]" /> },
    { text: "7+ years across venture building", icon: <Zap className="w-4 h-4 text-[#FF4500]" /> },
    { text: "As Seen on Shark Tank India", icon: <Award className="w-4 h-4 text-[#FF4500]" /> }
  ];

  const teamMembers = [
    {
      name: "Ishaan Mehta",
      role: "Creative Director",
      bio: "Crafting iconic visuals for over 8 years, former design lead at elite Scandinavian agencies.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Rhea Kapoor",
      role: "Head of Strategy",
      bio: "Uncovering category defining cultural insights. Ex-senior planner at Ogilvy & Mather.",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400"
    },
    {
      name: "Siddharth Roy",
      role: "Lead Web Architect",
      bio: "Engineering fast, beautiful digital products with precision. Full-stack design engineer.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400"
    }
  ];

  return (
    <section id="team" className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-20 text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              LEADERSHIP
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
              FOUNDER
            </h2>
          </motion.div>
        </div>

        {/* Founder Row */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Founder Portrait */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="md:col-span-5 relative"
          >
            {/* Elegant framing border offset */}
            <div className="absolute inset-4 border border-[#FF4500] translate-x-3 translate-y-3 rounded-2xl pointer-events-none z-0"></div>
            
            <div className="relative z-10 aspect-[4/5] rounded-2xl overflow-hidden bg-neutral-900 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Ananya Sarkar - Founder"
                loading="lazy"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </div>
          </motion.div>

          {/* Founder Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:col-span-7 text-left flex flex-col justify-center"
          >
            <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white mb-2">
              Ananya Sarkar
            </h3>
            <p className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase mb-8">
              Founder & Brand Architect
            </p>

            {/* Bullet List with Custom Icon Borders */}
            <div className="space-y-6 max-w-lg mb-10">
              {bullets.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-10 h-10 rounded-full bg-neutral-950 border border-neutral-900 group-hover:border-[#FF4500]/50 transition-colors flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="font-sans text-base sm:text-lg text-neutral-300 font-light tracking-wide group-hover:text-white transition-colors">
                    {item.text}
                  </span>
                </motion.div>
              ))}
            </div>
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
                    className="group bg-neutral-950/40 border border-neutral-900 hover:border-neutral-800 rounded-2xl p-6 text-left transition-all duration-300"
                  >
                    <div className="aspect-[4/5] rounded-xl overflow-hidden bg-neutral-900 mb-6 relative">
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
