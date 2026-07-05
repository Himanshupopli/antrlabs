import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Trophy, Flame, Disc, Radio, Shirt, Palette } from "lucide-react";

interface StreetballPageProps {
  onBack: () => void;
}

export default function StreetballPage({ onBack }: StreetballPageProps) {
  return (
    <div 
      id="streetball-case-study-page" 
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
        
        {/* 2. Headline - Playing with Identity. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Playing with</div>
            <div className="mt-1 font-light text-white">Identity.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-[0.18em] text-white select-none uppercase pl-[0.18em] leading-none">
            Streetball League
          </h1>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 tracking-[0.3em] uppercase block mt-4">
            Franchise Identity & Team Branding
          </span>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">Sports & Entertainment</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2019-2021</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">Intellectual Property</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                Team Branding • Jersey Design • Event Collaterals • Social Communication
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings - Elegant "Normal Design" */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32">
          
          {/* Section: The Brief */}
          <div className="space-y-6 text-center">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Streetball League, founded by <strong className="text-white font-medium">Rannvijay Singha</strong>, brought together creators, athletes and celebrities through a city-based basketball league.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              ANTR was commissioned to build the complete identities for two premium franchise teams, designing distinctive brand worlds that live across physical uniforms, high-speed digital coverage, and full-court stadium installations.
            </p>
          </div>

          {/* PROJECT ONE: SHOOTING STARS */}
          <div className="pt-8 border-t border-white/10 space-y-16">
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] text-neutral-500 tracking-[0.3em] uppercase block">
                PROJECT ONE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase">
                SHOOTING STARS
              </h2>
              <div className="w-12 h-1 bg-[#FF4500] mx-auto"></div>
            </div>

            {/* Shooting Stars: Challenge */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-[#FF4500] uppercase font-bold">
                THE CHALLENGE
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                The name &ldquo;Shooting Stars&rdquo; already carried strong emotional energy, but translating it into a distinctive sports identity required a mark that balanced athletic performance, aspiration and entertainment while remaining instantly recognizable on jerseys, social media and the court.
              </p>
            </div>

            {/* Shooting Stars: Process */}
            <div className="space-y-8 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                THE PROCESS & EXPLORATIONS
              </h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                The project began with extensive concept exploration around the ideas of stars, basketball, motion, and elevation. Each concept explored a different interpretation of the team&apos;s personality:
              </p>

              {/* Minimalist Concept List without complex box visuals */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left max-w-2xl mx-auto font-mono text-xs tracking-wider">
                <div className="p-4 border border-neutral-900 rounded bg-neutral-950/40">
                  <span className="text-[#FF4500] font-bold block mb-1">01 • THE COSMIC SPHERE</span>
                  <p className="text-neutral-500 font-light text-[11px] leading-relaxed">
                    Merging stellar orbits with standard basketball contours to project global elevation.
                  </p>
                </div>
                <div className="p-4 border border-neutral-900 rounded bg-neutral-950/40">
                  <span className="text-white font-bold block mb-1">02 • VELOCITY VECTOR</span>
                  <p className="text-neutral-500 font-light text-[11px] leading-relaxed">
                    A sharp, high-speed starburst cutting forward to communicate fast-break acceleration.
                  </p>
                </div>
                <div className="p-4 border border-neutral-900 rounded bg-neutral-950/40">
                  <span className="text-[#FF4500] font-bold block mb-1">03 • CLASSIC VARSITY</span>
                  <p className="text-neutral-500 font-light text-[11px] leading-relaxed">
                    Heavy collegiate block serifs balanced with a raw, hand-drawn urban graffiti stroke.
                  </p>
                </div>
              </div>
            </div>

            {/* Selected Logo */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-[#FF4500] uppercase font-bold">
                SELECTED LOGO DIRECTION
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                The chosen logo combines a bold sports aesthetic with an energetic color palette reflecting <strong className="text-white font-medium">Confidence (Navy Blue)</strong>, <strong className="text-[#FF4500] font-medium">Energy</strong>, and <strong className="text-white font-medium">Competition (High-Contrast Orange)</strong>.
              </p>
              
              {/* Minimal Typographic Representation of Palette */}
              <div className="flex justify-center items-center gap-6 pt-2 font-mono text-[10px] tracking-widest text-neutral-500 uppercase">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-900"></div>
                  <span>NAVY BLUE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-[#FF4500]"></div>
                  <span>VIBRANT ORANGE</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-white"></div>
                  <span>PURE WHITE</span>
                </div>
              </div>
            </div>

            {/* Jersey Design */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                JERSEY DESIGN
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                Inspired by old-school, vintage NBA uniforms, the jerseys embraced a bold, nostalgic aesthetic. We paired clean, primary contour lines with strong side panels, customized block typography, and high-contrast colorways to establish an immediate presence on the court under intense stadium lights.
              </p>
              
              {/* Layout/Jersey details */}
              <div className="pt-4 grid grid-cols-2 gap-4 max-w-md mx-auto text-left font-mono text-[10px] tracking-wider text-neutral-500 uppercase">
                <div className="p-3 border-l-2 border-[#FF4500] bg-neutral-950">
                  <span className="text-white font-bold block mb-1">UNIFORM DESIGN</span>
                  Retro trims, premium heavyweight fabric layouts, and sublimated star patterns.
                </div>
                <div className="p-3 border-l-2 border-white bg-neutral-950">
                  <span className="text-white font-bold block mb-1">ON-COURT GRAPHICS</span>
                  Custom player digits, arched typography, and integrated league emblem layouts.
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT TWO: DELHI INC. */}
          <div className="pt-16 border-t border-white/10 space-y-16">
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] text-neutral-500 tracking-[0.3em] uppercase block">
                PROJECT TWO
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase">
                DELHI INC.
              </h2>
              <div className="w-12 h-1 bg-[#FF4500] mx-auto"></div>
            </div>

            {/* Delhi Inc: Overview */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                OVERVIEW
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                Following Shooting Stars, we were commissioned to create the complete identity for Delhi Inc., a franchise owned by lifestyle creator <strong className="text-white font-medium">Meghna Kaur (@shetroublemaker)</strong>.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                Unlike a traditional sports logo, the brief extended far beyond branding — the team needed a highly recognizable, lifestyle-focused personality that could engage audiences throughout the active tournament season.
              </p>
            </div>

            {/* Delhi Inc: Approach */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-[#FF4500] uppercase font-bold">
                THE APPROACH
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                We developed a bold, typographic identity heavily inspired by the raw energy and gritty texture of streetball culture. The sharp, angular logotype conveyed speed, confidence and relentless physical movement, while a high-contrast monochromatic aesthetic allowed the brand to adapt effortlessly across both digital platforms and physical merchandising.
              </p>
            </div>

            {/* Delhi Inc: Social Media Communication */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                SOCIAL COMMUNICATION SYSTEM
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                The visual language was expanded into a robust, real-time digital communication system. Match announcements, scorecards, player rosters, sponsor integrations, schedules and post-match breakdown graphics all adhered strictly to a dark, industrial aesthetic, resulting in a cohesive brand presence across platforms.
              </p>

              {/* Communication flow bullet list */}
              <div className="max-w-md mx-auto pt-4 divide-y divide-white/10 font-mono text-[10px] sm:text-xs tracking-wider text-left">
                <div className="py-2.5 flex justify-between">
                  <span className="text-neutral-500 uppercase">MATCHDAYS</span>
                  <span className="text-white">Real-Time Core Updates</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-neutral-500 uppercase">PLAYER REVEALS</span>
                  <span className="text-white">Editorial Typography overlays</span>
                </div>
                <div className="py-2.5 flex justify-between">
                  <span className="text-neutral-500 uppercase">SPONSOR INTERNALS</span>
                  <span className="text-white">Subtle, Non-Cluttered Blocks</span>
                </div>
              </div>
            </div>

            {/* Delhi Inc: Jersey and layouts */}
            <div className="space-y-6 text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-[#FF4500] uppercase font-bold">
                JERSEY & LAYOUT INTEGRATION
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                The jersey system complemented the identity with clean monochromatic layouts and structured sponsor integration. By treating the team as an independent lifestyle label rather than a traditional sports franchise, the identity retained absolute consistency across both physical apparel and digital interfaces.
              </p>
            </div>
          </div>

        </div>

        {/* 7. Orange Hype Testimonial Section - Clean typography and solid background */}
        <div className="bg-[#FF4500] text-black py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Dark circular symbol */}
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-8 shadow-xl">
              <Trophy className="w-7 h-7 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-black leading-none block mb-4 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-black text-base sm:text-lg md:text-xl font-bold leading-relaxed tracking-wide text-center max-w-2xl mb-8">
              &ldquo;Super happy with how everything came together in no time!! You guys simply rock!&rdquo;
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-black tracking-[0.2em] text-black uppercase mb-1">
              Meghna Kaur
            </h4>

            {/* Author Position & Company */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-black/70 font-semibold uppercase">
              Founder, Delhi Inc.
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
