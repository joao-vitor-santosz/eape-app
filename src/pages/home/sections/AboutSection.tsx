import aboutImage from '../../../assets/images/sala-de-espera-1.jpeg'
import { TicTacToeDoodle } from '../../../components/decorations/Doodles'
import { Wave } from '../../../components/decorations/Wave'
import { ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { aboutContent } from '../../../content/home'

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="on-dark relative scroll-mt-24 bg-primary"
    >
      <Container className="relative">
        <div className="grid items-center gap-12 pb-20 lg:grid-cols-2 lg:gap-[30px] lg:pb-28">
          <Reveal>
            <img
              src={aboutImage}
              alt="Recepção e sala de espera da EAPE, com poltronas e balcão de atendimento"
              width={899}
              height={1599}
              loading="lazy"
              className="mx-auto aspect-[4/5] w-full max-w-[460px] rounded-3xl object-cover object-[50%_65%]"
            />
          </Reveal>

          <div className="relative">
            <TicTacToeDoodle className="pointer-events-none absolute top-[42%] right-[18%] w-[90px] -rotate-12 text-white/10" />
            <Reveal>
              <SectionHeading
                id="sobre-titulo"
                eyebrow="Sobre nós"
                title="Conheça a EAPE"
                tone="light"
                align="left"
                uppercaseEyebrow
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6 max-w-[570px] text-white/85">{aboutContent.text}</p>
            </Reveal>
            <Reveal delay={300}>
              <ButtonLink href="/#contato" variant="cyan" className="mt-10">
                Fale conosco
              </ButtonLink>
            </Reveal>
          </div>
        </div>
      </Container>

      <Wave variant="sectionBottom" className="h-[50px] text-white lg:h-[90px]" />
    </section>
  )
}
