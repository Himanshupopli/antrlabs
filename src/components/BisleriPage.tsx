import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";
import WorkLogoHeading from "./WorkLogoHeading";

interface BisleriPageProps {
  onBack: () => void;
}

export default function BisleriPage({ onBack }: BisleriPageProps) {
  return (
    <div 
      id="bisleri-minimal-page" 
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
        
        {/* 2. Headline - Art in Motion */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Art In</div>
            <div className="mt-1 font-light">Motion.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Bisleri Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="Bisleri" />
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">LUXURY EVENTS & CULTURAL EXPERIENCES</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2022</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">BRAND EXPERIENCE</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                CREATIVE DIRECTION • EXPERIENCE DESIGN • EVENT PRODUCTION • SPATIAL DESIGN • GUEST JOURNEY
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
              Design an intimate cultural evening celebrating the work of filmmaker, painter and poet Muzaffar Ali, in partnership with Bisleri. The experience needed to feel less like a corporate event and more like stepping into the artist&apos;s own world.
            </p>
          </div>

          {/* Section: The Experience */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE EXPERIENCE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Every design decision centred around understated romance and artistic expression. Inspired by Moroccan courtyards and intimate mehfils, the space featured layered rugs, candlelight, takhat-style amphitheatre seating and warm ambient lighting, creating an atmosphere that encouraged conversation, reflection and art. Rather than competing for attention, the design quietly framed the evening and its guests.
            </p>
          </div>

          {/* Section: The Centrepiece */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CENTREPIECE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The highlight of the evening was a live painting by Muzaffar Ali, created in front of the audience. The artwork was later transformed into an NFT, extending the experience beyond the event itself and creating a unique intersection of traditional art and digital ownership.
            </p>
          </div>

          {/* Section: Bringing It Together */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BRINGING IT TOGETHER
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              From concept to execution, we directed the complete experience - planning the spatial design, lighting, production, food experience, guest flow, run-of-show and on-ground hosting at Bikaner House. Every touchpoint was designed to feel intentional, immersive and true to the artistic vision of the evening.
            </p>
          </div>

          {/* Section: The Outcome */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE OUTCOME
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              An immersive cultural experience that seamlessly blended art, storytelling and hospitality, creating an evening that felt personal, timeless and unforgettable.
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
              “It was a pleasure working with you all. Do come over and visit our home sometime—we can jam and create more wonderful things together.”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Muzaffar Ali
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Filmmaker, Poet & Painter
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
