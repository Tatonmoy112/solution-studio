import { z } from "zod";

export const BUDGET_OPTIONS = [
  "৳50,000 – ৳1,50,000",
  "৳1,50,000 – ৳5,00,000",
  "৳5,00,000 – ৳15,00,000",
  "৳15,00,000+ (Enterprise)",
  "Flexible / To be discussed",
] as const;

export const TIMELINE_OPTIONS = [
  "Immediate (< 1 month)",
  "1 - 3 months",
  "3 - 6 months",
  "Flexible / Exploring Roadmaps",
] as const;

export const SERVICE_OPTIONS = [
  "Custom Enterprise Software",
  "ERP & Internal Systems",
  "Web Platform / SaaS",
  "Mobile App Development",
  "Cloud & DevOps Architecture",
  "AI & Automation Integration",
] as const;

export const leadFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(120, "Name must be under 120 characters"),
  email: z
    .string()
    .trim()
    .email("Please provide a valid business email address")
    .max(255, "Email must be under 255 characters"),
  companyName: z
    .string()
    .trim()
    .max(150, "Company name must be under 150 characters")
    .optional()
    .or(z.literal("")),
  phone: z
    .string()
    .trim()
    .max(50, "Phone number is too long")
    .optional()
    .or(z.literal("")),
  services: z
    .array(z.string())
    .min(1, "Please select at least one service of interest"),
  budgetRange: z
    .string()
    .optional()
    .or(z.literal("")),
  timeline: z
    .string()
    .optional()
    .or(z.literal("")),
  message: z
    .string()
    .trim()
    .min(10, "Please provide at least a brief summary (minimum 10 characters)")
    .max(5000, "Message cannot exceed 5,000 characters"),
  // Honeypot field (hidden in UI)
  website_url_hp: z.string().optional().default(""),
  // Cloudflare Turnstile token
  turnstileToken: z
    .string({
      required_error: "Please complete the security verification challenge before submitting.",
    })
    .min(1, "Please complete the security verification challenge before submitting."),
});

export type LeadFormData = z.infer<typeof leadFormSchema>;

