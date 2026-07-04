import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, AlertCircle } from "lucide-react";

interface FormState {
  mobile: string;
  email: string;
  linkedin: string;
}

interface FormErrors {
  mobile?: string;
  email?: string;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    mobile: "",
    email: "",
    linkedin: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors immediately when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};
    
    // Check email
    if (!form.email) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Check mobile
    if (!form.mobile) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(form.mobile)) {
      tempErrors.mobile = "Please enter a valid phone number";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate an API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ mobile: "", email: "", linkedin: "" });
    }, 1500);
  };

  return (
    <section id="contact" className="bg-[#FF4500] text-black py-24 sm:py-28 px-6 md:px-12 relative overflow-hidden select-none">
      {/* Soft overlay graphics */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 items-center">
        {/* Left Info Column */}
        <div className="md:col-span-6 text-left">
          <motion.div
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight mb-6">
              Building something with ANTR? <br />
              Let’s talk.
            </h2>
            <p className="font-sans text-black/75 text-sm sm:text-base leading-relaxed max-w-md font-light">
              We look for founders with absolute conviction. Whether you are leading a high-growth D2C brand, launching a new VC fund, or establishing high-end digital interfaces, let's explore your unique difference.
            </p>
          </motion.div>
        </div>

        {/* Right Form Column */}
        <div className="md:col-span-6">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="flex flex-col gap-8 text-left"
              >
                {/* Mobile Input Field */}
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type="text"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile no."
                      className="w-full bg-transparent border-b-2 border-black/40 py-3 text-black font-display text-lg sm:text-xl placeholder-black/50 focus:placeholder-black/30 focus:border-black focus:outline-none transition-all duration-300"
                    />
                    {errors.mobile && (
                      <span className="absolute right-0 top-3 text-black/80 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> {errors.mobile}
                      </span>
                    )}
                  </div>
                </div>

                {/* Email Input Field */}
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleInputChange}
                      placeholder="Email"
                      className="w-full bg-transparent border-b-2 border-black/40 py-3 text-black font-display text-lg sm:text-xl placeholder-black/50 focus:placeholder-black/30 focus:border-black focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                      <span className="absolute right-0 top-3 text-black/80 flex items-center gap-1 font-mono text-[10px] uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Linkedin Input Field */}
                <div className="flex flex-col">
                  <input
                    type="text"
                    name="linkedin"
                    value={form.linkedin}
                    onChange={handleInputChange}
                    placeholder="Linkedin"
                    className="w-full bg-transparent border-b-2 border-black/40 py-3 text-black font-display text-lg sm:text-xl placeholder-black/50 focus:placeholder-black/30 focus:border-black focus:outline-none transition-all duration-300"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-black hover:bg-neutral-900 text-white font-mono text-sm tracking-[0.25em] font-bold uppercase py-4 sm:py-5 px-8 rounded-none transition-all duration-300 flex items-center justify-center gap-3 shadow-xl active:scale-98 disabled:opacity-50 select-none cursor-pointer mt-4"
                >
                  {isSubmitting ? "TRANSMITTING..." : "SUBMIT"}
                  {!isSubmitting && <ArrowRight className="w-4 h-4" />}
                </button>
              </motion.form>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-black text-white p-8 sm:p-12 rounded-3xl text-center shadow-2xl flex flex-col items-center border border-neutral-900"
              >
                {/* Success Animation Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#FF4500] flex items-center justify-center text-white mb-6 shadow-[0_0_20px_rgba(255,69,0,0.4)]"
                >
                  <Check className="w-8 h-8 stroke-[3]" />
                </motion.div>

                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-wide mb-3">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-neutral-400 text-sm sm:text-base leading-relaxed max-w-xs mb-8 font-light">
                  Our core team has been notified. We will reach out within 24 business hours to establish alignment.
                </p>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white font-mono text-[11px] tracking-widest uppercase py-3 px-6 rounded-xl transition-all"
                >
                  Submit Another Request
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
