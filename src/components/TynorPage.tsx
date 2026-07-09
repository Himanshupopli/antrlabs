import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Sparkles, 
  Activity, 
  Briefcase, 
  Moon, 
  Smile, 
  Play, 
  FileText, 
  CheckCircle, 
  Layers, 
  Info,
  Sliders,
  Maximize2
} from "lucide-react";

import WorkFeatureImageHeading from "./WorkFeatureImageHeading";

interface TynorPageProps {
  onBack: () => void;
  featureImage: string;
}

export default function TynorPage({ onBack, featureImage }: TynorPageProps) {
  // Tabs for the three case studies
  const [activeTab, setActiveTab] = useState<"lifestyle" | "noor" | "packaging">("lifestyle");

  return (
    <div 
      id="tynor-case-study-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF3F00] selection:text-black overflow-x-hidden relative"
    >
      
      {/* Back navigation assist */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FF3F00] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none group"
        >
          <ArrowLeft className="w-3 h-3 group-hover:-translate-x-1 transition-transform" />
          BACK TO SELECTED WORKS
        </button>
      </div>

      <main className="py-16 md:py-24">
        
        {/* 2. Headline - Beyond Recovery */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF3F00] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Beyond</div>
            <div className="mt-1 font-light text-white">Recovery.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Tynor Title */}
        <div className="text-center mb-20 px-4">
          <WorkFeatureImageHeading label="Tynor" imageUrl={featureImage} />
        </div>

        {/* 5. Minimalist Elegant Case Tab Navigation */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="flex flex-col sm:flex-row justify-center border-b border-white/10 text-xs font-mono tracking-[0.2em]">
            <button
              onClick={() => setActiveTab("lifestyle")}
              className={`py-4 px-6 uppercase text-center focus:outline-none transition-colors border-b-2 sm:border-b-0 ${
                activeTab === "lifestyle"
                  ? "text-[#FF3F00] border-[#FF3F00] sm:border-b-2 sm:border-[#FF3F00] font-bold"
                  : "text-neutral-500 border-transparent hover:text-neutral-300"
              }`}
            >
              01 • Lifestyle Range
            </button>
            <button
              onClick={() => setActiveTab("noor")}
              className={`py-4 px-6 uppercase text-center focus:outline-none transition-colors border-b-2 sm:border-b-0 ${
                activeTab === "noor"
                  ? "text-[#FF3F00] border-[#FF3F00] sm:border-b-2 sm:border-[#FF3F00] font-bold"
                  : "text-neutral-500 border-transparent hover:text-neutral-300"
              }`}
            >
              02 • Noor Short Film
            </button>
            <button
              onClick={() => setActiveTab("packaging")}
              className={`py-4 px-6 uppercase text-center focus:outline-none transition-colors border-b-2 sm:border-b-0 ${
                activeTab === "packaging"
                  ? "text-[#FF3F00] border-[#FF3F00] sm:border-b-2 sm:border-[#FF3F00] font-bold"
                  : "text-neutral-500 border-transparent hover:text-neutral-300"
              }`}
            >
              03 • Insole Gel Packaging
            </button>
          </div>
        </div>

        {/* 6. Dynamic Content based on Active Tab */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
          >
            
            {/* ==================== CASE STUDY 01: LIFESTYLE RANGE ==================== */}
            {activeTab === "lifestyle" && (
              <div className="space-y-24 max-w-4xl mx-auto px-6">
                
                {/* Meta Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-white/20 font-mono text-xs tracking-[0.15em]">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">CASE STUDY 01</span>
                      <span className="text-white uppercase font-bold text-sm">TYNOR LIFESTYLE RANGE</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
                      <span className="text-white uppercase">Campaign Launch</span>
                    </div>
                  </div>
                  <div className="space-y-4 md:text-right">
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
                      <span className="text-white">2018</span>
                    </div>
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
                      <span className="text-white uppercase max-w-sm md:text-right">
                        Creative Direction • Campaign Concept • Illustration Direction • Marketing Communication • Print & Retail Collaterals
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content: The Challenge */}
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                    THE CHALLENGE
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Tynor was launching a new lifestyle-focused product range. The challenge was shifting the perception of the brand from being associated primarily with injury recovery to becoming part of people&apos;s everyday wellness routine.
                  </p>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Rather than selling orthopaedic products, the campaign needed to sell a healthier lifestyle.
                  </p>
                </div>

                {/* Content: The Strategy */}
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                    THE STRATEGY
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Instead of organising communication around products, we organised it around moments in everyday life: <strong className="text-white font-medium">Walk Better, Work Better, Sleep Better, Live Better.</strong>
                  </p>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Every product naturally fits within one of these lifestyle pillars, making the catalogue easier to navigate while creating an emotional story around the range.
                  </p>
                </div>

                {/* Content: Creative Direction */}
                <div className="space-y-12">
                  <div className="space-y-4 text-center max-w-3xl mx-auto">
                    <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                      CREATIVE DIRECTION
                    </h2>
                    <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                      The visual language moved away from traditional medical advertising to embrace a human-centric lifestyle story:
                    </p>
                  </div>

                  {/* List of points */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto font-mono text-xs tracking-wider">
                    <div className="flex items-start gap-3 p-4 bg-neutral-950 border border-neutral-900 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF3F00] mt-1.5 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <span className="text-white font-bold uppercase">ILLUSTRATION DRIVEN</span>
                        <p className="text-neutral-400 font-light text-[11px] leading-relaxed">Flat illustrations instead of stock-heavy, sterile healthcare imagery.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-neutral-950 border border-neutral-900 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF3F00] mt-1.5 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <span className="text-white font-bold uppercase">VIBRANT PALETTE</span>
                        <p className="text-neutral-400 font-light text-[11px] leading-relaxed">Bright lifestyle colours to signal energy, movement, and recovery.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-neutral-950 border border-neutral-900 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF3F00] mt-1.5 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <span className="text-white font-bold uppercase">HUMAN-FIRST STORY</span>
                        <p className="text-neutral-400 font-light text-[11px] leading-relaxed">Communication centering on everyday routines rather than clinical diagnostics.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 p-4 bg-neutral-950 border border-neutral-900 rounded">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#FF3F00] mt-1.5 flex-shrink-0"></div>
                      <div className="space-y-1">
                        <span className="text-white font-bold uppercase">MODULAR FRAMEWORKS</span>
                        <p className="text-neutral-400 font-light text-[11px] leading-relaxed">Consistent iconography and highly clean, adaptive layout templates.</p>
                      </div>
                    </div>
                  </div>

                  {/* Aesthetic Representation Grid of Lifestyle Pillars */}
                  <div className="pt-8">
                    <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block text-center mb-6">
                      VISUAL EXPRESSIONS OF THE LIFESTYLE PILLARS
                    </span>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
                      
                      <div className="border border-white/10 p-6 flex flex-col items-center justify-between text-center min-h-[140px]">
                        <span className="font-mono text-[10px] text-red-500 font-semibold tracking-widest uppercase">PILLAR 01</span>
                        <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center my-3">
                          <Activity className="w-5 h-5 text-red-500" />
                        </div>
                        <span className="font-display font-bold text-xs tracking-wider text-white uppercase">WALK BETTER</span>
                      </div>

                      <div className="border border-white/10 p-6 flex flex-col items-center justify-between text-center min-h-[140px]">
                        <span className="font-mono text-[10px] text-blue-400 font-semibold tracking-widest uppercase">PILLAR 02</span>
                        <div className="w-10 h-10 rounded-full bg-blue-400/10 flex items-center justify-center my-3">
                          <Briefcase className="w-5 h-5 text-blue-400" />
                        </div>
                        <span className="font-display font-bold text-xs tracking-wider text-white uppercase">WORK BETTER</span>
                      </div>

                      <div className="border border-white/10 p-6 flex flex-col items-center justify-between text-center min-h-[140px]">
                        <span className="font-mono text-[10px] text-indigo-400 font-semibold tracking-widest uppercase">PILLAR 03</span>
                        <div className="w-10 h-10 rounded-full bg-indigo-400/10 flex items-center justify-center my-3">
                          <Moon className="w-5 h-5 text-indigo-400" />
                        </div>
                        <span className="font-display font-bold text-xs tracking-wider text-white uppercase">SLEEP BETTER</span>
                      </div>

                      <div className="border border-white/10 p-6 flex flex-col items-center justify-between text-center min-h-[140px]">
                        <span className="font-mono text-[10px] text-amber-500 font-semibold tracking-widest uppercase">PILLAR 04</span>
                        <div className="w-10 h-10 rounded-full bg-amber-500/10 flex items-center justify-center my-3">
                          <Smile className="w-5 h-5 text-amber-500" />
                        </div>
                        <span className="font-display font-bold text-xs tracking-wider text-white uppercase">LIVE BETTER</span>
                      </div>

                    </div>
                    <p className="text-center font-mono text-[10px] text-neutral-500 uppercase tracking-wider mt-4">
                      POSTERS • CATALOGUE SPREADS • LIFESTYLE ILLUSTRATIONS • WHEEL CONCEPT • RETAIL CREATIVES
                    </p>
                  </div>
                </div>

                {/* Content: Outcome */}
                <div className="space-y-6 text-center max-w-3xl mx-auto pt-6 border-t border-white/10">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                    OUTCOME
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    The campaign created a unified identity for the entire Lifestyle Range, allowing dozens of products to feel like one coherent ecosystem rather than individual medical devices.
                  </p>
                </div>

              </div>
            )}

            {/* ==================== CASE STUDY 02: NOOR SHORT FILM ==================== */}
            {activeTab === "noor" && (
              <div className="space-y-24 max-w-4xl mx-auto px-6">
                
                {/* Meta Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-white/20 font-mono text-xs tracking-[0.15em]">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">CASE STUDY 02</span>
                      <span className="text-white uppercase font-bold text-sm">NOOR</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
                      <span className="text-white uppercase">Short Film Production</span>
                    </div>
                  </div>
                  <div className="space-y-4 md:text-right">
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">DISTRIBUTION</span>
                      <span className="text-white">Disney+ Hotstar / YouTube</span>
                    </div>
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
                      <span className="text-white uppercase max-w-sm md:text-right">
                        Art Direction • Visual Storytelling • Brand Integration
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content: The Brief */}
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                    THE BRIEF
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Create the visual world for Noor, a branded short film that communicated deep emotion without feeling like an advertisement.
                  </p>
                </div>

                {/* Content: The Approach */}
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                    THE APPROACH
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    The focus was on creating an authentic visual language that allowed the story to take precedence while subtly reinforcing the values of the brand.
                  </p>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Every frame, prop, colour palette and environment was designed to support the emotional journey rather than overt product placement.
                  </p>
                </div>

                {/* Content: The Film */}
                <div className="space-y-6 text-center max-w-3xl mx-auto pt-6 border-t border-white/10">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                    THE FILM
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    The film was later acquired by <strong className="text-white font-medium">Disney+ Hotstar</strong> and is now available publicly on YouTube, extending its reach far beyond a conventional branded campaign.
                  </p>
                  <div className="w-full aspect-video bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden shadow-2xl">
                    <iframe
                      src="https://www.youtube.com/embed/Qx3dV4YoBJ0"
                      title="Noor by Tynor Group"
                      className="w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    This demonstrates ANTR&apos;s belief that brands are built through stories people choose to watch — not advertisements they skip.
                  </p>
                </div>

              </div>
            )}

            {/* ==================== CASE STUDY 03: INSOLE GEL PACKAGING ==================== */}
            {activeTab === "packaging" && (
              <div className="space-y-24 max-w-4xl mx-auto px-6">
                
                {/* Meta Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-6 border-b border-white/20 font-mono text-xs tracking-[0.15em]">
                  <div className="space-y-4">
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">CASE STUDY 03</span>
                      <span className="text-white uppercase font-bold text-sm">TYNOR INSOLE GEL PACKAGING</span>
                    </div>
                    <div className="flex flex-col gap-1">
                      <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
                      <span className="text-white uppercase">Packaging Design</span>
                    </div>
                  </div>
                  <div className="space-y-4 md:text-right">
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">FOCUS</span>
                      <span className="text-white">Information Architecture & Design Systems</span>
                    </div>
                    <div className="flex flex-col gap-1 md:items-end">
                      <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
                      <span className="text-white uppercase max-w-sm md:text-right">
                        Packaging Design • Information Architecture • Design Systems • Retail Communication
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content: The Brief */}
                <div className="space-y-6 text-center max-w-3xl mx-auto">
                  <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                    THE BRIEF
                  </h2>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    Tynor wanted to redesign the packaging for its Insole Gel range. The objective wasn&apos;t simply to make it look better — it needed to stand out on crowded retail shelves while remaining trustworthy enough for pharmacies and healthcare retailers.
                  </p>
                  <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                    The packaging also had to accommodate complex product information without overwhelming customers.
                  </p>
                </div>

                {/* Content: Exploration */}
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                      EXPLORATION
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The first concepts pushed the category in a bold new direction. Bright gradients, expressive typography and contemporary layouts helped reposition the product as something modern and lifestyle-oriented instead of purely medical.
                    </p>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The goal wasn&apos;t to arrive at the perfect solution immediately — it was to explore the boundaries before narrowing the direction.
                    </p>
                  </div>

                  {/* Initial Mapping and Show brief / concept page */}
                  <div className="aspect-[16/10] sm:aspect-[21/10] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group max-w-4xl mx-auto mt-6">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344222/iniial_understanding_rjafts.jpg"
                      alt="Tynor Initial Project Understanding and Mapping"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none border border-white/5">
                      CONCEPT DESIGN MAPPING & BRIEF ARCHITECTURE
                    </div>
                  </div>
                </div>

                {/* Content: First Drafts */}
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">FIRST DRAFT EXPLORATIONS</span>
                    <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                      Tactile and visual mockups pushing expressive typography and modern contrast before entering user reviews.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
                    <div className="aspect-[3/4] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344221/first_drafts1-77_ilrrs8.jpg"
                        alt="Tynor First Draft Option A"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        EXPLORATION DRAFT v1.1
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344222/first_drafts1-78_krguz5.jpg"
                        alt="Tynor First Draft Option B"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        EXPLORATION DRAFT v1.2
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344221/first_drafts1-79_ksj0nb.jpg"
                        alt="Tynor First Draft Option C"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        EXPLORATION DRAFT v1.3
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content: Designing Through Feedback */}
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                      DESIGNING THROUGH FEEDBACK
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The project went through multiple review cycles. The initial concepts were considered visually exciting but too loud for the primary retail environment. Subsequent iterations introduced calmer typography, refined colour palettes, improved photography and cleaner layouts while retaining enough distinction to stand apart on shelf.
                    </p>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      Rather than treating feedback as revisions, every round became an opportunity to improve the balance between retail visibility and medical credibility.
                    </p>
                  </div>

                  {/* Flow representation */}
                  <div className="py-2.5 px-4 bg-neutral-950 border border-neutral-900 rounded-xl font-mono text-[9px] sm:text-[10px] text-neutral-500 uppercase tracking-widest flex justify-center items-center gap-2 sm:gap-4 flex-wrap max-w-2xl mx-auto">
                    <span>FIRST DRAFT</span>
                    <span className="text-[#FF3F00] opacity-60">→</span>
                    <span className="text-[#FF3F00] font-bold">RETAIL REVIEW</span>
                    <span className="text-[#FF3F00] opacity-60">→</span>
                    <span>CALMER TYPOGRAPHY</span>
                    <span className="text-[#FF3F00] opacity-60">→</span>
                    <span className="text-[#FF3F00] font-bold">CLINICAL ALIGNMENT</span>
                    <span className="text-[#FF3F00] opacity-60">→</span>
                    <span className="text-white font-bold">SECOND DRAFT</span>
                  </div>

                  {/* Feedback annotation images */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344224/feedback_1_web_s2i3br.jpg"
                        alt="Tynor Client Feedback and Review Loop 1"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        CRITIQUE GRID & LAYOUT DIRECTIVES
                      </div>
                    </div>

                    <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344220/feedback_2_web_mt5s2n.jpg"
                        alt="Tynor Client Feedback and Review Loop 2"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        ANATOMICAL LINEART REVISIONS
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content: Second Drafts / Refinements */}
                <div className="space-y-8 text-center max-w-4xl mx-auto">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <span className="text-xs font-mono text-neutral-500 uppercase tracking-widest block">REFINED SECOND DRAFTS</span>
                    <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
                      Subsequent iterations introducing calibrated visual palettes, high legibility type spacing, and focused layouts.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="aspect-[3/4] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group max-w-md mx-auto w-full">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344223/second_drafts-81_meollo.jpg"
                        alt="Tynor Refined Second Draft Version 8.1"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        REFINED COMPOSITION v2.1
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group max-w-md mx-auto w-full">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344224/second_drafts-82_ntjjcs.jpg"
                        alt="Tynor Refined Second Draft Version 8.2"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        REFINED COMPOSITION v2.2
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content: Building the Information System */}
                <div className="space-y-12 text-center max-w-4xl mx-auto">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                      BUILDING THE INFORMATION SYSTEM
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The biggest design challenge wasn&apos;t aesthetics. It was organising a large amount of information into a package customers could understand within seconds.
                    </p>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The final structure established a clear hierarchy to communicate key features seamlessly, creating a repeatable system that could be extended across future products while maintaining consistency.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center pt-4">
                    {/* Information Grid layout image */}
                    <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344222/layout_plan_qfwotj.jpg"
                        alt="Tynor Grid Layout Plan and Architecture Mapping"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        SYSTEM GRID LAYOUT DIAGRAM
                      </div>
                    </div>

                    {/* High contrast structured list for hierarchy matching requested elements */}
                    <div className="divide-y divide-white/10 font-mono text-xs tracking-wider text-left max-w-md mx-auto w-full bg-neutral-950/40 p-6 rounded-2xl border border-neutral-900">
                      <span className="text-[9px] text-[#FF3F00] uppercase tracking-[0.2em] font-bold block mb-4">SYSTEM ARCHITECTURE HIERARCHY</span>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• PRODUCT BENEFITS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Quick scan highlights</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• USAGE INSTRUCTIONS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Intuitive graphical guides</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• TECHNICAL SPECIFICATIONS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Clinically accurate parameters</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• CONSISTENT ICONS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Standardized visual glyphs</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• ANATOMY ILLUSTRATIONS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Clean line art overlays</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• BRAND INFORMATION</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right">Trust and medical heritage</span>
                      </div>
                      <div className="py-3 flex justify-between items-center">
                        <span className="text-white font-bold">• SUPPORTING GRAPHICS</span>
                        <span className="text-neutral-400 font-light text-[11px] text-right font-mono text-neutral-500">Structured modular canvas</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content: Final Outcome */}
                <div className="space-y-8 text-center max-w-4xl mx-auto pt-6 border-t border-white/10">
                  <div className="space-y-4 max-w-3xl mx-auto">
                    <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF3F00] uppercase font-bold">
                      FINAL OUTCOME
                    </h2>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The final packaging combined the energy of the early concepts with the clarity expected from a healthcare brand. Navigation became simpler. Key benefits became easier to scan.
                    </p>
                    <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                      The overall visual language felt cleaner, more premium and more approachable while remaining unmistakably Tynor. The inside packaging was also designed to continue the same experience, maintaining consistency beyond the outer box.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344222/final_packaging-88_izup0n.jpg"
                        alt="Tynor Final Packaging Production Run 1"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        FINAL PRODUCTION OUTCOME A
                      </div>
                    </div>

                    <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                      <img 
                        src="https://res.cloudinary.com/brb2bqid/image/upload/v1783344221/final_packaging-89_kydp7z.jpg"
                        alt="Tynor Final Packaging Production Run 2"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase border border-white/5">
                        FINAL PRODUCTION OUTCOME B
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            )}

          </motion.div>
        </AnimatePresence>

        {/* 7. Bright Red/Orange Testimonial Section */}
        <div className="bg-[#FF3F00] text-black py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative mt-28">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* White circular logo avatar */}
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-8 shadow-xl">
              <Sparkles className="w-7 h-7 text-[#FF3F00]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-black leading-none block mb-4 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-black text-base sm:text-lg md:text-xl font-bold leading-relaxed tracking-wide text-center max-w-2xl mb-8">
              “ From packaging, campaign design to art direction, Ananya and her team became a trusted creative partner for Tynor. “
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-black tracking-[0.2em] text-black uppercase mb-1">
              Abhay Noor
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-black/70 font-semibold uppercase">
              Strategic Director and HRM Leader, Tynor
            </div>

          </div>
        </div>

      </main>

      {/* Subtle bottom back assistant bar */}
      <div className="bg-black py-12 text-center border-t border-neutral-900/60">
        <button
          onClick={onBack}
          className="font-mono text-xs tracking-[0.25em] text-neutral-400 hover:text-[#FF3F00] transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← CLOSE CASE STUDY
        </button>
      </div>

    </div>
  );
}
