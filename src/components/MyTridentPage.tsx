import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Heart, Quote, Home, Settings, Layers, Star } from "lucide-react";

interface MyTridentPageProps {
  onBack: () => void;
}

export default function MyTridentPage({ onBack }: MyTridentPageProps) {
  return (
    <div 
      id="mytrident-case-study-page" 
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
        
        {/* 2. Headline - Comfort Meets Culture. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Comfort Meets</div>
            <div className="mt-1 font-light text-white">Culture.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-4xl sm:text-7xl lg:text-8xl tracking-[0.18em] text-white select-none uppercase pl-[0.18em] leading-none">
            myTrident
          </h1>
          <span className="font-mono text-xs sm:text-sm text-neutral-500 tracking-[0.3em] uppercase block mt-4">
            Legacy Enterprise Digital Transformation
          </span>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">Home Furnishings & Lifestyle</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2021–2022</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">Legacy Enterprise Brand</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                Digital Strategy • Creative Direction • Social Media Management • Campaign Development • Art Direction • Content Production • Influencer Marketing
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings - Elegant "Normal Design" */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32">
          
          {/* Section: The Overview */}
          <div className="space-y-6 text-center">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              OVERVIEW
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              myTrident partnered with us to modernize its digital presence and connect with a younger, digital-first audience. Over the engagement, we helped transform the brand&apos;s social communication through a lifestyle-first content strategy, campaign-led storytelling and a cohesive visual language that moved beyond product-first marketing.
            </p>
          </div>

          {/* Section: The Challenge */}
          <div className="space-y-6 text-center border-t border-white/10 pt-16">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CHALLENGE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              As a legacy home furnishings brand, the challenge was to remain relevant to a new generation of consumers while preserving the trust and familiarity the brand had built over decades. The communication needed to evolve from catalogue-style product promotion into content that people genuinely wanted to engage with.
            </p>
          </div>

          {/* Section: The Solution */}
          <div className="space-y-6 text-center border-t border-white/10 pt-16">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE SOLUTION
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              We developed a scalable digital content ecosystem that balanced commerce with storytelling. From lifestyle photography and illustrations to trend-led content, festive campaigns, product launches and creator collaborations, every touchpoint was designed to make myTrident feel more contemporary, relatable and culturally relevant.
            </p>
          </div>

          {/* Section: Flagship Campaign */}
          <div className="space-y-6 text-center border-t border-white/10 pt-16">
            <span className="font-mono text-[10px] text-neutral-500 tracking-[0.3em] uppercase block">
              FLAGSHIP CAMPAIGN
            </span>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase">
              SAJAO MYTRIDENT SE
            </h2>
            <div className="w-12 h-1 bg-[#FF4500] mx-auto mb-8"></div>
            
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              As part of the brand&apos;s digital evolution, we worked on the rollout of the <strong className="text-white font-medium">Sajao myTrident Se</strong> campaign featuring <strong className="text-white font-medium">Masaba Gupta</strong> and <strong className="text-[#FF4500] font-medium">Neena Gupta</strong>.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The campaign celebrated modern Indian homes through warmth, personality and everyday living, extending the core brand story across social media with platform-first adaptations.
            </p>
          </div>

          {/* Section: Content Ecosystem */}
          <div className="space-y-6 text-center border-t border-white/10 pt-16">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              CONTENT ECOSYSTEM
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Alongside flagship campaigns, we managed a high-volume content pipeline spanning product launches, festive communication, engagement formats, lifestyle shoots, illustrations, reels and creator-led content — building a consistent visual identity across the brand&apos;s digital presence.
            </p>

            {/* Simple Bullet list without boxing */}
            <div className="max-w-md mx-auto pt-4 divide-y divide-white/10 font-mono text-[10px] sm:text-xs tracking-wider text-left">
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 uppercase">CELEBRITY LEAD</span>
                <span className="text-white">High-Impact Platform Rollouts</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 uppercase">PIPELINE FORMATS</span>
                <span className="text-white">Lifestyles, Festive & Reels</span>
              </div>
              <div className="py-2.5 flex justify-between">
                <span className="text-neutral-500 uppercase">VISUAL IDENTITY</span>
                <span className="text-white">Consistent Multi-Format Design</span>
              </div>
            </div>
          </div>

          {/* Section: Impact */}
          <div className="space-y-8 text-center border-t border-white/10 pt-16">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE IMPACT
            </h2>
            
            <div className="space-y-6 text-left max-w-2xl mx-auto">
              <div className="flex gap-4 items-start">
                <div className="font-mono text-[#FF4500] font-bold text-lg leading-none mt-1">
                  01
                </div>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Contributed to myTrident&apos;s digital transformation by evolving its social media into a lifestyle-first brand experience.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="font-mono text-white font-bold text-lg leading-none mt-1">
                  02
                </div>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Built a scalable content system across campaigns, products and cultural moments.
                </p>
              </div>

              <div className="flex gap-4 items-start">
                <div className="font-mono text-[#FF4500] font-bold text-lg leading-none mt-1">
                  03
                </div>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                  Helped establish a consistent visual language across one of India&apos;s largest home furnishing brands.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Orange Hype Testimonial Section - Clean typography and solid background */}
        <div className="bg-[#FF4500] text-black py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Dark circular symbol */}
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-8 shadow-xl">
              <Home className="w-7 h-7 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-black leading-none block mb-4 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-black text-base sm:text-lg md:text-xl font-bold leading-relaxed tracking-wide text-center max-w-2xl mb-8">
              &ldquo;Ananya and her team played a key role in evolving myTrident&apos;s digital presence..Great understanding of human psychology and what drives sentiment&rdquo;
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-black tracking-[0.2em] text-black uppercase mb-1">
              Sudhir Vashisht
            </h4>

            {/* Author Position & Company */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-black/70 font-semibold uppercase">
              Marketing Head, myTrident
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
