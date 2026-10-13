import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { ContentOrPending } from '../../../components/ui/PendingNote'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { processSteps } from '../../../content/about'
import { accentClasses } from '../../../lib/accent'
import { cx } from '../../../lib/cx'

export function ProcessSection() {
  return (
    <section
      aria-labelledby="atendimento-titulo"
      className="relative overflow-hidden bg-yellow-soft pt-12 pb-32 sm:pb-36 lg:pt-16 lg:pb-44 xl:pb-48"
    >
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading id="atendimento-titulo" title="Como funciona o atendimento" />
          <p className="mt-6 max-w-2xl">
            Do primeiro contato ao acompanhamento, a família sabe o que esperar de cada etapa.
          </p>
        </Reveal>

        <ol className="relative mt-14 grid gap-10 lg:grid-cols-4 lg:gap-6">
          {/* Linha tracejada ligando as etapas: horizontal no desktop, vertical no celular. */}
          <span aria-hidden="true" className="absolute top-8 right-[12.5%] left-[12.5%] hidden border-t-2 border-dashed border-navy/20 lg:block" />
          <span aria-hidden="true" className="absolute top-8 bottom-8 left-8 border-l-2 border-dashed border-navy/20 lg:hidden" />

          {processSteps.map(({ title, content, accent }, index) => (
            <li key={title} className="relative flex gap-5 lg:flex-col lg:items-center lg:text-center">
              <span
                aria-hidden="true"
                className={cx(
                  'relative flex size-16 shrink-0 items-center justify-center rounded-full font-heading text-2xl font-semibold ring-8 ring-yellow-soft',
                  accentClasses[accent].soft,
                  accentClasses[accent].text,
                )}
              >
                {index + 1}
              </span>
              <div className="flex-1 pt-3 lg:pt-0">
                <h3 className="text-xl">
                  <span className="sr-only">Etapa {index + 1}: </span>
                  {title}
                </h3>
                <ContentOrPending content={content} className="mt-3" />
              </div>
            </li>
          ))}
        </ol>
      </Container>

      <CurveDivider shape="hill" colors={['orange', 'pink', 'teal']} className="absolute inset-x-0 -bottom-px text-navy" />
    </section>
  )
}
