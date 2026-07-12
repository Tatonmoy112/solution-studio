# Frontend Forms & Submission Workflow Report

## Tech Stack Summary
- Framework: Next.js `16.2.6`, React `19.2.4`, TypeScript
- Routing: Next.js App Router under `src/app`
- Form handling library: No dedicated form library found. Uses native HTML form submission handling with React `useState` and `FormData`.
- Current env/config setup: README documents `.env.local` with `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY`. No `.env*` files were found in the repo root during audit. `Contact.tsx` also includes a hard-coded fallback Web3Forms access key.

## Forms Inventory

### Form: Contact
- File path:
  - `src/components/sections/Contact.tsx`
  - Rendered from `src/app/page.tsx`
- Page/route:
  - `/`
  - Section anchor: `#contact`
- Fields:

  | Field name | Type | Required | Validation | Notes |
  |---|---|---|---|---|
  | `name` | `text` | Yes | Native HTML `required` only | Placeholder: `Your Name` |
  | `email` | `email` | Yes | Native HTML `required`; browser email validation via `type="email"` | Placeholder: `Email Address` |
  | `subject` | `text` | Yes | Native HTML `required` only | Placeholder: `What is this regarding?` |
  | `message` | `textarea` | Yes | Native HTML `required` only | `rows={5}`; placeholder: `Your message here...` |

- Form library/approach used:
  - Native `<form onSubmit={handleSubmit}>`
  - React `useState` for `isSubmitting` and `isSuccess`
  - `new FormData(e.currentTarget)` to collect values

- Current submit behavior:
  - Calls `e.preventDefault()`
  - Sets `isSubmitting` to `true`
  - Builds `FormData`
  - Appends non-DOM field: `access_key`
  - Submits directly to external service:
    - `fetch("https://api.web3forms.com/submit", { method: "POST", body: formData })`
  - If `data.success` is truthy:
    - Sets `isSuccess` to `true`
    - Resets the HTML form with `(e.target as HTMLFormElement).reset()`
  - In `finally`:
    - Sets `isSubmitting` to `false`
    - Clears success state after 5 seconds
  - Errors are only logged with `console.error("Error submitting form:", error)`
  - There is no visible error state/message.
  - If Web3Forms responds successfully at HTTP level but `data.success` is false, no user-facing error is shown.

- Hidden or non-obvious fields:
  - `access_key` is appended programmatically:
    - `process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY || "4477b1bf-0e5f-4b6c-958c-3e0d8e8c37b9"`
  - No `<input type="hidden">`
  - No honeypot field
  - No UTM/source tracking fields found

- Notes/issues:
  - Submit button has loading/success text states:
    - `Sending...`
    - `Message Sent!`
    - `Send Message`
  - Button is disabled while `isSubmitting`.
  - No API route is used.
  - No Supabase integration exists yet.
  - No regex, min length, max length, pattern, schema validation, or custom client validation found.

## Cross-Form Inconsistencies
- Only one user-facing form was found, so there are no cross-form naming or validation inconsistencies.
- Within the current setup, one notable configuration inconsistency exists:
  - README says to configure `NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY` in `.env.local`.
  - The code also includes a hard-coded fallback access key in `Contact.tsx`.

## Planned But Not Yet Built
- No TODO/FIXME/commented-out future form implementations were found.
- No newsletter, consultation request, project inquiry, service inquiry, file upload, or signup form exists in the current frontend code.
- Project data mentions features like "Feedback and contact submission" for portfolio projects, but those are descriptions of showcased projects, not forms implemented in this app.

## Open Questions / Unclear Areas
- Should the hard-coded Web3Forms fallback key be removed before adding Supabase?
- Should failed Web3Forms/Supabase submissions show a user-facing error state?
- Should Supabase receive the exact current field names: `name`, `email`, `subject`, `message`, plus a derived/source field for `#contact` or page route?
