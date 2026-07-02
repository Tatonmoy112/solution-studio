"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { contactInfo } from "@/lib/content";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    formData.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "4477b1bf-0e5f-4b6c-958c-3e0d8e8c37b9");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative overflow-hidden bg-[#121212]">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 -right-1/4 w-96 h-96 bg-teal-500/5 rounded-full blur-[120px] -z-10 animate-pulse" />

      <div className="container mx-auto max-w-[1550px] relative z-10">
        {/* Section Header */}
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-teal-500 font-mono text-sm">09.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-normal font-heading">
              Contact
            </h2>
          </div>
          <div className="w-20 h-1 bg-teal-500 rounded-full" />
        </div>

        {/* Redesigned Clean Grid Layout */}
        <div className="grid lg:grid-cols-12 gap-16 items-center">
          {/* Left Column: Bold Invitation Copy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <span className="text-teal-500 font-mono text-sm tracking-widest uppercase block">
              Get In Touch
            </span>
            <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white leading-tight tracking-tight font-heading">
              Ready to Build Something Exceptional?
            </h3>
            <p className="text-slate-300 text-lg font-light leading-relaxed">
              Have a problem you want to solve, a workflow you want to automate, or a custom system you want to kick off? 
            </p>
            <p className="text-slate-400 text-base font-light leading-relaxed">
              Drop us a message here. Our team will review your requirements and get back to you with a concrete strategy &mdash; not just a sales pitch.
            </p>
            
            <div className="pt-8 border-t border-white/5 space-y-2">
              <div className="flex justify-between text-xs font-mono text-slate-500 uppercase tracking-widest">
                <span>Response time</span>
                <span className="text-teal-500 font-semibold">&lt; 24 hours</span>
              </div>
              <div className="flex justify-between text-xs font-mono text-slate-500 uppercase tracking-widest">
                <span>HQ Location</span>
                <span className="text-white">Gazipur, Bangladesh</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Perfect Aligned Form Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 tech-card p-8 md:p-10 rounded-3xl bg-[#161616]/40 border border-white/5 shadow-2xl relative"
          >
            {/* Ambient glow in card background */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-full blur-3xl pointer-events-none" />

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                    Name
                  </label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                    placeholder="Your Name"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                    Email
                  </label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                    placeholder="Email Address"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm"
                  placeholder="What is this regarding?"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all resize-none text-sm"
                  placeholder="Your message here..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-teal-500 hover:bg-teal-600 disabled:bg-slate-700 text-[#121212] font-semibold uppercase tracking-widest rounded-xl transition-all flex items-center justify-center gap-2 group cursor-pointer hover:shadow-[0_8px_20px_rgba(20,184,166,0.3)]"
              >
                {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
                {!isSubmitting && !isSuccess && (
                  <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
