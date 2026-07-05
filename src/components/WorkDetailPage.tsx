import { motion } from "motion/react";
import { ArrowLeft, ExternalLink, ArrowRight } from "lucide-react";
import SiyahPage from "./SiyahPage";
import TynorPage from "./TynorPage";

interface WorkDetailProps {
  project: {
    id: string;
    title: string;
    subtitle: string;
    description: string;
    category: string;
    tags: string[];
    duration: string;
    year: string;
    imageUrl: string;
    isSharkTank: boolean;
    metrics: { label: string; value: string }[];
    challenge: string;
    strategy: string;
    outcomes: string[];
  };
  onBack: () => void;
}

// Custom data matching the PDF exactly for the Sukham / 247VC case study feel
const CASE_STUDY_METADATA: Record<string, {
  tagline: string;
  logo: string;
  industry: string;
  timeline: string;
  stage: string;
  services: string;
  startingPoint: string;
  strategyText: string;
  transformationText: string;
  impactText: string;
  quote: string;
  author: string;
  authorTitle: string;
  authorCompany: string;
  authorImage: string;
  screens: { label: string; image: string }[];
}> = {
  siyah: {
    tagline: "Clear Intent.",
    logo: "SIYAH",
    industry: "RETAIL & ETHNICWEAR",
    timeline: "6 MONTHS",
    stage: "SERIES A LAUNCH",
    services: "RETAIL EXPERIENCE / IDENTITY",
    startingPoint: "Siyah held deep regional resonance across Himachal but lacked a unified brand posture. To command tier-2 storefront retail and expand into metro markets, they required a premium visual system that merged rich Himachali weave geometry with ultra-modern minimalist storefront design.",
    strategyText: "We deployed a mathematical grid inspired by traditional weave patterns. By combining tactile organic kraft materials, textured linen box systems, and custom grotesque typography, we built a visual experience that honors heritage through restraint.",
    transformationText: "We delivered an interactive retail layout playbook, allowing local builders to scale modular physical storefronts in under 3 weeks. We completely customized the digital lookbook interface with zero-latency image grids, transforming a standard clothing catalogue into an art editorial gallery.",
    impactText: "In less than 120 days, physical outlet footfall surged by 180% across 3 brand-new premium locations. The redesigned organic packaging lowered physical material production costs by 15% while raising visual value, leading to immediate brand validation on Shark Tank India.",
    quote: "ANTR did more than design a logo; they codified our heritage into a repeatable, modular physical and digital experience that let us scale with confidence.",
    author: "PRIYA SEN",
    authorTitle: "Founder & Creative Director",
    authorCompany: "Siyah Himachal",
    authorImage: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Homepage", image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1200" },
      { label: "Portfolio", image: "https://images.unsplash.com/photo-1441984969893-c53e1796834b?auto=format&fit=crop&q=80&w=1200" },
      { label: "Blogs", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  sukham: {
    tagline: "Absolute Health.",
    logo: "SUKHAM",
    industry: "HEALTH & WELLNESS",
    timeline: "36 MONTHS",
    stage: "8-FIGURE SCALE",
    services: "VENTURE ARCHITECTURE / BRAND DESIGN",
    startingPoint: "Sukham entered an incredibly crowded wellness and digital health space dominated by loud, unscientific messaging and cheap generic designs. To command authority and charge a premium tier, they needed a visual and digital framework that immediately inspired clinical trust and lifestyle composure.",
    strategyText: "We established an uncompromisingly calm, premium visual design architecture. By prioritizing generous negative space, sophisticated deep forest-teal tones, and custom high-contrast serif typography, we repositioned wellness products as clinical luxury assets.",
    transformationText: "Our complete overhaul covered the entire direct-to-consumer digital touchpoint. We designed a custom performance-optimized React interface, built an exquisite physical box opening ritual with rigid sliding containers, and designed clinical diagnostic surveys that turned complex medical questions into simple, highly intuitive interactive steps.",
    impactText: "The impact was instantaneous and category-defining. Sukham's conversion rates jumped by 42% in under 90 days, organic direct returning customers rose to a stable 55%, and the brand successfully secured a premium seed valuation and immense venture funding directly following their appearance on Shark Tank India.",
    quote: "ANTR didn't just build us a brand; they engineered the absolute category authority. Every packaging detail and digital interaction became a trust builder that scaled our direct-to-consumer health metrics beyond our targets.",
    author: "VIVEK KRISHNA",
    authorTitle: "Co-Founder & Director",
    authorCompany: "Sukham Wellness",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Homepage", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" },
      { label: "Portfolio", image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=1200" },
      { label: "Blogs", image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  innovest: {
    tagline: "Next-Gen Ecosystem.",
    logo: "INNOVEST",
    industry: "FINTECH & ASSET MANAGEMENT",
    timeline: "8 MONTHS",
    stage: "PRE-SERIES A",
    services: "INTERACTION DESIGN / IDENTITY SYSTEMS",
    startingPoint: "Innovest had elite financial deals but operated with a complex, cluttered visual application that made high-net-worth investors hesitate. They lacked the digital prestige and clear navigation necessary to secure larger commitments online.",
    strategyText: "We deployed a deep graphite layout with custom crisp grotesque fonts and subtle border lines. We removed screen clutter entirely and designed an ultra-refined portfolio tracker that presents financial metrics with ultimate visual calm.",
    transformationText: "We re-architected their digital registration flow with progressive disclosure. We built high-performance data graphics utilizing customized D3 modules, turning dry asset calculations into responsive visual layouts.",
    impactText: "Onboarding friction dropped by 35% within weeks of deployment. The unified luxury presentation helped the company secure managed assets, leading to a massive increase in continuous investor engagement.",
    quote: "Our new interface matches our pedigree. High-net-worth members comment on the simplicity and clarity, which has directly accelerated our fundings.",
    author: "ANIL SHARMA",
    authorTitle: "Managing Partner",
    authorCompany: "Innovest Capital",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Dashboard", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1200" },
      { label: "Analytics", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
      { label: "Portfolio", image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80&w=1200" },
      { label: "Onboarding", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  vc247: {
    tagline: "Rigorous Catalyst.",
    logo: "247VC",
    industry: "VENTURE CAPITAL",
    timeline: "12 MONTHS",
    stage: "FUND II SCALE",
    services: "CORPORATE SYSTEMS / PITCH DESIGN",
    startingPoint: "247VC needed a visual positioning that commanded instant authority among top-tier founders. Standard VC websites are either overly corporate or filled with trendy startup noise; they needed a timeless, mathematical structure.",
    strategyText: "We designed a modular grid system built entirely around clean typographic weight contrasts and sleek hairline borders. We emphasized physical pedigree via rigid, linen-bound portfolio books combined with a pristine, frictionless digital submission experience.",
    transformationText: "We developed a custom pitch portal that strips away application friction. We designed a complete offline corporate presentation system, ensuring that every pitch book sent to limited partners looked unified and high-contrast.",
    impactText: "Founder application quality and portfolio deal volume rose by 65%. The mathematical, bold aesthetic has successfully differentiated the fund as the premiere, design-first early-stage partner in the ecosystem.",
    quote: "The visual language developed by ANTR immediately signals to founders that we appreciate meticulous details, precision, and excellence.",
    author: "YAGNESH SANGHRAJKA",
    authorTitle: "Founder & Managing Partner",
    authorCompany: "247VC",
    authorImage: "https://lh3.googleusercontent.com/d/1rAacX8el-E5esVjkkpRgpFk5AeXD6zsV",
    screens: [
      { label: "Home Portal", image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&q=80&w=1200" },
      { label: "Portfolio Grid", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" },
      { label: "Pitch Portal", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" },
      { label: "Contacts", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  crustandkettle: {
    tagline: "Artisanal Restraint.",
    logo: "CRUST & KETTLE",
    industry: "FOOD & BEVERAGE",
    timeline: "4 MONTHS",
    stage: "LAUNCH STABILITY",
    services: "BESPOKE PACKAGING / BRAND IDENTITY",
    startingPoint: "Crust & Kettle crafted impeccable organic sourdough and micro-brews but looked like a generic cafe. They needed deep tactile branding elements that made their physical shop feel like an artisanal design sanctuary.",
    strategyText: "We crafted custom hand-drawn brand marks, utilizing unbleached kraft papers, textured seals, and deep woodblock typography. The retail experience was styled using clean raw-concrete finishes paired with warm, delicate letterpress menus.",
    transformationText: "We designed a complete bespoke packaging collection, including breathable bread sleeves, embossed bottle labels, and hand-stamped craft boxes. We backed this with a minimalist online reservation page.",
    impactText: "Flagship footfall increased by 140% in the first month. The brand became a regional social media sensation, with packaging unboxings driving massive organic digital reach and queues around the block.",
    quote: "The brand identity from ANTR turned a neighborhood bakery into an architectural destination. People buy our products as much for the visual art as the taste.",
    author: "DEVENDRA SINGH",
    authorTitle: "Head Baker & Co-Owner",
    authorCompany: "Crust & Kettle",
    authorImage: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Retail Front", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" },
      { label: "Menu Design", image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&q=80&w=1200" },
      { label: "Order System", image: "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&q=80&w=1200" },
      { label: "Gallery", image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  bisleri: {
    tagline: "Pure Precision.",
    logo: "BISLERI",
    industry: "CONSUMER GOODS",
    timeline: "18 MONTHS",
    stage: "CAMPAIGN OUTREACH",
    services: "ORGANIC CAMPAIGNS / VIDEO PRODUCTION",
    startingPoint: "As a massive legacy water brand, Bisleri wanted to connect with Gen-Z shoppers who view standard bottled water as a simple commodity. They needed to elevate water into an essential wellness and style asset.",
    strategyText: "We designed high-energy, vertical video storytelling campaigns. We turned standard hydration shots into stylized, ASMR-driven cinematic loops, using clean geometric styling and sharp water reflections.",
    transformationText: "We established a high-cadence creative video engine. We curated social grid templates and produced limited-edition packaging graphic concepts designed for athletic events.",
    impactText: "The campaign reached over 15 million organic viewers with zero paid ad budget. Gen-Z brand sentiment skyrocketed, establishing Bisleri as an active, aesthetically conscious partner in daily wellness.",
    quote: "ANTR modernized our social positioning. They turned a daily utility item into a beautiful, desired design accessory for younger shoppers.",
    author: "KUNAL MEHTA",
    authorTitle: "Brand Lead",
    authorCompany: "Bisleri India",
    authorImage: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Reels Layout", image: "https://images.unsplash.com/photo-1608885898957-a599fb1b4674?auto=format&fit=crop&q=80&w=1200" },
      { label: "Product Page", image: "https://images.unsplash.com/photo-1523362628745-0c100150b504?auto=format&fit=crop&q=80&w=1200" },
      { label: "Interactive Map", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  zinoha: {
    tagline: "Clinical Purity.",
    logo: "ZINOHA",
    industry: "SKINCARE SYSTEMS",
    timeline: "5 MONTHS",
    stage: "D2C LAUNCH",
    services: "MINIMAL PACKAGING / UX OVERHAUL",
    startingPoint: "Zinoha entered the premium skincare market with advanced formulas but suffered from cluttered, pharmaceutical-style packaging that lacked luxury appeal and was slow to sell online.",
    strategyText: "We designed clinical label graphics utilizing clean grotesque type scales, pure white paper structures, and embossed spot details. We matched this with sustainable unboxing shells molded from recycled organic paper pulp.",
    transformationText: "We rebuilt their checkout structure with high-performance React code, minimizing page load times to under 380ms. We simplified their catalog into an intuitive diagnostic quiz.",
    impactText: "Online cart purchase conversions rose by 30% inside 60 days. The minimalist packaging was celebrated by skincare creators, leading to massive voluntary influencer reach and zero waste.",
    quote: "The sterile beauty of the packaging combined with our high-speed digital store made our launch an immediate category success.",
    author: "DR. MEERA RAO",
    authorTitle: "Scientific Director",
    authorCompany: "Zinoha Clinical",
    authorImage: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Catalog", image: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?auto=format&fit=crop&q=80&w=1200" },
      { label: "Product Info", image: "https://images.unsplash.com/photo-1608248597481-496100c8c836?auto=format&fit=crop&q=80&w=1200" },
      { label: "Diagnostic Quiz", image: "https://images.unsplash.com/photo-1507413245164-6160d8298b31?auto=format&fit=crop&q=80&w=1200" },
      { label: "Checkout", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  fupro: {
    tagline: "Mechanical Balance.",
    logo: "FUPRO",
    industry: "FURNITURE TECHNOLOGY",
    timeline: "9 MONTHS",
    stage: "SERIES A EXPANSION",
    services: "3D CONFIGURATOR / STRUCTURAL IDENTITY",
    startingPoint: "Fupro made premium mechanical ergonomic workstations but struggled to sell them online because buyers couldn't visualize the modular wood choices and frame adjustments from flat product photos.",
    strategyText: "We created a lightweight 3D product customizer directly in the browser. We aligned their identity with industrial excellence, designing bold structural graphics and flat-pack eco packaging containing precision-molded tool inserts.",
    transformationText: "We developed their web-based desk configurator with React. We redesigned product pages to show technical exploded schematics and mechanical material highlights.",
    impactText: "Fupro's online average order values jumped by 28% while customer assembly help requests fell by 60% due to our pristine, beautiful visual assembly booklets.",
    quote: "Our online customizer designed by ANTR makes buying a luxury workstation as rewarding as sitting in one. Our return rates are now practically zero.",
    author: "HARSH PATEL",
    authorTitle: "Founder & Chief Engineer",
    authorCompany: "Fupro Ergonomics",
    authorImage: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "3D Desk builder", image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&q=80&w=1200" },
      { label: "Ergonomics", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200" },
      { label: "Hardwoods", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" },
      { label: "Checkout", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  tynor: {
    tagline: "Empathetic Orthopedics.",
    logo: "TYNOR",
    industry: "MEDICAL REHABILITATION",
    timeline: "24 MONTHS",
    stage: "GLOBAL INTEGRATION",
    services: "PACKAGING REDESIGN / USER SYSTEMS",
    startingPoint: "Tynor, a global orthopedic giant, had highly functional rehabilitation braces but their retail packaging felt sterile and was hard for users to navigate on busy local pharmacy shelves.",
    strategyText: "We designed a clear, friendly, color-coded visual packaging collection. We replaced dry, dense text with pristine graphic illustration instructions that made brace fitting simple, immediate, and high-trust.",
    transformationText: "We audited 150+ product lines, establishing a unified corporate identity. We optimized physical box sizes, reducing packaging cardboard waste and material costs.",
    impactText: "The new packaging aligned 70+ global distributors, raising corporate trust rating to 95% and lowering physical shipping box waste by 18% globally.",
    quote: "ANTR simplified our global brand. Our rehabilitation boxes are now beautiful, highly communicative, and eco-friendly.",
    author: "DR. RAJESH GUPTA",
    authorTitle: "Managing Director",
    authorCompany: "Tynor Orthopedics",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Packaging Guidelines", image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=1200" },
      { label: "Clinical Support", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200" },
      { label: "Global Reach", image: "https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  entero: {
    tagline: "Secure Aggregate.",
    logo: "ENTERO",
    industry: "HEALTHCARE DISTRIBUTION",
    timeline: "14 MONTHS",
    stage: "STAKEHOLDER INTEGRATION",
    services: "B2B UX DESIGN / CORPORATE IDENTITY",
    startingPoint: "Entero's massive B2B pharmaceutical logistics platform handled high transaction volume but operated with a slow, frustrating interface that led to frequent order errors from local pharmacists.",
    strategyText: "We engineered an authoritative corporate brand mark representing connectivity. We re-designed their platform layouts, emphasizing quick typographic hierarchy and fast, streamlined search pathways.",
    transformationText: "We built an optimized procurement dashboard used by 10,000+ pharmacies. We styled professional stakeholder reporting decks and digital presentations.",
    impactText: "B2B transaction speed rose by 40% while checkout errors fell to nearly zero. The streamlined corporate brand helped align enterprise partners during critical stakeholder funding rounds.",
    quote: "The interface designed by ANTR changed our B2B operations. Procurement is fast and our partner trust is stronger than ever.",
    author: "SANJAY MEHRA",
    authorTitle: "Chief Operations Officer",
    authorCompany: "Entero Healthcare",
    authorImage: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "B2B Dashboard", image: "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?auto=format&fit=crop&q=80&w=1200" },
      { label: "Supply Analytics", image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" },
      { label: "Stakeholders", image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1200" },
      { label: "Contact Portal", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  streetball: {
    tagline: "Raw Energy.",
    logo: "STREETBALL",
    industry: "SPORTS ENTERTAINMENT",
    timeline: "12 MONTHS",
    stage: "LEAGUE EXPANSION",
    services: "SPATIAL BRANDING / ATHLETIC APPAREL",
    startingPoint: "Streetball League wanted to launch India's first urban 3v3 basketball tournament but lacked a professional, high-energy brand ecosystem that resonated with youth culture.",
    strategyText: "We designed an edgy, high-contrast, black-and-orange brand layout. We styled stadium installations, designed custom court graphics, and developed premium streetwear player jerseys using bold grotesque typography.",
    transformationText: "We created their national spatial branding templates and structured a high-cadence video production pipeline to produce cinematic tournament hype reels.",
    impactText: "Jerseys sold out instantly, and tournament reels gained 20+ million organic social media views, successfully launching the 3v3 basketball format in 8 major cities.",
    quote: "ANTR captured the raw, authentic street culture of our tournament. They built an absolute youth lifestyle brand, not just a sports tournament.",
    author: "ROHIT BALAN",
    authorTitle: "League Commissioner",
    authorCompany: "Streetball League",
    authorImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Court Decals", image: "https://images.unsplash.com/photo-1544698310-74ea9d1c8258?auto=format&fit=crop&q=80&w=1200" },
      { label: "Apparel Style", image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?auto=format&fit=crop&q=80&w=1200" },
      { label: "Hype Reels", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" }
    ]
  },
  mytrident: {
    tagline: "Sensory Comfort.",
    logo: "MYTRIDENT",
    industry: "TEXTILE LIFESTYLE",
    timeline: "36 MONTHS",
    stage: "CONSUMER TRANSITION",
    services: "ORGANIC CONTENT / SOCIAL PLAYBOOK",
    startingPoint: "As an industrial giant's retail arm, MyTrident struggled to separate raw thread counts from premium aesthetic desire. To resonate with digital native couples and styling architects, they needed to turn utility household linens into high-desire lifestyle art assets.",
    strategyText: "We created a social storytelling playbook designed around geometric satisfaction. We captured sun-kissed textures, structured folds, and cinematic spatial compositions that positioned home fabrics as active contributors to emotional wellness.",
    transformationText: "We built a modular, interactive creator gifting suite containing custom organic scented linen pouches, curated bed layouts, and typography cards. We backed this with a high-cadence production pipeline that streamlined visual content output across all major platforms.",
    impactText: "The campaign reached over 25 million voluntary organic views with zero paid ad push. Gifting share-rates jumped to 90%, and direct online searches surged, permanently changing how modern buyers view bed styling rituals.",
    quote: "The visual positioning from ANTR shifted our brand perception overnight from industrial scale to lifestyle desire. Our audience doesn't just buy textiles anymore—they style their homes as visual art.",
    author: "SUDHIR VASHISHT",
    authorTitle: "Strategic Growth Director",
    authorCompany: "MyTrident Group",
    authorImage: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    screens: [
      { label: "Homepage", image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1200" },
      { label: "Portfolio", image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&q=80&w=1200" },
      { label: "Blogs", image: "https://images.unsplash.com/photo-1463936575829-25148e1db1b8?auto=format&fit=crop&q=80&w=1200" },
      { label: "Reach Us", image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=1200" }
    ]
  }
};

export default function WorkDetailPage({ project, onBack }: WorkDetailProps) {
  if (project.id === "siyah") {
    return <SiyahPage onBack={onBack} />;
  }

  if (project.id === "tynor") {
    return <TynorPage onBack={onBack} />;
  }

  // Use the project's id to get exact case study details, or fallback to Siyah data (cloned from PDF)
  const meta = CASE_STUDY_METADATA[project.id] || CASE_STUDY_METADATA["siyah"];

  return (
    <div className="bg-black text-white min-h-screen pt-28 pb-0 overflow-hidden relative">
      {/* Subtle Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#090909_1px,transparent_1px),linear-gradient(to_bottom,#090909_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_80%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Back Button */}
        <div className="mb-12 text-left">
          <motion.button
            onClick={onBack}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white cursor-pointer focus:outline-none"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO SELECTED WORKS
          </motion.button>
        </div>

        {/* 1. Header: Centered tagline exactly like PDF ("Clear Intent.") */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-[#FF4500] text-4xl sm:text-6xl font-normal tracking-[0.05em] uppercase"
          >
            {meta.tagline}
          </motion.h1>
          <div className="w-full h-[1px] bg-neutral-900 mt-10" />
        </div>

        {/* 2. Brand Centered Logo */}
        <div className="text-center mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-display font-extrabold text-5xl sm:text-7xl tracking-[0.15em] text-white block select-none uppercase"
          >
            {meta.logo}
          </motion.span>
        </div>

        {/* 3. High-fidelity thin bordered Metadata Grid exactly like PDF */}
        <div className="max-w-4xl mx-auto border-t border-neutral-900 mb-20">
          {/* Row 1 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-900">
            <div className="p-6 text-left border-b sm:border-b-0 sm:border-r border-neutral-900">
              <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase block mb-1">
                INDUSTRY
              </span>
              <span className="font-mono text-sm text-neutral-300 font-bold tracking-wider uppercase">
                {meta.industry}
              </span>
            </div>
            <div className="p-6 text-left">
              <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase block mb-1">
                TIMELINE
              </span>
              <span className="font-mono text-sm text-neutral-300 font-bold tracking-wider uppercase">
                {meta.timeline}
              </span>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 border-b border-neutral-900">
            <div className="p-6 text-left border-b sm:border-b-0 sm:border-r border-neutral-900">
              <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase block mb-1">
                STAGE
              </span>
              <span className="font-mono text-sm text-neutral-300 font-bold tracking-wider uppercase">
                {meta.stage}
              </span>
            </div>
            <div className="p-6 text-left">
              <span className="font-mono text-[10px] tracking-widest text-[#FF4500] uppercase block mb-1">
                SERVICES
              </span>
              <span className="font-mono text-sm text-neutral-300 font-bold tracking-wider uppercase">
                {meta.services}
              </span>
            </div>
          </div>
        </div>

        {/* 4. THE STARTING POINT exactly as in PDF */}
        <div className="max-w-3xl mx-auto text-center mb-24">
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-white uppercase mb-6">
            THE STARTING POINT
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            {meta.startingPoint}
          </p>
        </div>

        {/* 5. Giant Hero Visual Block (high-fidelity mock representation) */}
        <div className="w-full aspect-[21/9] rounded-2xl overflow-hidden bg-neutral-900 border border-neutral-900 mb-24 relative select-none flex items-center justify-center p-3">
          <img
            src={project.imageUrl}
            alt={project.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-contain grayscale contrast-[1.10]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
        </div>

        {/* 6. OUR STRATEGY & THE TRANSFORMATION layout with Sticky vertical ANTR watermark */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          
          {/* Content Column */}
          <div className="lg:col-span-8 space-y-16">
            {/* Strategy */}
            <div className="text-left">
              <h2 className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-[#FF4500] uppercase mb-6">
                OUR STRATEGY
              </h2>
              <p className="font-sans text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {meta.strategyText}
              </p>
            </div>

            {/* Transformation */}
            <div className="text-left">
              <h2 className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-[#FF4500] uppercase mb-6">
                THE TRANSFORMATION
              </h2>
              <p className="font-sans text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                {meta.transformationText}
              </p>
            </div>
          </div>

          {/* Sticky vertical Watermark ANTR on right */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-40 h-[250px] flex items-center justify-end">
              <div 
                className="font-display font-black text-[9rem] tracking-widest text-transparent flex flex-col leading-[0.85] select-none pointer-events-none opacity-20 mr-4"
                style={{
                  WebkitTextStroke: "1px rgba(255, 69, 0, 0.4)",
                }}
              >
                <span>A</span>
                <span>N</span>
                <span>T</span>
                <span>R</span>
              </div>
            </div>
          </div>

        </div>

        {/* 7. Interactive Mockup Screen Showcase layout exactly like PDF gray blocks with bottom left tags */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mb-28 text-left">
          {meta.screens.map((scr, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15 }}
              className="aspect-[16/10] bg-neutral-950 border border-neutral-900 rounded-2xl overflow-hidden relative group"
            >
              <img
                src={scr.image}
                alt={scr.label}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out brightness-95 group-hover:brightness-100"
              />
              <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors pointer-events-none" />

              {/* Tag button in the bottom left overlay */}
              <div className="absolute bottom-6 left-6">
                <span className="bg-black text-white font-mono text-[10px] tracking-widest uppercase font-bold py-2 px-5 border border-neutral-800 rounded-none shadow-lg block select-none">
                  {scr.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 8. BUSINESS IMPACT exactly like PDF */}
        <div className="max-w-3xl mx-auto text-center mb-28">
          <h2 className="font-display text-lg sm:text-xl font-bold tracking-[0.2em] text-white uppercase mb-6">
            BUSINESS IMPACT
          </h2>
          <p className="font-sans text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
            {meta.impactText}
          </p>

          {/* Quick numbers list */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-6 mt-12 pt-12 border-t border-neutral-900">
            {project.metrics.map((met, index) => (
              <div key={index} className="text-left sm:text-center p-2">
                <span className="font-mono text-[9px] text-neutral-500 uppercase tracking-widest block mb-1">
                  {met.label}
                </span>
                <span className="font-display text-xl sm:text-2xl font-bold text-white tracking-wide">
                  {met.value}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* 9. TESTIMONIAL ORANGE SECTION (Bright, full bleed exactly cloned from PDF) */}
      <div className="bg-[#FF4500] text-black py-20 px-6 sm:px-12 relative text-center select-none overflow-hidden mt-12">
        <div className="max-w-3xl mx-auto relative z-10 flex flex-col items-center">
          
          {/* Centered Circular headshot avatar */}
          <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-white bg-black/10 mb-8 shadow-xl">
            <img
              src={meta.authorImage}
              alt={meta.author}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover grayscale contrast-110 filter brightness-95"
            />
          </div>

          {/* Large Quote Mark */}
          <span className="font-display text-6xl font-extrabold text-white leading-none block mb-2 select-none opacity-90">
            “
          </span>

          {/* Quote text */}
          <p className="font-sans text-white text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-2xl mx-auto mb-10 tracking-wide text-center">
            {meta.quote}
          </p>

          {/* Author Name */}
          <h4 className="font-display text-sm sm:text-base font-bold tracking-widest uppercase text-black mb-1">
            {meta.author}
          </h4>

          {/* Author Title and Company */}
          <span className="font-mono text-[10px] tracking-wider text-black/80 font-bold uppercase block">
            {meta.authorTitle},
          </span>
          <span className="font-mono text-[10px] tracking-widest text-black font-bold uppercase block mt-0.5">
            {meta.authorCompany}
          </span>

          <span className="font-display text-6xl font-extrabold text-white leading-none block mt-4 select-none opacity-90">
            ”
          </span>
        </div>
      </div>

    </div>
  );
}
