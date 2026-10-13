import { MessageCircle, Star } from 'lucide-react'
import { Arcs } from '../../../components/decorations/Arcs'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { Breadcrumb } from '../../../components/ui/Breadcrumb'
import { ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { WHATSAPP_NUMBER } from '../../../content/site'
import type { Specialty } from '../../../content/specialties'
import { accentClasses } from '../../../lib/accent'
import { cx } from '../../../lib/cx'
import { buildWhatsAppLink } from '../../../lib/whatsapp'

export function SpecialtyHero({ specialty }: { specialty: Specialty }) {
  const { name, icon: Icon, accent, description } = specialty
  const colors = accentClasses[accent]

  return (
    <section aria-labelledby="especialidade-titulo" className={cx('relative overflow-hidden', colors.soft)}>
      <Star className="pointer-events-none absolute top-10 right-[6%] size-5 rotate-12 fill-orange text-orange" aria-hidden="true" />
      <DotGrid className="absolute bottom-24 left-[3%] hidden w-24 text-navy/15 md:block" />

      <Container className="relative">
        <Breadcrumb
          className="pt-8"
          items={[{ label: 'Início', to: '/' }, { label: 'Equipe Multidisciplinar', to: '/#especialidades' }, { label: name }]}
        />

        <div className="grid items-center gap-12 pt-10 pb-28 sm:pb-32 lg:grid-cols-[1fr_auto] lg:gap-20 lg:pt-14 lg:pb-40 xl:pb-44">
          <div>
            <h1 id="especialidade-titulo" className="text-4xl/tight sm:text-5xl/tight">
              {name}
            </h1>
            <p className="mt-6 max-w-2xl text-lg/8">{description}</p>
            <ButtonLink
              href={buildWhatsAppLink(
                WHATSAPP_NUMBER,
                `Olá! Vi no site da EAPE a página de ${name} e gostaria de mais informações.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              variant="accent"
              className="mt-9"
            >
              <MessageCircle className="size-5" aria-hidden="true" />
              Agendar pelo WhatsApp
              <span className="sr-only"> (abre em nova aba)</span>
            </ButtonLink>
          </div>

          {/* Ícone da especialidade em destaque, com os arcos da marca ao redor. */}
          <div aria-hidden="true" className="relative mx-auto hidden size-64 sm:block lg:size-72">
            <Arcs className="absolute inset-0" />
            <span
              className={cx(
                'absolute inset-10 flex rotate-3 items-center justify-center rounded-[2.5rem] bg-white shadow-soft',
                colors.text,
              )}
            >
              <Icon className="size-24 -rotate-3 lg:size-28" strokeWidth={1.5} />
            </span>
          </div>
        </div>
      </Container>

      <CurveDivider shape="gentle" colors={['orange', 'teal', 'purple']} className="absolute inset-x-0 -bottom-px text-white" />
    </section>
  )
}
