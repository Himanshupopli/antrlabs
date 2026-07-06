import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Coffee, Utensils, ArrowRight, Check, Quote, TrendingUp, Award, Shield } from "lucide-react";

interface CrustAndKettlePageProps {
  onBack: () => void;
}

export default function CrustAndKettlePage({ onBack }: CrustAndKettlePageProps) {
  const nameExplorations = [
    "Linden & Butter",
    "Rosalie House",
    "The Marais",
    "Blanc & Fleur",
    "Miette & Co.",
    "Café Aimée",
    "Blanc & Brioche",
    "Angelina's Bakery",
    "Crust & Kettle",
    "Aurelle",
    "La Lucerie Pâtisserie"
  ];

  return (
    <div 
      id="crust-kettle-minimal-page" 
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
        
        {/* 2. Headline - Baked with Character. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Baked With</div>
            <div className="mt-1 font-light text-white uppercase">Character.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large Crust & Kettle Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] text-white select-none uppercase pl-[0.2em]">
            Crust & Kettle
          </h1>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Food & Beverage</span>
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
                Brand Naming • Brand Strategy • Brand Foundation
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: The Brief */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The objective was to create a premium café & patisserie that felt more like a destination than a traditional bakery. Inspired by the quiet elegance of European café culture, the brand needed to balance craftsmanship, warmth while appealing to a modern, design-conscious audience.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The identity drew inspiration from the timeless charm of Copenhagen and Landour, combining refined aesthetics with an obsession for detail. Every decision - from the name to the visual identity was guided by the ambition of building a globally scalable hospitality brand rooted in memorable experiences rather than just great products.
            </p>
          </div>

          {/* Section: Name Exploration */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              NAME EXPLORATION
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              Every name was evaluated against the same brief—creating a premium, design-led café and patisserie inspired by European café culture. We explored multiple directions, each reflecting a different expression of the brand&apos;s personality.
            </p>
            
            {/* Elegant horizontal/grid listing of name variations - no heavy boxes */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 max-w-2xl mx-auto py-6">
              {nameExplorations.map((name, i) => (
                <div key={i} className="flex items-center gap-2">
                  <span className="font-mono text-[10px] text-neutral-600">{(i + 1).toString().padStart(2, '0')}</span>
                  <span className={`font-display text-sm tracking-widest uppercase ${name === "Crust & Kettle" ? "text-[#FF4500] font-bold" : "text-neutral-400"}`}>
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: The Chosen */}
          <div className="space-y-6 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE CHOSEN
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Among all the directions explored, <strong className="text-white font-medium">Crust & Kettle</strong> best captured the spirit of the brand. It combines the two heroes of the experience - artisan baking and handcrafted brews - into a name that is simple, memorable and instantly familiar.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Unlike names rooted in a specific geography or language, it feels approachable, globally scalable and broad enough to grow beyond a traditional bakery, while remaining deeply connected to hospitality.
            </p>
          </div>

          {/* Section: Logo Explorations */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              LOGO EXPLORATIONS
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              We explored multiple directions, each reflecting a different expression of the brand from traditional European bakehouses to contemporary café aesthetics. Every direction was evaluated for memorability, scalability and alignment with the brand&apos;s positioning before arriving at the final identity.
            </p>

            {/* Custom elegant vector representation of concept geometries */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-xl mx-auto py-8">
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Traditional serif wheat form */}
                  <path d="M50 20 C50 20, 35 40, 50 60 C50 60, 65 40, 50 20" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M50 20 V80" stroke="currentColor" strokeWidth="1" strokeDasharray="2 2" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">THE BAKEHOUSE</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Modern geometric monogram */}
                  <rect x="30" y="30" width="40" height="40" rx="2" stroke="currentColor" strokeWidth="1.5" />
                  <path d="M45 30 L55 70" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">MINIMAL MONOGRAM</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Steam & kettle outline */}
                  <path d="M40 30 C45 25, 55 25, 60 30" stroke="currentColor" strokeWidth="1.5" />
                  <circle cx="50" cy="55" r="15" stroke="currentColor" strokeWidth="1.5" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">STEAM & COFFEE</span>
              </div>
              <div className="flex flex-col items-center gap-3">
                <svg className="w-16 h-16 text-neutral-600" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  {/* Copenhagen clean layout */}
                  <circle cx="50" cy="50" r="25" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                  <text x="50" y="54" textAnchor="middle" fill="currentColor" fontSize="11" fontFamily="sans-serif" letterSpacing="2">C&K</text>
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">THE RETRO EMBLEM</span>
              </div>
            </div>
          </div>

          {/* Section: Final Logo & Why It Works */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              FINAL LOGO & WHY IT WORKS
            </h2>
            
            {/* Elegant bespoke vector wordmark incorporating a kettle handle in 'C' or 'K' */}
            <div className="py-12 flex flex-col justify-center items-center">
              <svg className="w-64 h-32 text-white" viewBox="0 0 300 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Custom Wordmark with integrated design details */}
                <text x="150" y="45" textAnchor="middle" fill="white" fontSize="24" fontFamily="serif" fontWeight="900" letterSpacing="4">
                  CRUST
                </text>
                <text x="150" y="78" textAnchor="middle" fill="white" fontSize="20" fontFamily="serif" fontWeight="900" letterSpacing="4">
                  & KETTLE
                </text>
                
                {/* Elegantly integrated Kettle silhouette floating beautifully in the back or acting as the union */}
                <path d="M142 53 H158 L162 62 C162 62, 150 65, 138 62 Z" stroke="#FF4500" strokeWidth="1.5" fill="none" />
                {/* Tiny organic steam waves */}
                <path d="M146 48 C146 48, 148 45, 147 43" stroke="#FF4500" strokeWidth="1" />
                <path d="M154 48 C154 48, 156 45, 155 43" stroke="#FF4500" strokeWidth="1" />
              </svg>
              <p className="text-[10px] font-mono text-neutral-500 tracking-widest mt-2 uppercase">INTEGRATED TYPOGRAPHIC EMBLEM & WORDMARK</p>
            </div>

            <div className="text-left max-w-2xl mx-auto space-y-4">
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                The final identity uses a custom wordmark inspired by traditional European bakehouses. A kettle is seamlessly integrated into the letterform, creating an ownable visual asset that makes the logo distinctive without feeling forced. 
              </p>
              <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                Designed for strong signage, high recall and long-term scalability, the identity works effortlessly across physical and digital touchpoints. We tried multiple colours and experimented with the mockups. Which one do you think the client chose?
              </p>
            </div>
          </div>

          {/* Section: The Visual System */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE VISUAL SYSTEM
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              We developed a cohesive brand identity that spans across packaging, stationery, digital platforms, and in-store touchpoints. Elegant earth tones combined with crisp white and warm orange details create a memorable presence.
            </p>
            
            <div className="space-y-6 text-left max-w-5xl mx-auto">
              {/* Feature Hero */}
              <div className="w-full aspect-[16/9] sm:aspect-[21/9] bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342769/Crust_Kettle-59_sryqlo.jpg"
                  alt="Crust & Kettle Brand Hero"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Two Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342767/Crust_Kettle-60_ixdxlo.jpg"
                    alt="Crust & Kettle Packaging Detail"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342767/Crust_Kettle-61_wdb23f.jpg"
                    alt="Crust & Kettle Stationery"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Three Column Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342767/Crust_Kettle-62_tvhily.jpg"
                    alt="Crust & Kettle Coffee Mug"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-63_fvs18a.jpg"
                    alt="Crust & Kettle Coffee Beans Bag"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-64_lbkcqv.jpg"
                    alt="Crust & Kettle Menu"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Three Column Grid 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-66_eiuh8w.jpg"
                    alt="Crust & Kettle Bag"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-67_dwxkfc.jpg"
                    alt="Crust & Kettle Takeaway Cup"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                  <img 
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-68_hk6dlu.jpg"
                    alt="Crust & Kettle Retail Display"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Wide Aspect Footer Showcase */}
              <div className="w-full aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg overflow-hidden flex items-center justify-center">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342768/Crust_Kettle-69_oml5lj.jpg"
                  alt="Crust & Kettle Brand Identity Collage"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
              </div>

            </div>
          </div>

          {/* Section: The Impact */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE IMPACT
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">LAUNCH FOUNDATION OUTCOMES</p>
            </div>

            {/* Premium details with icons */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">PRE-LAUNCH MOMENTUM</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Created a memorable brand identity before launch.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">CATEGORY DIFFERENTIATION</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Established a distinctive visual language in a crowded café category.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Award className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">RETAIL & PACKAGING SCALABILITY</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Built a scalable identity system for retail, packaging and digital applications.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Shield className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">AN INSTANT INSTITUTION</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Delivered a brand that feels like an institution from day one.</p>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Elegant quote icon avatar */}
            <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <Quote className="w-8 h-8 text-white/80" />
            </div>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “Working with Ananya and the ANTR team gave us clarity before creativity. Every decision from the name to the identity felt strategic and deeply considered.”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Vashishta Chary
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder, Crust & Kettle (Farm to Cups Parent company)
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
