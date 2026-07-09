import React from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Trophy, 
  Flame, 
  Shirt, 
  Palette, 
  Users, 
  Instagram, 
  Calendar, 
  Tv, 
  ArrowUpRight, 
  Activity, 
  Shield, 
  Eye, 
  Sparkles,
  Layout,
  Layers
} from "lucide-react";

import WorkLogoHeading from "./WorkLogoHeading";

interface StreetballPageProps {
  onBack: () => void;
}

export default function StreetballPage({ onBack }: StreetballPageProps) {
  return (
    <div 
      id="streetball-case-study-page" 
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
        
        {/* 2. Headline - Playing with Identity. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Playing with</div>
            <div className="mt-1 font-light text-white">Identity.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="Streetball League" logoUrl="/work-logos/street-ball.png" />
          <span className="font-mono text-xs sm:text-sm text-neutral-500 tracking-[0.3em] uppercase block mt-4">
            Franchise Identity & Team Branding
          </span>
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Sports & Entertainment</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Intellectual Property</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2019-2021</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Team Branding • Jersey Design • Event Collaterals • Social Communication
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-4xl mx-auto px-6 space-y-32 mb-32">
          
          {/* Section: The Brief */}
          <div className="space-y-8 max-w-3xl mx-auto text-center">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Streetball League, founded by <strong className="text-white font-medium">Rannvijay Singha</strong>, brought together creators, athletes and celebrities through a city-based basketball league. We were brought in to build the identities for two franchise teams, creating distinctive brands that could live across jerseys, social media and the event itself.
            </p>
          </div>

          {/* PROJECT ONE: SHOOTING STARS */}
          <div className="pt-16 border-t border-white/10 space-y-16">
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] text-[#FF4500] tracking-[0.3em] uppercase block font-bold">
                PROJECT ONE
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase">
                SHOOTING STARS
              </h2>
              <div className="w-12 h-[2px] bg-[#FF4500] mx-auto"></div>
            </div>

            {/* Shooting Stars: Challenge */}
            <div className="space-y-6 max-w-3xl mx-auto text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase font-bold">
                THE CHALLENGE
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The name &ldquo;Shooting Stars&rdquo; already carried strong emotional energy, but translating it into a distinctive sports identity required a mark that balanced athletic performance, aspiration and entertainment while remaining instantly recognizable on jerseys, social media and the court.
              </p>
            </div>

            {/* Shooting Stars: Process */}
            <div className="space-y-12 text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase font-bold">
                  THE PROCESS
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  The project began with extensive concept exploration around the ideas of stars, basketball, motion and elevation. Each concept explored a different interpretation of the team&apos;s personality before arriving at the final direction.
                </p>
              </div>

              {/* Logo Exploration presentation */}
              <div className="space-y-4">
                <div className="w-full aspect-[16/9] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group max-w-4xl mx-auto shadow-2xl">
                  <img 
                    src="/streetball/shooting-stars/process.jpg"
                    alt="Shooting Stars Design Process Map and Logo Explorations"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    01 / LOGO EXPLORATIONS & SYSTEM SCHEMATICS
                  </div>
                </div>
              </div>
            </div>

            {/* Selected Logo Section */}
            <div className="space-y-12 text-center pt-8">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                  SELECTED LOGO
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  The logo combines a bold sports aesthetic with a colour palette that reflects confidence (navy blue), energy and competition (orange).
                </p>
                
                {/* Palette indicators */}
                <div className="flex justify-center items-center gap-6 pt-2 font-mono text-[9px] tracking-widest text-neutral-500 uppercase">
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue-900"></div>
                    <span>CONFIDENCE / NAVY BLUE</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#FF4500]"></div>
                    <span>ENERGY / COMPETITION ORANGE</span>
                  </div>
                </div>
              </div>

              {/* Show Final Logo */}
              <div className="space-y-4">
                <div className="max-w-2xl mx-auto aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                  <img 
                    src="/streetball/shooting-stars/final-logo.jpg"
                    alt="Shooting Stars Final Registered Team Emblem"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    02 / FINAL REGISTERED SPORTS EMBLEM
                  </div>
                </div>
              </div>
            </div>

            {/* Jersey Design Section */}
            <div className="space-y-16 text-center pt-8">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-[#FF4500] uppercase font-bold">
                  JERSEY DESIGN
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  Inspired by old-school NBA uniforms, the jerseys embraced a bold, nostalgic aesthetic with clean lines, strong typography and high-contrast colours.
                </p>
              </div>

              {/* Collage 1: Final Jerseys + Explorations */}
              <div className="space-y-6">
                <div className="max-w-4xl mx-auto space-y-6">
                  {/* Top row: Jersey concept explorations */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                      <img 
                        src="/streetball/shooting-stars/jersey-explorations-1.jpg"
                        alt="Jersey Exploration Options Set 1"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        JERSEY EXPLORATIONS / DESIGN ARCHITECTURE
                      </div>
                    </div>

                    <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-lg">
                      <img 
                        src="/streetball/shooting-stars/jersey-explorations-2.jpg"
                        alt="Jersey Exploration Options Set 2"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[9px] font-mono tracking-widest text-neutral-400 uppercase">
                        DETAIL SPECIFICATIONS / VECTOR PANELS
                      </div>
                    </div>
                  </div>

                  {/* Bottom row: The 4 Final physical uniform models */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-md">
                      <img 
                        src="/streetball/shooting-stars/final-jersey-1.jpg"
                        alt="Shooting Stars Final Jersey Home"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2 py-1 border border-white/5 rounded text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                        HOME JSY / FRONT
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-md">
                      <img 
                        src="/streetball/shooting-stars/final-jersey-2.jpg"
                        alt="Shooting Stars Final Jersey Crest Detail"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2 py-1 border border-white/5 rounded text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                        HOME JSY / FABRIC
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-md">
                      <img 
                        src="/streetball/shooting-stars/final-jersey-3.jpg"
                        alt="Shooting Stars Final Jersey Collar detail"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2 py-1 border border-white/5 rounded text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                        AWAY JSY / COLLAR
                      </div>
                    </div>

                    <div className="aspect-[3/4] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-md">
                      <img 
                        src="/streetball/shooting-stars/final-jersey-4.jpg"
                        alt="Shooting Stars Final Jersey Away Back"
                        className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                      <div className="absolute bottom-3 left-3 bg-black/85 backdrop-blur-md px-2 py-1 border border-white/5 rounded text-[8px] font-mono tracking-widest text-neutral-400 uppercase">
                        AWAY JSY / BACK
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Collage 2: Other Collateral */}
              <div className="space-y-6 pt-8">
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
                    
                    {/* Collateral Item A: Court Graphics */}
                    <div className="p-6 bg-neutral-950 border border-white/5 rounded-2xl space-y-4 hover:border-[#FF4500]/20 transition-all group">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 text-[#FF4500]">
                        <Layout className="w-4 h-4" />
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase block">COLLATERAL 01</span>
                        <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Court & Arena Floor Plan</h4>
                        <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                          Sub-court alignment guides, custom center-circle starbursts, and highly-visible boundary line treatments optimized for broadcast coverage.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-neutral-500 tracking-wider">
                        <span>SYSTEM SPEC</span>
                        <span>0.0.0.0 HOST</span>
                      </div>
                    </div>

                    {/* Collateral Item B: Event Tickets & Season Passes */}
                    <div className="p-6 bg-neutral-950 border border-white/5 rounded-2xl space-y-4 hover:border-white/20 transition-all group">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 text-white">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-neutral-500 uppercase block">COLLATERAL 02</span>
                        <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">VIP Passes & Tickets</h4>
                        <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                          Custom heavy-matte structural passes incorporating team branding, holographic alignment strips, and custom varsity typography overlays.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-neutral-500 tracking-wider">
                        <span>PRINT FINISH</span>
                        <span>SPOT UV METALLIC</span>
                      </div>
                    </div>

                    {/* Collateral Item C: Stadium Banners */}
                    <div className="p-6 bg-neutral-950 border border-white/5 rounded-2xl space-y-4 hover:border-[#FF4500]/20 transition-all group">
                      <div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center border border-white/10 text-[#FF4500]">
                        <Tv className="w-4 h-4" />
                      </div>
                      <div className="space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase block">COLLATERAL 03</span>
                        <h4 className="font-display font-bold text-sm tracking-wider uppercase text-white">Stadium & Broadcast Wraps</h4>
                        <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                          Large format horizontal displays, baseline graphics wraps, digital score boards overlays, and broadcast graphic transitions.
                        </p>
                      </div>
                      <div className="pt-2 border-t border-white/5 flex items-center justify-between font-mono text-[8px] text-neutral-500 tracking-wider">
                        <span>MEDIA OUTLETS</span>
                        <span>1080P BROADCAST</span>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* PROJECT TWO: DELHI INC. */}
          <div className="pt-16 border-t border-white/10 space-y-16">
            <div className="text-center space-y-3">
              <span className="font-mono text-[10px] text-[#FF4500] tracking-[0.3em] uppercase block font-bold">
                PROJECT TWO
              </span>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-white tracking-widest uppercase">
                DELHI INC.
              </h2>
              <div className="w-12 h-[2px] bg-[#FF4500] mx-auto"></div>
            </div>

            {/* Delhi Inc: Overview */}
            <div className="space-y-6 max-w-3xl mx-auto text-center">
              <h3 className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase font-bold">
                OVERVIEW
              </h3>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                Following Shooting Stars, we were commissioned to create the complete identity for Delhi Inc., a franchise owned by lifestyle creator Meghna Kaur (@shetroublemaker). Unlike a traditional sports logo, the brief extended far beyond branding - the team needed a recognisable personality that could engage audiences throughout the tournament.
              </p>
            </div>

            {/* Delhi Inc: Approach */}
            <div className="space-y-12 text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-neutral-500 uppercase font-bold">
                  THE APPROACH
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  We developed a bold, typographic identity inspired by the raw energy of streetball culture. The angular logotype conveyed speed, confidence and movement while the monochromatic aesthetic allowed the brand to adapt effortlessly across multiple formats.
                </p>
              </div>

              {/* insert logo */}
              <div className="space-y-4">
                <div className="max-w-2xl mx-auto aspect-[16/10] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                  <img 
                    src="/streetball/delhi-inc/logo.jpg"
                    alt="Delhi Inc Angular Logotype and Branding collaboration with Wolfer"
                    className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    03 / DELHI INC. ANGULAR MONOCHROME LOGO
                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Inc: Social Media Communication */}
            <div className="space-y-12 text-center">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                  COMMUNICATION SYSTEM
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  The visual language was then expanded into a complete communication system. Match announcements, scorecards, player reveals, sponsor integrations, fixtures and post-match graphics all followed a consistent aesthetic, creating a recognisable presence throughout the season.
                </p>
              </div>

              {/* Insert social media */}
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="aspect-[16/10] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                    <img
                      src="/streetball/delhi-inc/logo.jpg"
                      alt="Delhi Inc angular logo and sponsor identity"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                      DELHI INC. / LOGO SYSTEM
                    </div>
                  </div>

                  <div className="aspect-[16/10] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                    <img
                      src="/streetball/delhi-inc/jersey.jpg"
                      alt="Delhi Inc team jersey and on-court identity"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                      DELHI INC. / COURT & JERSEY SYSTEM
                    </div>
                  </div>
                </div>

                {/* Highly polished interactive-like social media communication feed cards */}
                <div className="max-w-4xl mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
                    
                    {/* Post 1: Player Reveal */}
                    <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-colors">
                      <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center font-mono text-[8px] text-white">D</div>
                          <span className="font-mono text-[9px] tracking-wider text-white">delhi_inc</span>
                        </div>
                        <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                      </div>
                      
                      <div className="aspect-square bg-black relative overflow-hidden group">
                        <img
                          src="/streetball/delhi-inc/social-1.jpg"
                          alt="Delhi Inc social media creative 1"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 bg-black/40 space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase block font-bold">Post Template A: Player Reveal</span>
                        <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">
                          Clean editorial type overlay layout, utilizing strong high-contrast typography, customizable labels, and a consistent industrial feed grid framing.
                        </p>
                      </div>
                    </div>

                    {/* Post 2: Match scorecard */}
                    <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-colors">
                      <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center font-mono text-[8px] text-white">D</div>
                          <span className="font-mono text-[9px] tracking-wider text-white">delhi_inc</span>
                        </div>
                        <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                      </div>
                      
                      <div className="aspect-square bg-black relative overflow-hidden group">
                        <img
                          src="/streetball/delhi-inc/social-2.jpg"
                          alt="Delhi Inc social media creative 2"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 bg-black/40 space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-neutral-400 uppercase block font-bold">Post Template B: Match Scorecard</span>
                        <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">
                          Clean layouts for score displays, featuring prominent team initials, dynamic numerals, and monochromatic highlights with high readability.
                        </p>
                      </div>
                    </div>

                    {/* Post 3: Sponsor integrations */}
                    <div className="bg-[#0D0D0D] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-white/20 transition-colors">
                      <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-neutral-900 border border-white/20 flex items-center justify-center font-mono text-[8px] text-white">D</div>
                          <span className="font-mono text-[9px] tracking-wider text-white">delhi_inc</span>
                        </div>
                        <Instagram className="w-3.5 h-3.5 text-neutral-500" />
                      </div>
                      
                      <div className="aspect-square bg-black relative overflow-hidden group">
                        <img
                          src="/streetball/delhi-inc/social-3.jpg"
                          alt="Delhi Inc social media creative 3"
                          className="w-full h-full object-contain"
                          loading="lazy"
                        />
                      </div>

                      <div className="p-4 bg-black/40 space-y-2">
                        <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase block font-bold">Post Template C: Sponsor Integration</span>
                        <p className="font-sans text-[11px] text-neutral-400 leading-relaxed">
                          Clean sponsor-integrated graphics, treating partners with corporate respect and brand consistency without cluttering the team aesthetic.
                        </p>
                      </div>
                    </div>

                  </div>
                </div>
              </div>
            </div>

            {/* Delhi Inc: Jersey and layouts */}
            <div className="space-y-12 text-center pt-8">
              <div className="space-y-6 max-w-3xl mx-auto">
                <h3 className="font-mono text-xs tracking-[0.25em] text-white uppercase font-bold">
                  THE JERSEY SYSTEM
                </h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                  The jersey system complemented the identity with clean layouts and sponsor integration. By treating the team as a brand rather than simply a sports franchise, the identity remained consistent across both physical and digital experiences.
                </p>
              </div>

              {/* Insert jerseys and layouts */}
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                  <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                    <img
                      src="/streetball/delhi-inc/team-1.jpg"
                      alt="Delhi Inc Team on court with custom typographic jerseys"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                      04 / DELHI INC. TEAM SHOWCASE
                    </div>
                  </div>

                  <div className="aspect-[4/3] bg-neutral-950 border border-white/5 rounded-2xl overflow-hidden relative group shadow-2xl">
                    <img
                      src="/streetball/delhi-inc/team-2.jpg"
                      alt="Delhi Inc team alternate on-court identity"
                      className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-700"
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                    <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                      05 / DELHI INC. ON-COURT LAYOUT
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Orange Hype Testimonial Section - Clean typography and solid background */}
        <div className="bg-[#FF4500] text-black py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Dark circular symbol */}
            <div className="w-20 h-20 rounded-full bg-black flex items-center justify-center mb-8 shadow-xl">
              <Trophy className="w-7 h-7 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-black leading-none block mb-4 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-black text-base sm:text-lg md:text-xl font-bold leading-relaxed tracking-wide text-center max-w-2xl mb-8">
              &ldquo;Super happy with how everything came together in no time!! You guys simply rock!&rdquo;
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-black tracking-[0.2em] text-black uppercase mb-1">
              Meghna Kaur
            </h4>

            {/* Author Position & Company */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-black/70 font-semibold uppercase">
              Founder, Delhi Inc.
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
