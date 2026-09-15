import { ClientLogos } from "@/components/shared/ClientLogos";
import { homeTrustedTeamsContent } from "../home.content";

export function TrustedTeamsSection() {
  const { title, logos } = homeTrustedTeamsContent;

  return (
    <section
      aria-labelledby="trusted-teams-title"
      className="flex min-h-[250px] w-full flex-col items-center gap-[60px] border-y border-nav-border bg-[#f8fafc] px-[clamp(20px,5.2vw,100px)] py-[60px]"
    >
      <div className="flex h-6 w-full max-w-[1720px] items-center justify-center">
        <h2
          id="trusted-teams-title"
          className="text-center font-mono text-base font-normal leading-none tracking-normal uppercase text-foreground"
        >
          {title}
        </h2>
      </div>

      <ClientLogos logos={logos} />
    </section>
  );
}
