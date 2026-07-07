import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Check, 
  ArrowRight, 
  AlertCircle, 
  ChevronDown, 
  ArrowLeft 
} from "lucide-react";

interface ContactState {
  name: string;
  mobile: string;
  email: string;
  linkedin: string;
  company: string;
  inquiryType: string;
  budget: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
}

const INQUIRY_TYPES = [
  "End-to-End Brand Building",
  "Typography & Identity Systems",
  "Digital Experience & Architecture",
  "Capital Positioning Strategy",
  "General Collaboration"
];

const BUDGET_RANGES = [
  "Under ₹5L",
  "₹5L – ₹15L",
  "₹15L – ₹50L",
  "₹50L+"
];

interface ContactPageProps {
  onBackToHome: () => void;
}

export default function ContactPage({ onBackToHome }: ContactPageProps) {
  const [form, setForm] = useState<ContactState>({
    name: "",
    mobile: "",
    email: "",
    linkedin: "",
    company: "",
    inquiryType: INQUIRY_TYPES[0],
    budget: BUDGET_RANGES[1],
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    if (!form.name.trim()) tempErrors.name = "Full name is required";
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }
    if (!form.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(form.mobile)) {
      tempErrors.mobile = "Please enter a valid phone number";
    }
    if (!form.message.trim()) tempErrors.message = "Message details are required";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({
        name: "",
        mobile: "",
        email: "",
        linkedin: "",
        company: "",
        inquiryType: INQUIRY_TYPES[0],
        budget: BUDGET_RANGES[1],
        message: ""
      });
    }, 1500);
  };

  return (
    <div id="contact-page-view" className="bg-black text-white min-h-screen pt-28 pb-20 overflow-hidden relative">
      {/* Decorative subtle background elements */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#0c0c0c_1px,transparent_1px),linear-gradient(to_bottom,#0c0c0c_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Navigation Back */}
        <div className="mb-16 md:mb-20 text-center">
          <motion.button
            onClick={onBackToHome}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="group inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.25em] text-neutral-400 hover:text-white mb-8 focus:outline-none cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 group-hover:-translate-x-1 transition-transform" />
            BACK TO HOME
          </motion.button>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="font-mono text-xs tracking-[0.3em] text-[#FF4500] uppercase block mb-3">
              ESTABLISH ALIGNMENT
            </span>
            <h1 className="font-display text-5xl sm:text-7xl lg:text-8xl font-bold tracking-tight uppercase leading-none">
              GET IN TOUCH
            </h1>
            <p className="font-sans text-neutral-400 text-lg sm:text-xl font-light mt-6 max-w-2xl mx-auto leading-relaxed">
              Let's craft your absolute difference. Complete our diagnostic inquiry layout below to connect directly with our key brand architects.
            </p>
          </motion.div>
        </div>

        {/* Master Contact Form Container */}
        <div className="max-w-3xl mx-auto mb-24">
          
          {/* Form Column */}
          <div className="bg-neutral-950/40 border border-neutral-900 rounded-3xl p-6 sm:p-10 text-left">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-page-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-8"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Name */}
                    <div className="relative">
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleInputChange}
                        placeholder="Your Full Name"
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors"
                      />
                      {errors.name && (
                        <span className="absolute right-0 bottom-3 text-[#FF4500] flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-black px-1.5">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Company */}
                    <div className="relative">
                      <input
                        type="text"
                        name="company"
                        value={form.company}
                        onChange={handleInputChange}
                        placeholder="Company Name (Optional)"
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Mobile */}
                    <div className="relative">
                      <input
                        type="text"
                        name="mobile"
                        value={form.mobile}
                        onChange={handleInputChange}
                        placeholder="Mobile Number"
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors"
                      />
                      {errors.mobile && (
                        <span className="absolute right-0 bottom-3 text-[#FF4500] flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-black px-1.5">
                          <AlertCircle className="w-3 h-3" /> {errors.mobile}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div className="relative">
                      <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleInputChange}
                        placeholder="Email Address"
                        className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors"
                      />
                      {errors.email && (
                        <span className="absolute right-0 bottom-3 text-[#FF4500] flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-black px-1.5">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    {/* Inquiry Dropdown */}
                    <div className="flex flex-col text-left">
                      <label className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-1.5">
                        Inquiry Scope
                      </label>
                      <div className="relative">
                        <select
                          name="inquiryType"
                          value={form.inquiryType}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 py-3 px-4 text-sm text-neutral-300 rounded-xl focus:border-[#FF4500] focus:outline-none appearance-none cursor-pointer"
                        >
                          {INQUIRY_TYPES.map((type) => (
                            <option key={type} value={type}>
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                      </div>
                    </div>

                    {/* Budget Dropdown */}
                    <div className="flex flex-col text-left">
                      <label className="font-mono text-[10px] text-neutral-500 tracking-widest uppercase mb-1.5">
                        Estimated Budget
                      </label>
                      <div className="relative">
                        <select
                          name="budget"
                          value={form.budget}
                          onChange={handleInputChange}
                          className="w-full bg-neutral-900 border border-neutral-800 py-3 px-4 text-sm text-neutral-300 rounded-xl focus:border-[#FF4500] focus:outline-none appearance-none cursor-pointer"
                        >
                          {BUDGET_RANGES.map((range) => (
                            <option key={range} value={range}>
                              {range}
                            </option>
                          ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-3.5 w-4 h-4 text-neutral-500 pointer-events-none" />
                      </div>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="relative">
                    <input
                      type="text"
                      name="linkedin"
                      value={form.linkedin}
                      onChange={handleInputChange}
                      placeholder="LinkedIn Profile URL (Optional)"
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors"
                    />
                  </div>

                  {/* Message details */}
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="Briefly describe your brand philosophy and what differentiates you from your immediate competitors."
                      className="w-full bg-transparent border-b border-neutral-800 py-3 text-white placeholder-neutral-600 focus:placeholder-neutral-500 focus:border-[#FF4500] focus:outline-none transition-colors resize-none"
                    />
                    {errors.message && (
                      <span className="absolute right-0 bottom-4 text-[#FF4500] flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-black px-1.5">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#FF4500] hover:bg-[#FF571A] disabled:opacity-50 text-black font-mono text-xs tracking-[0.25em] font-bold uppercase py-4 sm:py-5 px-8 rounded-xl transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-98 select-none cursor-pointer"
                  >
                    {isSubmitting ? "TRANSMITTING ALIGNMENT..." : "SUBMIT INQUIRY"}
                    {!isSubmitting && <ArrowRight className="w-4 h-4 stroke-[2.5]" />}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-page-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: "spring", stiffness: 180, damping: 20 }}
                  className="py-12 text-center flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.1, type: "spring" }}
                    className="w-16 h-16 rounded-full bg-[#FF4500] flex items-center justify-center text-black mb-6 shadow-[0_0_20px_rgba(255,69,0,0.3)]"
                  >
                    <Check className="w-8 h-8 stroke-[3]" />
                  </motion.div>

                  <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-3 text-white">
                    INQUIRY TRANSMITTED
                  </h3>
                  <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed max-w-sm mb-8 font-light">
                    Our lead architect will study your brand and request within 24 hours. A diagnostic audit proposal will be sent directly to your inbox.
                  </p>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white font-mono text-[11px] tracking-widest uppercase py-3.5 px-8 rounded-xl transition-all"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </div>
  );
}
