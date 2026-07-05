import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface VcPageProps {
  onBack: () => void;
}

export default function VcPage({ onBack }: VcPageProps) {
  return (
    <div 
      id="vc247-minimal-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative"
    >
      
      {/* Back navigation assist for preview users */}
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
        
        {/* 2. Clear Intent. - Stacked centered title */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Clear</div>
            <div className="mt-1">Intent.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large 247VC Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            247VC
          </h1>
        </div>

        {/* 5. Clean Metadata Grid as structured in the original blueprint */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Timeline/Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">VENTURE CAPITAL</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2026</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">REBRAND & DIGITAL TRANSFORMATION</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase">POSITIONING • WEBSITE • NARRATIVE • IDENTITY</span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings and updated Copy */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          
          {/* Section: The Context */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CONTEXT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              247VC needed a digital presence that reflected its philosophy as an operator-led venture fund and clearly communicated why founders should build with them.
            </p>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed max-w-2xl mx-auto">
              The website wasn't suffering from a design problem. It was suffering from a clarity problem.
            </p>
          </div>

          {/* Section: Our Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              OUR STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              We restructured the narrative around founders, simplified the information hierarchy and created a digital experience that communicated credibility, intent and trust.
            </p>
          </div>

          {/* Section: The Transformation */}
          <div className="space-y-8">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE TRANSFORMATION
            </h2>
            
            {/* Plain and elegant typography list matching "normal design" request */}
            <div className="max-w-md mx-auto space-y-4 pt-4">
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">HOMEPAGE</span>
                <span className="font-mono text-[10px] text-neutral-500">SECTION 01</span>
              </div>
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">INVESTMENT THESIS</span>
                <span className="font-mono text-[10px] text-neutral-500">SECTION 02</span>
              </div>
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">PORTFOLIO</span>
                <span className="font-mono text-[10px] text-neutral-500">SECTION 03</span>
              </div>
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">APPLY</span>
                <span className="font-mono text-[10px] text-neutral-500">SECTION 04</span>
              </div>
            </div>
          </div>

          {/* Section: Business Impact */}
          <div className="space-y-8 pt-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BUSINESS IMPACT
            </h2>
            
            {/* Clean minimalist text bullet details */}
            <div className="max-w-lg mx-auto text-left space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Clearer positioning across partner channels.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Founder-first strategic communication system.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Stronger overall digital credibility with key founders.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Highly scalable website framework built for future growth.</span>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              {/* Clean solid circle matching the brand style */}
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              A big shoutout to Ananya and the team of ANTR labs,, who poured their heart out in giving us their best to bring out our vision and themes at 247VC. I would highly recommend founders and emerging brands to explore their work to give shape to your ideas.
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Yagnesh Singhrajka
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder & Managing Partner, 247VC
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
