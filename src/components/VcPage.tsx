import { motion } from "motion/react";
import { ArrowLeft, Sparkles, TrendingUp, Award, Shield, Quote } from "lucide-react";

import WorkLogoHeading from "./WorkLogoHeading";

interface VcPageProps {
  onBack: () => void;
}

const VC247_BEFORE_IMAGE = "/247vc-before.jpg";

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
            <div className="mt-1 font-light text-white uppercase">Intent.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large 247VC Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="247VC" logoUrl="/work-logos/247vc.png" />
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Venture Capital</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Rebrand & Digital Transformation</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2026</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Positioning • Website • Narrative • Identity
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          <div className="space-y-4 text-left">
            <div className="w-full max-h-[720px] bg-white border border-neutral-900 rounded-2xl overflow-hidden flex items-start justify-center p-2 shadow-2xl">
              <img
                src={VC247_BEFORE_IMAGE}
                alt="247VC website before redesign"
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="font-mono text-[10px] tracking-widest text-neutral-500 uppercase text-center">
              247VC / Before Redesign
            </div>
          </div>
          
          {/* Section: The Context */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE CONTEXT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              247VC needed a digital presence that reflected its philosophy as an operator-led venture fund and clearly communicated why founders should build with them.
            </p>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The website wasn't suffering from a design problem.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-200 font-medium leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              It was suffering from a clarity problem.
            </p>
          </div>

          {/* Section: Our Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              OUR STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              We restructured the narrative around founders, simplified the information hierarchy and created a digital experience that communicated credibility, intent and trust.
            </p>
          </div>

        </div>

        {/* Section: The Transformation Showcase */}
        <div className="max-w-5xl mx-auto px-6 mb-32 text-center">
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE TRANSFORMATION
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                We rebuilt the website as a series of highly focused digital touchpoints designed to communicate 247VC's operator pedigree, target thesis, active partners, and high-integrity vision.
              </p>
            </div>

            {/* Layout Showcase Grid */}
            <div className="space-y-8 text-left max-w-5xl mx-auto pt-6">
              
              {/* 1. Homepage */}
              <div className="w-full aspect-[16/10] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783345112/1.homepage_pl9uq7.png"
                  alt="Homepage"
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />

              </div>

              {/* Row 2: Thesis & Portfolio */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                
                {/* 2. Thesis */}
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783345112/4.Thesis_a0ozzm.png"
                    alt="Investment Thesis"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                </div>

                {/* 3. Portfolio */}
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783345112/3.Partners_gupzpq.png"
                    alt="Portfolio"
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                </div>

              </div>

              {/* Row 3: Apply */}
              <div className="grid grid-cols-1 gap-8">
                
                {/* 4. Apply */}
                <div className="w-full aspect-[16/10] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center relative group">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783345113/5.Contact_us_xrqxvb.png"
                    alt="Apply"
                    className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />

                </div>

              </div>

            </div>
          </div>
        </div>

        {/* Section: Business Impact & Metrics */}
        <div className="max-w-3xl mx-auto px-6 mb-32 text-center">

          {/* Section: Business Impact */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                BUSINESS IMPACT
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">SCALING HIGHLIGHTS</p>
            </div>
            
            {/* Structured details with icons */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Positioning Focus</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Clearer positioning.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Founder-First Focus</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Founder-first communication.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Award className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Credibility Elevation</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Stronger digital credibility.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Shield className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Futureproof Platform</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Scalable website built for future growth.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Elegant quote icon avatar */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white border border-white/30 flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <img
                src="/testimonials/247vc-yagnesh.jpg"
                alt="Yagnesh Sanghrajka"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “A big shoutout to Ananya and the team of ANTR labs,, who poured their heart out in giving us their best to bring out our vision and themes at 247VC. I would highly recommend founders and emerging brands to explore their work to give shape to your ideas.”
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
