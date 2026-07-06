import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, TrendingUp, Users, Award, Shield, BookOpen } from "lucide-react";

interface SukhamPageProps {
  onBack: () => void;
}

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
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            Sukham
          </h1>
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
            
            {/* 3-Column Image Showcase: Packaging, Website, Retail */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 text-left">
              {/* Packaging */}
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342300/product_bjq9iw.jpg"
                    alt="Discreet Premium Packaging"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">01</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Packaging</span>
                </div>
              </div>

              {/* Website */}
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342339/webpage_bpybpd.png"
                    alt="Interactive Digital Flagship"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">02</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Website</span>
                </div>
              </div>

              {/* Retail */}
              <div className="space-y-3">
                <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342338/Artboard_188_qir1ya.jpg"
                    alt="Premium Retail Experience"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-2 left-2 bg-black/80 px-2 py-0.5 rounded text-[8px] font-mono text-[#FF4500]">03</div>
                </div>
                <div className="px-1">
                  <span className="font-mono text-[10px] text-neutral-500 tracking-wider block uppercase">ASSET SYSTEM</span>
                  <span className="text-xs text-white font-medium">Retail Displays</span>
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

            {/* Custom Grid showing all requested elements */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-5xl mx-auto text-left">
              
              {/* Packaging Evolution */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342301/product_image_fumnmr.jpg"
                    alt="Packaging evolution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 01</span>
                  <h3 className="text-xs text-white font-semibold">Packaging Evolution</h3>
                </div>
              </div>

              {/* Website Evolution */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342339/webpage_bpybpd.png"
                    alt="Website Evolution"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 02</span>
                  <h3 className="text-xs text-white font-semibold">Website Evolution</h3>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342301/social_media_1_nycupd.jpg"
                    alt="Social Media Presence"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 03</span>
                  <h3 className="text-xs text-white font-semibold">Social Media</h3>
                </div>
              </div>

              {/* Advertising */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342300/ad_z4h4gc.jpg"
                    alt="Advertising and Media campaigns"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 04</span>
                  <h3 className="text-xs text-white font-semibold">Advertising</h3>
                </div>
              </div>

              {/* Retail Displays */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342338/Artboard_188_qir1ya.jpg"
                    alt="Retail Displays and setups"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 05</span>
                  <h3 className="text-xs text-white font-semibold">Retail Displays</h3>
                </div>
              </div>

              {/* Shark Tank */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group relative">
                <div className="aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <img
                    src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342300/product_bjq9iw.jpg"
                    alt="Shark Tank Presentation"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
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
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 06</span>
                  <h3 className="text-xs text-white font-semibold">Shark Tank</h3>
                </div>
              </div>

              {/* Videos */}
              <div className="flex flex-col bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden group sm:col-span-2 lg:col-span-1 xl:col-span-2">
                <div className="aspect-[16/9] sm:aspect-square lg:aspect-[16/9] xl:aspect-square bg-neutral-900 overflow-hidden relative flex items-center justify-center">
                  <iframe
                    src="https://www.youtube-nocookie.com/embed/6R-cqq89O-Q?autoplay=1&mute=1&loop=1&playlist=6R-cqq89O-Q&controls=0&modestbranding=1&playsinline=1&rel=0&showinfo=0&iv_load_policy=3&disablekb=1&fs=0"
                    className="absolute inset-0 w-full h-full border-0 pointer-events-none"
                    allow="autoplay; encrypted-media"
                    title="Sukham Ad Campaign Video"
                  />
                </div>
                <div className="p-4 space-y-1">
                  <span className="font-mono text-[9px] tracking-widest text-[#FF4500] uppercase font-bold">PILLAR 07</span>
                  <h3 className="text-xs text-white font-semibold">Videos</h3>
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

            {/* Immersive visual gallery below Final Outcome */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-4xl mx-auto pt-4 text-left">
              <div className="aspect-[16/9] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                <img
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342338/vision_wpsjcm.jpg"
                  alt="Sukham Spiritual and Modern Vision"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-neutral-400 tracking-widest uppercase">
                  BRAND VISION SHOWCASE
                </div>
              </div>
              <div className="aspect-[16/9] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group">
                <img
                  src="https://res.cloudinary.com/brb2bqid/image/upload/v1783342300/amazon_k2zlwc.jpg"
                  alt="Sukham Premium Product Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 left-3 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded text-[9px] font-mono text-neutral-400 tracking-widest uppercase">
                  PRODUCT SYSTEM
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar with initial V */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <span className="text-[#FF4500] font-display text-2xl font-black">V</span>
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
