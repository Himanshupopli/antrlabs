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
    subtitle: "Changing the Conversation.",
    description: "Brand Strategy, Identity, Packaging, Website, Content, Growth, Product & Community",
    duration: "3 years",
    imageUrl: "https://lh3.googleusercontent.com/d/1Yj9zJjScXBEIZTdzsvmvGC-sc0VGo14C",
    isSharkTank: true,
    extraDetails: [
      "Pioneered a respectful, premium visual language for men's healthcare, root-positioning in Indian Sanskriti, Ayurveda, and the Magician archetype.",
      "Redefined packaging, websites, and content strategies, growing the organic following from 3K to 25K with multiple posts exceeding 1M+ views.",
      "Re-architected brand strategy and identity to transition Sukham from 0 to 1 and scale seamlessly over three years.",
      "Created a highly clinical and trusted wellness system, culminating in a successful appearance on Shark Tank India."
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
    subtitle: "Baked with Character.",
    description: "Brand Naming, Strategy & Foundation",
    duration: "4 months",
    imageUrl: "https://lh3.googleusercontent.com/d/14M4u9-nmrqOmqcwbtkEQdLwsZfAo9UYQ",
    isSharkTank: false,
    extraDetails: [
      "Designed a complete brand strategy and naming exploration evaluating over eleven custom creative directions.",
      "Crafted a scalable, globally-minded brand foundation inspired by European bakehouses and café culture.",
      "Integrated a bespoke wordmark featuring a seamlessly embedded kettle into the custom typography.",
      "Delivered a timeless design language optimized for retail signage, packaging, and digital touchpoints."
    ]
  },
//   {
//     id: "bisleri",
//     title: "Bisleri",
//     subtitle: "Art in Motion",
//     description: "Creative Direction & Experiential Spatial Design for an Intimate Cultural Evening",
//     duration: "3 months",
//     imageUrl: "https://lh3.googleusercontent.com/d/1vU9ueXtQQZYdkNTASbUmGTsuoCgzGwt5",
//     isSharkTank: false,
//     extraDetails: [
//       "Designed an intimate cultural evening celebrating the work of filmmaker, painter and poet Muzaffar Ali.",
//       "Crafted space inspired by Moroccan courtyards and intimate mehfils with layered rugs and candlelight.",
//       "Integrated traditional art and digital ownership by transforming a live painting by Muzaffar Ali into an NFT.",
//       "Directed complete experience from spatial design, lighting, and guest flow to hosting at Bikaner House."
//     ]
//   },
  {
    id: "zinoha",
    title: "Zinoha",
    subtitle: "Conscious Wellness Real Estate",
    description: "Brand Identity, Strategy, Film & Launch Experience",
    duration: "4 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1bX9LcggZq7x9a0wbDa-F8p5ceBkuZNku",
    isSharkTank: false,
    extraDetails: [
      "Positioned the brand around Work • Farm • Habitat, creating a community where wellness, regenerative farming and mindful living coexist.",
      "Designed a refined, balance-inspired 'Z' logo embodying transformation, connection, and the continuous journey of life.",
      "Created a narrative-driven launch campaign structured in three strategic phases (Lifestyle, Location, Commune).",
      "Unified the brand across print, digital touchpoints, brand film, social media, and physical launch event experiences."
    ]
  },
  {
    id: "fupro",
    title: "Fupro",
    subtitle: "Redefining Movement.",
    description: "Brand Strategy, Logo Design & Visual Identity for Affordable Prosthetic Solutions",
    duration: "4 months",
    imageUrl: "https://lh3.googleusercontent.com/d/1kU5lp4S23wk07CHtv89l2HaqhKRxSlrf",
    isSharkTank: true,
    extraDetails: [
      "Pioneered a clean, modern brand mark celebrating human potential rather than physical limitation.",
      "Conducted extensive design explorations balancing abstract biomechanics, movement, and human empathy.",
      "Delivered a flexible symbol representing 'F' and the natural fluid movement of a prosthetic foot in motion.",
      "Designed a comprehensive corporate stationery system, digital interfaces, and packaging structures."
    ]
  },
  {
    id: "tynor",
    title: "Tynor",
    subtitle: "Beyond Recovery.",
    description: "Creative Direction, Campaign Concept, Art Direction, Branded Film, Packaging Design & Information Architecture",
    duration: "2018 - 2025",
    imageUrl: "https://lh3.googleusercontent.com/d/1hWwwSZ4O48N8reZCCtH49b0-OhltyAFM",
    isSharkTank: false,
    extraDetails: [
      "Case Study 01: Pioneered a lifestyle-focused range shifting Tynor's perception from recovery to everyday wellness.",
      "Case Study 02: Art-directed and styled 'Noor', a branded short film acquired by Disney+ Hotstar and streaming publicly.",
      "Case Study 03: Re-engineered Insole Gel range packaging to balance bold retail shelf standout with clinical authority.",
      "Organized dense information hierarchy including product benefits, anatomical diagrams, and technical instructions."
    ]
  },
  {
    id: "entero",
    title: "Entero Healthcare",
    subtitle: "Clarity in Care.",
    description: "Packaging Design, Iconography & Content Direction for Carent Thermometers",
    duration: "2020",
    imageUrl: "https://lh3.googleusercontent.com/d/1ORpGhzPHnNy-rtyYSBolkLVYZ4ByLl54",
    isSharkTank: false,
    extraDetails: [
      "Pioneered a flexible, pediatric packaging architecture rather than individual box designs.",
      "Engineered clean typographic hierarchy to balance high shelf visibility with absolute informational clarity.",
      "Developed a custom medical iconography system designed to communicate core features in seconds.",
      "Optimized back-of-pack information layouts to accommodate complex, mandatory regulatory content."
    ]
  },
  {
    id: "streetball",
    title: "Streetball League",
    subtitle: "Playing with Identity.",
    description: "Team Branding, Jersey Design, Event Collaterals & Social Communication",
    duration: "2019 - 2021",
    imageUrl: "https://lh3.googleusercontent.com/d/1fs5jXy3B4JvEfu18blZ1WhnO1p1wfa__",
    isSharkTank: false,
    extraDetails: [
      "Shooting Stars: Built a distinctive franchise sports identity balancing athletic performance, aspiration, and entertainment.",
      "Shooting Stars: Designed nostalgic, old-school NBA-inspired team uniforms with bold lines and custom lettering.",
      "Delhi Inc.: Co-created a bold, raw-energy typographic identity with Meghana Kaur for an urban fanbase.",
      "Delhi Inc.: Standardized real-time match templates, player reveals, and post-match social graphics."
    ]
  },
  {
    id: "mytrident",
    title: "MyTrident",
    subtitle: "Comfort Meets Culture.",
    description: "Creative Direction, Social Media Management, Campaign Development, Content Production & Influencer Marketing",
    duration: "2021 - 2022",
    imageUrl: "https://lh3.googleusercontent.com/d/1SoDmhNxjYSFEUGALaZAmSlsJ64zkdsWp",
    isSharkTank: false,
    extraDetails: [
      "Evolved MyTrident's social presence into a lifestyle-first content system balancing commerce with emotional storytelling.",
      "Rolled out the flagship 'Sajao myTrident Se' campaign featuring Masaba Gupta and Neena Gupta with platform-first adaptations.",
      "Maintained a high-volume social pipeline spanning product launches, festive guides, illustrations, and creator collaborations.",
      "Formulated a consistent visual language to modernize the legacy brand for younger, design-conscious demographics."
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
