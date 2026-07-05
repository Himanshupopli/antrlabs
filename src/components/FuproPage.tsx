import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Compass, Eye, Move, HelpCircle, Activity, Award } from "lucide-react";

interface FuproPageProps {
  onBack: () => void;
}

export default function FuproPage({ onBack }: FuproPageProps) {
  const [activeConcept, setActiveConcept] = useState<number>(0);

  // Four/five concepts explored
  const logoConcepts = [
    {
      id: 1,
      title: "Concept A: Abstract Movement",
      description: "Focusing purely on the mechanics of translation. A series of clean geometric segments shifting upward to denote momentum.",
      visualType: "momentum"
    },
    {
      id: 2,
      title: "Concept B: Biomechanics Bridge",
      description: "Intersecting curves symbolizing the connection between bone, joint, and carbon-fiber technology. High-precision alignment.",
      visualType: "biomechanics"
    },
    {
      id: 3,
      title: "Concept C: Human Potential",
      description: "An open, uplifted figure contour integrated with structural lines. A warm, humanistic representation celebrating active posture.",
      visualType: "human"
    },
    {
      id: 4,
      title: "Concept D: Technological Precision",
      description: "A sharp, grid-aligned typographic ligature combining the letterforms of 'F' and 'P' in perfect industrial balance.",
      visualType: "tech"
    },
    {
      id: 5,
      title: "Concept E: Kinetic Fluidity (The Selected Pivot)",
      description: "A continuous, single-stroke form that hints at natural gait kinetics. The ultimate simplification of natural walking curves.",
      visualType: "kinetic"
    }
  ];

  return (
    <div 
      id="fupro-case-study-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative"
    >
      
      {/* Back navigation assist */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          BACK TO SELECTED WORKS
        </button>
      </div>

      <main className="py-16 md:py-24">
        
        {/* 2. Headline - Redefining Movement. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Redefining</div>
            <div className="mt-1 font-light">Movement.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Fupro Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            Fupro
          </h1>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">Healthcare & Prosthetics</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2018</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">Brand Foundation</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                Brand Strategy • Logo Design • Visual Identity
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: The Thinking */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE THINKING
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Instead of beginning with aesthetics, the identity started with a simple question:
            </p>
            <div className="py-4">
              <blockquote className="font-display text-lg sm:text-xl md:text-2xl font-light text-white italic max-w-xl mx-auto">
                &ldquo;How do you visually represent movement without making the prosthetic the hero?&rdquo;
              </blockquote>
            </div>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The objective was to create a mark that celebrated human potential rather than limitation. Every concept explored a different relationship between people, technology and motion, balancing empathy with innovation.
            </p>
          </div>

          {/* Section: Logo Exploration (Interactive or visual representation) */}
          <div className="space-y-8">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                LOGO EXPLORATION
              </h2>
              <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light max-w-2xl mx-auto">
                Every direction explored a different interpretation of the brand — from abstract movement and biomechanics to human potential and technological precision. The process focused on simplifying complex ideas into symbols that could communicate instantly.
              </p>
            </div>

            {/* Sketches & digital logos representation */}
            <div className="py-6 border-y border-white/10">
              <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-4">
                SKETCHPAD TO VECTOR CONCEPTS
              </span>

              {/* Grid of the 5 concepts */}
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-left">
                {logoConcepts.map((concept, index) => (
                  <button
                    key={concept.id}
                    onClick={() => setActiveConcept(index)}
                    className={`p-4 rounded transition-all text-left focus:outline-none cursor-pointer ${
                      activeConcept === index 
                        ? "bg-neutral-900 border border-neutral-700 text-white" 
                        : "bg-transparent border border-transparent text-neutral-500 hover:text-neutral-300"
                    }`}
                  >
                    <div className="font-mono text-xs font-bold mb-1">{`0${concept.id}`}</div>
                    <div className="font-display text-xs font-semibold uppercase tracking-wider mb-2">
                      {concept.title.split(": ")[1]}
                    </div>
                    
                    {/* Tiny SVG vector thumbnail */}
                    <div className="h-16 w-full bg-neutral-950 rounded flex items-center justify-center mb-3">
                      {concept.visualType === "momentum" && (
                        <div className="flex flex-col gap-1">
                          <div className="w-8 h-1 bg-[#FF4500] opacity-40 translate-x-0"></div>
                          <div className="w-8 h-1 bg-[#FF4500] opacity-70 translate-x-1"></div>
                          <div className="w-8 h-1 bg-[#FF4500] translate-x-2"></div>
                        </div>
                      )}
                      {concept.visualType === "biomechanics" && (
                        <svg className="w-8 h-8 text-neutral-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                          <circle cx="50" cy="50" r="30" strokeDasharray="10, 10" />
                          <line x1="20" y1="50" x2="80" y2="50" />
                        </svg>
                      )}
                      {concept.visualType === "human" && (
                        <svg className="w-8 h-8 text-neutral-400" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="6">
                          <path d="M50 20 C40 30, 40 70, 50 80 M50 20 C60 30, 60 70, 50 80" />
                          <circle cx="50" cy="15" r="5" fill="currentColor" />
                        </svg>
                      )}
                      {concept.visualType === "tech" && (
                        <span className="font-display font-black text-xl text-neutral-400 tracking-tighter">FP</span>
                      )}
                      {concept.visualType === "kinetic" && (
                        <svg className="w-10 h-10 text-[#FF4500]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round">
                          <path d="M30,80 C35,40 50,20 70,25 C75,35 60,60 40,75" />
                        </svg>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Active concept detailed description box */}
              <div className="mt-6 p-4 bg-neutral-950 border border-neutral-900 rounded text-left">
                <span className="font-mono text-[9px] text-[#FF4500] uppercase tracking-widest font-semibold block mb-1">
                  CONCEPT {activeConcept + 1} SPECIFICATIONS
                </span>
                <h4 className="font-display text-sm font-bold uppercase tracking-wider text-white mb-2">
                  {logoConcepts[activeConcept].title}
                </h4>
                <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                  {logoConcepts[activeConcept].description}
                </p>
              </div>

            </div>
          </div>

          {/* Section: Why This Direction */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              WHY THIS DIRECTION
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The chosen identity simplifies the idea of movement into a single, ownable symbol. The flowing form creates the letter <strong className="text-white font-medium">F</strong> while subtly referencing the natural movement of a prosthetic foot in motion.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The result is clean, modern and memorable — combining human empathy with technological precision. Rather than focusing on disability, the identity communicates progress, confidence and possibility.
            </p>

            {/* Show the Final Logo (Pristine SVG path rendering) */}
            <div className="pt-8 flex flex-col items-center">
              <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-4">
                THE FINAL CHOSEN SYMBOL
              </span>
              <div className="w-32 h-32 bg-neutral-950 border border-neutral-900 rounded-lg flex items-center justify-center p-4">
                <svg className="w-20 h-20 text-[#FF4500]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                  {/* Flowing motion F with foot shape profile */}
                  <path d="M25 85 C28 50, 45 25, 75 25" />
                  <path d="M25 50 H65" />
                  <path d="M40 85 C55 85, 75 80, 80 65" strokeWidth="6" opacity="0.8" />
                </svg>
              </div>
              <span className="font-display text-sm font-bold tracking-[0.3em] text-white uppercase mt-4">
                FUPRO
              </span>
            </div>
          </div>

          {/* Section: Visual Identity Touchpoints */}
          <div className="space-y-8">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              VISUAL IDENTITY
            </h2>
            <p className="font-sans text-sm text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              The visual identity extends the same philosophy across every touchpoint through a minimal colour palette, clean typography and a flexible symbol designed to perform consistently across physical and digital applications.
            </p>

            {/* Physical Touchpoints minimalist block grids */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-6 text-left">
              
              <div className="bg-neutral-950 p-4 border border-neutral-900 rounded">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">STATIONERY</span>
                <div className="h-20 bg-neutral-900 rounded flex items-center justify-center">
                  <div className="w-10 h-14 bg-white/5 border border-white/10 rounded p-1 flex flex-col justify-between">
                    <div className="w-2 h-2 rounded-full bg-[#FF4500]"></div>
                    <div className="space-y-0.5">
                      <div className="w-6 h-[1px] bg-white/20"></div>
                      <div className="w-4 h-[1px] bg-white/20"></div>
                    </div>
                  </div>
                </div>
                <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider block mt-2">LETTERHEADS</span>
              </div>

              <div className="bg-neutral-950 p-4 border border-neutral-900 rounded">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">BUSINESS CARDS</span>
                <div className="h-20 bg-neutral-900 rounded flex items-center justify-center">
                  <div className="w-14 h-8 bg-black border border-white/10 rounded p-1 flex items-center justify-between">
                    <svg className="w-3 h-3 text-[#FF4500]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="12">
                      <path d="M25 85 C28 50, 45 25, 75 25" />
                    </svg>
                    <div className="space-y-0.5">
                      <div className="w-4 h-[1px] bg-white/40"></div>
                      <div className="w-2 h-[1px] bg-white/20"></div>
                    </div>
                  </div>
                </div>
                <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider block mt-2">DOUBLE-SIDED CARD</span>
              </div>

              <div className="bg-neutral-950 p-4 border border-neutral-900 rounded">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">PACKAGING</span>
                <div className="h-20 bg-neutral-900 rounded flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/10 rounded border border-white/20 flex flex-col justify-end p-1">
                    <div className="w-full h-1 bg-[#FF4500]/80"></div>
                  </div>
                </div>
                <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider block mt-2">RIGID GIFT BOXES</span>
              </div>

              <div className="bg-neutral-950 p-4 border border-neutral-900 rounded">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-2">USB & UTILITY</span>
                <div className="h-20 bg-neutral-900 rounded flex items-center justify-center">
                  <div className="w-10 h-4 bg-neutral-800 rounded-sm border border-neutral-700 flex items-center justify-end px-1">
                    <div className="w-2 h-2 bg-neutral-600 rounded-sm"></div>
                  </div>
                </div>
                <span className="font-display text-[10px] font-bold text-white uppercase tracking-wider block mt-2">CUSTOM FLASH DRIVES</span>
              </div>

            </div>
          </div>

          {/* Section: Where They Are Today */}
          <div className="space-y-6 text-left max-w-2xl mx-auto pt-6 border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                WHERE THEY ARE TODAY
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">NATIONAL RECOGNITION MILESTONE</p>
            </div>
            <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
              Several years after the identity was created, Fupro went on to be featured on <strong className="text-white font-medium">Shark Tank India Season 4</strong>, bringing national attention to its mission of building affordable prosthetic solutions.
            </p>
            <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
              While ANTR&apos;s role was limited to the original brand identity, seeing the brand grow onto a national platform remains a proud milestone in our journey of establishing resilient brand foundations.
            </p>
          </div>

        </div>

        {/* Dynamic back navigation footer button */}
        <div className="bg-neutral-950 border-t border-neutral-900 py-24 text-center">
          <div className="max-w-md mx-auto px-6">
            <button
              onClick={onBack}
              className="group inline-flex flex-col items-center gap-3 cursor-pointer bg-transparent border-none focus:outline-none"
            >
              <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center group-hover:border-[#FF4500] group-hover:bg-[#FF4500] transition-all">
                <ArrowLeft className="w-4 h-4 text-white group-hover:scale-110 transition-transform" />
              </div>
              <span className="font-mono text-xs tracking-[0.2em] text-neutral-400 group-hover:text-white transition-colors">
                RETURN TO PORTFOLIO
              </span>
            </button>
          </div>
        </div>

      </main>

    </div>
  );
}
