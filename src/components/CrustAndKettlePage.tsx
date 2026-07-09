import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Coffee, Utensils, ArrowRight, Check, Quote, TrendingUp, Award, Shield } from "lucide-react";
import WorkLogoHeading from "./WorkLogoHeading";

interface CrustAndKettlePageProps {
  onBack: () => void;
}

const CRUST_KETTLE_LOGO_EXPLORATIONS = [
  {
    src: "/crust-kettle/logo-exploration-52.jpg",
    label: "The Bakehouse"
  },
  {
    src: "/crust-kettle/logo-exploration-53.jpg",
    label: "Symbol First"
  },
  {
    src: "/crust-kettle/logo-exploration-54.jpg",
    label: "Custom Script"
  }
];

const CRUST_KETTLE_FINAL_LOGOS = [
  {
    src: "/crust-kettle/final-logo-green.jpg",
    label: "Primary Green"
  },
  {
    src: "/crust-kettle/final-logo-white.jpg",
    label: "Monochrome White"
  }
];

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
          <WorkLogoHeading label="Crust & Kettle" />
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

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto py-8 text-left">
              {CRUST_KETTLE_LOGO_EXPLORATIONS.map((item, index) => (
                <div
                  key={item.src}
                  className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group shadow-2xl"
                >
                  <div className="aspect-[3/5] bg-black flex items-center justify-center p-2">
                    <img
                      src={item.src}
                      alt={`Crust & Kettle logo exploration ${item.label}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-mono tracking-widest text-neutral-300 uppercase border border-neutral-800">
                    0{index + 1} / {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Final Logo & Why It Works */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              FINAL LOGO & WHY IT WORKS
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto py-8 text-left">
              {CRUST_KETTLE_FINAL_LOGOS.map((item, index) => (
                <div
                  key={item.src}
                  className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group shadow-2xl"
                >
                  <div className="aspect-[16/6] bg-black flex items-center justify-center p-2">
                    <img
                      src={item.src}
                      alt={`Crust & Kettle final logo ${item.label}`}
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-3 py-1 rounded text-[9px] font-mono tracking-widest text-neutral-300 uppercase border border-neutral-800">
                    0{index + 1} / {item.label}
                  </div>
                </div>
              ))}
              <p className="sm:col-span-2 text-center text-[10px] font-mono text-neutral-500 tracking-widest uppercase">
                INTEGRATED TYPOGRAPHIC EMBLEM & WORDMARK
              </p>
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
            <div className="max-w-5xl mx-auto bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center p-2 shadow-2xl">
              <img
                src="/crust-kettle/visual-system-collage.jpg"
                alt="Crust & Kettle visual system collage"
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
            <div className="max-w-4xl mx-auto space-y-4">
              <div className="text-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-500 uppercase">
                  Cafe Opening Shots
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-left">
                <div className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center p-2 shadow-2xl">
                  <img
                    src="/crust-kettle/cafe-opening-1.jpeg"
                    alt="Crust & Kettle cafe opening counter crowd"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
                <div className="bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden flex items-center justify-center p-2 shadow-2xl">
                  <img
                    src="/crust-kettle/cafe-opening-2.jpeg"
                    alt="Crust & Kettle cafe opening welcome sign"
                    className="w-full h-auto object-contain"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                </div>
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
