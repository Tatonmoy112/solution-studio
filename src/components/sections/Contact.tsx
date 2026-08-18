"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

type ContactField = "name" | "email" | "subject" | "message";
type ContactFieldErrors = Partial<Record<ContactField, string>>;

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const FIELD_LIMITS = {
  name: 100,
  email: 200,
  subject: 200,
  message: 5000,
} as const;

const fieldBaseClass =
  "w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500/30 transition-all text-sm";

const fieldErrorClass =
  "border-red-400/60 focus:border-red-400 focus:ring-red-400/30";

function getStringValue(formData: FormData, field: ContactField) {
  const value = formData.get(field);
  return typeof value === "string" ? value : "";
}

function validateContactField(field: ContactField, value: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue) {
    return `${field[0].toUpperCase()}${field.slice(1)} is required.`;
  }

  if (trimmedValue.length > FIELD_LIMITS[field]) {
    return `${field[0].toUpperCase()}${field.slice(1)} must be ${FIELD_LIMITS[field]} characters or less.`;
  }

  if (field === "email" && !EMAIL_PATTERN.test(trimmedValue)) {
    return "Enter a valid email address.";
  }

  return "";
}

function validateContactForm(formData: FormData) {
  const errors: ContactFieldErrors = {};

  (["name", "email", "subject", "message"] as ContactField[]).forEach((field) => {
    const error = validateContactField(field, getStringValue(formData, field));
    if (error) {
      errors[field] = error;
    }
  });

  return errors;
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [fieldErrors, setFieldErrors] = useState<ContactFieldErrors>({});

  const getFieldClassName = (field: ContactField, extraClass = "") =>
    `${fieldBaseClass} ${fieldErrors[field] ? fieldErrorClass : ""} ${extraClass}`.trim();

  const handleFieldBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.currentTarget.name as ContactField;
    const error = validateContactField(field, e.currentTarget.value);

    setFieldErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      if (error) {
        nextErrors[field] = error;
      } else {
        delete nextErrors[field];
      }
      return nextErrors;
    });
  };

  const handleFieldChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const field = e.currentTarget.name as ContactField;

    if (!fieldErrors[field]) {
      return;
    }

    const error = validateContactField(field, e.currentTarget.value);
    setFieldErrors((currentErrors) => {
      const nextErrors = { ...currentErrors };
      if (error) {
        nextErrors[field] = error;
      } else {
        delete nextErrors[field];
      }
      return nextErrors;
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const nextFieldErrors = validateContactForm(formData);

    setFieldErrors(nextFieldErrors);

    if (Object.keys(nextFieldErrors).length > 0) {
      setErrorMessage("Please fix the highlighted fields before sending.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      name: getStringValue(formData, "name").trim(),
      email: getStringValue(formData, "email").trim(),
      subject: getStringValue(formData, "subject").trim(),
      message: getStringValue(formData, "message").trim(),
      company: formData.get("company"),
    };

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await response.json();

      if (!response.ok) {
        setErrorMessage(
          data?.error || "Something went wrong. Please try again, or email us directly."
        );
        return;
      }

      setIsSuccess(true);
      setFieldErrors({});
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again, or email us directly.");
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

            <form onSubmit={handleSubmit} className="space-y-6 relative z-10" noValidate>
              <div
                aria-hidden="true"
                className="absolute size-0 overflow-hidden opacity-0 pointer-events-none"
              >
                <label htmlFor="company">Company</label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  tabIndex={-1}
                  autoComplete="off"
                />
              </div>

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
                    maxLength={FIELD_LIMITS.name}
                    autoComplete="name"
                    data-clarity-mask="true"
                    aria-invalid={Boolean(fieldErrors.name)}
                    aria-describedby={fieldErrors.name ? "name-error" : undefined}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    className={getFieldClassName("name")}
                    placeholder="Your Name"
                  />
                  {fieldErrors.name && (
                    <p id="name-error" className="text-xs text-red-300" role="alert">
                      {fieldErrors.name}
                    </p>
                  )}
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
                    maxLength={FIELD_LIMITS.email}
                    autoComplete="email"
                    inputMode="email"
                    data-clarity-mask="true"
                    aria-invalid={Boolean(fieldErrors.email)}
                    aria-describedby={fieldErrors.email ? "email-error" : undefined}
                    onBlur={handleFieldBlur}
                    onChange={handleFieldChange}
                    className={getFieldClassName("email")}
                    placeholder="Email Address"
                  />
                  {fieldErrors.email && (
                    <p id="email-error" className="text-xs text-red-300" role="alert">
                      {fieldErrors.email}
                    </p>
                  )}
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
                  maxLength={FIELD_LIMITS.subject}
                  data-clarity-mask="true"
                  aria-invalid={Boolean(fieldErrors.subject)}
                  aria-describedby={fieldErrors.subject ? "subject-error" : undefined}
                  onBlur={handleFieldBlur}
                  onChange={handleFieldChange}
                  className={getFieldClassName("subject")}
                  placeholder="What is this regarding?"
                />
                {fieldErrors.subject && (
                  <p id="subject-error" className="text-xs text-red-300" role="alert">
                    {fieldErrors.subject}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-mono text-slate-400 uppercase tracking-widest">
                  Message
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  maxLength={FIELD_LIMITS.message}
                  rows={5}
                  data-clarity-mask="true"
                  aria-invalid={Boolean(fieldErrors.message)}
                  aria-describedby={fieldErrors.message ? "message-error" : undefined}
                  onBlur={handleFieldBlur}
                  onChange={handleFieldChange}
                  className={getFieldClassName("message", "resize-none")}
                  placeholder="Your message here..."
                />
                {fieldErrors.message && (
                  <p id="message-error" className="text-xs text-red-300" role="alert">
                    {fieldErrors.message}
                  </p>
                )}
              </div>

              {errorMessage && (
                <p
                  role="alert"
                  className="text-sm text-red-300 bg-red-500/10 border border-red-500/20 rounded-xl px-4 py-3"
                >
                  {errorMessage}
                </p>
              )}

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
