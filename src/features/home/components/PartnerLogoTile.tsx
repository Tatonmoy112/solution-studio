import Image from "next/image";

type PartnerLogoTileProps = {
  name: string;
  src: string | null;
};

export function PartnerLogoTile({ name, src }: PartnerLogoTileProps) {
  return (
    <div className="relative grid h-[125px] w-[150px] shrink-0 place-items-center overflow-hidden bg-[#151b27]/75">
      {src ? (
        <Image
          src={src}
          alt={`${name} logo`}
          fill
          sizes="150px"
          className="object-contain p-4"
        />
      ) : (
        <span
          data-slot="trusted-partner-logo-placeholder"
          className="px-3 text-center font-sans text-base font-semibold leading-5 text-white/70"
        >
          {name}
        </span>
      )}
    </div>
  );
}
