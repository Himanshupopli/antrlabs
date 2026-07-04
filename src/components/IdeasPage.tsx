import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ArrowLeft, 
  Clock, 
  Calendar, 
  BookOpen, 
  ArrowRight, 
  Search, 
  Filter, 
  Mail, 
  Check, 
  AlertCircle, 
  ChevronRight,
  TrendingUp,
  Share2
} from "lucide-react";
import { ARTICLES } from "../data";
import { Article } from "../types";

// Add some more mock articles with details for the Ideas page to feel extremely rich and professional
const EXPANDED_ARTICLES: (Article & { category: string; author: string; tags: string[]; detailedContent: string[] })[] = [
  {
    id: "name",
    title: "What’s in a Name?",
    summary: "How a brand’s phonetic structure and semantic weight drive consumer perception before they even see a logo.",
    date: "June 14, 2026",
    readingTime: "4 min read",
    category: "Strategy",
    author: "Ananya Sarkar",
    tags: ["Naming", "Phonetics", "Category Command"],
    content: "Naming is the acoustic threshold of your brand. A great name works on three levels: phonetic velocity, visual balance, and semantic depth...",
    detailedContent: [
      "Naming is the acoustic threshold of your brand. A great name works on three levels: phonetic velocity (how easily the syllables slip off the tongue), visual balance (how the characters align symmetrically in print), and semantic depth (the underlying historical and cultural metaphors).",
      "When we designed ANTR, we wanted something that sounded immediate, felt structural, and meant difference. We analyze why single-syllable or high-contrast names stick in memory longer and how to test phonetics across global languages.",
      "Most corporate naming exercises fail because they attempt to build consensus. Consensus produces compromise, and compromise breeds average. To stand out, a name must provoke. It must feel slightly uncomfortable at first—carrying enough friction to trigger curiosity."
    ]
  },
  {
    id: "marketing",
    title: "Branding vs Marketing",
    summary: "The critical difference between building a magnet (Branding) and pushing a message (Marketing).",
    date: "May 28, 2026",
    readingTime: "5 min read",
    category: "Positioning",
    author: "Rhea Kapoor",
    tags: ["Brand Equity", "Market Noise", "Growth"],
    content: "Marketing buys attention; branding commands it. If your marketing is failing, it's often a branding problem in disguise...",
    detailedContent: [
      "Marketing buys attention; branding commands it. If your marketing is failing, it's often a branding problem in disguise.",
      "We explore the balance of long-term emotional loyalty versus short-term transactional loops, demonstrating why leading companies invest 60% of their focus on storytelling, equity, and cohesive design, rather than endless discount ads.",
      "When a brand's visual identity and core messaging are pristine, customer acquisition costs plummet. You are no longer chasing lead targets; you are creating a gravity well that pulls your ideal consumers in organically."
    ]
  },
  {
    id: "trap",
    title: "The Branding Trap",
    summary: "Why replicating successful aesthetics fails, and how to discover your brand's unique authentic difference.",
    date: "April 11, 2026",
    readingTime: "6 min read",
    category: "Identity",
    author: "Ishaan Mehta",
    tags: ["Aesthetics", "Typography", "Imitation"],
    content: "The trap is imitation. Seeing a competitor scale and copying their color palette or font pairing is a shortcut to invisibility...",
    detailedContent: [
      "The trap is imitation. Seeing a competitor scale and copying their color palette or font pairing is a shortcut to invisibility.",
      "We deconstruct the 'branding trap' and detail our proprietary diagnostic workshops that strip away industry cliches to uncover raw, authentic, and sometimes uncomfortable differences that define actual category leaders.",
      "If you look like everyone else in your vertical, your only point of comparison is price. Authentic design requires the courage to be visually distinct. It means choosing high-contrast typography, asymmetrical grids, and bespoke color directions that defy standard templates."
    ]
  },
  {
    id: "trust",
    title: "The Trust Crisis in D2C",
    summary: "As ad costs skyrocket and social feeds saturate, raw authenticity and visual precision are the only survival tools.",
    date: "March 05, 2026",
    readingTime: "7 min read",
    category: "D2C",
    author: "Ananya Sarkar",
    tags: ["Trust", "E-commerce", "Ad Costs"],
    content: "D2C is no longer about arbitrage; it is about absolute trust. With customers skeptical of drop-shipped templates, visual precision is key...",
    detailedContent: [
      "D2C is no longer about arbitrage; it is about absolute trust. With customers skeptical of drop-shipped templates, visual precision and tactical materials are your greatest proof of quality.",
      "We analyze how high-quality packaging, meticulous digital typography, and radical transparency are redefining consumer devotion in a post-cookie landscape.",
      "When the digital storefront feels tailored down to the micro-interaction, the consumer subconsciously attributes that same level of care to the product itself. Design is not decorative; it is the ultimate proof of integrity."
    ]
  },
  {
    id: "speed",
    title: "Speed as an Aesthetic Choice",
    summary: "Why web performance is the absolute foundation of luxury digital experiences.",
    date: "February 18, 2026",
    readingTime: "5 min read",
    category: "Digital",
    author: "Siddharth Roy",
    tags: ["Performance", "UX", "Core Web Vitals"],
    content: "We treat speed as an architectural core value. All assets are custom compressed, interfaces are built with modular architectures...",
    detailedContent: [
      "A beautiful digital experience that stutters or loads slowly is the antithesis of luxury. In the premium space, elegance is effortless, and lag is an instant indicator of low quality.",
      "We treat speed as an architectural core value. All assets are custom compressed, interfaces are built with modular front-end architectures, and transitions are rendered on dedicated layer frames to assure zero friction on slow mobile connections.",
      "True technical craftsmanship means achieving visual density and fluid animations without bloating the bundle size. Every line of CSS and imported dependency must earn its place on the stage."
    ]
  },
  {
    id: "tactility",
    title: "The Tactile Handshake",
    summary: "How sustainable material innovations are redefining the premium unboxing experience.",
    date: "January 22, 2026",
    readingTime: "6 min read",
    category: "Identity",
    author: "Zoya Alvi",
    tags: ["Packaging", "Sustainability", "Materials"],
    content: "Tactility creates an immediate emotional anchor. The weight of the paper, the texture of the box, the sound of the opening...",
    detailedContent: [
      "Tactility creates an immediate emotional anchor. The weight of the paper, the texture of the box, the sound of the opening—it is pure sensory art that bridges the digital-to-physical divide.",
      "We explore the frontier of bio-inks, zero-plastic structures, and custom fiber alignments that provide luxury branding without ecological compromise.",
      "When a consumer unpacks a product, that physical touch is the final confirmation of their digital purchase. If the packaging feels generic or lightweight, the magic of the brand instantly evaporates."
    ]
  }
];

const CATEGORIES = ["All", "Strategy", "Positioning", "Identity", "D2C", "Digital"];

interface IdeasPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function IdeasPage({ onBackToHome, onNavigateToSection }: IdeasPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [readingArticle, setReadingArticle] = useState<typeof EXPANDED_ARTICLES[0] | null>(null);
  const [emailInput, setEmailInput] = useState("");
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [subscribeError, setSubscribeError] = useState("");

  const filteredArticles = EXPANDED_ARTICLES.filter((article) => {
    const matchesCategory = selectedCategory === "All" || article.category === selectedCategory;
    const matchesSearch = 
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const handleSubscribe = (e: FormEvent) => {
    e.preventDefault();
    setSubscribeError("");

    if (!emailInput.trim()) {
      setSubscribeError("Email is required");
      return;
    }
    if (!/\S+@\S+\.\S+/.test(emailInput)) {
      setSubscribeError("Please enter a valid email");
      return;
    }

    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmailInput("");
    }, 1200);
  };

  return (
    <div id="ideas-page-view" className="bg-black text-white min-h-screen pt-28 pb-20 overflow-hidden relative">
      {/* Subtle graphic background pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Back */}
        <div className="mb-16 md:mb-20 text-left">
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white mb-8 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col md:flex-row md:items-end justify-between gap-8"
          >
            <div>
              <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
                THOUGHT LEADERSHIP
              </span>
              <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none">
                ANTR INSIGHTS
              </h1>
              <p className="font-sans text-neutral-400 text-lg sm:text-xl font-light mt-6 max-w-2xl leading-relaxed">
                Critical analyses, phonetic studies, and design philosophies curated by the partners and architects at ANTR LABS. We publish only when we have something distinct to articulate.
              </p>
            </div>

            {/* Subscribe Mini Widget */}
            <div className="bg-neutral-950 border border-neutral-900 p-6 rounded-2xl w-full md:max-w-xs text-left relative overflow-hidden">
              <span className="font-mono text-[9px] text-[#FF4500] tracking-widest uppercase block mb-2">
                WEEKLY INSIGHTS JOURNAL
              </span>
              <h3 className="font-display text-base font-bold text-white mb-3">
                Join our exclusive circle.
              </h3>
              
              <AnimatePresence mode="wait">
                {!isSubscribed ? (
                  <form onSubmit={handleSubscribe} className="relative">
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => setEmailInput(e.target.value)}
                      placeholder="name@company.com"
                      className="w-full bg-black border border-neutral-800 text-xs text-white placeholder-neutral-600 rounded-xl py-2.5 pl-4 pr-10 focus:border-[#FF4500] focus:outline-none transition-colors"
                    />
                    <button
                      type="submit"
                      disabled={isSubscribing}
                      className="absolute right-1 top-1 bg-white hover:bg-neutral-200 text-black p-1.5 rounded-lg transition-colors focus:outline-none"
                    >
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                    {subscribeError && (
                      <span className="text-[9px] text-[#FF4500] font-mono tracking-wider mt-1.5 block flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {subscribeError}
                      </span>
                    )}
                  </form>
                ) : (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 text-white bg-[#FF4500]/10 border border-[#FF4500]/20 p-2 rounded-xl"
                  >
                    <Check className="w-4 h-4 text-[#FF4500]" />
                    <span className="font-mono text-[10px] tracking-wider uppercase text-neutral-300">
                      SUBSCRIBED SECURELY
                    </span>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Categories and Search Controls */}
        <div className="border-t border-b border-neutral-900 py-6 mb-12 flex flex-col md:flex-row md:items-center justify-between gap-6">
          {/* Categories Tab */}
          <div className="flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono text-[10px] tracking-widest uppercase py-2 px-4 rounded-xl border transition-all duration-300 focus:outline-none cursor-pointer ${
                  selectedCategory === cat
                    ? "bg-[#FF4500] border-[#FF4500] text-black font-semibold"
                    : "border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:max-w-xs">
            <Search className="absolute left-4 top-3.5 w-4 h-4 text-neutral-500" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search insights..."
              className="w-full bg-neutral-950 border border-neutral-900 rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-neutral-800 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* Dynamic List Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
          <AnimatePresence mode="popLayout">
            {filteredArticles.map((article, index) => (
              <motion.div
                layout
                key={article.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5 }}
                onClick={() => setReadingArticle(article)}
                className="group cursor-pointer bg-neutral-950/20 border border-neutral-950 hover:border-neutral-900 rounded-3xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 text-left relative hover:bg-neutral-950/45 min-h-[340px]"
              >
                {/* Accent border left hover */}
                <div className="absolute top-0 left-0 w-[2px] h-0 bg-[#FF4500] group-hover:h-full transition-all duration-500" />

                <div>
                  {/* Category & Date Info */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-[9px] text-[#FF4500] tracking-widest uppercase bg-[#FF4500]/10 py-1 px-2 rounded-lg border border-[#FF4500]/10">
                      {article.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-600">
                      {article.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-2xl font-bold tracking-wide text-white group-hover:text-[#FF4500] transition-colors mb-4 line-clamp-2 leading-snug">
                    {article.title}
                  </h3>

                  {/* Summary */}
                  <p className="font-sans text-xs sm:text-sm text-neutral-400 font-light leading-relaxed mb-6 line-clamp-3">
                    {article.summary}
                  </p>
                </div>

                {/* Footer of the card */}
                <div className="border-t border-neutral-900/60 pt-4 mt-6 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-neutral-500 group-hover:text-white transition-colors">
                    <Clock className="w-3.5 h-3.5" />
                    <span className="font-mono text-[10px] uppercase tracking-wider">
                      {article.readingTime}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 font-mono text-[10px] tracking-widest text-[#FF4500] font-bold uppercase opacity-0 group-hover:opacity-100 transition-opacity">
                    READ ARTICLE
                    <ChevronRight className="w-3.5 h-3.5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty fallback state */}
          {filteredArticles.length === 0 && (
            <div className="col-span-full py-20 text-center bg-neutral-950/20 border border-neutral-950 rounded-3xl">
              <TrendingUp className="w-12 h-12 text-neutral-700 mx-auto mb-4" />
              <h3 className="font-display text-lg font-bold text-neutral-400 uppercase tracking-wider">
                No matching insights found
              </h3>
              <p className="font-sans text-neutral-600 text-xs mt-2">
                Try adjusting your search filters or searching with a different term.
              </p>
            </div>
          )}
        </div>

        {/* Collaborative quote call-out banner */}
        <div className="border-t border-neutral-900 pt-20 mb-12">
          <div className="max-w-4xl mx-auto bg-neutral-950/20 border border-neutral-900 rounded-3xl p-8 sm:p-12 text-left relative">
            <div className="absolute top-8 right-8 text-[#FF4500]/10 font-display text-8xl font-bold select-none">
              “
            </div>
            <p className="font-sans text-lg sm:text-xl text-neutral-300 italic font-light leading-relaxed max-w-2xl mb-6 relative z-10">
              "We do not design brands to fit quietly into pre-existing categories. We isolate the specific attributes required to establish an entirely new category, dominating it from day one."
            </p>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full overflow-hidden bg-neutral-900 border border-neutral-800">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400"
                  alt="Ananya Sarkar"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h4 className="font-display text-sm font-bold text-white">
                  Ananya Sarkar
                </h4>
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest">
                  FOUNDER & PRINCIPAL ARCHITECT, ANTR LABS
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>

      {/* Complete Article Full-screen Reader overlay overlay */}
      <AnimatePresence>
        {readingArticle && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setReadingArticle(null)}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md overflow-y-auto px-6 py-12 flex justify-center items-start"
          >
            <motion.div
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 180 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-neutral-950 border border-neutral-900 w-full max-w-3xl rounded-3xl p-8 sm:p-12 shadow-2xl relative text-left my-8"
            >
              {/* Close Button */}
              <button
                onClick={() => setReadingArticle(null)}
                className="absolute top-6 right-6 bg-black/80 hover:bg-neutral-900 text-white p-2.5 rounded-full border border-neutral-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close article"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Author & Tags Top Metadata Header */}
              <div className="flex flex-wrap items-center gap-y-3 justify-between border-b border-neutral-900 pb-6 mb-8 mt-4">
                <div className="flex items-center gap-3">
                  <span className="font-mono text-[10px] text-[#FF4500] tracking-widest uppercase bg-[#FF4500]/10 py-1 px-2.5 rounded-lg border border-[#FF4500]/10">
                    {readingArticle.category}
                  </span>
                  <span className="font-mono text-[10px] text-neutral-600">
                    {readingArticle.date}
                  </span>
                </div>
                <div className="flex items-center gap-1.5 text-neutral-500 font-mono text-[10px]">
                  <BookOpen className="w-4 h-4 text-[#FF4500]" />
                  <span>{readingArticle.readingTime} READ TIME</span>
                </div>
              </div>

              {/* Title & Author */}
              <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-4 leading-tight">
                {readingArticle.title}
              </h2>
              <p className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-8">
                AUTHOR: {readingArticle.author} — PARTNER, ANTR LABS
              </p>

              {/* Article Content */}
              <div className="font-sans text-base sm:text-lg text-neutral-300 font-light leading-relaxed space-y-6 mb-10">
                {readingArticle.detailedContent?.map((para, idx) => (
                  <p key={idx} className={idx === 0 ? "text-lg sm:text-xl text-white font-normal" : ""}>
                    {para}
                  </p>
                )) || <p>{readingArticle.content}</p>}
                
                <p>
                  At ANTR LABS, we treat design as a strategic competitive asset. We work alongside founders who are unyielding
                  in their commitment to excellence, deploying bespoke phonetic strategies, structural typography pairings, and lightweight performance engineering frameworks.
                </p>
              </div>

              {/* Article Tags Footer */}
              <div className="border-t border-neutral-900 pt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="flex flex-wrap gap-2">
                  {readingArticle.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[9px] tracking-widest bg-neutral-900 border border-neutral-800 py-1.5 px-3 rounded-lg text-neutral-400 uppercase"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <button className="flex items-center gap-2 text-neutral-500 hover:text-white font-mono text-[10px] tracking-wider uppercase transition-colors">
                    <Share2 className="w-4 h-4 text-[#FF4500]" /> SHARE
                  </button>
                  <button
                    onClick={() => setReadingArticle(null)}
                    className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer"
                  >
                    CLOSE READ
                  </button>
                </div>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
