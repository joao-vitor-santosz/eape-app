import { FlaskConical, MessageCircle, RotateCw, Sprout, type LucideIcon } from 'lucide-react'
import type { ReactNode } from 'react'
import { Button, ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { WHATSAPP_NUMBER } from '../../../content/site'
import type { Specialty } from '../../../content/specialties'
import { useProfessionals } from '../../../hooks/useProfessionals'
import { cx } from '../../../lib/cx'
import { buildWhatsAppLink } from '../../../lib/whatsapp'
import { isDemoData } from '../../../services/professionals'
import { ProfessionalCard, ProfessionalCardSkeleton } from '../components/ProfessionalCard'

interface StateMessageProps {
  icon: LucideIcon
  title: string
  children: ReactNode
}

/** Bloco de mensagem usado nos estados "vazio" e "erro". */
function StateMessage({ icon: Icon, title, children }: StateMessageProps) {
  return (
    <div className="mx-auto flex max-w-xl flex-col items-center rounded-3xl border-2 border-dashed border-line px-6 py-12 text-center">
      <span className="flex size-16 items-center justify-center rounded-2xl bg-paper text-navy">
        <Icon className="size-8" strokeWidth={1.75} aria-hidden="true" />
      </span>
      <h3 className="mt-5 text-xl">{title}</h3>
      {children}
    </div>
  )
}

export function TeamSection({ specialty }: { specialty: Specialty }) {
  const { data: professionals, isPending, isError, refetch, isRefetching } = useProfessionals(specialty.id)

  return (
    <section aria-labelledby="equipe-titulo" className="py-16 lg:py-20">
      <Container>
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading id="equipe-titulo" title="Conheça a equipe" />
          {isDemoData && (
            <p className="mt-6 inline-flex items-center gap-2 rounded-full bg-yellow-soft px-4 py-1.5 text-sm font-medium text-navy">
              <FlaskConical className="size-4 text-yellow-ink" aria-hidden="true" />
              Dados de demonstração — visíveis apenas em desenvolvimento
            </p>
          )}
        </Reveal>

        <div className="mt-12" aria-live="polite" aria-busy={isPending}>
          {isPending ? (
            <>
              <p className="sr-only">Carregando profissionais…</p>
              <div className="grid gap-8 md:grid-cols-2">
                <ProfessionalCardSkeleton />
                <ProfessionalCardSkeleton />
              </div>
            </>
          ) : isError ? (
            <StateMessage icon={RotateCw} title="Não foi possível carregar a equipe agora">
              <p className="mt-2">Verifique sua conexão e tente novamente.</p>
              <Button onClick={() => refetch()} disabled={isRefetching} size="md" className="mt-6 disabled:opacity-60">
                <RotateCw className={cx('size-4', isRefetching && 'motion-safe:animate-spin')} aria-hidden="true" />
                Tentar novamente
              </Button>
            </StateMessage>
          ) : professionals.length === 0 ? (
            <StateMessage icon={Sprout} title="Em breve apresentaremos a equipe desta área">
              <p className="mt-2">Enquanto isso, fale com a EAPE para saber mais sobre {specialty.name}.</p>
              <ButtonLink
                href={buildWhatsAppLink(
                  WHATSAPP_NUMBER,
                  `Olá! Vi no site da EAPE a página de ${specialty.name} e gostaria de mais informações.`,
                )}
                target="_blank"
                rel="noopener noreferrer"
                size="md"
                className="mt-6"
              >
                <MessageCircle className="size-4" aria-hidden="true" />
                Falar pelo WhatsApp
                <span className="sr-only"> (abre em nova aba)</span>
              </ButtonLink>
            </StateMessage>
          ) : (
            <ul
              className={cx(
                'grid gap-8',
                // 1 profissional: cartão largo. 2: duas colunas centralizadas. 3 ou mais: até três colunas.
                professionals.length === 2 && 'mx-auto max-w-5xl md:grid-cols-2',
                professionals.length > 2 && 'md:grid-cols-2 xl:grid-cols-3',
              )}
            >
              {professionals.map((professional, index) => (
                <li key={professional.id}>
                  <Reveal delay={(index % 3) * 60} className="h-full">
                    <ProfessionalCard
                      professional={professional}
                      accent={specialty.accent}
                      wide={professionals.length === 1}
                    />
                  </Reveal>
                </li>
              ))}
            </ul>
          )}
        </div>
      </Container>
    </section>
  )
}
