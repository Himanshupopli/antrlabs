import { useEffect, useState } from "react";
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
    subtitle: "Redefining Ethnic Fashion in Himachal",
    description: "Translating traditional regional motifs into modular premium retail spaces and brand identity systems.",
    category: "Identity & Packaging",
    tags: ["Brand Identity", "Sustainable Packaging", "Retail Experience", "Shark Tank India"],
    duration: "6 months",
    year: "2025",
    imageUrl: "https://lh3.googleusercontent.com/d/1Z6Bby9atL2dd5EMknCD9NUj-Xw717KFH",
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
    subtitle: "Changing the Conversation.",
    description: "A men's wellness brand rooted in Indian tradition while built for modern performance - from 0 to 1 to scale.",
    category: "D2C Scaling",
    tags: ["Brand Strategy", "Brand Identity", "Packaging Design", "Growth & Community"],
    duration: "3 years",
    year: "2022 - 2025",
    imageUrl: "https://lh3.googleusercontent.com/d/1Yj9zJjScXBEIZTdzsvmvGC-sc0VGo14C",
    isSharkTank: true,
    metrics: [
      { label: "Organic Audience", value: "3K → 25K Followers" },
      { label: "Content Reach", value: "Multiple 1M+ Reels" },
      { label: "Pitch Highlight", value: "Shark Tank India" }
    ],
    challenge: "Sukham was created to solve a problem that nobody was talking about. Men's wellness had become transactional, focusing purely on ingredients and performance claims, while completely overlooking the fact that men are emotionally underserved, especially regarding their health.",
    strategy: "Instead of speaking about vulnerability in transactional terms, we rooted the brand in something men were already proud to identify with: Indian Sanskriti, Ayurveda, masculine legacy, and the Magician archetype. This strategic pivot shifted Sukham from information to desire, using earthy brown and gold tones and humor-driven content.",
    outcomes: [
      "Designed a premium, rooted identity using earthy brown and gold tones that inspired confidence and trust.",
      "Re-engineered packaging to make products feel like high-end aspirational gifts rather than discreet medicines.",
      "Built one of India's fastest-growing founder-led men's wellness communities, scaling organically to 25K followers.",
      "Evolved the brand's visual language during expansion into a cleaner, clinical white aesthetic to maintain trust at scale."
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
    imageUrl: "https://lh3.googleusercontent.com/d/1sf_8WMzQFvgV7gPu5JDDRHX8c5k1bhPT",
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
    subtitle: "Baked with Character.",
    description: "A premium café & patisserie identity balancing traditional craftsmanship, European warmth, and a highly scalable brand foundation.",
    category: "Identity & Packaging",
    tags: ["Brand Naming", "Brand Strategy", "Brand Foundation", "Visual Language"],
    duration: "4 months",
    year: "2026",
    imageUrl: "https://lh3.googleusercontent.com/d/14M4u9-nmrqOmqcwbtkEQdLwsZfAo9UYQ",
    isSharkTank: false,
    metrics: [
      { label: "Creative Focus", value: "Naming & Strategy" },
      { label: "Core Inspiration", value: "Copenhagen & Landour" },
      { label: "Retail Design", value: "Scalable Foundation" }
    ],
    challenge: "The objective was to create a premium café & patisserie that felt more like a destination than a traditional bakery. Inspired by the quiet elegance of European café culture, the brand needed to balance craftsmanship, warmth while appealing to a modern, design-conscious audience.",
    strategy: "The identity drew inspiration from the timeless charm of Copenhagen and Landour, combining refined aesthetics with an obsession for detail. Every decision - from the name to the visual identity - was guided by the ambition of building a globally scalable hospitality brand rooted in memorable experiences rather than just great products.",
    outcomes: [
      "Designed a complete brand strategy and naming exploration evaluating over eleven custom creative directions.",
      "Established a highly distinctive visual language in a crowded cafe category to deliver a brand that feels like an institution.",
      "Integrated a bespoke wordmark inspired by traditional European bakehouses with an ownable kettle graphic asset.",
      "Delivered a timeless, scalable design language optimized for retail signage, packaging, and digital applications."
    ]
  },
//   {
//     id: "bisleri",
//     title: "Bisleri",
//     subtitle: "Art in Motion",
//     description: "An intimate, high-end cultural experience design celebrating artist Muzaffar Ali, blending traditional romance with digital legacy.",
//     category: "Social Campaigns", // Keeping category within the allowed union "Social Campaigns" | "D2C Scaling" | "Identity & Packaging" to prevent type errors
//     tags: ["Spatial Design", "Creative Direction", "Event Production", "Guest Journey"],
//     duration: "3 months",
//     year: "2022",
//     imageUrl: "https://lh3.googleusercontent.com/d/1vU9ueXtQQZYdkNTASbUmGTsuoCgzGwt5",
//     isSharkTank: false,
//     metrics: [
//       { label: "Guest Satisfaction", value: "Unparalleled" },
//       { label: "Location", value: "Bikaner House" },
//       { label: "Cultural Outreach", value: "NFT Integration" }
//     ],
//     challenge: "Design an intimate cultural evening celebrating the work of filmmaker, painter and poet Muzaffar Ali, in partnership with Bisleri. The experience needed to feel less like a corporate event and more like stepping into the artist's own world.",
//     strategy: "Every design decision centred around understated romance and artistic expression. Inspired by Moroccan courtyards and intimate mehfils, the space featured layered rugs, candlelight, takhat-style amphitheatre seating and warm ambient lighting, creating an atmosphere that encouraged conversation, reflection and art.",
//     outcomes: [
//       "Transformed a live painting by Muzaffar Ali into an NFT, intersecting traditional art with digital ownership.",
//       "Engineered the entire guest journey spanning lighting, run-of-show, customized food experiences, and atmospheric scenography.",
//       "Constructed a takhat-style amphitheater that quietly framed the evening without competing for attention.",
//       "Produced a complete on-ground hosting flow that felt deeply personal, immersive, and unforgettable."
//     ]
//   },
  {
    id: "zinoha",
    title: "Zinoha",
    subtitle: "Conscious Wellness Real Estate",
    description: "A cohesive launch ecosystem spanning identity, communication, film and experience design for a mindful real estate collective.",
    category: "Identity & Packaging",
    tags: ["Conscious Living", "Brand Identity", "Event Experience", "Brand Film"],
    duration: "4 months",
    year: "2024",
    imageUrl: "https://lh3.googleusercontent.com/d/1bX9LcggZq7x9a0wbDa-F8p5ceBkuZNku",
    isSharkTank: false,
    metrics: [
      { label: "Distinct Position", value: "Established" },
      { label: "Design Ecosystem", value: "Unified" },
      { label: "Proposition", value: "Simplified" }
    ],
    challenge: "Zinoha was envisioned as a community built around wellness, farming and habitat - bringing together conscious living, nature and long-term value into one cohesive ecosystem.",
    strategy: "Rather than marketing like conventional luxury developments (focusing purely on locations/amenities), we positioned Zinoha as a wellness movement. We structured the brand's storyline around Work • Farm • Habitat, introducing the lifestyle before the location through high-touch experiential design.",
    outcomes: [
      "Designed a refined 'Z' logo symbolizing transformation, connection, and intentional living.",
      "Structured a three-phase launch campaign (Lifestyle & Experience, The Location, The Commune) avoiding industry clichés.",
      "Authored an immersive brand film and curated a physical launch experience that resonated deeply with the target community.",
      "Developed an organic social media system that simplified the complex investment proposition into an inspiring story."
    ]
  },
  {
    id: "fupro",
    title: "Fupro",
    subtitle: "Redefining Movement.",
    description: "An empathetic yet innovative prosthetic brand identity celebrating human possibility, featured on Shark Tank India Season 4.",
    category: "Identity & Packaging", // Keeping category within acceptable unions: "Social Campaigns" | "D2C Scaling" | "Identity & Packaging"
    tags: ["Brand Strategy", "Logo Design", "Visual Identity", "Empathy Design"],
    duration: "4 months",
    year: "2018",
    imageUrl: "https://lh3.googleusercontent.com/d/1kU5lp4S23wk07CHtv89l2HaqhKRxSlrf",
    isSharkTank: true,
    metrics: [
      { label: "Design Approach", value: "Human-Centric" },
      { label: "Platform Debut", value: "Shark Tank S4" },
      { label: "Core Concept", value: "Progress & Motion" }
    ],
    challenge: "Instead of beginning with aesthetics, the identity started with a simple question: How do you visually represent movement without making the prosthetic the hero? The objective was to create a mark that celebrated human potential rather than limitation.",
    strategy: "Every concept explored a different relationship between people, technology and motion, balancing empathy with innovation. The chosen identity simplifies the idea of movement into a single, ownable symbol — a flowing form creating the letter F while subtly referencing the natural movement of a prosthetic foot in motion.",
    outcomes: [
      "Conducted multiple creative explorations bridging biomechanics, traditional letterforms, and human potential.",
      "Engineered the final 'F' brand mark embodying natural kinetics and human-first motion values.",
      "Developed an extensive visual system spanning clean corporate stationery, physical touchpoints, and digital structures.",
      "Laid the brand foundation that successfully scaled to a national stage and was featured on Shark Tank India Season 4."
    ]
  },
  {
    id: "tynor",
    title: "Tynor",
    subtitle: "Beyond Recovery.",
    description: "Shifting perception from injury recovery to everyday wellness through structured lifestyle campaigns, branded film storytelling, and redesigned packaging architectures.",
    category: "Identity & Packaging",
    tags: ["Creative Direction", "Branded Film", "Packaging Systems", "Information Architecture"],
    duration: "2018 - 2025",
    year: "2018 - 2025",
    imageUrl: "https://lh3.googleusercontent.com/d/1hWwwSZ4O48N8reZCCtH49b0-OhltyAFM",
    isSharkTank: false,
    metrics: [
      { label: "Branded Film Reach", value: "Disney+ Hotstar" },
      { label: "Lifestyle Pillars", value: "4 Distinct Concepts" },
      { label: "Insole Redesign", value: "High Retail Standout" }
    ],
    challenge: "Tynor wanted to transition from a traditional rehabilitation medical brand to an everyday lifestyle wellness standard. The challenge lay in making orthopaedic and pain-relief products feel like aspirational elements of daily health, while maintaining trustworthy medical credibility.",
    strategy: "We executed across three key initiatives: first, organizing communication around daily moments (Walk, Work, Sleep, Live) using bright illustrations; second, creating an authentic visual world for the branded short film 'Noor'; third, re-engineering their Insole Gel packaging to simplify a massive volume of medical information into clear, approachable layouts.",
    outcomes: [
      "Created a unified identity for the Lifestyle Range, making dozens of products feel like one coherent everyday ecosystem.",
      "Art-directed and styled 'Noor', which was subsequently acquired by Disney+ Hotstar and published on YouTube.",
      "Redesigned the Insole Gel Packaging with high-contrast gradients and refined typography to command shelf visibility.",
      "Built a robust, repeatable information system containing anatomical diagrams, benefit matrices, and clear instructions."
    ]
  },
  {
    id: "entero",
    title: "Entero Healthcare",
    subtitle: "Clarity in Care.",
    description: "Developing a scalable, high-clarity packaging architecture and custom iconography system for Carent pediatric thermometers.",
    category: "Identity & Packaging",
    tags: ["Packaging Design", "Iconography", "Content Direction", "Systemic Design"],
    duration: "2020",
    year: "2020",
    imageUrl: "https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54",
    isSharkTank: false,
    metrics: [
      { label: "Design Approach", value: "Scalable Architecture" },
      { label: "Visual System", value: "Custom Iconography" },
      { label: "Target Market", value: "Pediatric & Family" }
    ],
    challenge: "Healthcare packaging has very little time to communicate. Parents standing in a pharmacy need to quickly understand the product, its key features, and the differences between product variants. The design therefore had to balance shelf visibility, information clarity, and corporate brand consistency.",
    strategy: "The project began by developing a flexible packaging architecture rather than isolated individual box designs. Every element — from colour hierarchy and typography to feature placement and iconography — was designed as part of one cohesive system that could scale cleanly across the complete Carent thermometer range.",
    outcomes: [
      "Pioneered a scalable, unified family language that accommodates multiple variant packaging layouts seamlessly.",
      "Designed the complete custom icon system used to instantly communicate technical medical features to parents.",
      "Structured dense regulatory content and technical specifications into clean, highly scannable info hierarchies.",
      "Established distinct colour palettes to differentiate variants while maintaining a strong, recognizable brand footprint."
    ]
  },
  {
    id: "streetball",
    title: "Streetball League",
    subtitle: "Playing with Identity.",
    description: "Designing energetic identities, old-school jerseys, and dynamic social templates for city-based basketball franchise teams.",
    category: "Identity & Packaging",
    tags: ["Team Branding", "Jersey Design", "Event Collaterals", "Social Communication"],
    duration: "2019 - 2021",
    year: "2019 - 2021",
    imageUrl: "https://lh3.googleusercontent.com/d/1fs5jXy3B4JvEfu18blZ1WhnO1p1wfa__",
    isSharkTank: false,
    metrics: [
      { label: "Franchise Teams", value: "2 Complete Brands" },
      { label: "Jersey Aesthetic", value: "Nostalgic Old-School" },
      { label: "Communication", value: "Live Event Systems" }
    ],
    challenge: "Streetball League wanted to bring creators, athletes, and celebrities together in a national 3v3 format. We were commissioned to build the identities for two major franchise teams, creating distinctive brands that could live seamlessly across physical jerseys, event venues, and real-time social channels.",
    strategy: "For Shooting Stars, we engineered a high-velocity visual mark with bold typography, paired with old-school, nostalgic high-contrast jerseys. For Delhi Inc., we built an aggressive, monochrome typographic system inspired by urban raw street culture, fully scaling it to real-time fixture and matchday announcements.",
    outcomes: [
      "Crafted 'Shooting Stars' identity balancing athletic power with lifestyle entertainment vibes.",
      "Designed retro NBA-inspired 'Shooting Stars' uniforms with bold color blocks and clean structural lines.",
      "Developed 'Delhi Inc.' typography, capturing the raw, industrial, fast-paced spirit of urban streetball.",
      "Created highly modular social announcement boards, match scorecards, player rosters, and event flyers."
    ]
  },
  {
    id: "mytrident",
    title: "MyTrident",
    subtitle: "Comfort Meets Culture.",
    description: "Modernizing a legacy home furnishings brand through a lifestyle-first digital content strategy, campaign-led storytelling, and creator collaborations.",
    category: "Social Campaigns",
    tags: ["Creative Direction", "Social Media", "Campaign Development", "Art Direction"],
    duration: "2021 - 2022",
    year: "2021 - 2022",
    imageUrl: "https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp",
    isSharkTank: false,
    metrics: [
      { label: "Reach & Storytelling", value: "Lifestyle-First" },
      { label: "Flagship Campaign", value: "Sajao myTrident Se" },
      { label: "Brand Presence", value: "Unified Language" }
    ],
    challenge: "As a legacy home furnishings brand, the challenge was to remain relevant to a new generation of consumers while preserving the trust and familiarity the brand had built over decades. The communication needed to evolve from catalogue-style product promotion into content that people genuinely wanted to engage with.",
    strategy: "We developed a scalable digital content ecosystem that balanced commerce with storytelling. From lifestyle photography and illustrations to trend-led content, festive campaigns, product launches, and creator collaborations, every touchpoint was designed to make myTrident feel more contemporary, relatable, and culturally relevant.",
    outcomes: [
      "Contributed to myTrident's digital transformation by evolving its social media into a lifestyle-first brand experience.",
      "Built a scalable content system across campaigns, products, and cultural moments.",
      "Helped establish a consistent visual language across one of India's largest home furnishing brands.",
      "Successfully supported the digital rollout of the 'Sajao myTrident Se' campaign starring Masaba Gupta and Neena Gupta."
    ]
  }
];

interface WorkPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
  onProjectActiveChange?: (active: boolean) => void;
  initialProjectId?: string;
  onProjectSlugChange?: (projectId: string | null) => void;
}

export default function WorkPage({
  onBackToHome,
  onProjectActiveChange,
  initialProjectId,
  onProjectSlugChange
}: WorkPageProps) {
  const [selectedProject, setSelectedProject] = useState<ProjectDetail | null>(null);

  const filteredProjects = ENRICHED_PROJECTS;

  useEffect(() => {
    const project = initialProjectId
      ? ENRICHED_PROJECTS.find((item) => item.id === initialProjectId) || null
      : null;

    setSelectedProject(project);
    if (onProjectActiveChange) {
      onProjectActiveChange(!!project);
    }
  }, [initialProjectId, onProjectActiveChange]);

  const handleSelectProject = (project: ProjectDetail | null) => {
    setSelectedProject(project);
    if (onProjectActiveChange) {
      onProjectActiveChange(!!project);
    }
    if (onProjectSlugChange) {
      onProjectSlugChange(project?.id || null);
    }
  };

  if (selectedProject) {
    return (
      <WorkDetailPage
        project={selectedProject}
        onBack={() => handleSelectProject(null)}
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
                onClick={() => handleSelectProject(project)}
                id={`work-${project.id}`}
                className="group cursor-pointer flex flex-col justify-between"
              >
                <div>
                  {/* Aspect Ratio Image Canvas with high-end shadow & scaling zoom */}
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-900 hover:border-neutral-800 mb-6 relative transition-colors duration-500 flex items-center justify-center p-2">
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 scale-100 group-hover:scale-103 transition-all duration-700 ease-out"
                    />
                    
                    {/* Shark Tank Tag Overlay if applicable */}
                    {project.isSharkTank && (
                      <div className="absolute top-4 left-4 z-10 select-none pointer-events-none">
                        <img
                          src="https://res.cloudinary.com/dqdvr35aj/image/upload/v1783330266/shark_tank_logo_sticker_l1svt1.png"
                          alt="Shark Tank India"
                          className="w-14 sm:w-16 h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.8)]"
                          referrerPolicy="no-referrer"
                        />
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
                <div className="aspect-[16/9] rounded-2xl overflow-hidden bg-neutral-950 border border-neutral-800 mb-8 flex items-center justify-center p-2">
                  <img
                    src={selectedProject.imageUrl}
                    alt={selectedProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-contain"
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
