import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";

export default function Hero() {
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleVideoError = () => {
    setVideoError(true);
  };

  const handleVideoCanPlay = () => {
    setVideoLoaded(true);
  };

  useEffect(() => {
    const video = videoRef.current;
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
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full h-[100dvh] bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Edge-to-Edge Video Showcase Container */}
      <div className="absolute inset-0 w-full h-full bg-black select-none pointer-events-none">
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
            className={`w-full h-full object-cover transition-opacity duration-1000 bg-black ${
              videoLoaded ? "opacity-100" : "opacity-0"
            }`}
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
      </div>

      {/* Loading Overlay */}
      {!videoLoaded && !videoError && (
        <div className="absolute inset-0 flex items-center justify-center bg-black z-10">
          <div className="w-12 h-12 border-2 border-neutral-800 border-t-[#FF4500] rounded-full animate-spin" />
        </div>
      )}

      {/* Absolute Scroll Down Indicator Element */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] tracking-[0.4em] uppercase text-neutral-500 select-none ml-[0.4em]">
          Explore Labs
        </span>
        <motion.div
          id="hero-scroll-arrow"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <motion.a
            href="#philosophy"
            aria-label="Scroll down to core philosophy"
            animate={{ y: [0, 8, 0] }}
            transition={{
              repeat: Infinity,
              duration: 2,
              ease: "easeInOut",
            }}
            className="block text-[#FF4500] hover:text-white transition-colors focus:outline-none"
          >
            <svg
              className="w-8 h-8 fill-current rotate-180 drop-shadow-[0_0_15px_rgba(255,69,0,0.5)]"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <polygon points="12,5 4,19 20,19" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Horizontal divider border */}
      <div className="absolute bottom-0 left-0 w-full z-10">
        <div className="w-full border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
