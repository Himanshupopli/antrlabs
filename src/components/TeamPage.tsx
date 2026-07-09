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
  linkedinUrl?: string;
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
    linkedinUrl: "https://www.linkedin.com/in/ananyasarkar1",
    bullets: [
      "10+ years across branding building",
      "7+ years across venture building",
      "As Seen on Shark Tank India",
      "Ex-Founder, Sukham"
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
    image: "https://lh3.googleusercontent.com/d/1C_BZh0UkjxZnI8qiiel72hmvUn-frLTb",
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
    image: "https://lh3.googleusercontent.com/d/1t5mWm0SdcDh35DFCtJGkqjKN2x_YbORY",
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
    image: "https://lh3.googleusercontent.com/d/1-FQND_x3B0aryGEjrUv3uiMkPE9UU_YY",
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
    image: "https://lh3.googleusercontent.com/d/13aTBotCkqdetw2PQGJKB1Z21CFP-MDX_",
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
    image: "https://lh3.googleusercontent.com/d/1rAacX8el-E5esVjkkpRgpFk5AeXD6zsV",
    linkedinUrl: "https://www.linkedin.com/in/yagnesh2707/?skipRedirect=true"
  },
  {
    name: "VIVEK KRISHNA",
    role: "Advisor - Growth",
    company: "ANVIMA WELLNESS",
    image: "https://lh3.googleusercontent.com/d/1GvlAWiPKMCUHphXmk_FTT0ODJRaGx3sq",
    linkedinUrl: "https://www.linkedin.com/in/vivek-krishna-97a17010a/?skipRedirect=true"
  },
  {
    name: "SUDHIR VASHIST",
    role: "Advisor - SEO",
    company: "SEORCE",
    image: "/team/sudhir-vashist.jpeg",
    linkedinUrl: "https://www.linkedin.com/in/sudhirvashist/"
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
  const [message, setMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");

    if (!name.trim() || !mobileNo.trim() || !email.trim() || !message.trim()) {
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

    try {
      setIsSubmitting(true);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          mobile: mobileNo,
          email,
          message,
          source: "Team page contact form"
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send inquiry");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setName("");
      setMobileNo("");
      setEmail("");
      setMessage("");
    } catch (error) {
      setIsSubmitting(false);
      setError(error instanceof Error ? error.message : "Unable to send inquiry");
    }
  };

  return (
    <div id="team-page-view" className="bg-black text-white min-h-screen pt-28 pb-0 relative overflow-x-hidden">
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
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group inline-flex md:flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white mb-8 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>

          {/* Responsive Header precisely styled like both PDFs */}
          <div className="text-center md:text-left">
            <h1 className="font-display text-[#FF4500] text-5xl sm:text-7xl lg:text-8xl font-normal tracking-[0.05em] uppercase leading-[0.9] flex flex-col sm:block">
              <motion.span
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="block sm:inline"
              >
                The{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: "easeOut" }}
                className="block sm:inline text-white sm:text-[#FF4500]"
              >
                Difference{" "}
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.24, ease: "easeOut" }}
                className="block sm:inline text-white"
              >
                Makers
              </motion.span>
            </h1>
            <div className="w-full h-[1px] bg-neutral-800 mt-8" />
          </div>
        </div>

        {/* Minimalist Scroll down indicator */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="flex flex-col items-center justify-center mb-16 text-neutral-500 font-mono text-[10px] tracking-[0.25em] select-none"
        >
          <span className="mb-3 uppercase">SCROLL TO MEET TEAM</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-[#FF4500] to-transparent relative overflow-hidden">
            <motion.div
              animate={{
                y: [0, 48, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-0 left-0 right-0 h-4 bg-[#FF4500]"
            />
          </div>
        </motion.div>

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
                    <span className="font-display text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-300 to-neutral-700 tracking-widest uppercase">
                      {member.name.split(" ").map(n => n[0]).join("")}
                    </span>
                    <div className="absolute bottom-6 right-6 font-mono text-[8px] text-neutral-600 tracking-[0.25em] uppercase">{member.role}</div>
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
                  <ul className="space-y-3.5 text-left max-w-sm sm:max-w-md mx-auto md:mx-0 mb-5">
                    {member.bullets.map((bullet, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: idx * 0.1, ease: "easeOut" }}
                        className="flex items-start gap-3 font-sans text-neutral-400 text-sm font-light"
                      >
                        <span className="text-[#FF4500] mt-1.5 text-[8px]">•</span>
                        <span className="leading-relaxed">{bullet}</span>
                      </motion.li>
                    ))}
                  </ul>

                  {member.linkedinUrl && (
                    <a
                      href={member.linkedinUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${member.name} LinkedIn`}
                      className="text-neutral-500 hover:text-white transition-colors p-1"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                  )}
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
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                >
                  A
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.25, ease: "easeOut" }}
                >
                  N
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                >
                  T
                </motion.span>
                <motion.span
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.55, ease: "easeOut" }}
                >
                  R
                </motion.span>
              </div>
            </div>
          </div>

        </div>

        {/* Advisors Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-12 text-center md:text-left"
        >
          <h2 className="font-display text-[#FF4500] md:text-white text-4xl sm:text-5xl font-normal tracking-[0.05em] uppercase leading-[0.9] flex flex-col sm:block">
            <span className="block sm:inline">Our </span>
            <span className="block sm:inline text-white">Advisors</span>
          </h2>
          <div className="w-full h-[1px] bg-neutral-800 mt-6" />
        </motion.div>

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
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.7, delay: index * 0.1, ease: "easeOut" }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 sm:gap-10 py-10 border-b border-neutral-900/60 group text-center sm:text-left"
              >
                {/* Grayscale Avatar */}
                <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-3xl overflow-hidden bg-neutral-950 flex-shrink-0 border border-neutral-800">
                  {advisor.image ? (
                    <img
                      src={advisor.image}
                      alt={advisor.name}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500 ease-out"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center bg-neutral-950 text-neutral-300 font-display text-2xl font-bold tracking-widest">
                      {advisor.name.split(" ").map((part) => part[0]).join("")}
                    </div>
                  )}
                </div>

                {/* Content details aligned */}
                <div className="flex-grow flex flex-col items-center sm:items-start text-center sm:text-left pt-1">
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
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.9, ease: "easeOut" }}
        className="bg-[#FF4500] text-black py-20 sm:py-24 px-6 md:px-12 relative overflow-hidden text-center select-none"
      >
        {/* Subtle geometric circles */}
        <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-white/5 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-xl mx-auto relative z-10 text-center sm:text-left">
          <h2 className="font-display text-3xl sm:text-4.5xl font-bold tracking-tight text-black mb-12 leading-tight text-center uppercase">
            <span className="block sm:hidden">Building something<br />worth remembering?<br />Let's talk.</span>
            <span className="hidden sm:block">Building something with ANTR?<br />Let's talk.</span>
          </h2>

          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-8">
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

                {/* Message */}
                <div className="relative">
                  <textarea
                    id="team-form-message"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="How can we help you?"
                    className="w-full bg-transparent border-b border-black/40 placeholder-black/55 text-black font-sans text-base py-4 focus:outline-none focus:border-black transition-colors resize-none"
                  />
                </div>

                {/* Error message */}
                {error && (
                  <div className="sm:col-span-2 flex items-center gap-2 text-black bg-white/20 px-4 py-2.5 rounded-xl border border-black/10 font-mono text-xs">
                    <AlertCircle className="w-4 h-4 text-black" />
                    <span>{error}</span>
                  </div>
                )}

                {/* Submit button exactly as PDF (black background, wide rectangular look, rounded-none) */}
                <div className="sm:col-span-2 pt-6 text-center">
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
      </motion.div>

    </div>
  );
}
