export function HeroBackground() {
  return (
    <div
      aria-hidden="true"
      data-slot="hero-media-placeholder"
      className="absolute inset-0 overflow-hidden bg-[#020914]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_64%_35%,rgba(0,111,186,0.42),transparent_32%),radial-gradient(circle_at_18%_18%,rgba(0,91,154,0.22),transparent_25%),linear-gradient(135deg,#020711_0%,#06172b_52%,#020914_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(1,7,17,0.76)_0%,rgba(1,7,17,0.38)_50%,rgba(1,7,17,0.18)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#020914]/80 to-transparent" />
    </div>
  );
}
