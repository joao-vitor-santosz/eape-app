import { Star } from 'lucide-react'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { AudienceChips } from '../../../components/ui/AudienceChips'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { audienceContent } from '../../../content/home'

export function AudienceSection() {
  return (
    <section
      aria-labelledby="publico-titulo"
      className="on-dark relative overflow-hidden bg-navy pt-12 pb-32 text-white/85 sm:pb-36 lg:pt-16 lg:pb-44 xl:pb-48"
    >
      <Star className="pointer-events-none absolute top-12 left-[8%] hidden size-5 rotate-12 fill-yellow sm:block text-yellow" aria-hidden="true" />
      <DotGrid className="absolute top-16 right-[6%] hidden w-24 text-teal/50 md:block" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading id="publico-titulo" title="Quem atendemos" tone="light" />
          <p className="mt-6 max-w-2xl text-lg/8">{audienceContent.intro}</p>
          <AudienceChips className="mt-8 justify-center" />
        </Reveal>
      </Container>

      <CurveDivider
        shape="gentle"
        colors={['yellow', 'green', 'pink']}
        className="absolute inset-x-0 -bottom-px text-white"
      />
    </section>
  )
}
