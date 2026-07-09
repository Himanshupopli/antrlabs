import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  // Hook into page scroll for cinematic interactive parallax/zoom effects
  const { scrollY } = useScroll();
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const videoOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  useEffect(() => {
    // Safety fallback timeout to fade out the loading overlay in case of slower connection
    const safetyTimeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 2000);

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, []);

  const handleEnableSound = async () => {
    const video = videoRef.current;

    if (!video) return;

    video.muted = false;
    setIsMuted(false);

    try {
      await video.play();
    } catch {
      video.muted = true;
      setIsMuted(true);
    }
  };

  return (
    <section
      id="hero"
      className="relative w-full h-auto aspect-video md:h-[100dvh] md:aspect-none bg-black flex flex-col items-center justify-center overflow-hidden mt-[25px]"
    >
      {/* Edge-to-Edge Video Showcase Container */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full bg-black select-none overflow-hidden flex items-center justify-center"
      >
        <video
          ref={videoRef}
          src="https://res.cloudinary.com/dqdvr35aj/video/upload/v1783324011/homebanner_qjfash.mp4"
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          muted={isMuted}
          loop
          playsInline
          onLoadedData={() => setVideoLoaded(true)}
        />

        {/* Elegant cinematic vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none z-10" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none z-10" />
      </motion.div>

      {/* Solid transparent overlay to catch and disable all mouse, hover, keyboard, and touch events on the iframe */}
      <div className="absolute inset-0 bg-transparent z-[15] pointer-events-auto cursor-default select-none" />

      {isMuted && videoLoaded && (
        <button
          type="button"
          onClick={handleEnableSound}
          className="absolute right-4 bottom-4 md:right-8 md:bottom-8 z-30 border border-white/20 bg-black/60 px-4 py-2.5 font-mono text-[10px] font-bold uppercase tracking-[0.25em] text-white backdrop-blur-md transition-colors hover:border-[#FF4500] hover:text-[#FF4500] focus:outline-none"
        >
          Sound On
        </button>
      )}

      {/* Loading Overlay */}
      {!videoLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-12 h-12 border-2 border-neutral-800 border-t-[#FF4500] rounded-full animate-spin" />
        </div>
      )}

      {/* Absolute Scroll Down Indicator Element */}
      <div className="absolute bottom-4 md:bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <motion.div
          id="hero-scroll-arrow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <a
            href="#philosophy"
            aria-label="Scroll down to core philosophy"
            className="block text-[#FF4500] hover:text-white transition-colors focus:outline-none cursor-pointer"
          >
            {/* Elegant downward solid triangle exactly like PDF */}
            <svg
              className="w-5 sm:w-6 h-5 sm:h-6 fill-current drop-shadow-[0_0_10px_rgba(255,69,0,0.6)]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12,19 4,7 20,7" />
            </svg>
          </a>
        </motion.div>
      </div>

      {/* Horizontal divider border */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="w-full border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
