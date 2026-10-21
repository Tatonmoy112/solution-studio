"use client";

import { useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  leadFormSchema,
  type LeadFormData,
  SERVICE_OPTIONS,
  BUDGET_OPTIONS,
  TIMELINE_OPTIONS,
} from "@/lib/validation/lead";
import {
  Send,
  Loader2,
  CheckCircle2,
  AlertTriangle,
  RotateCcw,
  Banknote,
  Clock,
  Copy,
  Check,
  ArrowRight,
  ShieldCheck,
} from "lucide-react";
import CustomSelect from "@/components/ui/CustomSelect";

function generateIdempotencyKey(): string {
  if (typeof crypto !== "undefined" && typeof crypto.randomUUID === "function") {
    return `lead_${crypto.randomUUID()}`;
  }
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`;
}

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [confirmedLeadId, setConfirmedLeadId] = useState<string | null>(null);
  const [isCopied, setIsCopied] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    control,
    reset,
    formState: { errors },
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: "",
      email: "",
      companyName: "",
      phone: "",
      services: ["Custom Enterprise Software"],
      budgetRange: "",
      timeline: "",
      message: "",
      website_url_hp: "",
      turnstileToken: "",
    },
  });

  const selectedServices =
    useWatch({
      control,
      name: "services",
    }) || [];

  const selectedBudget =
    useWatch({
      control,
      name: "budgetRange",
    }) || "";

  const selectedTimeline =
    useWatch({
      control,
      name: "timeline",
    }) || "";

  const toggleService = (service: string) => {
    if (selectedServices.includes(service)) {
      if (selectedServices.length > 1) {
        setValue(
          "services",
          selectedServices.filter((s) => s !== service),
          { shouldValidate: true }
        );
      }
    } else {
      setValue("services", [...selectedServices, service], {
        shouldValidate: true,
      });
    }
  };

  const handleCopyId = () => {
    if (confirmedLeadId && typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(confirmedLeadId);
      setIsCopied(true);
      setTimeout(() => setIsCopied(false), 2500);
    }
  };

  const onSubmit = async (data: LeadFormData) => {
    setIsSubmitting(true);
    setSubmitError(null);

    // Client-side idempotency token
    const idempotencyKey = generateIdempotencyKey();

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "X-Idempotency-Key": idempotencyKey,
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(
          result.error ||
            "Unable to submit inquiry at this moment. Please email us directly."
        );
      }

      setSubmitSuccess(true);
      setConfirmedLeadId(result.leadId || idempotencyKey);
      reset();
    } catch (err: unknown) {
      const message =
        err instanceof Error ? err.message : "An unexpected error occurred.";
      setSubmitError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitSuccess) {
    return (
      <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-xl text-center space-y-6 sm:space-y-7 relative overflow-hidden">
        {/* Ambient Top Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-32 bg-gradient-to-b from-[#00BBA7]/12 via-[#013AFF]/5 to-transparent blur-2xl pointer-events-none" />

        {/* Status Badge & Animated Check Icon */}
        <div className="relative z-10 space-y-3.5">
          <div className="relative mx-auto w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <div className="absolute inset-0 rounded-2xl bg-[#00BBA7]/20 animate-ping opacity-25" />
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-[#00BBA7]/15 to-[#00BBA7]/5 border border-[#00BBA7]/30 text-[#00BBA7] flex items-center justify-center shadow-inner">
              <CheckCircle2 size={36} className="sm:w-10 sm:h-10 text-[#00BBA7]" />
            </div>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#00BBA7]/10 border border-[#00BBA7]/20 text-[#009988] text-[11px] font-semibold uppercase tracking-wider font-mono">
            <ShieldCheck size={13} />
            <span>Transmission Verified & Encrypted</span>
          </div>
        </div>

        {/* Headline & Body */}
        <div className="relative z-10 space-y-2 max-w-lg mx-auto">
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#111311] tracking-tight">
            Inquiry Successfully Received
          </h3>
          <p className="text-xs sm:text-sm text-[#4a524a] leading-relaxed">
            Thank you for reaching out. Your project specifications have been securely recorded. Our architecture team will review your requirements and respond within <strong>24 business hours</strong>.
          </p>
        </div>

        {/* Reference ID Tracking Pill with One-Click Copy */}
        {confirmedLeadId && (
          <div className="relative z-10 p-3 sm:p-3.5 bg-neutral-50/80 rounded-2xl border border-black/8 flex items-center justify-between gap-3 max-w-md mx-auto text-left shadow-2xs">
            <div className="min-w-0 flex-1">
              <span className="text-[10px] uppercase font-mono tracking-wider text-[#6e766e] block font-medium">
                Tracking Reference
              </span>
              <span className="font-mono text-xs font-semibold text-[#111311] truncate block">
                {confirmedLeadId}
              </span>
            </div>
            <button
              type="button"
              onClick={handleCopyId}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-white border border-black/10 hover:border-black/20 text-xs font-medium text-[#111311] transition-all cursor-pointer shrink-0 active:scale-95 shadow-2xs hover:bg-neutral-50"
            >
              {isCopied ? (
                <>
                  <Check size={13} className="text-[#00BBA7]" />
                  <span className="text-[#00BBA7] font-semibold">Copied</span>
                </>
              ) : (
                <>
                  <Copy size={13} className="text-[#6e766e]" />
                  <span>Copy</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* 3-Step Milestone Micro-Tracker */}
        <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-neutral-50/60 border border-black/6 text-left max-w-md mx-auto space-y-3">
          <span className="text-[11px] font-mono uppercase font-bold text-[#111311] tracking-wider block">
            What Happens Next
          </span>
          <div className="space-y-2.5 text-xs text-[#4a524a]">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#00BBA7] shrink-0" />
              <span className="font-medium text-[#111311]">Encrypted Dispatch:</span>
              <span className="text-[#6e766e]">Logged to Database & Verified</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#013AFF] shrink-0 animate-pulse" />
              <span className="font-medium text-[#111311]">Architect Assessment:</span>
              <span className="text-[#6e766e]">Within 24 business hours</span>
            </div>
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-neutral-300 shrink-0" />
              <span className="font-medium text-[#111311]">Technical Scope:</span>
              <span className="text-[#6e766e]">Discovery call & proposal</span>
            </div>
          </div>
        </div>

        {/* Redesigned Interactive Action Bar */}
        <div className="relative z-10 pt-2 flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
          <button
            type="button"
            onClick={() => {
              setSubmitSuccess(false);
              setConfirmedLeadId(null);
            }}
            className="w-full sm:w-auto flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 active:scale-[0.98] text-white text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm hover:shadow-md cursor-pointer group"
          >
            <RotateCcw
              size={15}
              className="group-hover:-rotate-90 transition-transform duration-300 text-[#00BBA7]"
            />
            <span>Submit Another Inquiry</span>
          </button>

          <a
            href="#services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl bg-white hover:bg-neutral-50 active:scale-[0.98] border border-black/10 hover:border-black/20 text-xs font-semibold uppercase tracking-wider text-[#111311] transition-all duration-200 cursor-pointer shadow-2xs"
          >
            <span>Explore Services</span>
            <ArrowRight size={14} className="text-[#013AFF]" />
          </a>
        </div>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="p-5 sm:p-8 md:p-10 rounded-2xl sm:rounded-3xl bg-white border border-black/10 shadow-xl space-y-5 sm:space-y-6"
    >
      {/* Honeypot field - Hidden from legitimate users */}
      <div className="hidden" aria-hidden="true">
        <label htmlFor="website_url_hp">Leave this empty</label>
        <input
          id="website_url_hp"
          type="text"
          tabIndex={-1}
          autoComplete="off"
          {...register("website_url_hp")}
        />
      </div>

      {/* Services Selector (Pills) */}
      <div className="space-y-2.5 sm:space-y-3">
        <label className="block text-xs font-semibold uppercase tracking-wider text-[#181a18] font-mono">
          Services Required *
        </label>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {SERVICE_OPTIONS.map((service) => {
            const isSelected = selectedServices.includes(service);
            return (
              <button
                key={service}
                type="button"
                onClick={() => toggleService(service)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-xl text-xs font-medium transition-all duration-200 border cursor-pointer ${
                  isSelected
                    ? "bg-[#013AFF] text-white border-[#013AFF] shadow-sm"
                    : "bg-neutral-50 text-[#3a423a] border-black/10 hover:border-black/20 hover:bg-neutral-100"
                }`}
              >
                {service}
              </button>
            );
          })}
        </div>
        {errors.services && (
          <p className="text-xs text-red-600 font-medium">{errors.services.message}</p>
        )}
      </div>

      {/* Name and Email */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div className="space-y-1.5">
          <label htmlFor="name" className="block text-xs font-semibold text-[#181a18]">
            Your Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="e.g. Alex Henderson"
            className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-base sm:text-sm bg-neutral-50/50 text-[#111311] placeholder:text-[#889088] focus:outline-none focus:ring-2 focus:ring-[#013AFF]/30 transition-all ${
              errors.name ? "border-red-500 bg-red-50/20" : "border-black/10 focus:border-[#013AFF]"
            }`}
            {...register("name")}
          />
          {errors.name && (
            <p className="text-xs text-red-600 font-medium">{errors.name.message}</p>
          )}
        </div>

        <div className="space-y-1.5">
          <label htmlFor="email" className="block text-xs font-semibold text-[#181a18]">
            Business Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="alex@company.com"
            className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-base sm:text-sm bg-neutral-50/50 text-[#111311] placeholder:text-[#889088] focus:outline-none focus:ring-2 focus:ring-[#013AFF]/30 transition-all ${
              errors.email ? "border-red-500 bg-red-50/20" : "border-black/10 focus:border-[#013AFF]"
            }`}
            {...register("email")}
          />
          {errors.email && (
            <p className="text-xs text-red-600 font-medium">{errors.email.message}</p>
          )}
        </div>
      </div>

      {/* Company Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div className="space-y-1.5">
          <label htmlFor="companyName" className="block text-xs font-semibold text-[#181a18]">
            Company / Organization (Optional)
          </label>
          <input
            id="companyName"
            type="text"
            placeholder="Acme Corp"
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-black/10 text-base sm:text-sm bg-neutral-50/50 text-[#111311] placeholder:text-[#889088] focus:outline-none focus:border-[#013AFF] focus:ring-2 focus:ring-[#013AFF]/30 transition-all"
            {...register("companyName")}
          />
        </div>

        <div className="space-y-1.5">
          <label htmlFor="phone" className="block text-xs font-semibold text-[#181a18]">
            Phone / WhatsApp (Optional)
          </label>
          <input
            id="phone"
            type="tel"
            placeholder="+1 555-0199 or +880..."
            className="w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border border-black/10 text-base sm:text-sm bg-neutral-50/50 text-[#111311] placeholder:text-[#889088] focus:outline-none focus:border-[#013AFF] focus:ring-2 focus:ring-[#013AFF]/30 transition-all"
            {...register("phone")}
          />
        </div>
      </div>

      {/* Budget & Timeline Custom Selectors */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 sm:gap-4">
        <div>
          <input type="hidden" {...register("budgetRange")} />
          <CustomSelect
            id="budgetRange"
            label="Estimated Budget (BDT)"
            placeholder="Select Budget Range (BDT)"
            options={BUDGET_OPTIONS}
            value={selectedBudget}
            onChange={(val) =>
              setValue("budgetRange", val, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            icon={<Banknote size={16} />}
            error={errors.budgetRange?.message}
          />
        </div>

        <div>
          <input type="hidden" {...register("timeline")} />
          <CustomSelect
            id="timeline"
            label="Target Timeline"
            placeholder="Select Target Timeline"
            options={TIMELINE_OPTIONS}
            value={selectedTimeline}
            onChange={(val) =>
              setValue("timeline", val, {
                shouldValidate: true,
                shouldDirty: true,
              })
            }
            icon={<Clock size={16} />}
            error={errors.timeline?.message}
          />
        </div>
      </div>

      {/* Message Textarea */}
      <div className="space-y-1.5">
        <label htmlFor="message" className="block text-xs font-semibold text-[#181a18]">
          Project Overview & Current Problem *
        </label>
        <textarea
          id="message"
          rows={4}
          placeholder="Describe your domain, current operational challenges, and what kind of system you are looking to build..."
          className={`w-full px-3.5 py-2.5 sm:px-4 sm:py-3 rounded-xl border text-base sm:text-sm bg-neutral-50/50 text-[#111311] placeholder:text-[#889088] focus:outline-none focus:ring-2 focus:ring-[#013AFF]/30 transition-all resize-y ${
            errors.message ? "border-red-500 bg-red-50/20" : "border-black/10 focus:border-[#013AFF]"
          }`}
          {...register("message")}
        />
        {errors.message && (
          <p className="text-xs text-red-600 font-medium">{errors.message.message}</p>
        )}
      </div>

      {/* Submission Error Banner */}
      {submitError && (
        <div className="p-3.5 sm:p-4 rounded-xl bg-red-50 border border-red-200 flex items-start gap-3 text-red-700 text-xs">
          <AlertTriangle size={16} className="shrink-0 mt-0.5 text-red-600" />
          <span>{submitError}</span>
        </div>
      )}

      {/* Submit Action */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="w-full min-h-[48px] py-3.5 sm:py-4 px-6 rounded-xl bg-[#013AFF] hover:bg-[#002ECC] text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-200 shadow-md hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer active:scale-[0.99]"
      >
        {isSubmitting ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Encrypting & Dispatching...</span>
          </>
        ) : (
          <>
            <span>Submit Project Inquiry</span>
            <Send size={16} />
          </>
        )}
      </button>

      <p className="text-[11px] text-center text-[#6e766e] leading-normal">
        We respect your privacy. Inquiries are stored under strict database encryption and never shared.
      </p>
    </form>
  );
}
