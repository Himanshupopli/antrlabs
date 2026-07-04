import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, ArrowRight, BookOpen, Clock, Calendar } from "lucide-react";
import { ARTICLES } from "../data";
import { Article } from "../types";

interface IdeasProps {
  onViewAll?: () => void;
}

export default function Ideas({ onViewAll }: IdeasProps) {
  const [activeArticle, setActiveArticle] = useState<Article | null>(null);

  return (
    <section id="ideas" className="py-24 sm:py-32 px-6 md:px-12 bg-black text-white relative">
      <div className="max-w-4xl mx-auto">
        {/* Centered Section Heading from PDF */}
        <div className="mb-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-[0.25em] text-white uppercase"
          >
            IDEAS
          </motion.h2>
        </div>

        {/* Interactive Centered Article Headlines List from PDF */}
        <div className="flex flex-col border-t border-neutral-900">
          {ARTICLES.map((article, index) => (
            <div
              key={article.id}
              className="border-b border-neutral-900 py-10 relative group cursor-pointer text-center"
              onClick={() => setActiveArticle(article)}
            >
              <h3 className="font-display text-2xl sm:text-3xl md:text-4xl font-normal text-neutral-400 group-hover:text-white transition-all duration-300 tracking-wider">
                {article.title}
              </h3>
            </div>
          ))}
        </div>
      </div>

      {/* Slide-out Panel / Article Drawer */}
      <AnimatePresence>
        {activeArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveArticle(null)}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex justify-end"
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
                className="absolute top-6 right-6 bg-black/80 hover:bg-neutral-900 text-white p-2.5 rounded-full border border-neutral-800 transition-colors focus:outline-none"
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
                  className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none"
                >
                  Back to Articles
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Full-width elegant horizontal dividing border */}
      <div className="absolute bottom-0 left-0 w-full px-6 md:px-12">
        <div className="max-w-7xl mx-auto border-b border-neutral-900"></div>
      </div>
    </section>
  );
}
