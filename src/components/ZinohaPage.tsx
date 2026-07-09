import React from "react";
import { motion } from "motion/react";
import { 
  ArrowLeft, 
  Play, 
  Sparkles, 
  Quote, 
  Layers, 
  Compass, 
  Sprout, 
  Globe, 
  Heart, 
  MessageCircle, 
  Instagram, 
  Volume2 
} from "lucide-react";

import WorkFeatureImageHeading from "./WorkFeatureImageHeading";

interface ZinohaPageProps {
  onBack: () => void;
  featureImage: string;
}

const ZINOHA_LOGO_EXPLORATIONS = [
  {
    src: "/zinoha/logo-exploration-112.jpg",
    label: "Z to A Journey"
  },
  {
    src: "/zinoha/logo-exploration-113.jpg",
    label: "Complete Logo"
  },
  {
    src: "/zinoha/logo-exploration-53.jpg",
    label: "Hourglass Concept"
  }
];

const ZINOHA_LAUNCH_REELS = [
  {
    title: "Zinoha Launch Reel 1",
    src: "https://www.youtube.com/embed/T2iaqfnarMU",
    label: "LAUNCH REEL 01"
  },
  {
    title: "Zinoha Launch Reel 2",
    src: "https://www.youtube.com/embed/mpE7dKLKkcM",
    label: "LAUNCH REEL 02"
  }
];

const ZINOHA_SOCIAL_REELS = [
  {
    title: "Zinoha Reel SM1",
    src: "https://www.youtube.com/embed/-9AtjupCRGY",
    label: "REEL SM1"
  },
  {
    title: "Zinoha Reel SM2",
    src: "https://www.youtube.com/embed/7zWTeJfqJjE",
    label: "REEL SM2"
  }
];

export default function ZinohaPage({ onBack, featureImage }: ZinohaPageProps) {
  return (
    <div 
      id="zinoha-minimal-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative"
    >
      
      {/* 1. Back navigation assist */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none group"
        >
          <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
          BACK TO SELECTED WORKS
        </button>
      </div>

      <main className="py-16 md:py-24">
        
        {/* 2. Headline - Live Consciously. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Live</div>
            <div className="mt-1 font-light text-white uppercase">Consciously.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/10"></div>
        </div>

        {/* 4. Large Zinoha Title */}
        <div className="text-center mb-20 px-4">
          <WorkFeatureImageHeading label="Zinoha" imageUrl={featureImage} />
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
              <span className="text-white font-medium block">2024</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Brand Identity • Brand Strategy • Communication • Launch Campaign • Brand Film • Event Experience
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-4xl mx-auto px-6 space-y-32 mb-32 text-center">
          
          {/* Section: The Brief */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE BRIEF
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Zinoha was envisioned as a community built around wellness, farming and habitat - bringing together conscious living, nature and long-term value into one cohesive ecosystem.
            </p>
          </div>

          {/* Section: Brand Thinking */}
          <div className="space-y-6 max-w-3xl mx-auto">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              BRAND THINKING
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              The foundation of Zinoha was never real estate - it was philosophy. We positioned the brand around <strong className="text-white font-medium">Work • Farm • Habitat</strong>, creating a community where wellness, regenerative farming and mindful living coexist. Every communication decision was built around one belief: people should buy into a way of life, not a piece of land. The brand aimed to differentiate itself through clarity of thought, intentional storytelling and a distinct point of view.
            </p>
          </div>

          {/* Section: Logo Explorations */}
          <div className="space-y-8 pt-4">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              LOGO EXPLORATIONS
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              We explored multiple logo directions, each reflecting a different expression of the brand's philosophy—from raw organic geometry to highly stylized letterforms. Every direction was evaluated for geometric balance, narrative depth, and alignment with conscious, mindful living before arriving at the final identity.
            </p>
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-6xl mx-auto text-left pt-6">
              {ZINOHA_LOGO_EXPLORATIONS.map((item, index) => (
                <div
                  key={item.src}
                  className="h-[320px] lg:h-[360px] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group p-2"
                >
                  <img
                    src={item.src}
                    alt={`Zinoha logo exploration ${item.label}`}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.01]"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                    0{index + 1} / {item.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Selected Logo & Why This Logo */}
          <div className="space-y-10 pt-4">
            <div>
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold mb-3">
                WHY THIS LOGO
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">SELECTED PRIMARY IDENTITY MARK</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="h-[320px] sm:h-[360px] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group p-2">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343547/final_-_logos-55_xqe4bf.jpg"
                  alt="Zinoha Final Logo Version 55"
                  className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                  PRIMARY MARK
                </div>
              </div>

              <div className="h-[320px] sm:h-[360px] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden flex items-center justify-center relative group p-2">
                <img 
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783343546/final_-_logos-56_w0bfyd.jpg"
                  alt="Zinoha Final Logo Version 56"
                  className="w-full h-full object-contain group-hover:scale-[1.01] transition-transform duration-700"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute bottom-4 left-4 bg-black/85 backdrop-blur-md px-3 py-1.5 border border-white/5 rounded text-[10px] font-mono tracking-widest text-neutral-400 uppercase select-none">
                  ALTERNATE VARIANT
                </div>
              </div>

            </div>

            <div className="text-left max-w-2xl mx-auto pt-6 border-t border-white/10">
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
                The chosen logo embodies the spirit of conscious living through a stylised <strong className="text-white font-medium">'Z'</strong> that represents transformation, connection, and the continuous journey of life. Inspired by the fluidity of nature and the symbolism of an hourglass, it speaks to time, patience, and intentional living.
              </p>
            </div>
          </div>

          {/* Section: Brand Communication */}
          <div className="space-y-12 pt-4">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                BRAND COMMUNICATION
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">LAUNCH CREATIVES & STORYTELLING</p>
            </div>

            {/* Showcase primary cover creative */}
            <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-900 relative group max-w-5xl mx-auto flex items-center justify-center">
              <img 
                src="https://lh3.googleusercontent.com/d/1bX9LcggZq7x9a0wbDa-F8p5ceBkuZNku"
                alt="Zinoha Launch Creative"
                className="w-full h-full object-contain opacity-85 group-hover:scale-102 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/35 to-transparent pointer-events-none"></div>
              <div className="absolute bottom-6 left-6 text-left">
                <span className="bg-[#FF4500] text-white font-mono text-[9px] tracking-widest uppercase font-bold py-1.5 px-4 rounded-none block select-none mb-2 w-max">
                  KEY LAUNCH CAMPAIGN
                </span>
                <p className="font-display text-sm sm:text-base text-white/90 font-medium tracking-wide">
                  Zinoha: Establishing Lifestyle Before Location
                </p>
              </div>
            </div>

            {/* Campaign Phases & The Idea */}
            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 text-left max-w-5xl mx-auto pt-6">
              
              <div className="md:col-span-7 space-y-6">
                <h3 className="font-display text-lg font-bold text-white uppercase tracking-wider text-[#FF4500]">THE IDEA</h3>
                <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify">
                  We created a communication system that introduced the lifestyle before the location. The launch was structured in three phases - Lifestyle & Experience, The Location, and finally The Commune - guiding audiences from aspiration to understanding. The visual language, tone of voice and storytelling were intentionally crafted to avoid industry clichés and position Zinoha as a movement rather than another development.
                </p>
              </div>

              <div className="md:col-span-5 space-y-6 border-l border-white/10 pl-6 md:pl-10">
                <h4 className="font-mono text-xs text-neutral-500 tracking-widest uppercase font-bold">THE 3-PHASE LAUNCH SYSTEM</h4>
                
                <div className="space-y-6">
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PHASE 01 // LIFESTYLE & EXPERIENCE</span>
                    <p className="font-sans text-xs text-neutral-400 font-light">Introducing high-touch mindful daily concepts to set standard aspirational values.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-white uppercase font-bold">PHASE 02 // THE LOCATION</span>
                    <p className="font-sans text-xs text-neutral-400 font-light">Grounding aspirations into the geography, connecting soil quality and environment.</p>
                  </div>
                  <div className="space-y-1">
                    <span className="font-mono text-[9px] tracking-widest text-white uppercase font-bold">PHASE 03 // THE COMMUNE</span>
                    <p className="font-sans text-xs text-neutral-400 font-light">Unveiling physical layout plans, farming circles, and community-led structures.</p>
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Brand Film */}
          <div className="space-y-8 pt-4">
            <div className="space-y-2">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                BRAND FILM
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">CINEMATIC BRAND STORY</p>
            </div>
            
            <div className="max-w-5xl mx-auto">
              <div className="relative rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 aspect-video shadow-2xl">
                <iframe
                  src="https://www.youtube.com/embed/HnjkeIptR2E"
                  title="Zinoha Brand Film"
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <div className="mt-4 flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                <span>Brand Film</span>
                <span className="text-[#FF4500]">Zinoha Story</span>
              </div>
            </div>
          </div>

          {/* Section: Launch Experience */}
          <div className="space-y-8 pt-4">
            <div className="space-y-2">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                LAUNCH EXPERIENCE
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">ATMOSPHERIC PHYSICAL GATHERING</p>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto text-left">
              {ZINOHA_LAUNCH_REELS.map((reel) => (
                <div key={reel.src} className="space-y-3">
                  <div className="relative aspect-[9/16] max-h-[620px] rounded-2xl overflow-hidden border border-white/10 bg-neutral-950 shadow-2xl">
                    <iframe
                      src={reel.src}
                      title={reel.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <span className="font-mono text-[10px] tracking-[0.2em] text-neutral-500 uppercase block">
                    {reel.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section: Social Media */}
          <div className="space-y-10 pt-4">
            <div className="space-y-2">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                SOCIAL MEDIA
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">ORGANIC REELS & DIALOGUE</p>
            </div>

            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed text-justify sm:text-center">
              We connected digital storytelling with offline events. Creative templates, atmospheric social videos, and highly interactive physical experiences established a pristine, organic community following.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 text-left">
              {ZINOHA_SOCIAL_REELS.map((reel) => (
                <div key={reel.src} className="space-y-3">
                  <div className="relative aspect-[9/16] max-h-[620px] rounded-2xl overflow-hidden border border-neutral-900 bg-neutral-950 shadow-lg">
                    <iframe
                      src={reel.src}
                      title={reel.title}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                      loading="lazy"
                    />
                  </div>
                  <div className="flex items-center justify-between gap-4 font-mono text-[10px] tracking-[0.2em] uppercase text-neutral-500">
                    <span>{reel.label}</span>
                    <span className="text-[#FF4500]">Social Reel</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Section: The Outcome */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto border-t border-white/10">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE OUTCOME
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">LAUNCH FOUNDATION OUTCOMES</p>
            </div>

            {/* Premium details with icons */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Layers className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">COHESIVE ECOSYSTEM</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">A cohesive launch ecosystem spanning identity, communication, film and experience design.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Compass className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">DISTINCTIVE POSTURE</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Giving Zinoha a highly distinctive, design-conscious presence from day one.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Sprout className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">SCALABLE FOUNDATION</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Establishes a solid, scalable foundation to build future communities around the same conscious philosophy.</p>
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
              “I'm so thankful for the incredible work ANTR Labs has done with Zinoha. I'm enamoured by the clarity and thought you bring to the table. Zinoha could not have a better storyline.”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Vikash Shahi
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder, Zinoha
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
