import React from "react";
import { motion } from "motion/react";
import { ArrowLeft, Sparkles, Shield, Compass, Eye, Heart, TrendingUp } from "lucide-react";

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
            <div>Changing The</div>
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
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Year */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">INDUSTRY</span>
              <span className="text-white uppercase">Consumer Healthcare</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">YEAR</span>
              <span className="text-white">2022 - 2025</span>
            </div>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <div className="flex flex-col gap-1">
              <span className="text-neutral-500 font-semibold uppercase">STAGE</span>
              <span className="text-white uppercase">0 → 1 → Scale</span>
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-neutral-500 font-semibold uppercase">SERVICES</span>
              <span className="text-white uppercase text-right max-w-xs md:max-w-none">
                Brand Strategy • Brand Identity • Packaging • Website • Content • Growth • Product • Community
              </span>
            </div>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: The Starting Point */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE STARTING POINT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              Sukham wasn&apos;t created to sell products. It was created to solve a problem that nobody was talking about. Men&apos;s wellness had become transactional. Brands focused on ingredients, performance and quick fixes, while overlooking something deeper — men are emotionally underserved, especially when it comes to their health.
            </p>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The ambition wasn&apos;t simply to build another supplement company. It was to create a brand that men could relate to, trust and eventually identify with.
            </p>
          </div>

          {/* Section: The First Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE FIRST STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              We started by building a brand that felt masculine without relying on stereotypes. Dark blues, white and subtle orange accents created a premium yet approachable identity. Packaging was designed to be discreet, while the communication focused on empathy over performance claims.
            </p>
            
            {/* Elegant inline vector graphics for original aesthetic layout */}
            <div className="grid grid-cols-3 gap-6 max-w-md mx-auto pt-4">
              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-blue-900" viewBox="0 0 100 100" fill="currentColor">
                  <rect width="100" height="100" rx="8" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">DISCREET PACKAGING</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-white" viewBox="0 0 100 100" fill="currentColor">
                  <rect width="100" height="100" rx="8" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">CLEAN INTERFACE</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <svg className="w-10 h-10 text-[#FF4500]" viewBox="0 0 100 100" fill="currentColor">
                  <rect width="100" height="100" rx="8" />
                </svg>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">ACCENT EMPATHY</span>
              </div>
            </div>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              As the business grew, so did the learning. The products were working. The communication wasn&apos;t. We realised that men rarely engage publicly with emotional vulnerability — especially in the sexual wellness category. The problem wasn&apos;t awareness. It was relevance.
            </p>
            
            <div className="pt-6">
              <span className="font-mono text-xs text-[#FF4500] tracking-[0.2em] uppercase font-semibold">STRATEGIC PIVOT // REPOSITIONING</span>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto mt-4">
                Instead of speaking about vulnerability, we rooted the brand in something men were already proud to identify with: <strong className="text-white font-medium">Indian Sanskriti, Ayurveda, masculine legacy, and the Magician archetype</strong>. This wasn&apos;t a cosmetic redesign. It was a complete repositioning of the brand.
              </p>
            </div>
          </div>

          {/* Section: Building the Brand World (Minimal Table) */}
          <div className="space-y-10">
            <div className="space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                BUILDING THE BRAND WORLD
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider">SYSTEMATIC EXPRESSIONS MATRIX</p>
            </div>

            {/* A pristine, high-contrast, beautiful table with custom alignment */}
            <div className="max-w-2xl mx-auto overflow-x-auto">
              <table className="w-full text-left font-sans text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20">
                    <th className="py-4 font-mono text-xs text-neutral-500 tracking-wider uppercase w-1/4">PILLAR</th>
                    <th className="py-4 font-mono text-xs text-neutral-500 tracking-wider uppercase">TRANSFORMATION & EXPRESSION</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/10 font-light text-neutral-300">
                  <tr>
                    <td className="py-4 pr-4 font-mono text-xs font-bold text-white uppercase tracking-wider">IDENTITY</td>
                    <td className="py-4">Earthy brown and gold tones. Premium, rooted, and deeply confident.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-mono text-xs font-bold text-white uppercase tracking-wider">PACKAGING</td>
                    <td className="py-4">Functional became aspirational. Products became lifestyle gifts rather than discreet medicines.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-mono text-xs font-bold text-white uppercase tracking-wider">WEBSITE</td>
                    <td className="py-4">We shifted from cold information to deep desire. Customers didn&apos;t just understand Sukham; they wanted to belong to it.</td>
                  </tr>
                  <tr>
                    <td className="py-4 pr-4 font-mono text-xs font-bold text-white uppercase tracking-wider">CONTENT</td>
                    <td className="py-4">Humour replaced hesitation. Memes met education. Ayurveda met internet culture. Founder-led storytelling built deep trust while organic carousels scaled rapidly.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section: The Difference */}
          <div className="space-y-8">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE DIFFERENCE
            </h2>
            <p className="font-sans text-sm text-neutral-400 font-light max-w-2xl mx-auto leading-relaxed">
              We tracked, redesigned, and synchronized every customer touchpoint to reflect this philosophical evolution:
            </p>

            {/* Custom minimalist horizontal list layout */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 max-w-md mx-auto text-xs font-mono text-neutral-500 uppercase tracking-widest">
              <span>• PACKAGING EVOLUTION</span>
              <span>• WEBSITE EVOLUTION</span>
              <span>• SOCIAL MEDIA</span>
              <span>• ADVERTISING</span>
              <span>• RETAIL DISPLAYS</span>
              <span>• SHARK TANK</span>
              <span>• VIDEOS</span>
            </div>
          </div>

          {/* Section: Business Impact */}
          <div className="space-y-10 pt-4 text-left max-w-2xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#FF4500] uppercase font-bold">
                BUSINESS IMPACT
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider uppercase">0 TO 1 TO SCALE METRICS</p>
            </div>

            {/* List with solid custom bullets */}
            <div className="space-y-6 py-4">
              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0"></div>
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">ORGANIC GROWTH</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Scaled the social media presence from 3K to over 25K highly engaged followers completely organically.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0"></div>
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">VIRAL COMMUNICATON</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Engineered continuous video assets with multiple posts exceeding 1M+ views across digital channels.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0"></div>
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">CULTURAL RECOGNITION</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Earned spontaneous organic recognition and praise from leading creators, public figures, and industry experts.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0"></div>
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">SHARK TANK NARRATIVE</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Successfully featured on Shark Tank India, generating widespread nationwide acclaim for our packaging structure and brand world.</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#FF4500] mt-2 flex-shrink-0"></div>
                <div className="space-y-1">
                  <span className="font-display text-sm font-semibold text-white tracking-wide uppercase block">COMMUNITY BUILD</span>
                  <p className="font-sans text-sm text-neutral-400 font-light">Co-founded and nurtured one of India&apos;s fastest-growing founder-led men&apos;s wellness communities.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Section: The Next Challenge */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE NEXT CHALLENGE
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Success created a new problem. Sukham had become synonymous with sexual wellness. The business wanted to become synonymous with men&apos;s wellness. Those are two very different brands. Now, the challenge wasn&apos;t acquiring new customers — it was expanding the category without losing trust.
            </p>
          </div>

          {/* Section: Rebuilding the Core */}
          <div className="space-y-6 text-left max-w-2xl mx-auto">
            <div className="text-center space-y-3">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
                REBUILDING THE CORE
              </h2>
              <p className="text-xs font-mono text-neutral-500 tracking-wider">EVOLUTION OF THE Scalable Wellness System</p>
            </div>
            
            <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
              Rather than adding more, we removed. The visual language became cleaner. The palette shifted towards white to signal trust and clinical credibility. The packaging prioritised ingredients and benefits. The website became simpler. Content shifted from intrigue to education.
            </p>
            <p className="font-sans text-sm text-neutral-400 font-light leading-relaxed">
              The brand evolved from a specific category player into a broadly scalable men&apos;s wellness system.
            </p>
          </div>

          {/* Section: Final Outcome */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              FINAL OUTCOME
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Now, Sukham stands as a men&apos;s wellness brand rooted in Indian tradition while built for modern performance — a business that continuously evolved alongside its customers rather than remaining attached to its original identity.
            </p>
          </div>

        </div>

        {/* 7. Bright Orange Testimonial Section */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <Sparkles className="w-8 h-8 text-[#FF4500]" />
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              “The kind of value Ananya has brought in as a cofounder in the last 3 years has been insurmountable. Once she gets involved, she feels personally responsible to ensure the best output, a person on your side of the team”
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
