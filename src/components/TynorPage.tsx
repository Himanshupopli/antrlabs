import { motion } from "motion/react";
import { useState } from "react";
import { 
  Smile, 
  Moon, 
  Activity, 
  Briefcase, 
  CheckCircle2, 
  ChevronRight, 
  FileText, 
  ShoppingBag,
  BookOpen,
  X
} from "lucide-react";

interface TynorPageProps {
  onBack: () => void;
}

export default function TynorPage({ onBack }: TynorPageProps) {
  // Simple state to track active segment or tab to make the page interactive
  const [activeTab, setActiveTab] = useState<"lifestyle" | "film" | "packaging">("lifestyle");

  return (
    <div id="tynor-exact-clone-page" className="bg-black text-white min-h-screen pt-8 pb-0 font-sans selection:bg-[#FF3F00] selection:text-black overflow-x-hidden relative">
      
      {/* 1. Header Bar matching PDF Exactly */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center border-b border-neutral-900/40">
        {/* Clickable Logo "ANTR" to go back */}
        <button
          onClick={onBack}
          className="font-display text-xl md:text-2xl font-bold tracking-[0.25em] text-white hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
        >
          ANTR
        </button>

        {/* Hamburger Menu Icon (Two horizontal lines) */}
        <button 
          onClick={onBack}
          className="flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer"
          aria-label="Back to selected works"
        >
          <div className="w-8 h-[1.5px] bg-white"></div>
          <div className="w-8 h-[1.5px] bg-white"></div>
        </button>
      </header>

      {/* Floating back assist for preview users */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 pt-4">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#FF3F00] hover:text-white transition-colors focus:outline-none cursor-pointer"
        >
          ← BACK TO WORKS
        </button>
      </div>

      <main className="py-12">
        
        {/* 2. Top "Beyond Recovery." Red/Orange spaced tag */}
        <div className="text-center mb-10 px-4">
          <span className="font-mono text-[#FF3F00] uppercase tracking-[0.35em] text-xs sm:text-sm md:text-base font-bold">
            Beyond Recovery.
          </span>
        </div>

        {/* 3. Horizontal dividing line */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-10">
          <div className="w-full h-[1px] bg-neutral-800"></div>
        </div>

        {/* 4. Tynor Logo with wave shape on top */}
        <div className="flex flex-col items-center justify-center mb-12 select-none">
          <div className="relative flex flex-col items-center">
            {/* Custom SVG Wave representing the Tynor brand swoosh exactly */}
            <svg 
              className="w-20 h-6 text-[#FF3F00] mb-1" 
              viewBox="0 0 100 24" 
              fill="currentColor"
            >
              <path d="M10 16 C 30 20, 45 4, 90 10 C 90 10, 60 14, 10 16 Z" />
            </svg>
            <span className="font-display font-black text-5xl sm:text-6xl tracking-tight text-white lowercase">
              tynor
            </span>
          </div>
        </div>

        {/* 5. Pill Navigation Tags */}
        <div className="flex flex-wrap justify-center items-center gap-3 sm:gap-4 max-w-3xl mx-auto px-6 mb-16">
          <button 
            onClick={() => setActiveTab("lifestyle")}
            className={`px-6 py-3 font-mono text-[11px] sm:text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
              activeTab === "lifestyle" 
                ? "bg-[#FF3F00] text-black border-[#FF3F00]" 
                : "bg-transparent text-white border-neutral-800 hover:border-neutral-500"
            }`}
          >
            Lifestyle Range
          </button>
          <button 
            onClick={() => setActiveTab("film")}
            className={`px-6 py-3 font-mono text-[11px] sm:text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
              activeTab === "film" 
                ? "bg-[#FF3F00] text-black border-[#FF3F00]" 
                : "bg-transparent text-white border-neutral-800 hover:border-neutral-500"
            }`}
          >
            Short Film Production
          </button>
          <button 
            onClick={() => setActiveTab("packaging")}
            className={`px-6 py-3 font-mono text-[11px] sm:text-xs tracking-[0.15em] font-bold uppercase transition-all duration-300 border focus:outline-none cursor-pointer ${
              activeTab === "packaging" 
                ? "bg-[#FF3F00] text-black border-[#FF3F00]" 
                : "bg-transparent text-white border-neutral-800 hover:border-neutral-500"
            }`}
          >
            Packaging Design
          </button>
        </div>

        {/* 6. Bordered Metadata Grid */}
        <div className="max-w-xl mx-auto mb-20 px-6">
          <div className="grid grid-cols-2 gap-x-12 gap-y-12">
            {/* Stage */}
            <div className="text-center flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-400">STAGE</span>
              <div className="w-full max-w-[120px] h-[1px] bg-[#FF3F00] mt-3"></div>
            </div>
            {/* Services */}
            <div className="text-center flex flex-col items-center">
              <span className="font-mono text-[11px] tracking-[0.25em] text-neutral-400">SERVICES</span>
              <div className="w-full max-w-[120px] h-[1px] bg-[#FF3F00] mt-3"></div>
            </div>
          </div>
        </div>

        {/* 7. THE CHALLENGE */}
        <div className="max-w-3xl mx-auto text-center mb-20 px-6">
          <h2 className="font-sans font-bold text-base md:text-lg tracking-[0.25em] text-white mb-6 uppercase">
            THE CHALLENGE
          </h2>
          <p className="font-mono text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wider max-w-2xl mx-auto text-center">
            Tynor was launching a new lifestyle-focused product range.
            <br />
            The challenge was shifting the perception of the brand from being 
            associated primarily with injury recovery to becoming part of 
            people's everyday wellness routine.
            <br />
            Rather than selling orthopaedic products, the campaign needed to sell 
            a healthier lifestyle.
          </p>
        </div>

        {/* 8. THE STRATEGY - Part 1 */}
        <div className="max-w-3xl mx-auto text-center mb-20 px-6">
          <h2 className="font-sans font-bold text-base md:text-lg tracking-[0.25em] text-white mb-6 uppercase">
            THE STRATEGY
          </h2>
          <p className="font-mono text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wider max-w-2xl mx-auto text-center">
            Instead of organising communication around products, we organised it 
            around moments in everyday life. Walk Better. Work Better. Sleep 
            Better. Live Better.
            <br />
            Every product naturally fits within one of these lifestyle pillars, 
            making the catalogue easier to navigate while creating an emotional 
            story around the range.
          </p>
        </div>

        {/* 9. THE STRATEGY - Part 2 (Bullet points) */}
        <div className="max-w-3xl mx-auto text-center mb-24 px-6">
          <h2 className="font-sans font-bold text-base md:text-lg tracking-[0.25em] text-white mb-6 uppercase">
            THE STRATEGY
          </h2>
          <p className="font-mono text-xs md:text-sm text-neutral-400 leading-relaxed tracking-wider max-w-2xl mx-auto text-center mb-8">
            The visual language moved away from traditional medical advertising.
          </p>
          <div className="max-w-lg mx-auto text-left font-mono text-xs md:text-sm text-neutral-300 space-y-4">
            <div className="flex items-start gap-3">
              <span className="text-[#FF3F00] mt-0.5">•</span>
              <span>Flat illustrations instead of stock-heavy healthcare imagery</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF3F00] mt-0.5">•</span>
              <span>Bright lifestyle colours</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF3F00] mt-0.5">•</span>
              <span>Human-first storytelling</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF3F00] mt-0.5">•</span>
              <span>Consistent iconography</span>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-[#FF3F00] mt-0.5">•</span>
              <span>Modular layouts across every communication touchpoint</span>
            </div>
          </div>
        </div>

        {/* --- COLLATERALS WITH LABELED STRIPS EXACTLY MATCHING THE PDF --- */}

        {/* Section A: Pos Creative for chemists */}
        <div className="max-w-4xl mx-auto px-6 mb-20" id="section-pos-creative">
          {/* Labeled Strip Header */}
          <div className="inline-block bg-[#2D2D2D] px-4 py-2 text-white font-mono text-[11px] tracking-widest uppercase mb-4 font-bold">
            Pos Creative for chemists
          </div>
          {/* Visual Container */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-10 rounded-none relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Live styled quadrants matching the PDF illustrations */}
              <div className="grid grid-cols-2 gap-3 aspect-square max-w-sm mx-auto w-full">
                {/* Walk Better Card */}
                <div className="bg-[#E63946] text-white p-4 flex flex-col justify-between items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-sans font-black text-xs tracking-wider opacity-60">WALK</div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center my-2">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-display font-black text-lg tracking-tight uppercase leading-none">
                    BETTER
                  </div>
                </div>

                {/* Work Better Card */}
                <div className="bg-[#457B9D] text-white p-4 flex flex-col justify-between items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-sans font-black text-xs tracking-wider opacity-60">WORK</div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center my-2">
                    <Briefcase className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-display font-black text-lg tracking-tight uppercase leading-none">
                    BETTER
                  </div>
                </div>

                {/* Sleep Better Card */}
                <div className="bg-[#1D3557] text-white p-4 flex flex-col justify-between items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-sans font-black text-xs tracking-wider opacity-60">SLEEP</div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center my-2">
                    <Moon className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-display font-black text-lg tracking-tight uppercase leading-none">
                    BETTER
                  </div>
                </div>

                {/* Live Better Card */}
                <div className="bg-[#F4A261] text-white p-4 flex flex-col justify-between items-start relative overflow-hidden group hover:scale-[1.02] transition-transform duration-300">
                  <div className="font-sans font-black text-xs tracking-wider opacity-60">LIVE</div>
                  <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center my-2">
                    <Smile className="w-4 h-4 text-white" />
                  </div>
                  <div className="font-display font-black text-lg tracking-tight uppercase leading-none">
                    BETTER
                  </div>
                </div>
              </div>

              {/* Right Column - Brand Statement & Details */}
              <div className="text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF3F00] animate-pulse"></span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF3F00] uppercase font-bold">
                    Tynor Lifestyle Range
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                  Chemists POS & Display Cubes
                </h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  Engineered modular cubes that chemists can configure to fit counters or shelf spaces. Incorporating bright, eye-catching color coding that stands out in typical cluttered pharmacy environments.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    4-Quadrant Grid
                  </span>
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Color-Coded
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section B: POS Stand */}
        <div className="max-w-4xl mx-auto px-6 mb-20" id="section-pos-stand">
          {/* Labeled Strip Header */}
          <div className="inline-block bg-[#2D2D2D] px-4 py-2 text-white font-mono text-[11px] tracking-widest uppercase mb-4 font-bold">
            POS Stand
          </div>
          {/* Visual Container */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-10 rounded-none relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Beautiful Mockup of a POS Stand */}
              <div className="bg-black/40 border border-neutral-800/80 p-6 flex flex-col justify-between rounded-lg aspect-[3/4] max-w-[280px] mx-auto w-full shadow-2xl relative">
                
                {/* Header Banner representing the POS Stand top billboard */}
                <div className="bg-gradient-to-r from-neutral-800 to-neutral-900 p-3 text-center border border-neutral-700/50 rounded-md">
                  <span className="font-mono text-[10px] tracking-[0.2em] text-[#FF3F00] block mb-1">
                    LIFESTYLE RANGE
                  </span>
                  <span className="font-sans font-extrabold text-xs tracking-tight text-white block">
                    tynor
                  </span>
                </div>

                {/* Stand Shelves with mock products */}
                <div className="space-y-4 my-4 flex-1 flex flex-col justify-center">
                  {/* Shelf 1 */}
                  <div className="border-b border-neutral-800 pb-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1">
                      <span>WALK BETTER</span>
                      <span className="text-red-500 font-bold">●</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 bg-[#E63946]/30 border border-[#E63946]/50 rounded"></div>
                      <div className="h-6 bg-[#E63946]/30 border border-[#E63946]/50 rounded"></div>
                      <div className="h-6 bg-[#E63946]/30 border border-[#E63946]/50 rounded"></div>
                    </div>
                  </div>

                  {/* Shelf 2 */}
                  <div className="border-b border-neutral-800 pb-2">
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1">
                      <span>WORK BETTER</span>
                      <span className="text-blue-500 font-bold">●</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 bg-[#457B9D]/30 border border-[#457B9D]/50 rounded"></div>
                      <div className="h-6 bg-[#457B9D]/30 border border-[#457B9D]/50 rounded"></div>
                      <div className="h-6 bg-[#457B9D]/30 border border-[#457B9D]/50 rounded"></div>
                    </div>
                  </div>

                  {/* Shelf 3 */}
                  <div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 mb-1">
                      <span>LIVE BETTER</span>
                      <span className="text-orange-400 font-bold">●</span>
                    </div>
                    <div className="grid grid-cols-3 gap-1">
                      <div className="h-6 bg-[#F4A261]/30 border border-[#F4A261]/50 rounded"></div>
                      <div className="h-6 bg-[#F4A261]/30 border border-[#F4A261]/50 rounded"></div>
                      <div className="h-6 bg-[#F4A261]/30 border border-[#F4A261]/50 rounded"></div>
                    </div>
                  </div>
                </div>

                {/* Base Plate with Brand tagline */}
                <div className="bg-[#FF3F00] p-2 text-center text-black rounded-md">
                  <span className="font-mono font-bold text-[9px] tracking-wider uppercase">
                    EVERYDAY WELLNESS
                  </span>
                </div>

              </div>

              {/* Right Column - Brand Statement & Details */}
              <div className="text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF3F00]"></span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF3F00] uppercase font-bold">
                    Retail Presentation
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                  Floor POS Stand
                </h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  Custom-designed floor standing unit for clinics and premium pharmacies. Highlights the core philosophy that Tynor is about enabling a colorful, active, healthier lifestyle rather than just recovering from trauma.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Interactive Shelving
                  </span>
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Premium Wood & Metal
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section C: Brochure */}
        <div className="max-w-4xl mx-auto px-6 mb-20" id="section-brochure">
          {/* Labeled Strip Header */}
          <div className="inline-block bg-[#2D2D2D] px-4 py-2 text-white font-mono text-[11px] tracking-widest uppercase mb-4 font-bold">
            Brochure
          </div>
          {/* Visual Container */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-10 rounded-none relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Beautiful Brochure Mockup */}
              <div className="bg-black/60 border border-neutral-800/80 p-5 rounded-lg aspect-[16/10] max-w-sm mx-auto w-full shadow-2xl flex flex-col justify-between">
                {/* Trifold spread visual */}
                <div className="grid grid-cols-3 gap-2 h-full">
                  {/* Left panel - Sleep Better */}
                  <div className="bg-[#1D3557]/20 border border-[#1D3557]/40 p-2 flex flex-col justify-between rounded">
                    <div>
                      <div className="h-1 w-6 bg-white/40 mb-1.5 rounded"></div>
                      <div className="h-1 w-full bg-white/20 mb-1 rounded"></div>
                      <div className="h-1 w-3/4 bg-white/20 mb-1 rounded"></div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[7px] text-[#457B9D] font-bold">SLEEP</span>
                    </div>
                  </div>

                  {/* Center panel - Main cover */}
                  <div className="bg-[#FF3F00]/10 border border-[#FF3F00]/30 p-2 flex flex-col justify-between items-center rounded text-center">
                    <svg className="w-4 h-4 text-[#FF3F00]" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span className="font-display font-black text-[9px] tracking-tight text-white lowercase">
                      tynor
                    </span>
                    <span className="font-mono text-[6px] tracking-widest text-neutral-400 uppercase">
                      LIFESTYLE
                    </span>
                  </div>

                  {/* Right panel - Walk Better */}
                  <div className="bg-[#E63946]/20 border border-[#E63946]/40 p-2 flex flex-col justify-between rounded">
                    <div>
                      <div className="h-1 w-8 bg-white/40 mb-1.5 rounded"></div>
                      <div className="h-1 w-full bg-white/20 mb-1 rounded"></div>
                      <div className="h-1 w-1/2 bg-white/20 mb-1 rounded"></div>
                    </div>
                    <div className="text-right">
                      <span className="font-mono text-[7px] text-[#E63946] font-bold">WALK</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column - Brand Statement & Details */}
              <div className="text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF3F00]"></span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF3F00] uppercase font-bold">
                    Information Design
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                  Luxe Product Catalogue & Brochure
                </h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  A high-end square trifold brochure styled with human-centric lifestyle layouts. Replaces dense clinical text with clean typography, icon grids, and warm user stories.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Trifold Layout
                  </span>
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Vector Illustration
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Section D: Other Collaterals */}
        <div className="max-w-4xl mx-auto px-6 mb-24" id="section-other-collaterals">
          {/* Labeled Strip Header */}
          <div className="inline-block bg-[#2D2D2D] px-4 py-2 text-white font-mono text-[11px] tracking-widest uppercase mb-4 font-bold">
            Other Collaterals
          </div>
          {/* Visual Container */}
          <div className="bg-neutral-900 border border-neutral-800 p-6 md:p-10 rounded-none relative overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              
              {/* Left Column - Beautiful Books/Notebooks Grid mockup */}
              <div className="grid grid-cols-4 gap-2 max-w-sm mx-auto w-full aspect-[16/9] items-end">
                {/* Book 1 - Walk */}
                <div className="h-[95%] bg-[#E63946] border border-white/10 rounded-sm flex flex-col justify-between p-2 shadow-lg hover:translate-y-[-8px] transition-transform duration-300">
                  <span className="font-sans font-black text-[8px] text-white/50">WALK</span>
                  <div className="h-0.5 w-full bg-white/20"></div>
                </div>
                {/* Book 2 - Work */}
                <div className="h-[80%] bg-[#457B9D] border border-white/10 rounded-sm flex flex-col justify-between p-2 shadow-lg hover:translate-y-[-8px] transition-transform duration-300">
                  <span className="font-sans font-black text-[8px] text-white/50">WORK</span>
                  <div className="h-0.5 w-full bg-white/20"></div>
                </div>
                {/* Book 3 - Sleep */}
                <div className="h-[90%] bg-[#1D3557] border border-white/10 rounded-sm flex flex-col justify-between p-2 shadow-lg hover:translate-y-[-8px] transition-transform duration-300">
                  <span className="font-sans font-black text-[8px] text-white/50">SLEEP</span>
                  <div className="h-0.5 w-full bg-white/20"></div>
                </div>
                {/* Book 4 - Live */}
                <div className="h-[85%] bg-[#F4A261] border border-white/10 rounded-sm flex flex-col justify-between p-2 shadow-lg hover:translate-y-[-8px] transition-transform duration-300">
                  <span className="font-sans font-black text-[8px] text-white/50">LIVE</span>
                  <div className="h-0.5 w-full bg-white/20"></div>
                </div>
              </div>

              {/* Right Column - Brand Statement & Details */}
              <div className="text-left space-y-4">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#FF3F00]"></span>
                  <span className="font-mono text-[10px] tracking-[0.25em] text-[#FF3F00] uppercase font-bold">
                    Physical Assets
                  </span>
                </div>
                <h3 className="font-display font-bold text-2xl tracking-tight text-white">
                  Lifestyle Booklets & Guidebooks
                </h3>
                <p className="font-mono text-xs text-neutral-400 leading-relaxed">
                  Compact instruction manuals designed as lifestyle pocket guides. Each booklet is themed around a wellness pillar and provides patients with proactive physical therapy routines and ergonomics tips.
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Pocket Size
                  </span>
                  <span className="px-2.5 py-1 bg-neutral-800 text-neutral-400 font-mono text-[9px] tracking-wider uppercase">
                    Tactile Cover
                  </span>
                </div>
              </div>

            </div>
          </div>
        </div>

      </main>

      {/* Subtle bottom back assistant bar */}
      <div className="bg-black py-8 text-center border-t border-neutral-900/60">
        <button
          onClick={onBack}
          className="font-mono text-xs tracking-[0.25em] text-neutral-400 hover:text-white transition-colors focus:outline-none cursor-pointer"
        >
          ← CLOSE CASE STUDY
        </button>
      </div>

    </div>
  );
}
