import React, { useState } from "react";
import { motion } from "motion/react";
import { ArrowLeft, Award, Activity, Compass } from "lucide-react";

interface FuproPageProps {
  onBack: () => void;
}

export default function FuproPage({ onBack }: FuproPageProps) {
  const [activeConcept, setActiveConcept] = useState<number>(4); // Default to Concept E (Chosen Pivot)

  // Five concepts explored matching the user prompt and technical narrative
  const logoConcepts = [
    {
      id: 1,
      title: "Concept A: Abstract Movement",
      description: "Focuses purely on the mechanics of translation. A series of clean geometric segments shifting upward in a staggered grid to denote kinetic momentum and step acceleration.",
      visualType: "momentum"
    },
    {
      id: 2,
      title: "Concept B: Biomechanics Bridge",
      description: "Intersecting geometric arcs symbolizing the precise structural connection between joints, orthopedic alignments, and carbon-fiber prosthetic response curves.",
      visualType: "biomechanics"
    },
    {
      id: 3,
      title: "Concept C: Human Potential",
      description: "An uplifting, organic posture integrated with structural coordinate lines. A warm, humanistic representation celebrating athletic confidence rather than limitation.",
      visualType: "human"
    },
    {
      id: 4,
      title: "Concept D: Technological Precision",
      description: "A sharp, grid-aligned typographic ligature combining the letterforms of 'F' and 'P' in perfect industrial balance, referencing machine-grade tolerances.",
      visualType: "tech"
    },
    {
      id: 5,
      title: "Concept E: Kinetic Fluidity (Selected)",
      description: "A continuous, single-stroke sweep that simplifies the kinetics of a natural gait. The ultimate geometric representation of a prosthetic foot in motion.",
      visualType: "kinetic"
    }
  ];

  return (
    <div 
      id="fupro-case-study-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative"
    >
      
      {/* 1. Back navigation assist */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
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
            <div className="mt-1 font-light text-white uppercase">Movement.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large Fupro Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            Fupro
          </h1>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Healthcare & Prosthetics</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Brand Foundation</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2018</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Brand Strategy • Logo Design • Visual Identity
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-4xl mx-auto px-6 space-y-32 mb-32 text-center">
          
          {/* Section: The Thinking */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <div className="flex justify-center mb-4">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-[#FF4500]">
                <Compass className="w-5 h-5" />
              </div>
            </div>
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE THINKING
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Instead of beginning with aesthetics, the identity started with a simple question:
            </p>
            <div className="py-6 border-y border-white/5 my-4">
              <blockquote className="font-display text-xl sm:text-2xl md:text-3xl font-extralight text-white italic tracking-wide">
                &ldquo;How do you visually represent movement without making the prosthetic the hero?&rdquo;
              </blockquote>
            </div>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              The objective was to create a mark that celebrated human potential rather than limitation. Every concept explored a different relationship between people, technology and motion, balancing empathy with innovation.
            </p>
          </div>

          {/* Section: Logo Exploration */}
          <div className="space-y-10 pt-4">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                LOGO EXPLORATION
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">SKETCHPAD & VECTOR DIRECTIONS</p>
            </div>

            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              Every direction explored a different interpretation of the brand - from abstract movement and biomechanics to human potential and technological precision. The process focused on simplifying complex ideas into symbols that could communicate instantly.
            </p>
            
            {/* Elegant Concept Interactive Grid */}
            <div className="py-6 border-t border-white/10">
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4 max-w-5xl mx-auto text-left pt-4">
                {logoConcepts.map((concept, index) => (
                  <button
                    key={concept.id}
                    onClick={() => setActiveConcept(index)}
                    className={`p-4 rounded-xl transition-all text-left focus:outline-none cursor-pointer flex flex-col justify-between aspect-square border ${
                      activeConcept === index 
                        ? "bg-neutral-900 border-[#FF4500]/50 text-white shadow-2xl" 
                        : "bg-neutral-950/40 border-neutral-900 text-neutral-500 hover:text-neutral-300 hover:border-neutral-800"
                    }`}
                  >
                    <div>
                      <div className="font-mono text-[10px] font-bold text-neutral-500 mb-1">{`CONCEPT 0${concept.id}`}</div>
                      <div className="font-display text-[11px] font-bold uppercase tracking-wider line-clamp-1">
                        {concept.title.split(": ")[1]}
                      </div>
                    </div>
                    
                    {/* Specialized SVG Vector Renderers */}
                    <div className="h-20 w-full bg-neutral-950/80 rounded-lg flex items-center justify-center my-3 relative overflow-hidden">
                      {concept.visualType === "momentum" && (
                        <svg className="w-12 h-12 text-[#FF4500]" viewBox="0 0 100 100" fill="none">
                          <path d="M10 20 H90 M10 40 H90 M10 60 H90 M10 80 H90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                          <path d="M20 10 V90 M40 10 V90 M60 10 V90 M80 10 V90" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                          <rect x="20" y="32" width="20" height="4" rx="2" fill="#FF4500" opacity="0.3" />
                          <rect x="35" y="48" width="30" height="4" rx="2" fill="#FF4500" opacity="0.6" />
                          <rect x="55" y="64" width="25" height="4" rx="2" fill="#FF4500" />
                        </svg>
                      )}
                      {concept.visualType === "biomechanics" && (
                        <svg className="w-12 h-12 text-[#FF4500]" viewBox="0 0 100 100" fill="none">
                          <circle cx="50" cy="50" r="32" stroke="rgba(255,255,255,0.03)" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M50 15 V85 M15 50 H85" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="3,3" />
                          <path d="M30 70 C35 55, 45 45, 70 30" stroke="#FF4500" strokeWidth="3" strokeLinecap="round" />
                          <circle cx="30" cy="70" r="4.5" fill="black" stroke="#FF4500" strokeWidth="2.5" />
                          <circle cx="50" cy="50" r="5" fill="#FF4500" />
                          <circle cx="70" cy="30" r="4.5" fill="black" stroke="#FF4500" strokeWidth="2.5" />
                          <path d="M50 50 L75 75" stroke="white" strokeWidth="1.5" strokeDasharray="3,3" opacity="0.5" />
                        </svg>
                      )}
                      {concept.visualType === "human" && (
                        <svg className="w-12 h-12 text-[#FF4500]" viewBox="0 0 100 100" fill="none">
                          <path d="M35 75 Q50 60 45 40 Q52 28 65 20" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.8" />
                          <path d="M42 45 Q55 55 68 70" stroke="#FF4500" strokeWidth="2" strokeLinecap="round" />
                          <circle cx="66" cy="15" r="5.5" fill="#FF4500" />
                          <path d="M72 10 L78 6 M62 8 L58 4 M78 20 L84 22" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
                        </svg>
                      )}
                      {concept.visualType === "tech" && (
                        <svg className="w-12 h-12 text-[#FF4500]" viewBox="0 0 100 100" fill="none">
                          <rect x="25" y="25" width="50" height="50" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2,2" />
                          <path d="M50 20 V80 M20 50 H80" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                          <path d="M35 75 V28 H65 M35 48 H55" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" />
                          <path d="M35 48 C48 48, 55 58, 55 68 C55 78, 45 78, 35 78" stroke="#FF4500" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      )}
                      {concept.visualType === "kinetic" && (
                        <svg className="w-12 h-12 text-[#FF4500]" viewBox="0 0 100 100" fill="none">
                          <path d="M25 80 C28 45, 45 20, 75 20" stroke="#FF4500" strokeWidth="5" strokeLinecap="round" />
                          <path d="M25 45 H60" stroke="#FF4500" strokeWidth="5" strokeLinecap="round" />
                          <path d="M38 80 C50 80, 70 75, 75 60" stroke="white" strokeWidth="3.5" strokeLinecap="round" opacity="0.85" />
                          <path d="M15 80 H85" stroke="rgba(255,255,255,0.1)" strokeWidth="1" strokeDasharray="3,3" />
                        </svg>
                      )}
                    </div>

                    <span className="font-mono text-[9px] text-[#FF4500] font-bold uppercase tracking-wider">
                      {activeConcept === index ? "ACTIVE REF" : "EXPLORE →"}
                    </span>
                  </button>
                ))}
              </div>

              {/* Spec-box describing the active concept */}
              <div className="mt-6 p-5 bg-neutral-950 border border-neutral-900 rounded-xl text-left max-w-5xl mx-auto">
                <span className="font-mono text-[9px] text-[#FF4500] uppercase tracking-widest font-bold block mb-1">
                  METICULOUS CONFIGURATION SPEC // DIRECTION 0{activeConcept + 1}
                </span>
                <h4 className="font-display text-base font-bold uppercase tracking-wider text-white mb-2">
                  {logoConcepts[activeConcept].title}
                </h4>
                <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed">
                  {logoConcepts[activeConcept].description}
                </p>
              </div>
            </div>
          </div>

          {/* Section: Why This Direction */}
          <div className="space-y-12 pt-4">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                WHY THIS DIRECTION
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">SELECTED PRIMARY IDENTITY MARK</p>
            </div>

            <div className="text-left max-w-2xl mx-auto space-y-6">
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The chosen identity simplifies the idea of movement into a single, ownable symbol. The flowing form creates the letter <strong className="text-white font-medium">F</strong> while subtly referencing the natural movement of a prosthetic foot in motion.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The result is clean, modern and memorable - combining human empathy with technological precision. Rather than focusing on disability, the identity communicates progress, confidence and possibility.
              </p>
            </div>

            {/* Show the Final Logo with technical schematic overlays */}
            <div className="pt-6 flex flex-col items-center max-w-xl mx-auto">
              <div className="w-full aspect-square sm:aspect-[16/10] bg-neutral-950 border border-neutral-900 rounded-2xl flex items-center justify-center p-8 relative overflow-hidden group shadow-2xl">
                {/* Engineering technical lines background */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#111111_1px,transparent_1px),linear-gradient(to_bottom,#111111_1px,transparent_1px)] bg-[size:1.5rem_1.5rem] pointer-events-none opacity-40" />
                <div className="absolute w-[200px] h-[200px] rounded-full border border-neutral-900/30 pointer-events-none" />
                <div className="absolute w-[350px] h-[350px] rounded-full border border-neutral-900/10 pointer-events-none" />
                
                {/* Diagonal angle helpers */}
                <div className="absolute w-full h-[1px] bg-neutral-900/20 rotate-12 pointer-events-none" />
                <div className="absolute w-full h-[1px] bg-neutral-900/20 -rotate-12 pointer-events-none" />

                {/* Main Logo Container */}
                <div className="relative z-10 flex flex-col items-center gap-4">
                  <svg className="w-24 h-24 text-[#FF4500] drop-shadow-[0_0_15px_rgba(255,69,0,0.15)]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="8.5" strokeLinecap="round" strokeLinejoin="round">
                    {/* Flowing motion F with foot shape profile */}
                    <path d="M25 80 C28 45, 45 20, 75 20" />
                    <path d="M25 45 H60" />
                    <path d="M38 80 C50 80, 70 75, 75 60" strokeWidth="6.5" stroke="white" opacity="0.85" />
                  </svg>
                  
                  <span className="font-display text-base font-black tracking-[0.4em] text-white uppercase mt-2">
                    FUPRO
                  </span>
                </div>

                {/* Technical measurement indicators */}
                <div className="absolute top-4 left-4 font-mono text-[8px] text-neutral-600 uppercase tracking-widest hidden sm:block">
                  SEC // KINETIC_GAIT_ANALYSIS
                </div>
                <div className="absolute bottom-4 right-4 font-mono text-[8px] text-neutral-600 uppercase tracking-widest hidden sm:block">
                  ANGLE // 12.45° FLUID_ROTATION
                </div>
              </div>
            </div>
          </div>

          {/* Section: Visual Identity */}
          <div className="space-y-12 pt-4">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                VISUAL IDENTITY
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">BRAND TOUCHPOINTS & APPLICATIONS</p>
            </div>

            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              The visual identity extends the same philosophy across every touchpoint through a minimal colour palette, clean typography and a flexible symbol designed to perform consistently across physical and digital applications.
            </p>

            {/* Showcase Grid of stationery, business cards, packaging, USB, etc. */}
            <div className="space-y-8 text-left max-w-5xl mx-auto pt-4">
              
              {/* Feature Hero: Website Overview */}
              <div className="w-full aspect-[16/9] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343813/Fupro_web_uhmywo.jpg"
                  alt="Fupro Digital Web Identity"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                  WEB PLATFORM MAIN PAGE
                </div>
              </div>

              {/* Grid of 2 items: Web Mockup and Artboard 115 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343813/Fupro_web3_k17eae.jpg"
                    alt="Fupro Web Details View"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    DIGITAL PRODUCT VIEW
                  </div>
                </div>

                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343851/Artboard_115_bjech3.jpg"
                    alt="Fupro Brand Identity Showcase 115"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    STATIONERY, BUSINESS CARDS & SYSTEM MARKS
                  </div>
                </div>
              </div>

              {/* Grid of 3 items: Artboard 116, 118, 121 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343847/Artboard_116_fcmqwg.jpg"
                    alt="Fupro Design System 116"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    BRAND PATTERNS
                  </div>
                </div>

                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343848/Artboard_118_anyhew.png"
                    alt="Fupro Typography & Spacing 118"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    GEOMETRY RULES
                  </div>
                </div>

                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343848/Artboard_121_hj0orp.jpg"
                    alt="Fupro Print Touchpoints 121"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    STATIONERY SET & WAX SEAL
                  </div>
                </div>
              </div>

              {/* Grid of 3 items: Artboard 122, 123, 125 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343848/Artboard_122_int5kl.jpg"
                    alt="Fupro Product Box Packaging 122"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    PACKAGING SYSTEM
                  </div>
                </div>

                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343848/Artboard_123_dlgogr.jpg"
                    alt="Fupro Print Collateral 123"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    OFFICE MATERIALS & USB KITS
                  </div>
                </div>

                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343850/Artboard_125_ju73eh.jpg"
                    alt="Fupro Exhibition & Uniforms 125"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    LABELS, APPAREL & UNIFORMS
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Where They Are Today */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                WHERE THEY ARE TODAY
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">NATIONAL RECOGNITION MILESTONE</p>
            </div>

            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Several years after the identity was created, Fupro went on to be featured on <strong className="text-white font-medium">Shark Tank India Season 4</strong>, bringing national attention to its mission of building affordable prosthetic solutions. While ANTR's role was limited to the original brand identity, seeing the brand grow onto a national platform remains a proud milestone.
            </p>

            {/* Shark Tank S4 Highlight Badge */}
            <div className="flex justify-center pt-4">
              <div className="inline-flex items-center gap-3 bg-neutral-950 border border-[#FF4500]/20 px-5 py-3 rounded-xl shadow-lg">
                <Award className="w-5 h-5 text-[#FF4500]" />
                <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase font-bold">
                  SHARK TANK INDIA // SEASON 4 FEATURE
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Dynamic back navigation footer button */}
        <div className="bg-neutral-950 border-t border-neutral-900/40 py-24 text-center mt-12">
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

