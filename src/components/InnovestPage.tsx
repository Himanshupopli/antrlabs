import { motion } from "motion/react";
import { ArrowLeft } from "lucide-react";

interface InnovestPageProps {
  onBack: () => void;
}

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
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Innovest Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            Innovest
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
              <span className="text-white">2026</span>
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
                BRAND STRATEGY • NAMING SUPPORT • BRAND IDENTITY • INVESTOR BROCHURE • WEBSITE • COMMUNICATION
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          
          {/* Section: The Context */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE CONTEXT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Wellness real estate is an emerging category, but most developments are marketed like conventional luxury villas - focusing on location, amenities and investment returns. Swaragya needed to introduce an entirely new way of thinking about residential living while attracting both homebuyers and investors.
            </p>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              People weren't buying another villa. They were buying a slower, healthier and more intentional way of living. The brand needed to feel like a wellness movement first and a real estate project second.
            </p>
          </div>

          {/* Section: Our Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              OUR STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Rather than positioning Swaragya as another premium development, we built a brand around the intersection of modern science and ancient wellness. Every touchpoint from the identity to the website was designed to communicate calm, trust and long-term value while simplifying a complex investment story.
            </p>
          </div>

          {/* Section: Building the Brand */}
          <div className="space-y-16 pt-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold border-b border-white/10 pb-4">
              BUILDING THE BRAND
            </h2>
            
            {/* Subsection: Brand Naming & Foundation */}
            <div className="space-y-4 text-left max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                BRAND NAMING & FOUNDATION
              </h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                A refined visual identity inspired by balance, nature and timeless wellness, creating a premium brand that felt calm rather than commercial.
              </p>
            </div>

            {/* Subsection: The Logo (Elegant Vector inline design) */}
            <div className="space-y-6 text-center max-w-2xl mx-auto">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                THE LOGO
              </h3>
              <div className="py-12 flex justify-center items-center">
                <svg className="w-32 h-32 text-[#D4AF37]" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Outer circle of sacred geometry */}
                  <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
                  {/* Nested geometric petals */}
                  <circle cx="50" cy="32" r="18" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="50" cy="68" r="18" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="32" cy="50" r="18" stroke="currentColor" strokeWidth="1.2" />
                  <circle cx="68" cy="50" r="18" stroke="currentColor" strokeWidth="1.2" />
                  {/* Central balance node */}
                  <circle cx="50" cy="50" r="6" fill="currentColor" />
                  <path d="M50 5 L50 95" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                  <path d="M5 50 L95 50" stroke="currentColor" strokeWidth="0.8" opacity="0.4" />
                </svg>
              </div>
              <div className="text-left space-y-4">
                <h4 className="font-mono text-xs text-[#FF4500] tracking-widest uppercase font-semibold">WHY THIS LOGO</h4>
                <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                  Inspired by sacred geometry and nature, the logo symbolises harmony, balance and interconnected living. The symmetrical form reflects stability and trust, while the organic geometry represents the relationship between people, nature and wellbeing. Finished in gold, the mark reinforces the project's premium positioning while remaining timeless and highly versatile across every brand touchpoint.
                </p>
              </div>
            </div>

            {/* Subsection: Investor Brochure */}
            <div className="space-y-4 text-left max-w-2xl mx-auto pt-6">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                INVESTOR BROCHURE
              </h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Rather than creating a conventional real estate brochure filled with specifications, we developed a narrative-led presentation that introduced the philosophy behind Swaragya first. The content was structured to communicate the vision, wellness ecosystem and long-term value of the project before presenting the investment opportunity, creating a stronger strategic and emotional connection with prospective buyers and investors.
              </p>
            </div>

            {/* Subsection: Website */}
            <div className="space-y-4 text-left max-w-2xl mx-auto pt-6">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                WEBSITE
              </h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Designed as the digital home of the brand, the website blends immersive storytelling with a structured ownership journey. From introducing the philosophy behind Swaragya to explaining villa layouts, wellness experiences and the investment model, every interaction was designed to build clarity, confidence and desire.
              </p>
            </div>

            {/* Subsection: Brand Communication */}
            <div className="space-y-4 text-left max-w-2xl mx-auto pt-6">
              <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider">
                BRAND COMMUNICATION
              </h3>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Created a consistent communication system that connected wellness, hospitality and investment into one cohesive story across every touchpoint.
              </p>
            </div>

          </div>

          {/* Section: The Transformation */}
          <div className="space-y-8">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE TRANSFORMATION
            </h2>
            
            {/* Clean textual list for normal design */}
            <div className="max-w-md mx-auto space-y-4 pt-4">
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">LOGO</span>
                <span className="font-mono text-[10px] text-neutral-500">SYSTEM 01</span>
              </div>
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">INVESTOR BROCHURE</span>
                <span className="font-mono text-[10px] text-neutral-500">SYSTEM 02</span>
              </div>
              <div className="py-3 border-b border-white/10 flex justify-between items-center">
                <span className="font-display text-sm tracking-[0.2em] uppercase text-white font-semibold">WEBSITE PAGES</span>
                <span className="font-mono text-[10px] text-neutral-500">SYSTEM 03</span>
              </div>
            </div>
          </div>

          {/* Section: Business Impact */}
          <div className="space-y-8 pt-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BUSINESS IMPACT
            </h2>
            
            {/* Clean minimalist bullet points */}
            <div className="max-w-lg mx-auto text-left space-y-4">
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Established a distinctive identity in the emerging wellness real estate category.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Unified the brand across print and digital touchpoints.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Simplified a complex investment proposition into a clear ownership journey.</span>
              </div>
              <div className="flex items-start gap-4">
                <span className="text-[#FF4500] font-bold text-sm">/</span>
                <span className="font-sans text-sm sm:text-base text-neutral-400 font-light">Created a scalable foundation for launch and future marketing initiatives.</span>
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
