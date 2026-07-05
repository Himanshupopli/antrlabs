import { motion } from "motion/react";

interface SiyahPageProps {
  onBack: () => void;
}

export default function SiyahPage({ onBack }: SiyahPageProps) {
  return (
    <div id="siyah-exact-clone-page" className="bg-black text-white min-h-screen pt-8 pb-0 font-sans selection:bg-[#FF4500] selection:text-black overflow-x-hidden relative">
      
      {/* 1. Header Bar matching PDF Exactly */}
      <header className="max-w-7xl mx-auto px-6 md:px-12 py-6 flex justify-between items-center border-b border-neutral-900/40">
        {/* Clickable Logo "ANTR" to go back */}
        <button
          onClick={onBack}
          className="font-display text-xl md:text-2xl font-bold tracking-[0.25em] text-white hover:opacity-80 transition-opacity focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ANTR
        </button>

        {/* Hamburger Menu Icon (Two horizontal lines) */}
        <button 
          onClick={onBack}
          className="flex flex-col gap-1.5 p-2 hover:opacity-80 transition-opacity focus:outline-none cursor-pointer bg-transparent border-none"
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
          className="inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← BACK TO WORKS
        </button>
      </div>

      <main className="py-12">
        {/* 2. Own the Colour spaced header */}
        <div className="text-center mb-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-mono text-[#FF4500] uppercase tracking-[0.25em] text-sm md:text-base space-y-1"
          >
            <div className="font-semibold tracking-[0.3em]">Own the Colour.</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 md:px-12 mb-12">
          <div className="w-full h-[1px] bg-white opacity-20"></div>
        </div>

        {/* 4. Large SIYAH Title */}
        <div className="text-center mb-16 px-4">
          <h1 className="font-display font-extrabold text-5xl sm:text-7xl lg:text-8xl tracking-[0.2em] text-white select-none uppercase">
            SIYAH
          </h1>
        </div>

        {/* 5. Bordered Metadata Grid */}
        <div className="max-w-4xl mx-auto mb-28 px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {/* Industry */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-2">INDUSTRY</span>
              <span className="font-sans text-sm font-semibold text-white">Fashion Retail</span>
            </div>
            {/* Stage */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-2">STAGE</span>
              <span className="font-sans text-sm font-semibold text-white">Brand Launch</span>
            </div>
            {/* Year */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-2">YEAR</span>
              <span className="font-sans text-sm font-semibold text-white">2025</span>
            </div>
            {/* Services */}
            <div className="flex flex-col items-center">
              <span className="font-mono text-[10px] tracking-[0.25em] text-neutral-500 uppercase mb-2">SERVICES</span>
              <span className="font-sans text-xs font-semibold text-white leading-relaxed">
                Brand Strategy • Identity • Retail Experience • Packaging • Store Design
              </span>
            </div>
          </div>
          <div className="w-full h-[1px] bg-neutral-900 mt-12"></div>
        </div>

        {/* 6. Narrative Sequence */}
        <div className="max-w-4xl mx-auto px-6 space-y-24 mb-32">
          {/* Section: Starting Point */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase font-medium">
                THE STARTING POINT
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
                SIYAH entered one of India's most saturated retail categories, where brands looked and felt remarkably similar. The challenge wasn't building another ethnic wear store - it was creating instant recognition.
              </p>
            </div>
          </div>

          {/* Section: Insight */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase font-medium">
                THE INSIGHT
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
                The women's ethnic wear market is crowded with brands that look, feel and communicate in similar ways. To stand out, SIYAH needed an identity that was instantly recognisable and impossible to confuse with the competition.
              </p>
            </div>
          </div>

          {/* Section: Strategy */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-1">
              <h2 className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase font-medium">
                OUR STRATEGY
              </h2>
            </div>
            <div className="md:col-span-2">
              <p className="font-sans text-base text-neutral-300 font-light leading-relaxed">
                We built the brand around an ownable turquoise identity - chosen for its contrast within the category and its ability to feel both contemporary and rooted.
                <br /><br />
                Extended it consistently across the storefront, interiors, packaging and customer experience, creating a retail system that was distinctive from day one.
              </p>
            </div>
          </div>
        </div>

        {/* 7. THE TRANSFORMATION & Image Gallery */}
        <div className="max-w-4xl mx-auto px-6 mb-32">
          <div className="text-center mb-12">
            <h2 className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase font-medium mb-3">
              THE TRANSFORMATION
            </h2>
            <div className="w-12 h-[2px] bg-[#FF4500] mx-auto"></div>
          </div>

          <div className="space-y-8">
            {/* Grid Layout for Assets */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Asset 1: Logo */}
              <div className="group relative overflow-hidden bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between aspect-square">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Z6Bby9atL2dd5EMknCD9NUj-Xw717KFH"
                    alt="Siyah Logo Asset"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#FF4500] tracking-widest block mb-1">01 / BRAND SYSTEM</span>
                  <h4 className="font-display text-base font-bold text-white tracking-wider uppercase">Logo</h4>
                </div>
              </div>

              {/* Asset 2: Storefront */}
              <div className="group relative overflow-hidden bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between aspect-square">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img
                    src="https://lh3.googleusercontent.com/d/1Yj9zJjScXBEIZTdzsvmvGC-sc0VGo14C"
                    alt="Storefront Asset"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#FF4500] tracking-widest block mb-1">02 / BRAND IDENTITY</span>
                  <h4 className="font-display text-base font-bold text-white tracking-wider uppercase">Storefront</h4>
                </div>
              </div>

              {/* Asset 3: Retail Interiors */}
              <div className="group relative overflow-hidden bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between aspect-square">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img
                    src="https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54"
                    alt="Retail Interiors Asset"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#FF4500] tracking-widest block mb-1">03 / SPATIAL EXPERIENCE</span>
                  <h4 className="font-display text-base font-bold text-white tracking-wider uppercase">Retail Interiors</h4>
                </div>
              </div>

              {/* Asset 4: Packaging */}
              <div className="group relative overflow-hidden bg-neutral-950 border border-neutral-900 rounded-xl p-8 flex flex-col justify-between aspect-square">
                <div className="flex-grow flex items-center justify-center p-4">
                  <img
                    src="https://lh3.googleusercontent.com/d/1sf_8WMzQFvgV7gPu5JDDRHX8c5k1bhPT"
                    alt="Packaging Asset"
                    referrerPolicy="no-referrer"
                    className="max-w-full max-h-48 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div>
                  <span className="font-mono text-[10px] text-[#FF4500] tracking-widest block mb-1">04 / CUSTOMER TOUCHPOINT</span>
                  <h4 className="font-display text-base font-bold text-white tracking-wider uppercase">Packaging</h4>
                </div>
              </div>
            </div>

            {/* Full Width Asset 5: Brand Collaterals */}
            <div className="group relative overflow-hidden bg-neutral-950 border border-neutral-900 rounded-xl p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 aspect-[16/7]">
              <div className="flex-grow flex items-center justify-center w-full max-h-48 md:max-h-none md:w-1/2">
                <img
                  src="https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp"
                  alt="Brand Collaterals Asset"
                  referrerPolicy="no-referrer"
                  className="max-w-full max-h-40 md:max-h-64 object-contain grayscale group-hover:grayscale-0 transition-all duration-500"
                />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-end h-full">
                <span className="font-mono text-[10px] text-[#FF4500] tracking-widest block mb-1">05 / INTEGRATED SYSTEMS</span>
                <h4 className="font-display text-xl font-bold text-white tracking-wider uppercase mb-3">Brand Collaterals</h4>
                <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                  A cohesive brand expression that binds physical touchpoints with digital extensions under a singular, high-recall design language.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 8. BUSINESS IMPACT */}
        <div className="max-w-4xl mx-auto px-6 mb-32">
          <div className="text-center mb-12">
            <h2 className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase font-medium mb-3">
              BUSINESS IMPACT
            </h2>
            <div className="w-12 h-[2px] bg-[#FF4500] mx-auto"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16">
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF4500] mb-1">₹45 Lakhs</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Revenue in Month 1</span>
            </div>
            
            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF4500] mb-1">Consistent</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Performance in Month 2</span>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center col-span-2 md:col-span-1">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF4500] mb-1">50–60</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Daily Customers</span>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF4500] mb-1">₹3,000</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Average Ticket Size</span>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center">
              <span className="font-display text-2xl sm:text-3xl font-extrabold text-[#FF4500] mb-1">3,500+</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Customers Served</span>
            </div>

            <div className="border border-neutral-900 bg-neutral-950/40 p-6 rounded-xl flex flex-col justify-center col-span-2 md:col-span-1">
              <span className="font-display text-xl sm:text-2xl font-bold text-[#FF4500] mb-1">2nd Store</span>
              <span className="font-mono text-[10px] text-neutral-400 uppercase tracking-wider">Launched within months</span>
            </div>
          </div>

          {/* Highlight stat / Future expansion */}
          <div className="border border-neutral-900 bg-neutral-950/60 p-8 rounded-xl flex flex-col md:flex-row items-center justify-between gap-6 mb-16">
            <div>
              <h4 className="font-display text-lg font-bold text-white uppercase tracking-wider mb-2">Expansion Planned</h4>
              <p className="font-sans text-xs text-neutral-400 font-light leading-relaxed">
                Aggressive expansion mapping to 3,300 sq. ft. of physical experience retail footprint coming soon.
              </p>
            </div>
            <div className="flex-shrink-0 bg-neutral-900 px-6 py-4 rounded-lg font-mono text-sm font-bold tracking-widest text-white border border-neutral-800">
              3,300 SQ. FT.
            </div>
          </div>

          {/* Key Insight */}
          <div className="border-t border-b border-neutral-900 py-8 px-4 text-center">
            <span className="font-mono text-[10px] tracking-[0.3em] text-[#FF4500] uppercase block mb-3">KEY INSIGHT</span>
            <p className="font-sans text-lg sm:text-xl font-light text-neutral-200 italic max-w-2xl mx-auto leading-relaxed">
              “Clear, differentiated brand decisions can drive recall and early traction without adding Complexity.”
            </p>
          </div>
        </div>

        {/* 10. Bright Orange/Red Testimonial Section (Full Width, Full Bleed) */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* White Monogram Headshot Avatar representing Ankush Barjata */}
            <div className="w-20 h-20 rounded-full border-2 border-white bg-black flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              <span className="font-display text-lg font-bold text-white tracking-widest">AB</span>
            </div>

            {/* Quote Icon */}
            <span className="font-display text-7xl font-extrabold text-white leading-none block mb-4 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-base sm:text-lg md:text-xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              From a single colour decision to an entire universe, this journey wouldn’t be the same without you, Ananya. Forever thankful.
              <br /><br />
              You saw the vision before it existed in reality — and that makes all the difference. Every time someone walks into Siyah and feels something instantly, that’s your work speaking. Thank you for bringing intention, restraint and boldness together so seamlessly.
            </p>

            {/* Author Name */}
            <h4 className="font-display text-sm sm:text-base font-bold tracking-[0.25em] text-white uppercase mb-2">
              Ankush Barjata
            </h4>

            {/* Author Position & Company in Black */}
            <div className="font-mono text-[10px] sm:text-xs tracking-[0.2em] text-black font-bold uppercase">
              Founder, Siyah
            </div>

            {/* Closing Quote Icon */}
            <span className="font-display text-7xl font-extrabold text-white leading-none block mt-6 select-none opacity-90">
              ”
            </span>

          </div>
        </div>

      </main>

      {/* Subtle bottom back assistant bar */}
      <div className="bg-black py-8 text-center border-t border-neutral-900/60">
        <button
          onClick={onBack}
          className="font-mono text-xs tracking-[0.25em] text-neutral-400 hover:text-white transition-colors focus:outline-none cursor-pointer bg-transparent border-none"
        >
          ← CLOSE CASE STUDY
        </button>
      </div>

    </div>
  );
}
