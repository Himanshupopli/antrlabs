import { motion } from "motion/react";
import { ArrowLeft, Sparkles, TrendingUp, Award, Shield, BookOpen, Layers, Quote } from "lucide-react";
import WorkLogoHeading from "./WorkLogoHeading";

interface InnovestPageProps {
  onBack: () => void;
}

const SWARAGYA_LOGO = "/swaragya/swaragya-logo2.png";
const SWARAGYA_WEBSITE = "/swaragya/website-swargya.jpeg";
const SWARAGYA_INVESTOR_BROCHURE = "/swaragya/investor-brochure.jpg";
const SWARAGYA_DESIGN_SYSTEM = "/swaragya/design-system-motifs.jpg";

export default function InnovestPage({ onBack }: InnovestPageProps) {
  return (
    <div 
      id="innovest-minimal-page" 
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
        
        {/* 2. Headline - Beyond Real Estate */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Beyond</div>
            <div className="mt-1 font-light">Real Estate.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large Innovest Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="Innovest" />
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Wellness Real Estate</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Brand Launch</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2026</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Brand Strategy • Naming Support • Brand Identity • Investor Brochure • Website • Communication
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          
          {/* Section: The Context */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE CONTEXT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Wellness real estate is an emerging category, but most developments are marketed like conventional luxury villas - focusing on location, amenities and investment returns. Swaragya needed to introduce an entirely new way of thinking about residential living while attracting both homebuyers and investors.
            </p>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              People weren't buying another villa. They were buying a slower, healthier and more intentional way of living.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-200 font-medium leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The brand needed to feel like a wellness movement first and a real estate project second.
            </p>
          </div>

          {/* Section: Our Strategy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                OUR STRATEGY
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                Rather than positioning Swaragya as another premium development, we built a brand around the intersection of modern science and ancient wellness. Every touchpoint from the identity to the website was designed to communicate calm, trust and long-term value while simplifying a complex investment story.
              </p>
            </div>

            {/* Strategy Hero: Swaragya Presentation Slide 25 */}
            <div className="w-full aspect-[16/9] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center relative group max-w-4xl mx-auto mt-8">
              <img 
                src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343483/Swaragya-images-25_deydcq.jpg"
                alt="Swaragya Wellness Brand System Presentation"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800">
                SWARAGYA / 01 / BRAND PLATFORM & INTENT
              </div>
            </div>
          </div>

          {/* Section: Building the Brand */}
          <div className="space-y-16 pt-6">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                BUILDING THE BRAND
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">BRAND ARCHITECTURE MODULES</p>
            </div>
            
            {/* Subsection: Brand Naming & Foundation */}
            <div className="space-y-6 text-left max-w-2xl mx-auto p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Layers className="w-5 h-5 text-[#FF4500]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Brand Naming & Foundation
                </h3>
              </div>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                A refined visual identity inspired by balance, nature and timeless wellness, creating a premium brand that felt calm rather than commercial.
              </p>
            </div>

            {/* Subsection: The Logo */}
            <div className="space-y-8 max-w-2xl mx-auto p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl hover:border-white/10 transition-colors text-left">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Sparkles className="w-5 h-5 text-[#FF4500]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  The Logo
                </h3>
              </div>
              
              <div className="py-10 px-6 flex justify-center items-center bg-white rounded-xl border border-neutral-900 relative overflow-hidden group">
                <img
                  src={SWARAGYA_LOGO}
                  alt="Swaragya logo"
                  className="relative z-10 w-full max-w-sm h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  loading="lazy"
                />
              </div>
              
              <div className="space-y-3">
                <span className="font-mono text-[10px] text-[#FF4500] tracking-widest uppercase font-bold block">WHY THIS LOGO</span>
                <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                  Inspired by sacred geometry and nature, the logo symbolises harmony, balance and interconnected living. The symmetrical form reflects stability and trust, while the organic geometry represents the relationship between people, nature and wellbeing. Finished in gold, the mark reinforces the project's premium positioning while remaining timeless and highly versatile across every brand touchpoint.
                </p>
              </div>
            </div>

            {/* Mid-Section Presentation Slides: 26 & 27 (Responsive Grid Layout) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 text-left">
              <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                <img 
                  src={SWARAGYA_DESIGN_SYSTEM}
                  alt="Swaragya design system and wellness motifs"
                  className="w-full h-full object-contain transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800">
                  SWARAGYA / 02 / DESIGN SYSTEM & MOTIFS
                </div>
              </div>

              <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                <img 
                  src={SWARAGYA_WEBSITE}
                  alt="Swaragya website design and healing journey"
                  className="w-full h-full object-contain transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2.5 py-1 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800">
                  SWARAGYA / 03 / LIFESTYLE PROJECTION
                </div>
              </div>
            </div>

            {/* Subsection: Investor Brochure */}
            <div className="space-y-6 text-left max-w-2xl mx-auto p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <BookOpen className="w-5 h-5 text-[#FF4500]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Investor Brochure
                </h3>
              </div>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Rather than creating a conventional real estate brochure filled with specifications, we developed a narrative-led presentation that introduced the philosophy behind Swaragya first. The content was structured to communicate the vision, wellness ecosystem and long-term value of the project before presenting the investment opportunity, creating a stronger emotional and strategic connection with prospective buyers and investors.
              </p>
            </div>

            {/* Subsection: Website */}
            <div className="space-y-6 text-left max-w-2xl mx-auto p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-[#FF4500]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Website
                </h3>
              </div>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Designed as the digital home of the brand, the website blends immersive storytelling with a structured ownership journey. From introducing the philosophy behind Swaragya to explaining villa layouts, wellness experiences and the investment model, every interaction was designed to build clarity, confidence and desire.
              </p>
            </div>

            {/* Subsection: Brand Communication */}
            <div className="space-y-6 text-left max-w-2xl mx-auto p-6 bg-neutral-950/40 border border-neutral-900 rounded-2xl hover:border-white/10 transition-colors">
              <div className="flex items-center gap-3">
                <Sparkles className="w-5 h-5 text-[#FF4500]" />
                <h3 className="font-display text-base sm:text-lg font-bold text-white uppercase tracking-wider">
                  Brand Communication
                </h3>
              </div>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Created a consistent communication system that connected wellness, hospitality and investment into one cohesive story across every touchpoint.
              </p>
            </div>

          </div>

          {/* Section: The Transformation */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE TRANSFORMATION
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                By transforming Swaragya from a commercial development into an elite holistic sanctuary, we established a prestigious market presence that commands premium valuation.
              </p>
            </div>
            
            {/* Clean, interactive 3-column Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto text-left">
              
              {/* Card 1: Logo */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-white overflow-hidden relative flex items-center justify-center p-5 border-b border-neutral-900">
                  <img
                    src={SWARAGYA_LOGO}
                    alt="Swaragya logo system"
                    className="w-full h-full object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">SYSTEM 01</span>
                  <h3 className="text-xs text-white font-semibold">Logo</h3>
                </div>
              </div>

              {/* Card 2: Investor Brochure */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center border-b border-neutral-900">
                  <img
                    src={SWARAGYA_INVESTOR_BROCHURE}
                    alt="Investor Brochure Spread"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">SYSTEM 02</span>
                  <h3 className="text-xs text-white font-semibold">Investor Brochure</h3>
                </div>
              </div>

              {/* Card 3: Website pages */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center border-b border-neutral-900">
                  <img
                    src={SWARAGYA_WEBSITE}
                    alt="Swaragya website pages layout"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">SYSTEM 03</span>
                  <h3 className="text-xs text-white font-semibold">Website pages</h3>
                </div>
              </div>

            </div>

            {/* Masterpiece Showcase: Slide 28 */}
            <div className="w-full aspect-[16/9] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group max-w-4xl mx-auto mt-8">
              <img 
                src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343483/Swaragya-images-28_h163fu.jpg"
                alt="Swaragya Comprehensive Brand Showcase"
                className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-neutral-800">
                SWARAGYA / 04 / COMPREHENSIVE PRESENTATION OVERVIEW
              </div>
            </div>
          </div>

          {/* Section: Business Impact */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                BUSINESS IMPACT
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">SCALING HIGHLIGHTS</p>
            </div>

            {/* Clean minimalist bullet points with premium icons */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Market Presence</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Established a distinctive identity in the emerging wellness real estate category.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Omnichannel Unity</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Unified the brand across print and digital touchpoints.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Award className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Proposition Clarity</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Simplified a complex investment proposition into a clear ownership journey.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Shield className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">Scalable Core</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Created a scalable foundation for launch and future marketing initiatives.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Elegant avatar placeholder */}
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <Quote className="w-8 h-8 text-white/80" />
            </div>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “Working with ANTR completely changed how we looked at our brand. They didn't just create an identity - they gave us a narrative that aligned our team, our communication and our long-term vision.”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Kapil Singhal
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder, Innovest Ventures
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
