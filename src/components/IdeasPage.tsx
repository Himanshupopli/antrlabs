import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Clock, Calendar, BookOpen, ArrowRight } from "lucide-react";
import { ARTICLES } from "../data";
import { Article } from "../types";
import ContactForm from "./ContactForm";

interface IdeasPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function IdeasPage({ onBackToHome, onNavigateToSection }: IdeasPageProps) {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  // Map article IDs to categories
  const getCategory = (id: string) => {
    if (id === "name" || id === "trap") return "BRANDING";
    return "MARKETING";
  };

  // Curated high-contrast retro vintage tech/creative images to match the screenshot feeling
  const getImage = (id: string) => {
    switch (id) {
      case "name":
        return "https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&q=80&w=800";
      case "marketing":
        return "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&q=80&w=800";
      case "trap":
        return "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800";
      case "trust":
      default:
        return "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800";
    }
  };

  return (
    <div id="ideas-page-view" className="bg-black text-white min-h-screen pt-28 pb-0 overflow-hidden relative">
      {/* Background Soft Glow */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF4500]/[0.02] rounded-full blur-3xl pointer-events-none" />

      <div className="w-full">
        {/* Main Header / Title: ideas worth building */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="px-6 md:px-12"
        >
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl font-light text-center tracking-[0.05em] text-white lowercase my-16 md:my-24 select-none">
            ideas worth <span className="text-[#FF4500]">building</span>
          </h1>
        </motion.div>

        {/* 2x2 Grid with intersecting thin lines */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="border-t border-b border-neutral-900 grid grid-cols-1 md:grid-cols-2 bg-neutral-900 gap-[1px]"
        >
          {ARTICLES.map((article, index) => {
            const category = getCategory(article.id);
            const image = getImage(article.id);
            
            return (
              <div
                key={article.id}
                onClick={() => setActiveArticle(article)}
                className="bg-black p-10 sm:p-14 md:p-20 flex flex-col items-center text-center group cursor-pointer hover:bg-neutral-950/40 transition-colors duration-500"
              >
                {/* Vintage Grayscale Photo */}
                <div className="w-full max-w-sm aspect-[1.5] overflow-hidden bg-neutral-950 mb-8 border border-neutral-800 shadow-xl relative">
                  <img
                    src={image}
                    alt={article.title}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale contrast-[1.15] brightness-[0.95] group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  {/* Subtle vignette or overlay */}
                  <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                </div>

                {/* Category (Red-Orange uppercase) */}
                <span className="text-[#FF4500] font-mono text-[10px] font-semibold tracking-[0.3em] uppercase block mb-3 select-none">
                  {category}
                </span>

                {/* Heading (White bold uppercase) */}
                <h3 className="font-display text-xl sm:text-2xl font-extrabold tracking-wider text-white uppercase max-w-md leading-snug group-hover:text-[#FF4500] transition-colors duration-300">
                  {article.title}
                </h3>

                {/* Gray rectangular reading Badge */}
                <div className="mt-5 select-none">
                  <span className="inline-block bg-[#EAEAEA] text-black font-mono text-[9px] font-bold uppercase tracking-[0.2em] px-4 py-1.5 rounded-none">
                    {article.readingTime}
                  </span>
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Subtitle below grid: NEW PERSPECTIVES. EVERY WEEK. */}
        <div className="w-full border-t border-b border-neutral-900 py-12 md:py-16 text-center select-none bg-black">
          <p className="font-mono text-base sm:text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-[0.25em] sm:tracking-[0.4em] md:tracking-[0.55em] text-neutral-200 uppercase px-4">
            NEW PERSPECTIVES. EVERY WEEK.
          </p>
        </div>

        {/* High-contrast Orange Contact Form Section matching the screenshot */}
        <ContactForm />
      </div>

      {/* Slide-out Panel / Article Drawer */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end"
          >
            {/* Drawer Container */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "tween", duration: 0.4, ease: "easeOut" }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-950 border-l border-neutral-900 w-full max-w-2xl h-full flex flex-col justify-between p-8 sm:p-12 overflow-y-auto relative text-left"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveArticle(null)}
                className="absolute top-6 right-6 bg-black/80 hover:bg-neutral-900 text-white p-2.5 rounded-full border border-neutral-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="my-auto max-w-xl">
                {/* Meta details */}
                <div className="flex items-center gap-6 font-mono text-[10px] text-neutral-500 uppercase tracking-widest mb-6">
                  <span className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-[#FF4500]" /> {activeArticle.date}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-[#FF4500]" /> {activeArticle.readingTime}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-wide text-white mb-6">
                  {activeArticle.title}
                </h3>

                <p className="font-sans text-lg text-neutral-400 italic font-light leading-relaxed mb-8 border-l-2 border-[#FF4500] pl-6">
                  "{activeArticle.summary}"
                </p>

                {/* Article Content */}
                <div className="font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed space-y-6">
                  <p>{activeArticle.content}</p>
                  <p>
                    Effective design solutions do not rely on standard patterns. By isolating the exact friction point
                    where brands fail to explain their differences, we engineer cohesive digital experiences that persist.
                  </p>
                  <p>
                    Through detailed execution of typographic balance, customized asset loading, and absolute spatial hierarchy,
                    ANTR LABS continues to craft digital portfolios that elevate consumer perception and establish category authority.
                  </p>
                </div>
              </div>

              {/* Close footer */}
              <div className="border-t border-neutral-900 pt-8 mt-12 flex justify-between items-center">
                <span className="font-mono text-[9px] text-neutral-600 tracking-widest uppercase">
                  © 2026 ANTR LABS INSIGHTS
                </span>
                <button
                  onClick={() => setActiveArticle(null)}
                  className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  Back to Articles
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
