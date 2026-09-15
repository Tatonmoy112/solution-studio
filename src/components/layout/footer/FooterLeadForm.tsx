import { ArrowUpRight } from "lucide-react";

const fields = [
  { label: "Your name", name: "name", type: "text", autoComplete: "name" },
  {
    label: "Email address",
    name: "email",
    type: "email",
    autoComplete: "email",
  },
  {
    label: "Company",
    name: "company",
    type: "text",
    autoComplete: "organization",
  },
] as const;

export function FooterLeadForm() {
  return (
    <div className="flex w-full max-w-[1082px] flex-col items-center gap-3">
      <form
        aria-label="Start a project"
        aria-describedby="footer-form-status"
        className="w-full rounded-[20px] border border-white/20 bg-white/10 px-6 py-4 backdrop-blur-sm"
      >
        <fieldset
          disabled
          className="flex min-w-0 flex-col items-stretch gap-4 lg:flex-row lg:items-center"
        >
          <legend className="sr-only">Start a project</legend>
          <div className="grid min-w-0 flex-1 gap-[15px] sm:grid-cols-3 lg:max-w-[837px]">
            {fields.map((field) => (
              <div key={field.name} className="flex min-w-0 flex-col gap-1.5">
                <label
                  htmlFor={`footer-${field.name}`}
                  className="flex min-h-[19px] items-center font-accent text-xs font-medium leading-none text-white/85"
                >
                  {field.label}
                </label>
                <input
                  id={`footer-${field.name}`}
                  name={field.name}
                  type={field.type}
                  autoComplete={field.autoComplete}
                  className="h-[30px] min-w-0 rounded-md border border-white/25 bg-white/5 px-2 font-sans text-sm text-white disabled:opacity-100"
                />
              </div>
            ))}
          </div>
          <button
            type="submit"
            className="inline-flex h-[44px] w-full shrink-0 items-center justify-center gap-2 rounded-[20px] bg-white px-4 font-sans text-sm font-bold leading-none text-[#0d1b31] disabled:opacity-100 lg:w-[181px]"
          >
            Send inquiry
            <ArrowUpRight aria-hidden="true" className="size-5" />
          </button>
        </fieldset>
      </form>
      <p
        id="footer-form-status"
        className="text-center font-sans text-xs leading-4 text-white/70"
      >
        Form submissions will be available when the contact service is connected.
      </p>
    </div>
  );
}
