import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ArrowLeft, 
  Linkedin, 
  Check, 
  AlertCircle 
} from "lucide-react";

interface TeamMember {
  role: string;
  name: string;
  image: string;
  bullets: string[];
}

interface Advisor {
  name: string;
  role: string;
  company: string;
  image: string;
  linkedinUrl: string;
}

const TEAM_MEMBERS: TeamMember[] = [
  {
    role: "FOUNDER",
    name: "Ananya Sarkar",
    image: "https://lh3.googleusercontent.com/d/1KYCh6JslUoRBcp57J63drp1Y5557_Yew",
    bullets: [
      "Ex-Founder, Sukham",
      "10+ years across branding building",
      "7+ years across venture building",
      "As Seen on Shark Tank India"
    ]
  },
  {
    role: "TECH",
    name: "HIMANSHU POPLI",
    image: "https://lh3.googleusercontent.com/d/1wCTlZ2gXzgLOxnFGvhdVk2Ijbzm29e-f",
    bullets: [
      "5+ Years Building Digital Products",
      "Scalable Platforms & Technical Systems",
      "Performance Optimization Specialist",
      "Full Stack Development"
    ]
  },
  {
    role: "CONTENT",
    name: "PRAGATI SINGH",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&q=80&w=600",
    bullets: [
      "9+ Years in Content & Communications",
      "Government, Media & Brand Storytelling",
      "Research-Driven Content Strategist",
      "Ex Journalist, NewsX"
    ]
  },
  {
    role: "GROWTH",
    name: "SHUBHAM SONI",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=600",
    bullets: [
      "9+ Years in D2C & E-commerce Growth",
      "Shopify, Meta & Google Ads",
      "AI, Analytics & Automation",
      "Growth Systems & Profitability Strategy"
    ]
  },
  {
    role: "INFLUENCE",
    name: "SNEHAL RAJ",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600",
    bullets: [
      "Built a 14K Community in 3 Months",
      "Personal Branding & Growth Strategy",
      "Organic Audience & Lead Generation",
      "Content-Led Growth Systems"
    ]
  },
  {
    role: "SUCCESS",
    name: "DIKSHA SINGH",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=600",
    bullets: [
      "Managed 50+ Client Engagements",
      "5+ Years in Client Success",
      "Project & Team Coordination",
      "Stakeholder Communication"
    ]
  }
];

const ADVISORS: Advisor[] = [
  {
    name: "YAGNESH SANGHRAJKA",
    role: "Advisor - Strategy",
    company: "247VC",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=400",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "VIVEK KRISHNA",
    role: "Advisor - Growth",
    company: "ANVIMA WELLNESS",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=400",
    linkedinUrl: "https://linkedin.com"
  },
  {
    name: "SUDHIR VASHISHT",
    role: "Advisor - Digital Growth",
    company: "247VC",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=400",
    linkedinUrl: "https://linkedin.com"
  }
];

interface TeamPageProps {
  onBackToHome: () => void;
  onNavigateToSection: (sectionId: string) => void;
}

export default function TeamPage({ onBackToHome, onNavigateToSection }: TeamPageProps) {
  // Orange Contact Form states
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [email, setEmail] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !mobileNo.trim() || !email.trim() || !linkedin.trim()) {
      setError("Please fill in all the details.");
      return;
    }

    if (!/^\+?[0-9\s\-]{8,20}$/.test(mobileNo)) {
      setError("Please enter a valid mobile number.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setMobileNo("");
      setEmail("");
      setLinkedin("");
    }, 1500);
  };

  return (
    <div id="team-page-view" className="bg-black text-white min-h-screen pt-28 pb-0 overflow-hidden relative">
      {/* Background radial highlight */}
      <div className="absolute top-0 left-0 w-full h-[600px] bg-gradient-to-b from-neutral-950 to-transparent pointer-events-none" />

      {/* Mobile-focused elegant arches background */}
      <div className="absolute top-0 right-0 left-0 h-[800px] overflow-hidden pointer-events-none z-0 opacity-15 select-none block md:hidden">
        <svg viewBox="0 0 400 800" className="w-full h-full text-neutral-800" fill="none" stroke="currentColor" strokeWidth="0.75">
          <path d="M 50,0 Q 200,300 350,0" />
          <path d="M 50,100 Q 200,400 350,100" />
          <path d="M 50,200 Q 200,500 350,200" />
          <path d="M 0,400 C 100,500 300,500 400,400" />
          <path d="M 0,500 C 100,600 300,600 400,500" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Back */}
        <div className="mb-12 md:mb-16 text-left">
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white mb-8 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>

          {/* Responsive Header precisely styled like both PDFs */}
          <div className="text-left">
            <h1 className="font-display text-[#FF4500] text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[0.05em] uppercase leading-[0.9] flex flex-col sm:block">
              <span className="block sm:inline">The </span>
              <span className="block sm:inline">Difference </span>
              <span className="block sm:inline">Makers</span>
            </h1>
            <div className="w-full h-[1px] bg-neutral-800 mt-8" />
          </div>
        </div>

        {/* Core Layout with side sticky vertical ANTR text */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 mb-28">
          
          {/* Main List Column */}
          <div className="lg:col-span-8 space-y-20 md:space-y-24">
            {TEAM_MEMBERS.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 border-b border-neutral-900 pb-16"
              >
                {/* Mobile-only centered Category Title */}
                <span className="block md:hidden font-mono text-sm tracking-[0.3em] text-neutral-400 uppercase text-center mb-1">
                  {member.role}
                </span>

                {/* Grayscale image container or Monogram */}
                {!member.image ? (
                  <div className="w-64 sm:w-72 md:w-56 lg:w-64 aspect-[4/5] rounded-[2.5rem] bg-neutral-950 border border-neutral-800 flex-shrink-0 shadow-2xl flex flex-col justify-center items-center p-8 relative select-none">
                    <div className="absolute top-6 left-6 font-mono text-[9px] text-neutral-600 tracking-[0.3em]">ANTR LABS</div>
                    <span className="font-display text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-700 tracking-widest">
                      AS
                    </span>
                    <div className="absolute bottom-6 right-6 font-mono text-[8px] text-neutral-600 tracking-[0.25em]">FOUNDER</div>
                  </div>
                ) : (
                  <div className={`w-64 sm:w-72 md:w-56 lg:w-64 aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-neutral-950 border border-neutral-800 flex-shrink-0 shadow-2xl ${member.name === "Ananya Sarkar" ? "pencil-sketch" : ""}`}>
                    <img
                      src={member.image}
                      alt={member.name}
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale contrast-[1.15] filter brightness-[0.92] hover:grayscale-0 hover:brightness-100 transition-all duration-700 ease-out"
                    />
                  </div>
                )}

                {/* Content Details Column */}
                <div className="flex-grow text-center md:text-left pt-2 flex flex-col items-center md:items-start">
                  {/* Desktop-only Category Title */}
                  <span className="hidden md:block font-mono text-[11px] tracking-[0.3em] text-neutral-500 uppercase mb-4 font-bold">
                    {member.role}
                  </span>

                  {/* Name */}
                  <h3 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-white mb-6 leading-none">
                    {member.name}
                  </h3>

                  {/* Bullet points perfectly matching formatting */}
                  <ul className="space-y-3.5 text-left max-w-sm sm:max-w-md">
                    {member.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-3 font-sans text-neutral-400 text-sm font-light">
                        <span className="text-neutral-500 mt-1.5 text-[8px]">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Side Sticky giant outline "A N T R" text column */}
          <div className="hidden lg:block lg:col-span-4 relative">
            <div className="sticky top-32 h-[calc(100vh-220px)] flex items-center justify-end">
              <div 
                className="font-display font-black text-[14rem] tracking-widest text-transparent flex flex-col leading-[0.8] select-none pointer-events-none opacity-20 mr-2"
                style={{
                  WebkitTextStroke: "1px rgba(255, 255, 255, 0.12)",
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

        {/* Advisors Section Heading */}
        <div className="mb-12 text-left">
          <h2 className="font-display text-[#FF4500] md:text-white text-4xl sm:text-5xl font-normal tracking-[0.05em] uppercase leading-[0.9] flex flex-col sm:block">
            <span className="block sm:inline">Our </span>
            <span className="block sm:inline">Advisors</span>
          </h2>
          <div className="w-full h-[1px] bg-neutral-800 mt-6" />
        </div>

        {/* Advisors Stacked Rows with vertical parallel line graphics exactly as PDF */}
        <div className="relative mb-28">
          
          {/* Parallel vertical lines graphics strictly styled on the right hand side */}
          <div className="absolute right-0 top-0 bottom-0 w-1/3 pointer-events-none select-none opacity-25 overflow-hidden hidden md:block z-0">
            <div 
              className="w-full h-full"
              style={{
                backgroundImage: "repeating-linear-gradient(90deg, rgba(255, 255, 255, 0.12) 0px, rgba(255, 255, 255, 0.12) 1px, transparent 1px, transparent 14px)",
              }}
            />
          </div>

          <div className="max-w-4xl space-y-4 relative z-10">
            {ADVISORS.map((advisor, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-start gap-6 sm:gap-10 py-10 border-b border-neutral-900/60"
              >
                {/* Grayscale Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden bg-neutral-950 flex-shrink-0 border border-neutral-800">
                  <img
                    src={advisor.image}
                    alt={advisor.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale"
                  />
                </div>

                {/* Content details aligned */}
                <div className="flex-grow flex flex-col items-start text-left pt-1">
                  {/* Advisor Name */}
                  <h4 className="font-display text-lg sm:text-xl font-bold tracking-wider text-white uppercase mb-1">
                    {advisor.name}
                  </h4>

                  {/* Role / Tag */}
                  <span className="font-mono text-xs sm:text-sm text-[#FF4500] block mb-1 font-medium">
                    {advisor.role}
                  </span>

                  {/* Company Name */}
                  <span className="font-mono text-[10px] sm:text-xs text-neutral-400 font-bold uppercase tracking-wider block mb-4">
                    {advisor.company}
                  </span>

                  {/* LinkedIn Connection */}
                  <a
                    href={advisor.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-500 hover:text-white transition-colors p-1"
                  >
                    <Linkedin className="w-4 h-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

        </div>

      </div>

      {/* Bright Orange Contact form section precisely cloned from PDF */}
      <div className="bg-[#FF4500] text-black py-20 sm:py-24 px-6 md:px-12 relative overflow-hidden text-center select-none">
        {/* Subtle geometric circles */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto relative z-10 text-left">
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-black mb-12 leading-tight text-center uppercase">
            <span className="block sm:hidden">Building something<br />worth remembering?<br />Let's talk.</span>
            <span className="hidden sm:block">Building something with ANTR?<br />Let's talk.</span>
          </h2>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-8">
                {/* Name */}
                <div className="relative">
                  <input
                    type="text"
                    id="team-form-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Name"
                    className="w-full bg-transparent border-b border-black/40 placeholder-black/55 text-black font-sans text-base py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Mobile No. */}
                <div className="relative">
                  <input
                    type="tel"
                    id="team-form-mobile"
                    value={mobileNo}
                    onChange={(e) => setMobileNo(e.target.value)}
                    placeholder="Mobile no."
                    className="w-full bg-transparent border-b border-black/40 placeholder-black/55 text-black font-sans text-base py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="relative">
                  <input
                    type="email"
                    id="team-form-email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    className="w-full bg-transparent border-b border-black/40 placeholder-black/55 text-black font-sans text-base py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* LinkedIn */}
                <div className="relative">
                  <input
                    type="text"
                    id="team-form-linkedin"
                    value={linkedin}
                    onChange={(e) => setLinkedin(e.target.value)}
                    placeholder="Linkedin"
                    className="w-full bg-transparent border-b border-black/40 placeholder-black/55 text-black font-sans text-base py-4 focus:outline-none focus:border-black transition-colors"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="flex items-center gap-2 text-black bg-white/20 px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs">
                    <AlertCircle className="w-4 h-4 text-black" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit button exactly as PDF (black background, wide rectangular look, rounded-none) */}
                <div className="pt-6 text-center">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full sm:w-auto bg-black hover:bg-neutral-950 text-white font-mono text-xs tracking-[0.3em] font-bold uppercase py-4.5 px-16 transition-all duration-300 focus:outline-none cursor-pointer rounded-none"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-black text-white p-8 rounded-none text-center shadow-xl"
              >
                <div className="w-12 h-12 bg-[#FF4500]/10 border border-[#FF4500]/30 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="w-6 h-6 text-[#FF4500]" />
                </div>
                <h3 className="font-display text-xl font-bold mb-2">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-neutral-400 text-sm font-light leading-relaxed max-w-sm mx-auto mb-6">
                  Our partners will dissect your profile. Expect an exclusive briefing within 12 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="font-mono text-[10px] tracking-widest uppercase border border-neutral-800 text-neutral-400 hover:text-white py-2 px-4 rounded-none transition-colors focus:outline-none"
                >
                  SEND ANOTHER MESSAGE
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
