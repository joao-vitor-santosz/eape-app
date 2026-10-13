import { ChevronDown, MessageCircle } from 'lucide-react'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { ButtonLink } from '../../../components/ui/Button'
import { ContentOrPending } from '../../../components/ui/PendingNote'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { aboutPageContent, faqItems } from '../../../content/about'
import { siteInfo } from '../../../content/site'

/** "Nossos valores" e "Perguntas frequentes" dividem o mesmo fundo branco. */
export function ValuesFaqSection() {
  return (
    <section className="relative pt-12 pb-32 sm:pb-36 lg:pt-16 lg:pb-44 xl:pb-48">
      <Container>
        <Reveal className="mx-auto flex max-w-2xl flex-col items-center text-center">
          <SectionHeading id="valores-titulo" title="Nossos valores" />
          <ContentOrPending content={aboutPageContent.values} className="mt-8 w-full" />
        </Reveal>

        <div className="mx-auto mt-20 max-w-3xl lg:mt-28">
          <SectionHeading id="perguntas-titulo" title="Perguntas frequentes" />

          <div className="mt-10 space-y-3">
            {faqItems.map(({ question, answer }) => (
              <details key={question} className="group rounded-2xl bg-paper open:bg-white open:shadow-soft open:ring-1 open:ring-line">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-2xl px-6 py-5 font-heading font-medium text-navy [&::-webkit-details-marker]:hidden">
                  {question}
                  <ChevronDown
                    className="size-5 shrink-0 transition-transform duration-200 ease-out-strong group-open:rotate-180 motion-reduce:transition-none"
                    aria-hidden="true"
                  />
                </summary>
                <div className="px-6 pb-6">
                  <ContentOrPending content={answer} />
                </div>
              </details>
            ))}
          </div>

          <div className="mt-10 flex flex-col items-center gap-4 text-center">
            <p className="font-heading text-lg font-medium text-navy">Não encontrou sua dúvida?</p>
            <ButtonLink href={siteInfo.contact.whatsapp.href} target="_blank" rel="noopener noreferrer" variant="accent">
              <MessageCircle className="size-5" aria-hidden="true" />
              Falar pelo WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </ButtonLink>
          </div>
        </div>
      </Container>

      <CurveDivider
        shape="wave"
        colors={['pink', 'purple', 'orange']}
        flip
        className="absolute inset-x-0 -bottom-px text-teal-soft"
      />
    </section>
  )
}
