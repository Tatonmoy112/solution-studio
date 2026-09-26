import Image from "next/image";
import { aboutTeamImageContent } from "../about.content";

export function AboutTeamImageSection() {
  const { src, alt } = aboutTeamImageContent;

  return (
    <section
      aria-label="Solution Studio team"
      className="relative h-[clamp(240px,35vw,400px)] w-full overflow-hidden bg-[#aab9b2]"
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="100vw"
          className="object-cover object-center"
        />
      ) : (
        <div
          aria-hidden="true"
          data-slot="about-team-image-placeholder"
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_17%_80%,rgba(97,132,100,0.36),transparent_37%),linear-gradient(105deg,#d7e0d8_0%,#96aaa5_48%,#dce2dc_100%)]"
        />
      )}
    </section>
  );
}
