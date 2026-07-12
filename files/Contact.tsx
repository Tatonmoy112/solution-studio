"use client";

import { useState } from "react";

// NOTE: This is a reconstruction based on the audit report, not your original
// file — I don't have your actual JSX/styling. Merge the logic below (state,
// handleSubmit, the honeypot field, and the error message block) into your
// existing Contact.tsx rather than overwriting it wholesale, so you keep your
// real markup/classes/design.

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    const formData = new FormData(e.currentTarget);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      // honeypot — must stay empty; bots that auto-fill every field will trip it
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
          data?.error === "Too many submissions. Please try again in a few minutes."
            ? data.error
            : "Something went wrong. Please try again, or email us directly."
        );
        return;
      }

      setIsSuccess(true);
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      setErrorMessage("Something went wrong. Please try again, or email us directly.");
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setIsSuccess(false), 5000);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      {/* Honeypot field: visually hidden from real users, invisible to screen
          readers, but present in the DOM for bots that fill every field. */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: 0,
          height: 0,
          overflow: "hidden",
          opacity: 0,
          pointerEvents: "none",
        }}
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

      <input type="text" name="name" placeholder="Your Name" required />
      <input type="email" name="email" placeholder="Email Address" required />
      <input type="text" name="subject" placeholder="What is this regarding?" required />
      <textarea name="message" rows={5} placeholder="Your message here..." required />

      {errorMessage && (
        <p role="alert" style={{ color: "red" }}>
          {errorMessage}
        </p>
      )}

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Sending..." : isSuccess ? "Message Sent!" : "Send Message"}
      </button>
    </form>
  );
}
