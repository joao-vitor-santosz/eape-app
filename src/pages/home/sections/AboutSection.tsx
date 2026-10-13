import { ArrowRight, Star } from 'lucide-react'
import logoImage from '../../../assets/images/logo-1.jpeg'
import { Arcs } from '../../../components/decorations/Arcs'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { AudienceChips } from '../../../components/ui/AudienceChips'
import { ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { aboutContent, audienceContent } from '../../../content/home'
import { siteInfo } from '../../../content/site'

export function AboutSection() {
  return (
    <section
      id="sobre"
      aria-labelledby="sobre-titulo"
      className="on-dark relative scroll-mt-24 overflow-hidden bg-navy pt-16 pb-32 text-white/85 sm:pb-36 lg:pt-24 lg:pb-44 xl:pb-48"
    >
      <Star className="pointer-events-none absolute top-10 right-[8%] size-5 rotate-12 fill-yellow text-yellow" aria-hidden="true" />
      <Star className="pointer-events-none absolute bottom-12 left-[45%] hidden size-4 fill-pink text-pink lg:block" aria-hidden="true" />

      <Container className="relative">
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-20">
          <div className="relative mx-auto w-full max-w-64 sm:max-w-80 xl:max-w-96">
            <DotGrid className="absolute -top-6 -left-8 w-24 text-yellow/70" />
            <Arcs className="absolute -inset-7 sm:-inset-9" />
            <img
              src={logoImage}
              alt={`Logo da ${siteInfo.shortName} — ${siteInfo.fullName}`}
              width={640}
              height={640}
              loading="lazy"
              className="relative w-full clip-circle"
            />
          </div>

          <Reveal>
            <SectionHeading id="sobre-titulo" title="Conheça a EAPE" tone="light" align="left" />
            <div className="mt-6 max-w-xl space-y-4 text-lg/8">
              {aboutContent.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <h3 className="mt-12 text-xl text-white">Quem atendemos</h3>
            <p className="mt-3 max-w-xl">{audienceContent.intro}</p>
            <AudienceChips className="mt-6" />

            <ButtonLink href="/sobre" variant="accent" className="mt-10">
              Conheça nossa história
              <ArrowRight className="size-5" aria-hidden="true" />
            </ButtonLink>
          </Reveal>
        </div>
      </Container>

      <CurveDivider
        shape="hill"
        colors={['yellow', 'pink', 'green']}
        className="absolute inset-x-0 -bottom-px text-teal-soft"
      />
    </section>
  )
}
