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
          <div className="w-full h-[1px] bg-white/10"></div>
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
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Healthcare</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Packaging</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2020</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Packaging Design • Iconography • Content Direction
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-4xl mx-auto px-6 space-y-32 mb-32 text-center">
          
          {/* Section: The Brief */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Entero Healthcare’s brand <strong className="text-white font-medium">“Carent”</strong> was launching a range of digital thermometers designed for children and wanted a packaging system that felt approachable, informative and easy to navigate for parents.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              The challenge wasn&apos;t creating a single package — it was designing a visual system that could scale consistently across multiple variants while remaining instantly recognizable on retail shelves.
            </p>
          </div>

          {/* Section: The Challenge */}
          <div className="space-y-8 max-w-3xl mx-auto">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CHALLENGE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Healthcare packaging has very little time to communicate. Parents standing in a pharmacy need to quickly understand the product, its features and the differences between variants.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              The design therefore needed to balance three critical objectives:
            </p>
            
            {/* Minimal horizontal flow with subtle borders */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 max-w-2xl mx-auto font-mono text-xs tracking-widest text-neutral-400 uppercase">
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold text-sm">01</span>
                <span>Shelf Visibility</span>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold text-sm">02</span>
                <span>Information Clarity</span>
              </div>
              <div className="p-4 bg-neutral-950 border border-neutral-900 rounded-xl flex flex-col items-center gap-2">
                <span className="text-[#FF4500] font-bold text-sm">03</span>
                <span>Brand Consistency</span>
              </div>
            </div>
          </div>

          {/* Section: The Approach */}
          <div className="space-y-8">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                THE APPROACH
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The project began by developing a flexible packaging architecture rather than individual box designs. Every element — from colour hierarchy and typography to icons, feature placement and information flow — was designed as part of one cohesive system that could be extended across the complete thermometer range.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                Distinct colour palettes helped differentiate variants while maintaining a unified brand language across the entire portfolio.
              </p>
            </div>

            {/* Approach Image: Packaging Architecture Hero */}
            <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group max-w-4xl mx-auto mt-6 shadow-2xl">
              <img 
                src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344662/Entero_Healthcare-31_zsjgw5.jpg"
                alt="Entero Carent Packaging Architecture"
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                01 / CORE PACKAGING ARCHITECTURE
              </div>
            </div>
          </div>

          {/* Section: Designing the System */}
          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                DESIGNING THE SYSTEM
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                Beyond the packaging layouts, we designed the complete icon system used to communicate key product features and worked closely on structuring the content hierarchy so information could be understood within seconds.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                Every panel of the box was considered — from feature highlights and usage instructions to technical specifications and branding — ensuring the packaging remained clean despite containing a large amount of mandatory regulatory information.
              </p>
            </div>

            {/* System Grid: 3-column layout */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-4">
              <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344662/Entero_Healthcare-32_ezevym.jpg"
                  alt="Entero Carent copy layout panels"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                  INFORMATION GRID
                </div>
              </div>

              <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344661/Entero_Healthcare-33_bpujoi.jpg"
                  alt="Entero Carent Typography & Icon System"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                  ICON INTEGRATION
                </div>
              </div>

              <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344660/Entero_Healthcare-34_essu66.jpg"
                  alt="Entero Carent Front Panel Focus"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                  VARIANT CODES
                </div>
              </div>
            </div>

            {/* Custom subtle aesthetic icon representation without rigid boxes */}
            <div className="pt-4 grid grid-cols-4 gap-6 max-w-sm mx-auto">
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center bg-neutral-950">
                  <Activity className="w-4 h-4 text-[#FF4500]" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">RAPID RECTAL</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center bg-neutral-950">
                  <Shield className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">SAFE TIP</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center bg-neutral-950">
                  <Eye className="w-4 h-4 text-[#FF4500]" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">BACKLIT LCD</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <div className="w-10 h-10 rounded-full border border-neutral-900 flex items-center justify-center bg-neutral-950">
                  <CheckCircle className="w-4 h-4 text-white" />
                </div>
                <span className="font-mono text-[8px] text-neutral-500 uppercase tracking-widest font-bold">CLINICAL CERT</span>
              </div>
            </div>
          </div>

          {/* Section: The Outcome */}
          <div className="space-y-12">
            <div className="space-y-6 max-w-3xl mx-auto">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE OUTCOME
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The final result was a scalable packaging system that could accommodate multiple thermometer variants without losing consistency or shelf impact.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                Instead of treating every product as a separate design, the project established a repeatable visual language that strengthened brand recognition across the entire family.
              </p>
            </div>

            {/* Outcome Grid: 2 columns + Wide footer collage */}
            <div className="space-y-6 max-w-4xl mx-auto pt-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344661/Entero_Healthcare-35_ppsjgm.jpg"
                    alt="Entero Carent Production Variant A"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    CARENT INFANT PRODUCTION RUN
                  </div>
                </div>

                <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344662/Entero_Healthcare-36_cdenxb.jpg"
                    alt="Entero Carent Production Variant B"
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                    CARENT FLEXI PRODUCTION RUN
                  </div>
                </div>
              </div>

              {/* Wide Footer Collage showcase */}
              <div className="w-full aspect-[16/9] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group mt-6 shadow-2xl">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344662/Entero_Healthcare-37_vqjser.jpg"
                  alt="Entero Carent Package Family Collage"
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase">
                  COMPLETE BRAND FAMILY SHELF PRESENTATION
                </div>
              </div>
            </div>
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
