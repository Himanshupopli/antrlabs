import { motion } from "motion/react";

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
            className="font-display text-[#FF4500] uppercase tracking-[0.18em] text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight"
          >
            <div>Own the</div>
            <div className="mt-1">Colour</div>
          </motion.div>
        </div>

        {/* 3. Horizontal Dividing Line */}
        <div className="max-w-4xl mx-auto px-6 mb-16">
          <div className="w-full h-[1px] bg-white/20"></div>
        </div>

        {/* 4. Large SIYAH Title */}
        <div className="text-center mb-20 px-4">
          <h1 className="font-display font-black text-6xl sm:text-8xl lg:text-9xl tracking-[0.25em] text-white select-none uppercase pl-[0.25em]">
            SIYAH
          </h1>
        </div>

        {/* 5. Bordered Metadata Grid as structured in the PDF */}
        <div className="max-w-4xl mx-auto mb-24 px-6 font-mono text-xs tracking-[0.2em]">
          
          {/* Row 1: Industry & Timeline */}
          <div className="border-b border-white/20 pb-4 flex justify-between items-center">
            <span className="text-neutral-400 font-semibold uppercase">INDUSTRY</span>
            <span className="text-neutral-400 font-semibold uppercase">TIMELINE</span>
          </div>
          
          {/* Row 2: Stage & Services */}
          <div className="border-b border-white/20 pt-8 pb-4 flex justify-between items-center">
            <span className="text-neutral-400 font-semibold uppercase">STAGE</span>
            <span className="text-neutral-400 font-semibold uppercase">SERVICES</span>
          </div>

        </div>

        {/* 6. Narrative Sequence with Centered Headings and Exact Paragraph Text */}
        <div className="max-w-3xl mx-auto px-6 space-y-24 mb-32 text-center">
          
          {/* Section: Starting Point */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE STARTING POINT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
            </p>
          </div>

          {/* Section: Strategy */}
          <div className="space-y-6">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE STRATEGY
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
            </p>
          </div>

          {/* Section: Transformation */}
          <div className="space-y-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              THE TRANSFORMATION
            </h2>
            
            {/* 5 Gray Placeholder Containers exactly matching the PDF layout */}
            <div className="space-y-6 text-left">
              {/* Box 1: Full width gray block */}
              <div className="w-full aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">TRANSFORMATION MODULE 01</span>
              </div>

              {/* Box 2: Full width gray block */}
              <div className="w-full aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">TRANSFORMATION MODULE 02</span>
              </div>

              {/* Box 3 & 4: Two-column layout with equal width gray blocks */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">DETAIL FOCUS A</span>
                </div>
                <div className="aspect-square bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                  <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">DETAIL FOCUS B</span>
                </div>
              </div>

              {/* Box 5: Full width gray block */}
              <div className="w-full aspect-[16/9] bg-neutral-900 border border-neutral-800 rounded-lg flex items-center justify-center">
                <span className="font-mono text-[10px] tracking-[0.3em] text-neutral-600 uppercase">SYSTEM DIAGRAM 03</span>
              </div>
            </div>
          </div>

          {/* Section: Business Output */}
          <div className="space-y-6 pt-12">
            <h2 className="font-mono text-sm sm:text-base tracking-[0.3em] text-white uppercase font-bold">
              BUSINESS OUTPUT
            </h2>
            <p className="font-sans text-sm sm:text-base text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel
            </p>
          </div>

        </div>

        {/* 7. Bright Orange/Red Testimonial Section with exact layout from PDF */}
        <div className="bg-[#FF4500] text-white py-24 px-6 sm:px-12 text-center select-none overflow-hidden relative">
          <div className="max-w-3xl mx-auto flex flex-col items-center">
            
            {/* Solid White circular avatar */}
            <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center mb-8 shadow-xl" id="quote-avatar">
              {/* Solid empty white circle matching PDF */}
            </div>

            {/* Quote Icon */}
            <span className="font-display text-8xl font-black text-white leading-none block mb-6 select-none opacity-90">
              “
            </span>

            {/* Quote Text */}
            <p className="font-sans text-white text-lg sm:text-xl md:text-2xl font-medium leading-relaxed tracking-wide text-center max-w-2xl mb-12">
              Lorem ipsum dolor sit<br />
              amet, consectetuer<br />
              adipiscing elit, sed diam<br />
              nonummy nibh euismod<br />
              tincidunt ut laoreet<br />
              dolore magna aliquam erat<br />
              volutpat. Ut elit, sed<br />
              diam nonummy nibh
            </p>

            {/* Author Name */}
            <h4 className="font-display text-base sm:text-lg font-bold tracking-[0.25em] text-white uppercase mb-2">
              YAGNESH SANGHRAJKA
            </h4>

            {/* Author Position & Company in Dark/Black tone */}
            <div className="font-mono text-xs sm:text-sm tracking-[0.2em] text-black font-semibold uppercase">
              Founder & Managing Partner,<br />
              247VC
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
