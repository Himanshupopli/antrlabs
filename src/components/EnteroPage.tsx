import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Activity, Eye, Shield, CheckCircle, Info } from "lucide-react";

interface EnteroPageProps {
  onBack: () => void;
}

export default function EnteroPage({ onBack }: EnteroPageProps) {
  return (
    <div 
      id="entero-case-study-page" 
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
        
        {/* 2. Headline - Clarity in Care. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Clarity in</div>
            <div className="mt-1 font-light text-white">Care.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Entero Healthcare Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-[0.18em] text-white select-none uppercase pl-[0.18em] leading-none">
            Entero Healthcare
          </h1>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 tracking-[0.3em] uppercase block mt-4">
            CARENT BRAND PACKAGING SYSTEM
          </span>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">Healthcare</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2020</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">Packaging Architecture</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                Packaging Design • Iconography • Content Direction
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings - "No Boxes & Normal Design" */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: The Brief */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Entero Healthcare’s brand <strong className="text-white font-medium">“Carent”</strong> was launching a range of digital thermometers designed for children and wanted a packaging system that felt approachable, informative and easy to navigate for parents.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The challenge wasn&apos;t creating a single package — it was designing a visual system that could scale consistently across multiple variants while remaining instantly recognizable on retail shelves.
            </p>
          </div>

          {/* Section: The Challenge */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CHALLENGE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Healthcare packaging has very little time to communicate. Parents standing in a pharmacy need to quickly understand the product, its features and the differences between variants.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The design therefore needed to balance three critical objectives:
            </p>
            
            {/* Minimal horizontal flow instead of box grids */}
            <div className="flex flex-col sm:flex-row justify-center gap-8 pt-4 text-xs font-mono tracking-widest text-neutral-500 uppercase">
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold">01</span>
                <span>Shelf Visibility</span>
              </div>
              <div className="hidden sm:block text-neutral-800">|</div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold">02</span>
                <span>Information Clarity</span>
              </div>
              <div className="hidden sm:block text-neutral-800">|</div>
              <div className="flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold">03</span>
                <span>Brand Consistency</span>
              </div>
            </div>
          </div>

          {/* Section: The Approach */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE APPROACH
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The project began by developing a flexible packaging architecture rather than individual box designs. Every element — from colour hierarchy and typography to icons, feature placement and information flow — was designed as part of one cohesive system that could be extended across the complete thermometer range.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Distinct colour palettes helped differentiate variants while maintaining a unified brand language across the entire portfolio.
            </p>
          </div>

          {/* Section: Designing the System */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              DESIGNING THE SYSTEM
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Beyond the packaging layouts, we designed the complete icon system used to communicate key product features and worked closely on structuring the content hierarchy so information could be understood within seconds.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Every panel of the box was considered — from feature highlights and usage instructions to technical specifications and branding — ensuring the packaging remained clean despite containing a large amount of mandatory regulatory information.
            </p>

            {/* Custom subtle aesthetic icon representation without rigid boxes */}
            <div className="pt-8 grid grid-cols-4 gap-6 max-w-sm mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center">
                  <Activity className="w-4 h-4 text-[#FF4500]" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">RAPID RECTAL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">SAFE TIP</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center">
                  <Eye className="w-4 h-4 text-[#FF4500]" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">BACKLIT LCD</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-800 flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest">CLINICAL CERT</span>
              </div>
            </div>
          </div>

          {/* Section: The Outcome */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE OUTCOME
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              The final result was a scalable packaging system that could accommodate multiple thermometer variants without losing consistency or shelf impact.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Instead of treating every product as a separate design, the project established a repeatable visual language that strengthened brand recognition across the entire family.
            </p>
          </div>

        </div>

        {/* 7. Soft Minimal High-Contrast Testimonial Section - Slate/Dark styling matching "no boxes" and elegant look */}
        <div className="bg-neutral-950 text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative border-t border-b border-neutral-900">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Soft subtle circular symbol */}
            <div className="w-16 h-16 rounded-full border border-neutral-800 flex items-center justify-center mb-8">
              <Sparkles className="w-6 h-6 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-neutral-800 leading-none block mb-4 select-none">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-neutral-200 text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-center max-w-2xl mb-8">
              “Exceptional work across every packaging project. The team&apos;s modern thinking, attention to detail and ability to elevate our brands make them our first choice”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.2em] text-white uppercase mb-1">
              Prem Sethi
            </h4>

            {/* Author Position & Company in Teal accent tone */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-[#FF4500] font-semibold uppercase">
              COO, Entero Healthcare
            </div>

          </div>
        </div>

      </main>

      {/* Subtle bottom back assistant bar */}
      <div className="bg-black py-12 text-center">
        <button
          onClick={onBack}
          className="font-mono text-xs tracking-[0.25em] text-neutral-500 hover:text-[#FF4500] transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← CLOSE CASE STUDY
        </button>
      </div>

    </div>
  );
}
