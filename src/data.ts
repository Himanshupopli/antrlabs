import { Project, Service, Article, ClientLogo } from "./types";

export const PROJECTS: Project[] = [
  {
    id: "siyah",
    title: "Siyah",
    subtitle: "Himachal's 1st Women's Ethnicwear Chain",
    description: "Brand Identity, Packaging & Retail Experience",
    duration: "6 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1Z6Bby9atL2dd5EMknCD9NUj-Xw717KFH",
    isSharkTank: true,
    extraDetails: [
      "Designed a complete visual grammar incorporating traditional Himachali motifs in modern clothing retail.",
      "Engineered premium earth-safe packaging made from sustainable, locally sourced fibers.",
      "Developed a custom modular retail layout system for rapid physical expansion in tier-2 cities.",
      "Established brand guidelines, tone of voice, and digital launch strategies."
    ]
  },
  {
    id: "sukham",
    title: "Sukham",
    subtitle: "8-Fig Cr D2C Brand",
    description: "End-to-end Brand Building",
    duration: "3 years",
    imageUrl: "https://lh3.googleusercontent.com/d/1Yj9zJjScXBEIZTdzsvmvGC-sc0VGo14C",
    isSharkTank: true,
    extraDetails: [
      "Pioneered a bold minimalist design vocabulary for high-end digital native health and wellness.",
      "Designed complete digital and physical assets, product containers, shipping boxes, and unboxing rituals.",
      "Optimized online user interfaces resulting in a 42% increase in average conversion rates.",
      "Positioned the brand on Shark Tank India, generating widespread acclaim for packaging and identity."
    ]
  },
  {
    id: "innovest",
    title: "Innovest",
    subtitle: "Next-Gen Investment Ecosystem",
    description: "Brand Trust, Strategy & Digital Interfaces",
    duration: "8 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1-xxTlsNNuIV4Ywnagldr6KdabvgnzqMX",
    isSharkTank: false,
    extraDetails: [
      "Crafted a premium high-trust visual language tailored to elite high-net-worth investment networks.",
      "Engineered full-funnel digital onboarding portals minimizing customer registration friction by 35%.",
      "Designed institutional-grade pitch books and presentation systems.",
      "Developed continuous identity systems and security graphics communicating absolute transparency."
    ]
  },
  {
    id: "vc247",
    title: "247VC",
    subtitle: "Early-Stage Venture Catalyst",
    description: "Strategic Positioning, Visual Identity & Investor Pitch Portals",
    duration: "12 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1sf_8WMzQFvgV7gPu5JDDRHX8c5k1bhPT",
    isSharkTank: false,
    extraDetails: [
      "Deconstructed venture-building patterns to build a modular, grid-based identity system.",
      "Curated custom layout architectures for early-stage founder reports and investment portfolios.",
      "Built low-latency digital assets and web portals for seamless deal flow monitoring.",
      "Designed custom physical assets and corporate gifting kits establishing unmatched visual presence."
    ]
  },
  {
    id: "crustandkettle",
    title: "Crust & Kettle",
    subtitle: "Artisanal Sourdough & Specialty Brewery",
    description: "Bespoke Packaging Design, Typography & Storefront Identity",
    duration: "4 months",
    imageUrl: "https://lh3.googleusercontent.com/d/14M4u9-nmrqOmqcwbtkEQdLwsZfAo9UYQ",
    isSharkTank: false,
    extraDetails: [
      "Designed custom hand-lettered typographic marks for premium product packaging.",
      "Crafted complete tactile unboxing experiences featuring recycled fiber bags and textured craft boxes.",
      "Provided art direction and spatial layout design for their flagship physical micro-bakery.",
      "Developed an interactive digital reservation portal increasing table pre-booking by 45%."
    ]
  },
  {
    id: "bisleri",
    title: "Bisleri",
    subtitle: "Reimagining Hydration for Gen-Z",
    description: "Organic Video Storytelling & Social Positioning Campaigns",
    duration: "18 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1vU9ueXtQQZYdkNTASbUmGTsuoCgzGwt5",
    isSharkTank: false,
    extraDetails: [
      "Engineered an organic vertical video strategy generating over 15 million views across platforms.",
      "Positioned daily hydration as an essential self-care and lifestyle luxury aesthetic.",
      "Authored creative guidelines and viral reels templates adopted by multiple regional brand teams.",
      "Designed limited-edition, sleek-bottle container graphics for exclusive high-end athletic events."
    ]
  },
  {
    id: "zinoha",
    title: "Zinoha",
    subtitle: "Clean Clinical Skincare System",
    description: "Minimalist Packaging Design & D2C Storefront Overhaul",
    duration: "5 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1bX9LcggZq7x9a0wbDa-F8p5ceBkuZNku",
    isSharkTank: false,
    extraDetails: [
      "Formulated clear, sterile label visual designs and container aesthetics to project medical authority.",
      "Rebuilt high-speed D2C checkout steps, bringing cart conversion times down by 30%.",
      "Created beautiful unboxing systems including custom protective paper-pulp shells.",
      "Curated editorial art direction showing diverse, real skin textures with raw authenticity."
    ]
  },
  {
    id: "fupro",
    title: "Fupro",
    subtitle: "Premium Ergonomic Workstations",
    description: "Interactive Digital Experience & Spatial Layout Tools",
    duration: "9 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1kU5lp4S23wk07CHtv89l2HaqhKRxSlrf",
    isSharkTank: false,
    extraDetails: [
      "Architected a custom 3D web-based desk configurator that increased order values by 28%.",
      "Designed a complete brand identity emphasizing industrial structural precision.",
      "Rebuilt digital product pages with beautiful technical schematics and material cross-sections.",
      "Designed flat-pack eco-friendly transit packaging with custom tool inserts."
    ]
  },
  {
    id: "tynor",
    title: "Tynor",
    subtitle: "Orthopedic Rehabilitation Standards",
    description: "Product Packaging Redesign & Clinical Instruction Manuals",
    duration: "2 years",
    imageUrl: "https://lh3.googleusercontent.com/d/1hWwwSZ4O48N8reZCCtH49b0-OhltyAFM",
    isSharkTank: false,
    extraDetails: [
      "Overhauled standard retail packaging into color-coded, high-trust consumer boxes.",
      "Translated complex orthopedic use steps into intuitive, highly legible graphic instruction systems.",
      "Reduced retail material packaging waste by 18% via structural size optimization.",
      "Designed clinical presentation assets for global medical trade exhibits."
    ]
  },
  {
    id: "entero",
    title: "Entero Healthcare",
    subtitle: "Healthcare Logistics & Distribution",
    description: "Unified Corporate Identity & B2B Procurement Dashboards",
    duration: "14 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54",
    isSharkTank: false,
    extraDetails: [
      "Designed an authoritative corporate brand mark symbolizing secure medical distribution nodes.",
      "Streamlined UX layouts for the partner inventory portal used by thousands of daily pharmacies.",
      "Crafted full corporate reporting styles and annual stakeholder presentation decks.",
      "Optimized B2B interaction pathways, cutting transaction booking times by 40%."
    ]
  },
  {
    id: "streetball",
    title: "Streetball League",
    subtitle: "India's Premiere 3v3 Basketball Tournament",
    description: "Athletic Apparel Design & High-Energy Content Campaigns",
    duration: "12 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1fs5jXy3B4JvEfu18blZ1WhnO1p1wfa__",
    isSharkTank: false,
    extraDetails: [
      "Designed the complete tournament visual ecosystem, including court flooring and scoreboard layouts.",
      "Created edgy, high-contrast streetwear jerseys and premium player apparel collections.",
      "Produced raw, high-intensity cinematic hype reels driving millions of voluntary online views.",
      "Built custom tournament tracking schedules and digital fan experience layouts."
    ]
  },
  {
    id: "mytrident",
    title: "MyTrident",
    subtitle: "Millions of organic impressions.",
    description: "Social Media Growth",
    duration: "3 years",
    imageUrl: "https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp",
    isSharkTank: false,
    extraDetails: [
      "Crafted full-funnel organic video campaigns reaching 25M+ combined unique viewers.",
      "Developed high-concept editorial photoshoots positioning household textiles as essential lifestyle art.",
      "Designed an interactive influencer gifting package that saw a 90% voluntary share rate.",
      "Created highly aesthetic and structured social grids, setting new benchmarks in home textile marketing."
    ]
  }
];

export const SERVICES: Service[] = [
  {
    id: "positioning-archetype",
    title: "Brand Positioning & Archetype",
    description: "Identify the gap in the market, define what your brand stands for, who it serves, and build a distinct personality that sets you apart."
  },
  {
    id: "identity-systems",
    title: "Brand Identity Systems",
    description: "A strong identity begins with clarity. Through brand workshops, we translate strategy into a cohesive identity system across logos, typography, colour, visual language and comprehensive brand guidelines."
  },
  {
    id: "storytelling-narrative",
    title: "Storytelling & Narrative",
    description: "Transform your vision into a compelling story that shapes perception, builds trust and creates emotional connection."
  },
  {
    id: "content-production",
    title: "Content Strategy & Production",
    description: "Create content that reflects your brand, communicates consistently and drives meaningful engagement and indirect sales."
  },
  {
    id: "gtm-consulting",
    title: "Go-to-Market Strategic Consulting",
    description: "Build a launch and growth roadmap with the right positioning, channels, messaging and execution strategy."
  },
  {
    id: "growth-distribution",
    title: "Growth & Distribution",
    description: "Turn visibility into business growth through performance marketing, partnerships and scalable distribution."
  },
  {
    id: "brand-technology",
    title: "Brand Technology",
    description: "Design and build digital experiences through websites, AI, automation and technology that support long-term growth."
  },
  {
    id: "community-experiences",
    title: "Community & Experiences",
    description: "Create communities and memorable experiences that deepen relationships and build lasting brand affinity."
  }
];

export const ARTICLES: Article[] = [
  {
    id: "name",
    title: "What’s in a Name?",
    summary: "How a brand’s phonetic structure and semantic weight drive consumer perception before they even see a logo.",
    date: "June 14, 2026",
    readingTime: "4 min read",
    content: "Naming is the acoustic threshold of your brand. A great name works on three levels: phonetic velocity, visual balance, and semantic depth. When we designed ANTR, we wanted something that sounded immediate, felt structural, and meant difference. We analyze why single-syllable or high-contrast names stick in memory longer and how to test phonetics across global languages."
  },
  {
    id: "marketing",
    title: "Branding vs Marketing",
    summary: "The critical difference between building a magnet (Branding) and pushing a message (Marketing).",
    date: "May 28, 2026",
    readingTime: "5 min read",
    content: "Marketing buys attention; branding commands it. If your marketing is failing, it's often a branding problem in disguise. We explore the balance of long-term emotional loyalty versus short-term transactional loops, demonstrating why leading companies invest 60% of their focus on storytelling, equity, and cohesive design, rather than endless discount ads."
  },
  {
    id: "trap",
    title: "The Branding Trap",
    summary: "Why replicating successful aesthetics fails, and how to discover your brand's unique authentic difference.",
    date: "April 11, 2026",
    readingTime: "6 min read",
    content: "The trap is imitation. Seeing a competitor scale and copying their color palette or font pairing is a shortcut to invisibility. We deconstruct the 'branding trap' and detail our proprietary diagnostic workshops that strip away industry cliches to uncover raw, authentic, and sometimes uncomfortable differences that define actual category leaders."
  },
  {
    id: "trust",
    title: "The Trust Crisis in D2C",
    summary: "As ad costs skyrocket and social feeds saturate, raw authenticity and visual precision are the only survival tools.",
    date: "March 05, 2026",
    readingTime: "7 min read",
    content: "D2C is no longer about arbitrage; it is about absolute trust. With customers skeptical of drop-shipped templates, visual precision and tactical materials are your greatest proof of quality. We analyze how high-quality packaging, meticulous digital typography, and radical transparency are redefining consumer devotion in a post-cookie landscape."
  }
];

export const CLIENT_LOGOS: ClientLogo[] = [
  { id: "logo-siyah", name: "Siyah" },
  { id: "logo-sukham", name: "Sukham" },
  { id: "logo-innovest", name: "Innovest" },
  { id: "logo-247vc", name: "247VC" },
  { id: "logo-crustandkettle", name: "Crust & Kettle" },
  { id: "logo-bisleri", name: "Bisleri" },
  { id: "logo-zinoha", name: "Zinoha" },
  { id: "logo-fupro", name: "Fupro" },
  { id: "logo-tynor", name: "Tynor" },
  { id: "logo-entero", name: "Entero Healthcare" },
  { id: "logo-streetball", name: "Streetball League" },
  { id: "logo-mytrident", name: "MyTrident" }
];
