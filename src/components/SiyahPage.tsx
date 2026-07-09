import { motion } from "motion/react";

import WorkLogoHeading from "./WorkLogoHeading";

interface SiyahPageProps {
  onBack: () => void;
}

export default function SiyahPage({ onBack }: SiyahPageProps) {
  return (
    <div 
      id="siyah-exact-clone-page" 
      className="bg-black text-white min-h-screen font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative"
    >
      
      {/* Floating back assist for preview users */}
      <div className="max-w-4xl mx-auto px-6 pt-12">
        <button
          onClick={onBack}
          className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← BACK TO WORKS
        </button>
      </div>

      <main className="py-16 md:py-24">
        
        {/* 2. Own the Colour - Stacked centered title */}
        <div className="text-center mb-12 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-display text-[#00A896] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Own the</div>
            <div className="mt-1">Colour.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-[#00A896]/20"></div>
        </div>

        {/* 4. Large SIYAH Title */}
        <div className="text-center mb-20 px-4">
          <WorkLogoHeading label="Siyah" logoUrl="/work-logos/siyah.png" />
        </div>

        {/* 5. Bordered Metadata Grid as structured in the PDF but updated with actual content */}
        <div className="max-w-4xl mx-auto mb-24 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-y border-white/10 font-mono text-xs tracking-wider">
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">INDUSTRY</span>
              <span className="text-white font-medium block">Fashion Retail</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">STAGE</span>
              <span className="text-white font-medium block">Brand Launch</span>
            </div>
            <div className="space-y-1">
              <span className="text-neutral-500 block uppercase font-semibold">YEAR</span>
              <span className="text-white font-medium block">2025</span>
            </div>
            <div className="space-y-1 col-span-2 md:col-span-1">
              <span className="text-neutral-500 block uppercase font-semibold">SERVICES</span>
              <span className="text-white font-medium block leading-relaxed">
                Brand Strategy • Identity • Retail Experience • Packaging • Store Design
              </span>
            </div>
          </div>
        </div>

        {/* 6. Narrative Sequence with Centered Headings and Exact Paragraph Text */}
        <div className="max-w-3xl mx-auto px-6 space-y-28 mb-32 text-center">
          
          {/* Section: Starting Point */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#00A896] uppercase font-bold">
              THE STARTING POINT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              SIYAH entered one of India&apos;s most saturated retail categories, where brands looked and felt remarkably similar. The challenge wasn&apos;t building another ethnic wear store - it was creating instant recognition.
            </p>
          </div>

          {/* Section: The Insight */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE INSIGHT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              The women&apos;s ethnic wear market is crowded with brands that look, feel and communicate in similar ways. To stand out, SIYAH needed an identity that was instantly recognisable and impossible to confuse with the competition.
            </p>
          </div>

          {/* Section: Our Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#00A896] uppercase font-bold">
              OUR STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
              We built the brand around an ownable turquoise identity - chosen for its contrast within the category and its ability to feel both contemporary and rooted. We extended it consistently across the storefront, interiors, packaging and customer experience, creating a retail system that was distinctive from day one.
            </p>
          </div>

          {/* Section: Transformation */}
          <div className="space-y-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE TRANSFORMATION
            </h2>
            
            <div className="space-y-12 text-left max-w-4xl mx-auto">
              
              {/* Category 1: Logo & Brand System */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-widest text-[#00A896] uppercase font-bold">
                  // LOGO & SYSTEM
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-3_t42cka.jpg"
                      alt="Siyah Identity System Logo Mark"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                  </div>
                  <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-4_vtd6ew.jpg"
                      alt="Siyah Brand Emblem Details"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />

                  </div>
                </div>
              </div>

              {/* Category 2: Storefront & Atmosphere */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-widest text-[#00A896] uppercase font-bold">
                  // STOREFRONT EXPERIENCE
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <video 
                      src="https://res.cloudinary.com/brb2bqid/video/upload/v1783340696/videoplayback_xbagkf.mp4"
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                  </div>
                  <div className="aspect-[4/3] bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <video 
                      src="https://res.cloudinary.com/brb2bqid/video/upload/v1783340736/Siyah_video_2_dmdbl9.mp4"
                      className="w-full h-full object-contain"
                      autoPlay
                      muted
                      loop
                      playsInline
                    />

                  </div>
                </div>
              </div>

              {/* Category 3: Retail Interiors */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-widest text-[#00A896] uppercase font-bold">
                  // RETAIL INTERIORS
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-5_efoq4w.jpg"
                      alt="Siyah Interior Design View 1"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-6_wr3zio.jpg"
                      alt="Siyah Interior Design View 2"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336512/siyah_web_images-7_utkd0k.jpg"
                      alt="Siyah Interior Design View 3"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336512/siyah_web_images-8_hdsjj6.jpg"
                      alt="Siyah Interior Design View 4"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Category 4: Packaging */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-widest text-[#00A896] uppercase font-bold">
                  // PREMIUM PACKAGING SYSTEMS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336512/siyah_web_images-9_l0xnms.jpg"
                      alt="Siyah Custom Box Package"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336512/siyah_web_images-10_a7rlbn.jpg"
                      alt="Siyah Carrier bag and wraps"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336513/siyah_web_images-11_c3sjaw.jpg"
                      alt="Siyah Packaging Unboxing experience"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

              {/* Category 5: Brand Collaterals */}
              <div className="space-y-4">
                <div className="font-mono text-[10px] tracking-widest text-[#00A896] uppercase font-bold">
                  // BRAND COLLATERALS
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336512/siyah_web_images-12_upj0nm.jpg"
                      alt="Siyah Brand Tags & Details"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-14_k8oexl.jpg"
                      alt="Siyah Typography card layouts"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="aspect-square bg-neutral-950 border border-neutral-900 rounded-xl overflow-hidden relative group flex items-center justify-center p-2">
                    <img 
                      src="https://res.cloudinary.com/brb2bqid/image/upload/v1783336511/siyah_web_images-13_uzrqem.jpg"
                      alt="Siyah Brand Prints & Collateral System"
                      className="w-full h-full object-contain transition-transform duration-700"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>

            </div>
          </div>

          {/* Section: Business Impact */}
          <div className="space-y-12 pt-12 border-t border-white/10">
            <div className="space-y-6">
              <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-[#00A896] uppercase font-bold">
                BUSINESS IMPACT
              </h2>
              <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-justify sm:text-center">
                The turquoise identity cut through the noise of a saturated market instantly, delivering outstanding on-the-ground performance from day one.
              </p>
            </div>

            {/* Premium Metrics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6 max-w-4xl mx-auto text-center pt-4">
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">₹45 Lakhs</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">REVENUE IN MONTH 1</span>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-xl sm:text-2xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">Consistent</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">PERFORMANCE IN MONTH 2</span>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">50–60</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">DAILY CUSTOMERS</span>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">₹3,000</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">AVERAGE TICKET SIZE</span>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-2xl sm:text-3xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">3,500+</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">CUSTOMERS SERVED</span>
              </div>
              <div className="p-6 bg-neutral-950 border border-neutral-900 rounded-2xl flex flex-col justify-center items-center group hover:border-[#00A896]/30 transition-all duration-500">
                <span className="font-display text-lg sm:text-xl font-black text-white group-hover:text-[#00A896] transition-colors duration-300">Second Store</span>
                <span className="font-mono text-[9px] sm:text-[10px] text-neutral-500 tracking-wider uppercase mt-2">LAUNCHED WITHIN MONTHS</span>
              </div>
            </div>

            {/* Future expansion highlight */}
            <div className="max-w-2xl mx-auto p-4 bg-neutral-950 border border-neutral-900 rounded-2xl font-mono text-[10px] tracking-wider text-neutral-400 uppercase">
              📌 FUTURE SCALE: <span className="text-white font-bold">EXPANSION TO 3,300 SQ. FT. PLANNED</span>
            </div>

            {/* Key Insight Block */}
            <div className="max-w-xl mx-auto pt-8">
              <div className="p-6 bg-[#00A896]/10 border border-[#00A896]/20 rounded-2xl text-center space-y-2">
                <span className="font-mono text-[9px] text-[#00A896] tracking-[0.2em] uppercase font-bold block">
                  KEY INSIGHT
                </span>
                <p className="font-sans text-sm sm:text-base text-neutral-200 font-light leading-relaxed">
                  “Clear, differentiated brand decisions can drive recall and early traction without adding complexity.”
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Bright Orange/Red Testimonial Section with Ankush Barjata testimonial */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar matching layout */}
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <span className="text-[#FF4500] font-display text-2xl font-black">S</span>
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-light leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              From a single colour decision to an entire universe, this journey wouldn’t be the same without you, Ananya. Forever thankful. <br /><br />
              You saw the vision before it existed in reality — and that makes all the difference. Every time someone walks into Siyah and feels something instantly, that’s your work speaking. Thank you for bringing intention, restraint and boldness together so seamlessly.
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              ANKUSH BARJATA
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder, Siyah
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
