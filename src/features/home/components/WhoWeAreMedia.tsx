import Image from "next/image";

type WhoWeAreMediaProps = {
  alt: string;
  description: string;
  src: string | null;
  title: string;
};

export function WhoWeAreMedia({
  alt,
  description,
  src,
  title,
}: WhoWeAreMediaProps) {
  return (
    <div className="relative aspect-[663/578] w-full max-w-[663px] overflow-hidden rounded-[20px] bg-[#07192c]">
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(min-width: 1280px) 663px, (min-width: 640px) 80vw, 100vw"
          className="object-cover"
        />
      ) : (
        <div
          aria-hidden="true"
          data-slot="who-we-are-image-placeholder"
          className="absolute inset-0 bg-[radial-gradient(circle_at_65%_28%,rgba(0,111,186,0.62),transparent_30%),linear-gradient(145deg,#0c2d4c_0%,#071421_48%,#102238_100%)]"
        >
          <div className="absolute inset-0 bg-[linear-gradient(125deg,transparent_35%,rgba(255,255,255,0.08)_36%,transparent_37%)] bg-[length:42px_42px]" />
        </div>
      )}

      <div className="absolute inset-x-5 bottom-5 flex flex-col gap-1 rounded-[20px] border border-white/25 bg-[#102238]/75 px-4 py-4 text-white backdrop-blur-md">
        <p className="text-base font-bold leading-6">{title}</p>
        <p className="text-sm leading-5 text-white/80">{description}</p>
      </div>
    </div>
  );
}
