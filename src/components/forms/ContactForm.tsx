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
      <div className="p-6 sm:p-10 md:p-12 rounded-2xl sm:rounded-3xl bg-white border border-[#00BBA7]/30 shadow-xl text-center space-y-5 sm:space-y-6">
        <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#00BBA7]/10 text-[#00BBA7] mx-auto flex items-center justify-center">
          <CheckCircle2 size={32} className="sm:w-9 sm:h-9" />
        </div>
        <div className="space-y-2">
          <h3 className="text-xl sm:text-2xl font-bold text-[#111311] tracking-tight">
            Inquiry Successfully Received
          </h3>
          <p className="text-xs sm:text-sm text-[#4a524a] max-w-md mx-auto leading-relaxed">
            Thank you for reaching out. Your project specifications have been securely recorded. Our architecture team will review your requirements and respond within <strong>24 business hours</strong>.
          </p>
        </div>

        {confirmedLeadId && (
          <div className="p-3 bg-neutral-100 rounded-xl font-mono text-xs text-[#6e766e] max-w-xs mx-auto break-all">
            Reference ID: {confirmedLeadId.slice(0, 16)}
          </div>
        )}

        <button
          type="button"
          onClick={() => setSubmitSuccess(false)}
          className="inline-flex items-center gap-2 text-xs font-semibold text-[#013AFF] hover:underline cursor-pointer py-1.5"
        >
          <RotateCcw size={14} />
          <span>Submit another inquiry</span>
        </button>
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

