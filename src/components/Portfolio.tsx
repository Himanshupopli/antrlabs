import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Award } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import WorkDetailPage from "./WorkDetailPage";

export default function Portfolio({ onViewAll }: { onViewAll?: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  if (selectedProject) {
    const detailedProject = {
      id: selectedProject.id,
      title: selectedProject.title,
      subtitle: selectedProject.subtitle,
      description: selectedProject.description,
      category: selectedProject.id === "mytrident" ? "Social Campaigns" : (selectedProject.id === "sukham" ? "D2C Scaling" : "Identity & Packaging"),
      tags: selectedProject.id === "sukham" ? ["Venture Architecture", "UX/UI Design", "Unboxing Rituals", "Shark Tank India"] : ["Brand Identity", "Sustainable Packaging", "Retail Experience", "Shark Tank India"],
      duration: selectedProject.duration,
      year: selectedProject.id === "sukham" ? "2026" : "2025",
      imageUrl: selectedProject.imageUrl,
      isSharkTank: selectedProject.isSharkTank,
      metrics: selectedProject.id === "sukham" ? [
        { label: "Valuation Scaled", value: "Eight Figures" },
        { label: "UX Conversion Rate", value: "+42% Uplift" },
        { label: "Organic Return Rates", value: "55% Retention" }
      ] : [
        { label: "Outlets Opened", value: "3 Locations" },
        { label: "Footfall Increase", value: "+180%" },
        { label: "Packaging Costs", value: "-15% Eco-Safe" }
      ],
      challenge: "",
      strategy: "",
      outcomes: selectedProject.extraDetails || []
    };

    return (
      <WorkDetailPage
        project={detailedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <section id="work" className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <div className="mb-16 md:mb-24 flex justify-between items-end">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              PORTFOLIO
            </span>
            <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-widest text-white uppercase">
              SELECTED WORKS
            </h2>
          </motion.div>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col h-full bg-neutral-950/20 border border-neutral-950 hover:border-neutral-900 rounded-2xl p-4 transition-all duration-500"
            >
              {/* Image Container with precise aspect-ratio */}
              <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-neutral-900 mb-6">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-105 transition-all duration-700 ease-out"
                />

                {/* Shark Tank Badge Overlay */}
                {project.isSharkTank && (
                  <div className="absolute top-4 left-4 bg-black/85 backdrop-blur-md text-[#FF4500] border border-[#FF4500]/30 py-1.5 px-3 rounded-full flex items-center gap-1.5 shadow-xl">
                    <Award className="w-3.5 h-3.5 fill-current" />
                    <span className="font-mono text-[9px] font-bold tracking-widest uppercase">
                      SHARK TANK INDIA
                    </span>
                  </div>
                )}

                {/* Hover Overlay Detail */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-500">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Work Details */}
              <div className="flex flex-col flex-grow text-left">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-display text-2xl font-bold tracking-wide text-white group-hover:text-[#FF4500] transition-colors">
                    {project.title}
                  </h3>
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider">
                    {project.duration}
                  </span>
                </div>
                
                <h4 className="font-sans text-xs text-neutral-400 tracking-wide font-light mb-3">
                  {project.subtitle}
                </h4>

                <p className="font-mono text-[11px] text-neutral-500 border-t border-neutral-900 pt-3 mt-auto tracking-wider uppercase">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work Link */}
        {onViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-20 flex justify-center"
          >
            <button
              onClick={onViewAll}
              className="group flex flex-col items-center text-center font-mono text-xs tracking-[0.3em] text-neutral-400 hover:text-white transition-colors py-4 px-8 focus:outline-none cursor-pointer"
            >
              <span className="mb-2">VIEW ALL COMPLETED WORKS</span>
              <span className="w-12 h-[1px] bg-neutral-800 group-hover:w-24 group-hover:bg-[#FF4500] transition-all duration-500"></span>
            </button>
          </motion.div>
        )}
      </div>

      {/* Case Study Detailed Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl overflow-y-auto px-6 py-12 flex justify-center items-start md:items-center"
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              className="bg-neutral-950 border border-neutral-900 w-full max-w-4xl rounded-3xl overflow-hidden shadow-2xl relative mt-8 md:mt-0"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 z-10 bg-black/80 hover:bg-neutral-900 text-white p-2.5 rounded-full border border-neutral-800 transition-colors focus:outline-none"
                aria-label="Close Case Study"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                {/* Left: Project Image & Basic Meta */}
                <div className="relative aspect-[4/5] md:aspect-auto md:h-full bg-neutral-900">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                  {selectedProject.isSharkTank && (
                    <div className="absolute bottom-6 left-6 bg-black/85 backdrop-blur-md text-[#FF4500] border border-[#FF4500]/30 py-1.5 px-4 rounded-full flex items-center gap-1.5">
                      <Award className="w-4 h-4 fill-current" />
                      <span className="font-mono text-[10px] font-bold tracking-widest uppercase">
                        SHARK TANK FEATURED
                      </span>
                    </div>
                  )}
                </div>

                {/* Right: Detailed Case Study */}
                <div className="p-8 md:p-12 flex flex-col justify-between">
                  <div className="text-left">
                    <span className="font-mono text-[10px] text-[#FF4500] tracking-[0.25em] uppercase block mb-2">
                      CASE STUDY — {selectedProject.duration}
                    </span>
                    <h3 className="font-display text-4xl font-bold tracking-wide text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <h4 className="font-sans text-sm text-neutral-400 font-light tracking-wide mb-6">
                      {selectedProject.subtitle}
                    </h4>

                    <div className="border-t border-neutral-900 pt-6 mt-6">
                      <h5 className="font-mono text-[11px] text-neutral-500 uppercase tracking-widest mb-4">
                        Core Achievements:
                      </h5>
                      <ul className="space-y-4">
                        {selectedProject.extraDetails?.map((detail, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0" />
                            <p className="font-sans text-sm text-neutral-300 leading-relaxed font-light">
                              {detail}
                            </p>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="border-t border-neutral-900 pt-8 mt-8 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="font-mono text-[9px] text-neutral-600 uppercase tracking-widest block">
                        Deliverable
                      </span>
                      <span className="font-mono text-xs text-neutral-400 uppercase tracking-wider">
                        {selectedProject.description}
                      </span>
                    </div>
                    <button
                      onClick={() => setSelectedProject(null)}
                      className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none"
                    >
                      Close Details
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
