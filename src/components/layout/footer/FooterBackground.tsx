import Image from "next/image";

type FooterBackgroundProps = {
  src: string | null;
};

export function FooterBackground({ src }: FooterBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      data-slot={src ? undefined : "footer-cta-background-placeholder"}
      className="absolute inset-0 overflow-hidden rounded-t-[20px] bg-[#091221] bg-[radial-gradient(ellipse_70%_95%_at_30%_-35%,#34405c_0%,#1b2a42_55%,transparent_56%),radial-gradient(ellipse_70%_100%_at_100%_100%,#0b2a4b_0%,transparent_75%),linear-gradient(115deg,#090d16_0%,#0d1b31_100%)]"
    >
      {src ? (
        <Image
          src={src}
          alt=""
          fill
          sizes="(min-width: 1823px) 1823px, 100vw"
          className="object-cover"
        />
      ) : null}
    </div>
  );
}
