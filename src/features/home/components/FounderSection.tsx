import { Container } from "@/components/layout/Container";
import { Heading } from "@/components/ui/typography/Heading";
import { Text } from "@/components/ui/typography/Text";
import { homeFounderContent } from "../home.content";

export function FounderSection() {
  const { name, label, statement } = homeFounderContent;

  return (
    <section
      aria-labelledby="founder-name"
      className="grid w-full place-items-center overflow-hidden bg-background px-5 py-[clamp(72px,8vw,120px)] sm:px-8 min-[1700px]:px-0 min-[1700px]:py-0"
    >
      <Container className="relative flex min-w-0 flex-col gap-12 min-[1700px]:min-h-[739px]">
        <Heading
          as="h2"
          id="founder-name"
          variant="founderName"
          className="relative z-0 flex min-w-0 flex-col text-foreground/80 min-[1700px]:text-[270px]"
        >
          <span className="block min-[1700px]:absolute min-[1700px]:left-0 min-[1700px]:top-0 min-[1700px]:h-[282px] min-[1700px]:w-[720px]">
            {name.first}
          </span>
          <span className="block min-[1700px]:absolute min-[1700px]:left-[740px] min-[1700px]:top-[99px] min-[1700px]:h-[282px] min-[1700px]:w-[880px]">
            {name.last}
          </span>
        </Heading>

        <div className="relative z-20 grid min-w-0 items-start gap-10 min-[1024px]:grid-cols-[minmax(0,272px)_minmax(0,657px)] min-[1700px]:absolute min-[1700px]:right-1 min-[1700px]:top-[487px] min-[1700px]:h-[252px] min-[1700px]:w-[1029px] min-[1700px]:gap-[99px]">
          <div className="relative h-[73px] w-full max-w-[272px]">
            <span
              aria-hidden="true"
              className="absolute left-0 top-0 h-[63px] w-[140px] rotate-[-17.7deg] rounded-[50%] border border-brand"
            />
            <span
              aria-hidden="true"
              className="absolute left-[10.5px] top-0 h-[46px] w-[127px] rotate-[-22.91deg] rounded-[50%] border border-brand"
            />
            <Heading
              as="h3"
              variant="founderLabel"
              className="absolute left-[72px] top-2 z-10 whitespace-nowrap"
            >
              {label}
            </Heading>
          </div>

          <Text
            variant="feature"
            className="w-full max-w-[657px] text-justify text-muted min-[1700px]:h-[252px]"
          >
            {statement}
          </Text>
        </div>
      </Container>
    </section>
  );
}
