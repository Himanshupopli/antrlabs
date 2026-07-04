import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  X, 
  ArrowLeft, 
  ArrowRight, 
  Tag, 
  TrendingUp, 
  Award, 
  Globe, 
  Check, 
  Zap, 
  Sparkles, 
  Layers, 
  Users,
  Eye,
  Calendar
} from "lucide-react";
import WorkDetailPage from "./WorkDetailPage";

interface ProjectDetail {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  category: "Identity & Packaging" | "D2C Scaling" | "Social Campaigns";
  tags: string[];
  duration: string;
  year: string;
  imageUrl: string;
  isSharkTank: boolean;
  metrics: { label: string; value: string }[];
  challenge: string;
  strategy: string;
  outcomes: string[];
}

const WORK_CATEGORIES = [
  "All Solutions",
  "Identity & Packaging",
  "D2C Scaling",
  "Social Campaigns",
  "Shark Tank Featured"
];

const ENRICHED_PROJECTS: ProjectDetail[] = [
  {
    id: "siyah",
    title: "Siyah",
    subtitle: "Himachal's 1st Women's Ethnicwear Chain",
    description: "Translating traditional regional motifs into modular premium retail spaces and brand identity systems.",
    category: "Identity & Packaging",
    tags: ["Brand Identity", "Sustainable Packaging", "Retail Experience", "Shark Tank India"],
    duration: "6 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: true,
    metrics: [
      { label: "Outlets Opened", value: "3 Locations" },
      { label: "Footfall Increase", value: "+180%" },
      { label: "Packaging Costs", value: "-15% Eco-Safe" }
    ],
    challenge: "Siyah came to us with regional resonance but a highly fragmented brand image. To scale in rapidly changing tier-2 economies, they needed an elevated identity that honored their Himachali heritage while matching the visual expectations of modern retail architecture.",
    strategy: "We engineered a complete, flexible visual grammar incorporating traditional Himachali geometric geometry in a sleek, minimalist grid system. We stripped away visual noise and deployed natural organic linen, textured kraft-board packaging, and bespoke typographic signs that command attention.",
    outcomes: [
      "Standardized interior architectural design playbook for modular tier-2 storefront retail.",
      "Custom, 100% biodegradable packaging made of local pine-needle fibers and earth-safe soy inks.",
      "Achieved immediate physical brand recognition during their direct pitch on Shark Tank India Season 3.",
      "Created an editorial D2C lookbook scaling digital native conversion rates by 34% in under 90 days."
    ]
  },
  {
    id: "sukham",
    title: "Sukham",
    subtitle: "8-Fig Cr D2C Brand Builder",
    description: "Designing the absolute category authority for premium direct-to-consumer health and wellness.",
    category: "D2C Scaling",
    tags: ["Venture Architecture", "UX/UI Design", "Unboxing Rituals", "Shark Tank India"],
    duration: "3 years",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: true,
    metrics: [
      { label: "Valuation Scaled", value: "Eight Figures" },
      { label: "UX Conversion Rate", value: "+42% Uplift" },
      { label: "Organic Return Rates", value: "55% Retention" }
    ],
    challenge: "In a heavily saturated wellness and digital health category dominated by loud claims and low-cost templates, Sukham needed to establish a premium, high-integrity visual footprint that instantly inspired diagnostic trust and premium appeal.",
    strategy: "We pioneered an uncompromisingly calm, minimalist visual language centering generous negative space, sophisticated deep-teal palettes, and pristine, high-contrast serif typography. Every digital transaction page and physical touchpoint was engineered to evoke luxury composure.",
    outcomes: [
      "Secured massive seed valuation and widespread investor support following a highly visible pitch on Shark Tank India.",
      "Co-developed the entire physical unboxing ritual, from heavy custom-molded glass jars to rigid sliding presentation boxes.",
      "Re-architected their digital e-commerce storefront with custom React-driven performance, reducing render lag to under 400ms.",
      "Decreased shopping cart drop-offs by 28% through structured checkout interfaces and transparent pricing tiers."
    ]
  },
  {
    id: "innovest",
    title: "Innovest",
    subtitle: "Next-Gen Investment Ecosystem",
    description: "Crafting a sophisticated high-trust brand identity and performance-driven digital interfaces for a leading investment network.",
    category: "D2C Scaling",
    tags: ["Brand Trust", "Strategy", "Digital Interfaces", "Fintech Scaling"],
    duration: "8 months",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Onboarding Friction", value: "-35% Lower" },
      { label: "Asset Value Sealed", value: "9-Fig Managed" },
      { label: "Investor Retainment", value: "98.4% Rate" }
    ],
    challenge: "Innovest holds access to high-net-worth deal structures but suffered from a generic, tech-heavy interface that felt clinical rather than exclusive. They needed a luxury visual posture that communicated extreme security, compliance, and pedigree.",
    strategy: "We deployed deep graphite tones, customized geometric type weights, and custom SVG cryptography layouts. We reimagined their investment platform around a highly clean dashboard containing zero unnecessary widgets and presenting complex portfolio metrics with complete clarity.",
    outcomes: [
      "Designed and deployed the executive member dashboard with zero-latency load architecture.",
      "Reduced member registration dropout rates by 35% through custom interactive multi-step verification flows.",
      "Authored a 150-page digital and physical brand bible regulating all future investor publications.",
      "Engineered continuous visual trust indicators that established clear authority in investment markets."
    ]
  },
  {
    id: "vc247",
    title: "247VC",
    subtitle: "Early-Stage Venture Fund Catalyst",
    description: "Building an authoritative brand visual system, stationery suite, and interactive pitch portals for a breakout VC firm.",
    category: "Identity & Packaging",
    tags: ["Corporate Identity", "Grid Systems", "Deal Flow Portals", "Gifting Systems"],
    duration: "12 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Portfolio Submissions", value: "+65% Increase" },
      { label: "Portal Latency", value: "Under 250ms" },
      { label: "Brand Recall Rate", value: "92% Excellent" }
    ],
    challenge: "247VC needed an unmatched visual presence that set them apart from standard, monotonous institutional venture funds. To capture top-tier founder attention, their brand had to represent both mathematical rigor and bold artistic vision.",
    strategy: "We created a layout structure based on modular grids, matching clean typography with bold high-contrast rules. We designed beautiful stationery packages and physical investment briefings featuring rigid linen bindings, combined with a high-performance deal portal.",
    outcomes: [
      "Delivered a complete corporate stationary suite utilizing heavy textured FSC-certified papers.",
      "Designed and developed a sleek, fast interactive deal submission funnel reducing application friction.",
      "Co-developed customized physical portfolio catalogs distributed exclusively to ultra-high-net-worth limited partners.",
      "Elevated public visual recall and solidified the fund's status as a premium tier-1 catalyst."
    ]
  },
  {
    id: "crustandkettle",
    title: "Crust & Kettle",
    subtitle: "Artisanal Sourdough & Specialty Brewery",
    description: "Bespoke packaging design, hand-lettered custom marks, and physical space curation for a boutique micro-bakery.",
    category: "Identity & Packaging",
    tags: ["Hand Lettering", "Tactile Unboxing", "Interior Styling", "Bespoke Graphics"],
    duration: "4 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Retail Footfall", value: "+140% Growth" },
      { label: "Instagram Tags", value: "+300% Monthly" },
      { label: "Aesthetic Rating", value: "4.9/5 stars" }
    ],
    challenge: "Crust & Kettle baked the finest sourdough but had a visual identity that blended in with generic local coffee shops. They needed custom graphic markers and physical branding elements that made their micro-brewery feel like an artisanal sanctuary.",
    strategy: "We drafted custom hand-lettered typographic marks inspired by woodblock prints and combined them with rough, tactile, unbleached kraft packaging wrappers. We styled their store front with warm concrete elements, custom ironwork, and subtle display typography.",
    outcomes: [
      "Created complete hand-crafted sourdough sleeve and bottle label systems with soy inks.",
      "Provided art direction and spatial interior guidelines for their flagship industrial-style storefront.",
      "Successfully launched their artisanal digital presence, causing immediate local community hype and queues.",
      "Developed an elegant checkout booking flow for weekend artisanal bake pre-orders."
    ]
  },
  {
    id: "bisleri",
    title: "Bisleri",
    subtitle: "Reimagining Hydration for Gen-Z",
    description: "A high-impact organic storytelling and social content system celebrating hydration as a fundamental luxury.",
    category: "Social Campaigns",
    tags: ["Organic Video", "Reels Strategy", "Youth Positioning", "Bottle Graphics"],
    duration: "18 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1608885898957-a599fb1b4674?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Combined Views", value: "15M+ Organic" },
      { label: "Gen-Z Brand Sentiment", value: "+85% Positive" },
      { label: "Social Followers", value: "+95K Growth" }
    ],
    challenge: "As an iconic household brand, Bisleri wanted to connect deeply with the younger demographic who view generic water bottles as mere commodities. They wanted to position daily hydration as an aesthetic wellness ritual.",
    strategy: "We built a modern vertical video strategy focusing on high-contrast visuals, liquid symmetry, and healthy daily habits. We transformed standard product hydration shots into stylized, color-coordinated ASMR-driven cinematic loops that felt like visual art.",
    outcomes: [
      "Generated over 15 million organic impressions on key vertical videos with zero ad spend.",
      "Pioneered a stylized digital content vocabulary widely credited with modernizing the classic label's youth sentiment.",
      "Crafted an interactive athletic creator kit that achieved massive engagement rates on TikTok and Instagram.",
      "Designed limited-edition bottle packaging templates for exclusive fitness and design communities."
    ]
  },
  {
    id: "zinoha",
    title: "Zinoha",
    subtitle: "Clean Clinical Skincare System",
    description: "Creating the minimalist packaging lines and high-contrast, diagnostic D2C platform layout for an ethical skincare brand.",
    category: "Identity & Packaging",
    tags: ["Sterile Graphics", "D2C Interfaces", "Recycled Pulp", "Art Direction"],
    duration: "5 months",
    year: "2026",
    imageUrl: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Purchase Conversions", value: "+30% Higher" },
      { label: "Cart Completion", value: "48% Faster" },
      { label: "Biodegradable Packs", value: "100% Implemented" }
    ],
    challenge: "Zinoha had scientifically advanced, ethical skincare formulas but struggled with complicated, loud pharmaceutical packaging that failed to communicate premium daily wellness luxury.",
    strategy: "We developed a clean, medical-grade typographic hierarchy using modern grotesque fonts and an ultra-pure white palette. We paired this with structural unboxing boxes made of 100% molded protective paper-pulp shells, creating a pristine aesthetic.",
    outcomes: [
      "Formulated sterile, high-contrast product labeling systems utilizing embossed spot varnishes.",
      "Rebuilt their D2C online storefront with custom static templates, lowering loading times to 380ms.",
      "Replaced standard bubble wrap with protective, fully compostable structural paper packaging shells.",
      "Directed raw, unretouched brand editorial photography championing authentic and natural skin textures."
    ]
  },
  {
    id: "fupro",
    title: "Fupro",
    subtitle: "Premium Ergonomic Workstations",
    description: "Formulating the digital unboxing experience, 3D space planners, and high-performance checkout structures to scale premium ergonomics.",
    category: "D2C Scaling",
    tags: ["3D Configurator", "Mechanical Identity", "Transit Packaging", "UX Layouts"],
    duration: "9 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Average Order Value", value: "+28% Uplift" },
      { label: "Assembly Inquiries", value: "-60% Drop" },
      { label: "Platform Purchases", value: "+44% Growth" }
    ],
    challenge: "Fupro's precision mechanical ergonomic furniture needed a digital shopping experience that matched their structural craft. Buyers struggled to visualize modular desk custom setups, which limited online checkouts.",
    strategy: "We built an interactive, lightweight 3D web configurator that allowed shoppers to build desks, choose solid hardwoods, and adjust frames in real-time. We backed this with structural transit box designs containing customized protective tool slots.",
    outcomes: [
      "Engineered an interactive 3D online desk configurator fully compatible with standard mobile browsers.",
      "Overhauled their brand mark to reflect industrial structural excellence and balanced mechanics.",
      "Designed flat-pack eco-friendly transit containers with custom laser-cut protective tool inserts.",
      "Cut customer setup support tickets by 60% via beautiful step-by-step visual assembly booklets."
    ]
  },
  {
    id: "tynor",
    title: "Tynor",
    subtitle: "Orthopedic Rehabilitation Standards",
    description: "Redesigning physical product packaging systems and user instruction manuals to scale orthopedic trust worldwide.",
    category: "Identity & Packaging",
    tags: ["Packaging Audit", "Graphic Instructions", "Waste Minimization", "Corporate Style"],
    duration: "2 years",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Packaging Materials", value: "-18% Saved" },
      { label: "Global Distributors", value: "70+ Aligned" },
      { label: "Corporate Trust Rating", value: "95% Excellent" }
    ],
    challenge: "Tynor is a global giant in rehabilitation braces but carried a highly clinical and clinical-only brand visual structure that was hard for consumers to navigate on standard retail pharmacy shelves.",
    strategy: "We audited and consolidated their extensive product catalog. We designed a clear, friendly, color-coded visual packaging system combined with highly intuitive instruction cards that turned complex brace fits into instant visual steps.",
    outcomes: [
      "Redesigned the global packaging system across 150+ product lines into a modern, unified collection.",
      "Transformed complicated rehabilitation manual steps into clean graphic illustration guides.",
      "Reduced retail cardboard and shipping paper box material waste by 18% via precise box re-sizing.",
      "Created polished marketing collateral used in high-end medical trade conventions."
    ]
  },
  {
    id: "entero",
    title: "Entero Healthcare",
    subtitle: "Healthcare Logistics & Distribution",
    description: "Pioneering unified corporate identity systems and digital service interfaces for a premier supply-chain aggregator.",
    category: "D2C Scaling",
    tags: ["B2B Interfaces", "Logistics Branding", "Stakeholder Assets", "Interactive Portals"],
    duration: "14 months",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Procurement Duration", value: "-40% Faster" },
      { label: "Partner Sat Score", value: "94% Excellent" },
      { label: "Aggregate Network", value: "10K+ Pharmacies" }
    ],
    challenge: "Entero's massive B2B medical supply network needed a consistent visual system and intuitive interface design. Busy pharmacists found the standard procurement lists slow and confusing to navigate.",
    strategy: "We designed a robust corporate identity and cleaned up the digital ordering screen system. We established a simplified typographic hierarchy and high-speed search paths, enabling instantaneous medicine orders.",
    outcomes: [
      "Designed a powerful corporate brand logo expressing stability, precision, and healthcare connectivity.",
      "Optimized UX layouts for the B2B pharmacy dashboard, making purchase cycles 40% faster.",
      "Developed professional investor books, brochures, and stakeholder presentation suites.",
      "Lowered checkout support inquiries through structured order-tracking details."
    ]
  },
  {
    id: "streetball",
    title: "Streetball League",
    subtitle: "India's Premiere 3v3 Basketball Tournament",
    description: "Crafting raw street culture narratives, high-energy apparel designs, and visual content pipelines for sports networks.",
    category: "Social Campaigns",
    tags: ["Apparel Design", "Sports Media", "Cinematic Videos", "Ecosystem Styling"],
    duration: "12 months",
    year: "2025",
    imageUrl: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Combined Impressions", value: "20M+ Gained" },
      { label: "Apparel Collection", value: "100% Sold Out" },
      { label: "Tournament Reach", value: "8 Cities National" }
    ],
    challenge: "The Streetball League wanted to build a national 3v3 basketball league that was as much about fashion and hip-hop as sport. They needed an energetic brand identity that felt raw, industrial, and urban.",
    strategy: "We built a gritty, high-contrast, black-and-orange brand ecosystem. We designed custom court decals, scoreboard systems, and limited-edition player jerseys utilizing heavy display fonts and graphic street typography.",
    outcomes: [
      "Designed the full spatial branding on courts and stadium installations nationwide.",
      "Created ultra-premium, high-demand player streetwear jerseys that sold out in under 48 hours.",
      "Produced raw, cinematic tournament highlight reels generating millions of voluntary organic impressions.",
      "Designed custom fan schedules and tournament tracking apps used by thousands of active fans."
    ]
  },
  {
    id: "mytrident",
    title: "MyTrident",
    subtitle: "Millions of organic impressions.",
    description: "Crafting viral social narratives and editorial photoshoots to position household textiles as lifestyle art.",
    category: "Social Campaigns",
    tags: ["Organic Growth", "Social Playbooks", "Content Direction", "Influencer Gifting"],
    duration: "3 years",
    year: "2024",
    imageUrl: "https://images.unsplash.com/photo-1540518614846-7eded433c457?auto=format&fit=crop&q=80&w=1200",
    isSharkTank: false,
    metrics: [
      { label: "Organic Reach", value: "25M+ Viewers" },
      { label: "Gifting Share Rate", value: "90% Voluntary" },
      { label: "Instagram Growth", value: "+120K Followers" }
    ],
    challenge: "Trident's retail consumer brand, MyTrident, wanted to transform household textiles—towels and bed linens—from plain utility items into high-desire aesthetic assets that a younger, design-conscious demographic would actively celebrate online.",
    strategy: "We built an organic content machine centered around cinematic rhythm and visual satisfaction. Instead of highlighting threads and specs, we shot cinematic, sun-drenched editorial vignettes featuring bed linens as light-catching architectural forms.",
    outcomes: [
      "Reached 25 million organic impressions on key social reels with zero paid amplification.",
      "Designed a bespoke modular linen organizer gifted to premium lifestyle creators, triggering a 90% organic story share rate.",
      "Established a standard social grid structure and video playbook that has been fully adopted by internal agency teams.",
      "Positioned home styling as an active wellness ritual, driving a massive increase in direct-to-consumer search volume."
    ]
  }
];

interface WorkPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function WorkPage({ onBackToHome, onNavigateToSection }: WorkPageProps) {
  const [selectedCategory, setSelectedCategory] = useState("All Solutions");
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = ENRICHED_PROJECTS.filter((proj) => {
    if (selectedCategory === "All Solutions") return true;
    if (selectedCategory === "Shark Tank Featured") return proj.isSharkTank;
    return proj.category === selectedCategory;
  });

  if (selectedProject) {
    return (
      <WorkDetailPage
        project={selectedProject}
        onBack={() => setSelectedProject(null)}
      />
    );
  }

  return (
    <div id="work-page-view" className="bg-black text-white min-h-screen pt-28 pb-16 overflow-hidden relative">
      {/* Subtle background tech grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Back */}
        <div className="mb-16 md:mb-20 text-left">
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            whileHover={{ x: -4 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white mb-8 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              SELECTED CASE STUDIES
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none">
              SELECTED WORKS
            </h1>
            <p className="font-sans text-neutral-400 text-lg sm:text-xl font-light mt-6 max-w-2xl leading-relaxed">
              We do not believe in massive, diluted portfolios. We build deep, high-impact collaborations with market-disrupting brands who refuse to be ignored.
            </p>
          </motion.div>
        </div>

        {/* Filter Bar */}
        <div className="border-t border-b border-neutral-900 py-6 mb-16 flex flex-wrap gap-2.5 justify-start relative">
          {WORK_CATEGORIES.map((cat, i) => (
            <motion.button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05, duration: 0.5, ease: "easeOut" }}
              whileTap={{ scale: 0.96 }}
              className={`font-mono text-[10px] tracking-widest uppercase py-2 px-4 rounded-xl border relative transition-colors duration-300 focus:outline-none cursor-pointer overflow-hidden ${
                selectedCategory === cat
                  ? "border-[#FF4500] text-black font-semibold z-10"
                  : "border-neutral-900 text-neutral-400 hover:text-white hover:border-neutral-800 z-10"
              }`}
            >
              {selectedCategory === cat && (
                <motion.span
                  layoutId="activeWorkCategoryTab"
                  className="absolute inset-0 bg-[#FF4500] -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Dynamic Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 mb-24 text-left">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                layout="position"
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ 
                  opacity: { duration: 0.4 },
                  layout: { type: "spring", stiffness: 350, damping: 35 },
                  default: { duration: 0.6, delay: index * 0.08, ease: [0.16, 1, 0.3, 1] }
                }}
                onClick={() => setSelectedProject(project)}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Image Canvas with high-end shadow & scaling zoom */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-950 hover:border-neutral-800 mb-6 relative transition-colors duration-500">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 scale-100 group-hover:scale-103 transition-all duration-700 ease-out"
                    />
                    
                    {/* Shark Tank Tag Overlay if applicable */}
                    {project.isSharkTank && (
                      <div className="absolute top-4 left-4 bg-black/90 backdrop-blur-md border border-neutral-800 px-3 py-1.5 rounded-lg flex items-center gap-1.5 shadow-lg select-none">
                        <Award className="w-3.5 h-3.5 text-[#FF4500]" />
                        <span className="font-mono text-[9px] tracking-widest text-white uppercase font-bold">
                          SHARK TANK
                        </span>
                      </div>
                    )}

                    {/* Image Hover overlay showing formula */}
                    <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center p-6 text-center">
                      <div className="space-y-4 max-w-sm">
                        <span className="font-mono text-[9px] text-[#FF4500] tracking-[0.3em] uppercase block">
                          CLARITY DISCOVERED
                        </span>
                        <p className="font-display text-xl font-bold text-white leading-snug">
                          "{project.subtitle}"
                        </p>
                        <span className="font-mono text-[10px] text-neutral-400 tracking-wider block">
                          CLICK TO UNPACK CASE STUDY
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Meta Text details */}
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase font-bold">
                      {project.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-600">
                      ESTD: {project.year}
                    </span>
                  </div>

                  <h3 className="font-display text-3xl font-bold tracking-wide text-white group-hover:text-[#FF4500] transition-colors leading-tight mb-3">
                    {project.title}
                  </h3>
                  
                  <p className="font-sans text-neutral-400 text-sm font-light leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                {/* Lead Metric highlights directly on cards */}
                <div className="border-t border-neutral-900/60 pt-4 mt-auto flex justify-between items-center">
                  <div className="flex gap-4">
                    {project.metrics.slice(0, 2).map((met, idx) => (
                      <div key={idx} className="flex flex-col">
                        <span className="font-mono text-[8px] text-neutral-600 uppercase tracking-widest">
                          {met.label}
                        </span>
                        <span className="font-mono text-xs text-white font-medium">
                          {met.value}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="w-9 h-9 rounded-full border border-neutral-900 group-hover:border-[#FF4500]/50 flex items-center justify-center text-neutral-600 group-hover:text-[#FF4500] transition-all duration-300">
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Diagnostic Audit Banner CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="bg-neutral-950 border border-neutral-900 rounded-3xl p-8 sm:p-16 text-center max-w-4xl mx-auto mb-12 relative overflow-hidden select-none"
        >
          <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-[#FF4500]/5 rounded-full blur-2xl pointer-events-none" />
          <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-wide mb-4 text-white">
            READY TO AUDIT YOUR BRAND'S GRAVITY?
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed max-w-md mx-auto mb-8">
            Let's dissect your market positioning. We build high-fidelity custom design audits to isolate your absolute category difference.
          </p>
          <motion.button
            onClick={() => onNavigateToSection("contact")}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-[0.2em] font-bold uppercase py-4 px-8 rounded-xl transition-all duration-300 cursor-pointer inline-flex items-center gap-2 shadow-lg"
          >
            REQUEST A DIAGNOSTIC AUDIT
            <ArrowRight className="w-4 h-4" />
          </motion.button>
        </motion.div>

      </div>

      {/* Case Study Full spotlight drawer panel */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex justify-end"
          >
            {/* Spotlight Drawer */}
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
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 bg-black/85 hover:bg-neutral-900 text-white p-2.5 rounded-full border border-neutral-800 transition-colors focus:outline-none cursor-pointer"
                aria-label="Close Spotlight"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="my-auto pt-6">
                
                {/* Meta Header */}
                <div className="mb-8 mt-4">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="font-mono text-[10px] text-[#FF4500] tracking-widest uppercase bg-[#FF4500]/10 py-1 px-2.5 rounded-lg border border-[#FF4500]/10">
                      {selectedProject.category}
                    </span>
                    <span className="font-mono text-[10px] text-neutral-600 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> ESTD {selectedProject.year}
                    </span>
                  </div>
                  <h3 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2 leading-none">
                    {selectedProject.title}
                  </h3>
                  <p className="font-sans text-neutral-400 text-base font-light italic">
                    "{selectedProject.subtitle}"
                  </p>
                </div>

                {/* Cover Image */}
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-800 mb-8">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Key Metrics Section */}
                <div className="grid grid-cols-3 gap-4 bg-neutral-900/30 border border-neutral-900 rounded-2xl p-5 mb-8 text-center sm:text-left">
                  {selectedProject.metrics.map((met, index) => (
                    <div key={index} className="flex flex-col justify-center">
                      <span className="font-mono text-[9px] text-neutral-500 tracking-widest uppercase mb-1">
                        {met.label}
                      </span>
                      <span className="font-display text-lg sm:text-xl font-bold text-white">
                        {met.value}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Challenge & Strategy */}
                <div className="space-y-6 mb-8">
                  <div>
                    <h4 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-2">
                      01 / THE CHALLENGE
                    </h4>
                    <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
                      {selectedProject.challenge}
                    </p>
                  </div>

                  <div>
                    <h4 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-2">
                      02 / THE ANTR POSITIONING FORMULA
                    </h4>
                    <p className="font-sans text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                      {selectedProject.strategy}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div className="border-t border-neutral-900 pt-6 mb-8 text-left">
                  <h4 className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-4">
                    03 / STRATEGIC OUTCOMES
                  </h4>
                  <ul className="space-y-3">
                    {selectedProject.outcomes.map((out, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-4 h-4 text-[#FF4500] flex-shrink-0 mt-0.5" />
                        <span className="font-sans text-neutral-400 text-sm font-light leading-relaxed">
                          {out}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[9px] tracking-widest bg-neutral-900 border border-neutral-800 py-1.5 px-3 rounded-lg text-white font-medium uppercase"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>

              </div>

              {/* Spotlight footer */}
              <div className="border-t border-neutral-900 pt-8 mt-12 flex justify-between items-center">
                <span className="font-mono text-[9px] text-neutral-600 tracking-wider">
                  CASE_STUDY_REF_#0{selectedProject.id.toUpperCase()}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="bg-white hover:bg-neutral-200 text-black font-mono text-xs tracking-widest uppercase py-3 px-6 rounded-xl transition-all duration-300 focus:outline-none cursor-pointer"
                >
                  CLOSE CASE STUDY
                </button>
              </div>

            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
