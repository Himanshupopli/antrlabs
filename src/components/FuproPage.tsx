import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Award, Activity, Compass } from "lucide-react";

import WorkLogoHeading from "./WorkLogoHeading";

interface FuproPageProps {
  onBack: () => void;
}

export default function FuproPage({ onBack }: FuproPageProps) {
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
          <WorkLogoHeading label="Fupro" />
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
            
            <div className="py-6 border-t border-white/10 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
                {[
                  { src: "/fupro/artboard-121.jpg", alt: "Fupro sporty logo exploration" },
                  { src: "/fupro/artboard-122.jpg", alt: "Fupro flowy logo exploration" },
                  { src: "/fupro/artboard-123.jpg", alt: "Fupro wordmark logo exploration" }
                ].map((image) => (
                  <div
                    key={image.src}
                    className="h-[360px] bg-white border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center p-3"
                  >
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="w-full h-full object-contain"
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>

              <div className="max-w-6xl mx-auto bg-white border border-neutral-900 rounded-xl overflow-hidden p-3">
                <img
                  src="/fupro/artboard-125.jpg"
                  alt="Fupro early logo sketch explorations"
                  className="w-full h-auto object-contain"
                  loading="lazy"
                />
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

            <div className="pt-6 grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
              <div className="h-[420px] sm:h-[520px] bg-white border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center p-6 shadow-2xl">
                <img
                  src="/fupro/artboard-118.png"
                  alt="Fupro selected logo direction"
                  className="w-full h-full object-contain"
                  loading="lazy"
                />
              </div>

              <div className="h-[420px] sm:h-[520px] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center shadow-2xl">
                <video
                  src="/fupro/fupro1.mp4"
                  className="w-full h-full object-contain"
                  controls
                  playsInline
                  preload="metadata"
                />
              </div>
            </div>

            {/* Show the Final Logo with technical schematic overlays */}
            <div className="hidden">
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
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
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
