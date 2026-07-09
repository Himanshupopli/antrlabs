import { useState, ChangeEvent, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, ArrowRight, AlertCircle } from "lucide-react";

interface FormState {
  name: string;
  mobile: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  mobile?: string;
  email?: string;
  message?: string;
  submit?: string;
}

interface ContactFormProps {
  source?: string;
}

export default function ContactForm({ source = "Homepage contact form" }: ContactFormProps) {
  const [form, setForm] = useState<FormState>({
    name: "",
    mobile: "",
    email: "",
    message: ""
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear errors immediately when typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validate = (): boolean => {
    const tempErrors: FormErrors = {};

    if (!form.name.trim()) {
      tempErrors.name = "Name is required";
    }

    // Check email
    if (!form.email.trim()) {
      tempErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      tempErrors.email = "Please enter a valid email address";
    }

    // Check mobile
    if (!form.mobile.trim()) {
      tempErrors.mobile = "Mobile number is required";
    } else if (!/^[+]?[0-9\s-]{7,15}$/.test(form.mobile)) {
      tempErrors.mobile = "Please enter a valid phone number";
    }

    if (!form.message.trim()) {
      tempErrors.message = "Message is required";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          ...form,
          source
        })
      });

      if (!response.ok) {
        const data = await response.json().catch(() => ({}));
        throw new Error(data.error || "Unable to send inquiry");
      }

      setIsSubmitting(false);
      setIsSuccess(true);
      setForm({ name: "", mobile: "", email: "", message: "" });
    } catch (error) {
      setIsSubmitting(false);
      setErrors((prev) => ({
        ...prev,
        submit: error instanceof Error ? error.message : "Unable to send inquiry"
      }));
    }
  };

  return (
    <section id="contact" className="bg-[#FF4500] text-black py-24 px-6 md:px-12 relative overflow-hidden select-none">
      {/* Soft overlay graphics */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/[0.04] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-black/[0.04] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-2xl mx-auto text-center">
        {/* Centered Headers */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-14"
        >
          <h2 className="font-sans text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-black mb-3">
            Building something with ANTR?
          </h2>
          <p className="font-sans text-lg sm:text-xl md:text-2xl font-bold text-black">
            Let's talk.
          </p>
        </motion.div>

        {/* Centered Form */}
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSuccess ? (
              <motion.form
                key="form-container"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                onSubmit={handleSubmit}
                className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10"
              >
                {/* Name Input Field */}
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleInputChange}
                      placeholder="Name"
                      className="w-full bg-transparent border-b border-black py-3 text-black text-center font-sans text-base placeholder-black/50 focus:placeholder-black/25 focus:border-black focus:outline-none transition-all duration-300"
                    />
                    {errors.name && (
                      <span className="absolute right-0 top-3 text-red-950 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-white/30 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>
                </div>

                {/* Mobile Input Field */}
                <div className="flex flex-col">
                  <div className="relative">
                    <input
                      type="text"
                      name="mobile"
                      value={form.mobile}
                      onChange={handleInputChange}
                      placeholder="Mobile no."
                      className="w-full bg-transparent border-b border-black py-3 text-black text-center font-sans text-base placeholder-black/50 focus:placeholder-black/25 focus:border-black focus:outline-none transition-all duration-300"
                    />
                    {errors.mobile && (
                      <span className="absolute right-0 top-3 text-red-950 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-white/30 px-2 py-0.5 rounded">
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
                      className="w-full bg-transparent border-b border-black py-3 text-black text-center font-sans text-base placeholder-black/50 focus:placeholder-black/25 focus:border-black focus:outline-none transition-all duration-300"
                    />
                    {errors.email && (
                      <span className="absolute right-0 top-3 text-red-950 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-white/30 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                {/* Message Input Field */}
                <div className="flex flex-col">
                  <div className="relative">
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={handleInputChange}
                      placeholder="How can we help you?"
                      className="w-full bg-transparent border-b border-black py-3 text-black text-center font-sans text-base placeholder-black/50 focus:placeholder-black/25 focus:border-black focus:outline-none transition-all duration-300 resize-none"
                    />
                    {errors.message && (
                      <span className="absolute right-0 top-3 text-red-950 flex items-center gap-1 font-mono text-[9px] uppercase tracking-wider bg-white/30 px-2 py-0.5 rounded">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </span>
                    )}
                  </div>
                </div>

                {errors.submit && (
                  <p className="sm:col-span-2 font-mono text-[10px] uppercase tracking-wider text-red-950 text-center">
                    {errors.submit}
                  </p>
                )}

                {/* Submit button */}
                <div className="sm:col-span-2 flex justify-center mt-6">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="bg-black hover:bg-neutral-900 text-white font-mono text-xs tracking-[0.3em] font-bold uppercase py-3.5 px-12 rounded-none transition-all duration-300 active:scale-98 disabled:opacity-50 select-none cursor-pointer"
                  >
                    {isSubmitting ? "TRANSMITTING..." : "SUBMIT"}
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success-container"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, type: "spring" }}
                className="bg-black text-white p-8 sm:p-12 rounded-none text-center shadow-2xl flex flex-col items-center border border-neutral-900"
              >
                {/* Success Animation Circle */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                  className="w-16 h-16 rounded-full bg-[#FF4500] flex items-center justify-center text-white mb-6"
                >
                  <Check className="w-8 h-8 stroke-[3]" />
                </motion.div>

                <h3 className="font-display text-xl font-bold tracking-wider mb-3">
                  TRANSMISSION RECEIVED
                </h3>
                <p className="font-sans text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-xs mb-8 font-light">
                  Our core team has been notified. We will reach out within 24 business hours to establish alignment.
                </p>

                <button
                  onClick={() => setIsSuccess(false)}
                  className="border border-neutral-800 hover:border-neutral-700 text-neutral-400 hover:text-white font-mono text-[10px] tracking-widest uppercase py-3 px-6 rounded-none transition-all"
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
