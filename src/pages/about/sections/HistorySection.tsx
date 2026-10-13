import { Arcs } from '../../../components/decorations/Arcs'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { ContentOrPending } from '../../../components/ui/PendingNote'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { aboutPageContent } from '../../../content/about'

export function HistorySection() {
  return (
    <section aria-labelledby="historia-titulo" className="relative overflow-hidden pt-12 pb-32 sm:pb-36 lg:pt-16 lg:pb-44 xl:pb-48">
      <Arcs className="absolute top-6 -right-16 hidden size-56 opacity-60 md:block" />
      <DotGrid className="absolute bottom-40 -left-4 hidden w-28 text-yellow/60 md:block" />

      <Container className="relative">
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading id="historia-titulo" title="Nossa história" />
          <ContentOrPending content={aboutPageContent.history} className="mt-8 w-full text-lg/8" />
        </Reveal>
      </Container>

      <CurveDivider
        shape="wave"
        colors={['purple', 'yellow', 'teal']}
        className="absolute inset-x-0 -bottom-px text-yellow-soft"
      />
    </section>
  )
}
