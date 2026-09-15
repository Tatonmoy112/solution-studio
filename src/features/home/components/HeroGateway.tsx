type HeroGatewayProps = {
  word: string;
};

export function HeroGateway({ word }: HeroGatewayProps) {
  return (
    <span className="relative inline-flex min-h-[clamp(56px,4.8vw,76px)] max-w-full items-center justify-center px-[10px] leading-none min-[1200px]:min-w-[278px]">
      <span className="relative z-10">{word}</span>
      <span aria-hidden="true" className="absolute -left-[11px] -right-[11px] top-0 z-0 h-px bg-white/60" />
      <span aria-hidden="true" className="absolute -left-[11px] -right-[11px] bottom-0 z-0 h-px bg-white/60" />
      <span aria-hidden="true" className="absolute top-0 bottom-0 left-0 z-0 w-px bg-white/60" />
      <span aria-hidden="true" className="absolute top-0 right-0 bottom-0 z-0 w-px bg-white/60" />
      <span aria-hidden="true" className="absolute -top-[5px] -left-[5px] z-20 size-[9px] rounded-full bg-white" />
      <span aria-hidden="true" className="absolute -top-[5px] -right-[5px] z-20 size-[9px] rounded-full bg-white" />
      <span aria-hidden="true" className="absolute -bottom-[5px] -left-[5px] z-20 size-[9px] rounded-full bg-white" />
      <span aria-hidden="true" className="absolute -bottom-[5px] -right-[5px] z-20 size-[9px] rounded-full bg-white" />
    </span>
  );
}
