import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Play, Sparkles } from "lucide-react";

interface ZinohaPageProps {
  onBack: () => void;
}

export default function ZinohaPage({ onBack }: ZinohaPageProps) {
  return (
    <div 
      id="zinoha-minimal-page" 
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
        
        {/* 2. Headline - Live Consciously. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Live</div>
            <div className="mt-1 font-light">Consciously.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Zinoha Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            Zinoha
          </h1>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">WELLNESS REAL ESTATE</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2024</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">BRAND LAUNCH</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                BRAND IDENTITY • BRAND STRATEGY • COMMUNICATION • LAUNCH CAMPAIGN • BRAND FILM • EVENT EXPERIENCE
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          
          {/* Section: The Brief */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Zinoha was envisioned as a community built around wellness, farming and habitat - bringing together conscious living, nature and long-term value into one cohesive ecosystem.
            </p>
          </div>

          {/* Section: Brand Thinking */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BRAND THINKING
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The foundation of Zinoha was never real estate - it was philosophy. We positioned the brand around Work • Farm • Habitat, creating a community where wellness, regenerative farming and mindful living coexist. Every communication decision was built around one belief: people should buy into a way of life, not a piece of land. The brand aimed to differentiate itself through clarity of thought, intentional storytelling and a distinct point of view.
            </p>
          </div>

          {/* Section: Logo Explorations */}
          <div className="space-y-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              LOGO EXPLORATIONS
            </h2>
            <p className="text-xs font-mono text-neutral-500 tracking-wider">PRELIMINARY GEOMETRIC FORMS & SYMMETRY SKETCHES</p>
            
            {/* 3 Inline vector exploration logos */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto py-6">
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 20 H80 L20 80 H80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">OPTION 01</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M30 20 C30 20, 70 20, 70 50 C70 80, 30 80, 30 80" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M70 20 L30 80" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">OPTION 02</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="25" y="25" width="50" height="50" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M25 25 L75 75" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M75 25 L25 75" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">OPTION 03</span>
              </div>
            </div>
          </div>

          {/* Section: The Selected Logo */}
          <div className="space-y-8 pt-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              SELECTED LOGO
            </h2>
            
            <div className="py-12 flex justify-center items-center">
              {/* Refined 'Z' logo styled with conscious geometry */}
              <svg className="w-32 h-32 text-white" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Flowing Hourglass & Z transformation curve */}
                <path d="M25 25 H75 L25 75 H75" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" />
                {/* Elegant natural curve reflecting the flow of time */}
                <path d="M50 25 C62 38, 62 62, 50 75" stroke="#FF4500" strokeWidth="2" strokeDasharray="4 2" />
                <path d="M50 75 C38 62, 38 38, 50 25" stroke="#FF4500" strokeWidth="2" strokeDasharray="4 2" />
                {/* Central organic seed */}
                <circle cx="50" cy="50" r="4.5" fill="#FF4500" />
              </svg>
            </div>

            <div className="text-left max-w-2xl mx-auto space-y-4">
              <h3 className="font-mono text-xs text-[#FF4500] tracking-widest uppercase font-semibold">WHY THIS LOGO</h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                The chosen logo embodies the spirit of conscious living through a stylised &apos;Z&apos; that represents transformation, connection, and the continuous journey of life. Inspired by the fluidity of nature and the symbolism of an hourglass, it speaks to time, patience, and intentional living.
              </p>
            </div>
          </div>

          {/* Section: Brand Communication */}
          <div className="space-y-12 pt-6 text-left max-w-2xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                BRAND COMMUNICATION
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider">LAUNCH CREATIVES CONCEPTUAL LAYOUT</p>
            </div>

            {/* Clean textual Representation of 3-Phase Campaign */}
            <div className="space-y-8 py-6">
              <div className="border-l-2 border-[#FF4500] pl-6 space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase font-bold">PHASE 01 // LIFESTYLE & EXPERIENCE</span>
                <p className="font-sans text-sm text-neutral-400 font-light">Introducing high-touch mindful daily concepts to set standard aspirational values.</p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6 space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-white uppercase font-bold">PHASE 02 // THE LOCATION</span>
                <p className="font-sans text-sm text-neutral-400 font-light">Grounding aspirations into the geography, connecting soil quality and environment.</p>
              </div>
              <div className="border-l-2 border-neutral-800 pl-6 space-y-2">
                <span className="font-mono text-[10px] tracking-widest text-white uppercase font-bold">PHASE 03 // THE COMMUNE</span>
                <p className="font-sans text-sm text-neutral-400 font-light">Unveiling physical layout plans, farming circles, and community-led structures.</p>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">THE IDEA</h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                We created a communication system that introduced the lifestyle before the location. The launch was structured in three phases - Lifestyle & Experience, The Location, and finally The Commune - guiding audiences from aspiration to understanding. The visual language, tone of voice and storytelling were intentionally crafted to avoid industry clichés and position Zinoha as a movement rather than another development.
              </p>
            </div>
          </div>

          {/* Section: Brand Film (Cinematic aspect placeholder) */}
          <div className="space-y-8 pt-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BRAND FILM
            </h2>
            
            <div className="relative group max-w-2xl mx-auto rounded-lg overflow-hidden border border-white/10 bg-neutral-950 aspect-[21/9] flex flex-col justify-center items-center">
              <div className="absolute inset-0 bg-[radial-gradient(#ffffff03_1px,transparent_1px)] [background-size:24px_24px]"></div>
              <div className="relative flex flex-col items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/20 flex items-center justify-center text-[#FF4500]">
                  <Play className="w-4 h-4 fill-current translate-x-0.5" />
                </div>
                <span className="font-mono text-[9px] tracking-[0.25em] text-neutral-500 uppercase">CINEMATIC STILLS • INTENTIONAL FRAMES</span>
              </div>
            </div>
          </div>

          {/* Section: Launch Experience & Social Media */}
          <div className="space-y-8 pt-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              LAUNCH EXPERIENCE & SOCIAL MEDIA
            </h2>
            
            <p className="font-sans text-sm text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              We connected digital storytelling with offline events. Creative templates, atmospheric social videos, and highly interactive physical experiences established a pristine, organic community following.
            </p>

            {/* List of elements */}
            <div className="max-w-md mx-auto space-y-4 text-left font-mono text-xs text-neutral-400">
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>EVENT IMMERSION VIDEO</span>
                <span className="text-[#FF4500]">PLAYBACK READY</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>SOCIAL NARRATIVES & REELS</span>
                <span className="text-[#FF4500]">1080X1920 HD</span>
              </div>
              <div className="flex justify-between py-2 border-b border-white/5">
                <span>STORYTELLING CREATIVES</span>
                <span className="text-[#FF4500]">PUBLISHED</span>
              </div>
            </div>
          </div>

          {/* Section: The Outcome */}
          <div className="space-y-6 pt-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE OUTCOME
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              A cohesive launch ecosystem spanning identity, communication, film and experience design - giving Zinoha a distinctive presence from day one and a foundation to build future communities around the same philosophy.
            </p>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <Sparkles className="w-8 h-8 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “I&apos;m so thankful for the incredible work ANTR Labs has done with Zinoha. I&apos;m enamoured by the clarity and thought you bring to the table. Zinoha could not have a better storyline.”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Vikash Shahi
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder, Zinoha
            </div>

          </div>
        </div>

      </main>

      {/* Subtle bottom back assistant bar */}
      <div className="bg-black py-12 text-center border-t border-neutral-900/60">
        <button
          onClick={onBack}
          className="font-mono text-xs tracking-[0.25em] text-neutral-400 hover:text-[#FF4500] transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← CLOSE CASE STUDY
        </button>
      </div>

    </div>
  );
}
