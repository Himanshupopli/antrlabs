import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowUpRight, Award } from "lucide-react";
import { PROJECTS } from "../data";
import { Project } from "../types";
import WorkDetailPage from "./WorkDetailPage";

export default function Portfolio({ onViewAll }: { onViewAll?: () => void }) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const visibleProjects = [
    PROJECTS.find(p => p.id === "siyah"),
    PROJECTS.find(p => p.id === "sukham"),
    PROJECTS.find(p => p.id === "mytrident")
  ].filter((p): p is Project => p !== undefined);

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
        {/* Centered Section Heading from PDF */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-white uppercase"
          >
            SELECTED
            <br />
            WORKS
          </motion.h2>
        </div>

        {/* Portfolio Grid matching PDF (borderless, flat black layout) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer flex flex-col h-full bg-transparent border-0 p-0 transition-all duration-300"
            >
              {/* Sharp Image/Video Container with precise aspect-ratio */}
              <div className="relative aspect-[3/4] overflow-hidden bg-neutral-950 mb-6 border border-neutral-900 flex items-center justify-center">
                {project.id === "sukham" ? (
                  <iframe
                    src="https://www.youtube.com/embed/6R-cqq89O-Q?autoplay=1&mute=1&loop=1&playlist=6R-cqq89O-Q&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3"
                    className="w-full h-full border-0 pointer-events-none bg-black scale-[1.35]"
                    allow="autoplay; encrypted-media"
                    title="Sukham Feature Video"
                  />
                ) : project.id === "siyah" ? (
                  <iframe
                    src="https://www.youtube.com/embed/v56AMveBcXI?autoplay=1&mute=1&loop=1&playlist=v56AMveBcXI&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3"
                    className="w-full h-full border-0 pointer-events-none bg-black scale-[1.35]"
                    allow="autoplay; encrypted-media"
                    title="Siyah Feature Video"
                  />
                ) : project.id === "mytrident" ? (
                  <iframe
                    src="https://www.youtube.com/embed/mwVPxoxvCEk?autoplay=1&mute=1&loop=1&playlist=mwVPxoxvCEk&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3"
                    className="w-full h-full border-0 pointer-events-none bg-black scale-[1.35]"
                    allow="autoplay; encrypted-media"
                    title="MyTrident Feature Video"
                  />
                ) : (
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out p-2"
                  />
                )}

                {/* Shark Tank Badge Overlay */}
                {project.isSharkTank && (
                  <div className="absolute top-0 right-0 bg-[#0E62A2] text-white px-3 py-1 font-sans text-right select-none shadow-lg border-l-2 border-b-2 border-yellow-400">
                    <div className="text-[7px] tracking-widest font-black uppercase opacity-90 leading-none">AS SEEN ON</div>
                    <div className="text-[12px] font-black tracking-tight uppercase leading-none mt-0.5">SHARK TANK</div>
                    <div className="text-[8px] font-bold tracking-widest uppercase text-yellow-300 leading-none text-center">INDIA</div>
                  </div>
                )}

                {/* Hover Overlay Detail */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center scale-75 group-hover:scale-100 transition-transform duration-300">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Work Details aligned exactly as in PDF */}
              <div className="flex flex-col flex-grow text-left">
                <h3 className="font-display text-2xl font-bold tracking-wider text-white group-hover:text-[#FF4500] transition-colors mb-2">
                  {project.title}
                </h3>
                
                <h4 className="font-sans text-sm text-neutral-300 tracking-wide font-medium mb-1">
                  {project.subtitle}
                </h4>

                <p className="font-sans text-xs text-neutral-500 mb-1 leading-relaxed">
                  {project.description}
                </p>

                <p className="font-sans text-xs text-neutral-500">
                  {project.duration}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View All Work Link aligned to the right, with a clean horizontal line */}
        {onViewAll && (
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 flex justify-end"
          >
            <button
              onClick={onViewAll}
              className="group flex items-center gap-4 text-neutral-400 hover:text-white transition-colors py-2 focus:outline-none cursor-pointer"
            >
              <span className="font-mono text-xs tracking-[0.3em] uppercase">VIEW ALL WORK</span>
              <span className="w-16 h-[1px] bg-neutral-800 group-hover:w-28 group-hover:bg-[#FF4500] transition-all duration-500"></span>
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
