import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, TrendingUp, Users, Award, Shield } from "lucide-react";

import WorkLogoHeading from "./WorkLogoHeading";

interface SukhamPageProps {
  onBack: () => void;
}

const SUKHAM_PHASE_ONE = {
  vision: "/sukham/phase-1/vision.jpg",
  packaging: "/sukham/phase-1/artboard-188.jpg",
  website: "/sukham/phase-1/webpage.png"
};

const SUKHAM_PHASE_TWO = {
  medicine: "/sukham/phase-2/medicine.jpeg",
  website: "/sukham/phase-2/website.jpg.jpeg",
  sharkTankDisplay: "/sukham/phase-2/shark-tank-display-unit.jpg.jpeg",
  displayUnit: "/sukham/phase-2/display-unit.jpg.jpeg",
  socialMedia: "/sukham/phase-2/social-media.jpg.jpeg"
};

const SUKHAM_PHASE_TWO_VIDEOS = [
  {
    label: "Product Shot",
    videoId: "G7hwQ0osckw"
  },
  {
    label: "Product Shot 2",
    videoId: "EP1qW7FkbKA"
  },
  {
    label: "Ad",
    videoId: "zDDIaF2nH20"
  },
  {
    label: "Ad (Square)",
    videoId: "AM9ZxUgUrYE"
  },
  {
    label: "Ad",
    videoId: "AM9ZxUgUrYE"
  },
  {
    label: "Ad",
    videoId: "gZwnXpUTDJk"
  },
  {
    label: "Website",
    videoId: "Bs5NPFoRns4"
  }
];

const SUKHAM_PHASE_THREE = {
  amazonCopy: "/sukham/phase-3/amazon-copy.jpg",
  amazon: "/sukham/phase-3/amazon.jpg",
  productImage: "/sukham/phase-3/product-image.jpg",
  product: "/sukham/phase-3/product.jpg",
  socialMedia: "/sukham/phase-3/social-media-1.jpg",
  ad: "/sukham/phase-3/ad.jpg"
};

export default function SukhamPage({ onBack }: SukhamPageProps) {
  return (
    <div 
      id="sukham-minimal-page" 
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
        
        {/* 2. Headline - Changing the Conversation. */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Changing the</div>
            <div className="mt-1 font-light">Conversation.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large Sukham Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="Sukham" logoUrl="/work-logos/sukham.png" />
        </div>

        {/* 5. Clean Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Consumer Healthcare</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">0 → 1 → Scale</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2022 - 2025</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Brand Strategy • Brand Identity • Packaging • Website • Content • Growth • Product • Community
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: The Starting Point */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
              THE STARTING POINT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Sukham wasn&apos;t created to sell products. It was created to solve a problem that nobody was talking about.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Men&apos;s wellness has become transactional. Brands focused on ingredients, performance and quick fixes, while overlooking something deeper - men are emotionally underserved, especially when it comes to their health.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The ambition wasn&apos;t simply to build another supplement company. It was to create a brand that men could relate to, trust and eventually identify with.
            </p>
          </div>

          {/* Section: The First Strategy */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                THE FIRST STRATEGY
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                We started by building a brand that felt masculine without relying on stereotypes.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
                Dark blues, white and subtle orange accents created a premium yet approachable identity. Packaging was designed to be discreet, while the communication focused on empathy over performance claims.
              </p>
            </div>
            
            {/* 3-Column Image Showcase: Vision, Packaging, Website */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 text-left">
              {/* Vision */}
              <div className="space-y-3">
                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_ONE.vision}
                    alt="Sukham phase one vision board"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">01</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Vision</span>
                </div>
              </div>

              {/* Packaging */}
              <div className="space-y-3">
                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_ONE.packaging}
                    alt="Sukham discreet phase one packaging"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">02</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Packaging</span>
                </div>
              </div>

              {/* Website */}
              <div className="space-y-3">
                <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_ONE.website}
                    alt="Sukham phase one website layout"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">03</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Website</span>
                </div>
              </div>
            </div>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-12">
            <div className="space-y-6">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE INSIGHT
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                As the business grew, so did the learning. The products were working. The communication wasn&apos;t. We realised that men rarely engage publicly with emotional vulnerability - especially in the sexual wellness category.
              </p>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                The problem wasn&apos;t awareness. It was relevance.
              </p>
            </div>
            
            <div className="pt-6 border-t border-white/10 max-w-2xl mx-auto text-left space-y-4">
              <span className="font-mono text-xs text-[#FF4500] tracking-[0.2em] uppercase font-bold block">
                STRATEGIC PIVOT
              </span>
              <p className="font-sans text-sm sm:text-base text-neutral-300 font-light leading-relaxed">
                Instead of speaking about vulnerability, we rooted the brand in something men were already proud to identify with:
              </p>
              <div className="grid grid-cols-2 gap-4 font-mono text-xs text-white pt-2">
                <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg">
                  ⚡ INDIAN SANSKRITI
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg">
                  🍃 AYURVEDA
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg">
                  🛡️ MASCULINE LEGACY
                </div>
                <div className="p-3 bg-neutral-950 border border-neutral-900 rounded-lg">
                  🔮 THE MAGICIAN ARCHETYPE
                </div>
              </div>
              <p className="font-sans text-sm text-neutral-400 font-light pt-2">
                This wasn&apos;t a cosmetic redesign. It was a complete repositioning of the brand.
              </p>
            </div>
          </div>

          {/* Section: Building the Brand World (Table) */}
          <div className="space-y-10 pt-4">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                BUILDING THE BRAND WORLD
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider">SYSTEMATIC EXPRESSIONS MATRIX</p>
            </div>

            {/* A pristine, high-contrast, beautiful table */}
            <div className="max-w-2xl mx-auto overflow-x-auto border border-neutral-900 rounded-2xl bg-neutral-950/40 p-1">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="p-4 font-mono text-xs text-neutral-500 tracking-wider uppercase w-1/4">PILLAR</th>
                    <th className="p-4 font-mono text-xs text-neutral-500 tracking-wider uppercase">TRANSFORMATION & EXPRESSION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5 font-light text-neutral-300">
                  <tr>
                    <td className="p-4 font-mono text-xs font-bold text-white uppercase tracking-wider">IDENTITY</td>
                    <td className="p-4 text-justify sm:text-left">Earthy brown and gold tones, Premium, Rooted, Confident.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs font-bold text-white uppercase tracking-wider">PACKAGING</td>
                    <td className="p-4 text-justify sm:text-left">Functional became aspirational, Products became gifts rather than medicines.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs font-bold text-white uppercase tracking-wider">WEBSITE</td>
                    <td className="p-4 text-justify sm:text-left">We shifted from information to desire. Customers didn&apos;t just understand Sukham. They wanted to belong to it.</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-mono text-xs font-bold text-white uppercase tracking-wider">CONTENT</td>
                    <td className="p-4 text-justify sm:text-left">Humour replaced hesitation. Memes met education. Ayurveda met internet culture. Founder-led storytelling built trust while carousels scaled organically.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: The Difference */}
          <div className="space-y-12">
            <div className="space-y-4">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                THE DIFFERENCE
              </h2>
              <p className="font-sans text-sm text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
                We tracked, redesigned, and synchronized every customer touchpoint to reflect this philosophical evolution:
              </p>
            </div>

            {/* Phase 2 asset grid aligned to the PDF case-study flow */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
              
              {/* Product / Medicine */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_TWO.medicine}
                    alt="Sukham phase two medicine product shoot"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 01</span>
                  <h3 className="text-xs text-white font-semibold">Product Shoot</h3>
                </div>
              </div>

              {/* Website Evolution */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_TWO.website}
                    alt="Sukham phase two website product page"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 02</span>
                  <h3 className="text-xs text-white font-semibold">Website Evolution</h3>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group sm:col-span-2 lg:col-span-3">
                <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_TWO.socialMedia}
                    alt="Sukham phase two social media grid"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 03</span>
                  <h3 className="text-xs text-white font-semibold">Social Media</h3>
                </div>
              </div>

              {/* Display Unit */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_TWO.displayUnit}
                    alt="Sukham phase two retail display unit"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 04</span>
                  <h3 className="text-xs text-white font-semibold">Display Unit</h3>
                </div>
              </div>

              {/* Shark Tank Display */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group sm:col-span-2 relative">
                <div className="aspect-[16/9] bg-neutral-900 overflow-hidden relative flex items-center justify-center p-2">
                  <img
                    src={SUKHAM_PHASE_TWO.sharkTankDisplay}
                    alt="Sukham Shark Tank display unit design"
                    className="w-full h-full object-contain transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 right-2 bg-black/80 backdrop-blur-md p-1 rounded-md border border-neutral-800 z-10">
                    <img
                      src="https://res.cloudinary.com/dqdvr35aj/image/upload/v1783330266/shark_tank_logo_sticker_l1svt1.png"
                      alt="Shark Tank Logo"
                      className="w-8 h-auto"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 05</span>
                  <h3 className="text-xs text-white font-semibold">Shark Tank Display</h3>
                </div>
              </div>

              {/* Videos */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group sm:col-span-2 lg:col-span-3">
                <div className="p-4 space-y-4">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 07</span>
                  <h3 className="text-xs text-white font-semibold">Videos</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
                    {SUKHAM_PHASE_TWO_VIDEOS.map((video, index) => (
                      <div
                        key={`${video.videoId}-${index}`}
                        className="overflow-hidden rounded-2xl border border-neutral-800 bg-black/40"
                      >
                        <div className="relative aspect-[9/16] bg-neutral-900">
                          <iframe
                            src={`https://www.youtube-nocookie.com/embed/${video.videoId}?rel=0&modestbranding=1&playsinline=1`}
                            title={`Sukham Phase 2 ${video.label}`}
                            className="absolute inset-0 h-full w-full border-0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                          />
                        </div>
                        <div className="flex items-center justify-between gap-3 px-4 py-3">
                          <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <span className="text-xs text-white font-semibold">{video.label}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
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

            {/* Structured bullets matching copy exactly */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <TrendingUp className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">ORGANIC REACH</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">3K → 25K followers organically.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Sparkles className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">VIRAL VELOCITY</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Multiple posts crossed 1M+ views.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Award className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">PUBLIC RECOGNITION</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Organic recognition from creators and public figures.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Shield className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">NATIONAL EXPOSURE</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Featured on Shark Tank India.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 bg-neutral-950/40 border border-neutral-900 rounded-xl hover:border-[#FF4500]/20 transition-colors">
                <Users className="w-5 h-5 text-[#FF4500] mt-1 flex-shrink-0" />
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">COMMUNITY NUCLEUS</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Built one of India&apos;s fastest-growing founder-led men&apos;s wellness communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: The Next Challenge */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE NEXT CHALLENGE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Success created a new problem. Sukham had become synonymous with sexual wellness. The business wanted to become synonymous with men&apos;s wellness. Those are two very different brands. Now, the challenge wasn&apos;t acquiring new customers - It was expanding the category without losing trust.
            </p>
          </div>

          {/* Section: Rebuilding the Core */}
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                REBUILDING THE CORE
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">CATEGORY EXPANSION ARCHITECTURE</p>
            </div>
            
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              Rather than adding more, we removed.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed text-justify sm:text-center">
              The visual language became cleaner. The palette shifted towards white to signal trust and clinical credibility. The packaging prioritised ingredients and benefits. The website became simpler. Content shifted from intrigue to education. The brand evolved from a category player into a scalable wellness system.
            </p>
          </div>

          {/* Section: Final Outcome */}
          <div className="space-y-10">
            <div className="space-y-6">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                FINAL OUTCOME
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                Now, Sukham stands as a men&apos;s wellness brand rooted in Indian tradition while built for modern performance - a business that continuously evolved alongside its customers rather than remaining attached to its original identity.
              </p>
            </div>

            {/* Final outcome collage portfolio */}
            <div className="max-w-7xl mx-auto pt-6 text-left">
              <div className="relative overflow-hidden rounded-[1.75rem] border border-white/10 bg-[radial-gradient(circle_at_12%_8%,rgba(255,69,0,0.18),transparent_24%),radial-gradient(circle_at_82%_28%,rgba(255,255,255,0.08),transparent_20%),linear-gradient(135deg,rgba(23,23,23,0.96),rgba(0,0,0,0.98))] p-3 sm:p-4 lg:p-6 shadow-2xl">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.035)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
                <div className="absolute left-6 top-6 hidden lg:block font-mono text-[10px] tracking-[0.35em] text-white/25 uppercase">
                  Final Outcome Portfolio
                </div>
                <div className="relative grid grid-cols-1 sm:grid-cols-6 lg:grid-cols-12 auto-rows-[150px] sm:auto-rows-[120px] lg:auto-rows-[96px] gap-3 sm:gap-4 lg:pt-8">
                  <div className="sm:col-span-4 sm:row-span-3 lg:col-span-5 lg:row-span-6 lg:col-start-1 lg:row-start-1 bg-neutral-950/90 border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.35)]">
                    <img
                      src={SUKHAM_PHASE_THREE.amazonCopy}
                      alt="Sukham Amazon performance campaign creative"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">01 / HERO CAMPAIGN</span>
                      <span className="text-sm text-white font-semibold">Ancient wisdom, modern performance</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:row-span-2 lg:col-span-7 lg:row-span-3 lg:col-start-6 lg:row-start-1 bg-[#f7f7f2] border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <img
                      src={SUKHAM_PHASE_THREE.amazon}
                      alt="Sukham Amazon brand store collage"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">02 / MARKETPLACE</span>
                      <span className="text-sm text-white font-semibold">Amazon brand portfolio</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:row-span-2 lg:col-span-3 lg:row-span-3 lg:col-start-6 lg:row-start-4 bg-white border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <img
                      src={SUKHAM_PHASE_THREE.product}
                      alt="Sukham modern wellness product range"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">03 / PRODUCT</span>
                      <span className="text-sm text-white font-semibold">Clinical white range</span>
                    </div>
                  </div>

                  <div className="sm:col-span-3 sm:row-span-2 lg:col-span-4 lg:row-span-3 lg:col-start-9 lg:row-start-4 bg-neutral-950/90 border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <img
                      src={SUKHAM_PHASE_THREE.productImage}
                      alt="Sukham how to use product education creative"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/85 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">04 / EDUCATION</span>
                      <span className="text-sm text-white font-semibold">Usage-first content</span>
                    </div>
                  </div>

                  <div className="sm:col-span-3 sm:row-span-2 lg:col-span-5 lg:row-span-3 lg:col-start-1 lg:row-start-7 bg-[#f6f6f1] border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <img
                      src={SUKHAM_PHASE_THREE.ad}
                      alt="Sukham final nutrition advertising creative"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/75 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">05 / AD SYSTEM</span>
                      <span className="text-sm text-white font-semibold">Science meets nature</span>
                    </div>
                  </div>

                  <div className="sm:col-span-6 sm:row-span-3 lg:col-span-7 lg:row-span-3 lg:col-start-6 lg:row-start-7 bg-[#f6f6f1] border border-white/10 rounded-2xl overflow-hidden relative group flex items-center justify-center p-3 shadow-[0_18px_60px_rgba(0,0,0,0.28)]">
                    <img
                      src={SUKHAM_PHASE_THREE.socialMedia}
                      alt="Sukham final social media creative"
                      className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-[1.015]"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-4">
                      <span className="font-mono text-[9px] tracking-widest uppercase text-[#FF4500] font-bold block">06 / SOCIAL</span>
                      <span className="text-sm text-white font-semibold">Cultural storytelling</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar with initial V */}
            <div className="w-24 h-24 rounded-full overflow-hidden bg-white border border-white/30 flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <img
                src="/testimonials/sukham-vivek.jpg"
                alt="Vivek Krishna"
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “ The kind of value Ananya has brought in as a cofounder in the last 3 years has been insurmountable. Once she gets involved, she feels personally responsible to ensure the best output, a person on your side of the team ”
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              Vivek Krishna
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              CEO, Sukham
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
