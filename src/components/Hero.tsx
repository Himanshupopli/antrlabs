import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Hook into page scroll for cinematic interactive parallax/zoom effects
  const { scrollY } = useScroll();
  const textY = useTransform(scrollY, [0, 600], [0, 150]);
  const textScale = useTransform(scrollY, [0, 600], [1, 0.85]);
  const textOpacity = useTransform(scrollY, [0, 500], [1, 0]);
  const videoScale = useTransform(scrollY, [0, 800], [1, 1.12]);
  const videoOpacity = useTransform(scrollY, [0, 600], [1, 0.4]);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
    
    // Safety fallback timeout to fade out the loading overlay
    const safetyTimeout = setTimeout(() => {
      setVideoLoaded(true);
    }, 1500);

    if (video) {
      // Programmatically enforce essential background video attributes
      video.muted = true;
      video.playsInline = true;
      video.loop = true;
      video.controls = false;
      video.setAttribute("autoplay", "");
      video.setAttribute("muted", "");
      video.setAttribute("playsinline", "");

      const attemptPlay = async () => {
        try {
          await video.play();
          setVideoLoaded(true);
        } catch (error) {
          console.log("Autoplay prevented, registering interaction listeners to start playback:", error);
          
          const playOnInteraction = async () => {
            try {
              await video.play();
              setVideoLoaded(true);
              cleanup();
            } catch (err) {
              console.error("Interaction play failed:", err);
            }
          };

          const cleanup = () => {
            document.removeEventListener("click", playOnInteraction);
            document.removeEventListener("touchstart", playOnInteraction);
            document.removeEventListener("scroll", playOnInteraction);
          };

          document.addEventListener("click", playOnInteraction);
          document.addEventListener("touchstart", playOnInteraction);
          document.addEventListener("scroll", playOnInteraction);
        }
      };

      attemptPlay();
    }

    return () => {
      clearTimeout(safetyTimeout);
    };
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Edge-to-Edge Video Showcase Container */}
      <motion.div
        style={{ scale: videoScale, opacity: videoOpacity }}
        className="absolute inset-0 w-full h-full bg-black select-none pointer-events-none"
      >
        {!videoError ? (
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            controls={false}
            onCanPlay={handleVideoCanPlay}
            onPlay={() => setVideoLoaded(true)}
            onError={handleVideoError}
            className="w-full h-full object-cover bg-black opacity-100"
            style={{ pointerEvents: "none" }}
            disablePictureInPicture
            controlsList="nodownload nofullscreen noremoteplayback"
          >
            {/* Local High-Performance Asset Cached from Google Drive */}
            <source
              src="/hero_video.mp4"
              type="video/mp4"
            />
            {/* Primary Google Drive direct stream links provided by user as fallbacks */}
            <source
              src="https://drive.google.com/uc?export=download&id=1iE2KJ7KObpyKYSBPChLxtDpNkxWt5OcD"
              type="video/mp4"
            />
          </video>
        ) : (
          /* Fallback in case of sandboxed sandbox environment issues or third-party blocks */
          <iframe
            src="https://drive.google.com/file/d/1iE2KJ7KObpyKYSBPChLxtDpNkxWt5OcD/preview?autoplay=1&mute=1&loop=1&controls=0"
            className="w-full h-full border-0 pointer-events-none scale-105 bg-black"
            allow="autoplay; encrypted-media"
            title="ANTR Labs Hero Video"
          />
        )}

        {/* Elegant cinematic vignette overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40 pointer-events-none" />
        <div className="absolute inset-0 bg-black/10 pointer-events-none" />
      </motion.div>

      {/* Loading Overlay */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-12 h-12 border-2 border-neutral-800 border-t-[#FF4500] rounded-full animate-spin" />
        </div>
      )}

      {/* Giant Centered ANTR LABS Typography from PDF */}
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none">
        <motion.div
          style={{ y: textY, scale: textScale, opacity: textOpacity }}
          className="flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.25em] text-white leading-none select-none pl-[0.25em]">
              ANTR
            </h1>
            <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-[0.25em] text-white leading-none mt-4 select-none pl-[0.25em]">
              LABS
            </h1>
          </motion.div>
        </motion.div>
      </div>

      {/* Absolute Scroll Down Indicator Element */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-4">
        <motion.div
          id="hero-scroll-arrow"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
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
