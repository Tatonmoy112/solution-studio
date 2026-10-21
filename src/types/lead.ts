export type NotificationStatus = "pending" | "sent" | "failed";

export interface LeadSubmission {
  id?: string;
  name: string;
  email: string;
  companyName?: string;
  phone?: string;
  services: string[];
  budgetRange?: string;
  timeline?: string;
  message: string;
  ipHash?: string;
  idempotencyKey?: string;
  turnstileToken?: string;
  notificationStatus?: NotificationStatus;
  notificationError?: string;
  createdAt?: string;
}

export interface LeadApiResponse {
  success: boolean;
  message?: string;
  error?: string;
  leadId?: string;
  details?: Record<string, string[]>;
}

