import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from "react-icons/fa6";

type SocialLink = {
  name: string;
  icon: "facebook" | "instagram" | "x" | "youtube";
  href: string | null;
};

const icons = {
  facebook: FaFacebookF,
  instagram: FaInstagram,
  x: FaXTwitter,
  youtube: FaYoutube,
} as const;

type FooterSocialLinksProps = {
  links: readonly SocialLink[];
};

export function FooterSocialLinks({ links }: FooterSocialLinksProps) {
  return (
    <div aria-label="Social profiles" className="flex items-center gap-3">
      {links.map((item) => {
        const Icon = icons[item.icon];
        const className =
          "grid size-8 place-items-center rounded-[10px] border border-white/25 bg-white/5 text-white/80";

        return item.href ? (
          <a
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className={`${className} transition-colors hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white`}
          >
            <Icon aria-hidden="true" className="size-4" />
          </a>
        ) : (
          <span
            key={item.name}
            title={`${item.name} profile link coming soon`}
            data-slot="footer-social-link-placeholder"
            className={className}
          >
            <Icon aria-hidden="true" className="size-4" />
          </span>
        );
      })}
    </div>
  );
}
