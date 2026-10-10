import heroImage from '../../../assets/images/consultorio-1.jpeg'
import {
  BlocksDoodle,
  CloudShape,
  StarsDoodle,
  SunDoodle,
} from '../../../components/decorations/Doodles'
import { Wave } from '../../../components/decorations/Wave'
import { ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { siteInfo } from '../../../content/site'
import { heroContent } from '../../../content/home'

export function HeroSection() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-cream">
      <SunDoodle className="pointer-events-none absolute top-0 -left-1 hidden w-[105px] text-navy motion-safe:animate-spin-slow lg:block" />
      <BlocksDoodle className="pointer-events-none absolute top-2 right-[10%] z-20 hidden w-[100px] text-pink motion-safe:animate-flykite lg:block" />
      <CloudShape className="pointer-events-none absolute bottom-[2%] left-[29%] z-20 hidden w-[340px] text-white motion-safe:animate-flykite lg:block" />

      <Container size="wide" className="relative">
        <div className="grid items-center gap-12 pt-14 pb-[min(30vw,180px)] lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-10 lg:pt-20 lg:pb-14">
          <div className="relative z-10 max-w-[820px]">
            <Reveal>
              <h1
                id="hero-titulo"
                className="text-[40px]/[1.15] sm:text-[52px]/[1.15] xl:text-[56px]/[1.15] 2xl:text-[66px]/[1.2]"
              >
                {siteInfo.fullName}
              </h1>
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-7 max-w-[480px] text-base/[30px]">{heroContent.intro}</p>
            </Reveal>
            <Reveal delay={300}>
              <ButtonLink href="/#sobre" variant="cyan" className="mt-10 lg:mt-24">
                Conheça a EAPE
              </ButtonLink>
            </Reveal>
            <StarsDoodle className="pointer-events-none absolute right-[-40px] bottom-[110px] hidden w-[80px] text-yellow motion-safe:animate-zoominout xl:block" />
          </div>

          <Reveal delay={200} className="relative z-10 justify-self-center lg:justify-self-end">
            <img
              src={heroImage}
              alt="Consultório da EAPE com estante de brinquedos, jogos e livros infantis"
              width={675}
              height={675}
              fetchPriority="high"
              className="aspect-square w-[min(86vw,420px)] rounded-full object-cover object-[4%_50%] lg:w-[480px] xl:w-[600px] 2xl:w-[675px]"
            />
          </Reveal>
        </div>
      </Container>

      <Wave
        variant="heroBottom"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-[120px] text-primary sm:h-[200px] lg:h-[340px]"
      />
    </section>
  )
}
