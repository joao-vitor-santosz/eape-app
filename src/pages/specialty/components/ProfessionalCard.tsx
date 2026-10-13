import { Award, ChevronDown, GraduationCap, MessageCircle, Sparkles } from 'lucide-react'
import { useId, useState } from 'react'
import { ButtonLink } from '../../../components/ui/Button'
import { WHATSAPP_NUMBER } from '../../../content/site'
import { accentClasses, type AccentColor } from '../../../lib/accent'
import { cx } from '../../../lib/cx'
import { buildWhatsAppLink } from '../../../lib/whatsapp'
import type { Professional } from '../../../types/professional'

function experienceLabel(startYear: number): string {
  const years = new Date().getFullYear() - startYear
  if (years < 1) return 'Início da atuação em ' + startYear
  return years === 1 ? '1 ano de experiência' : `${years} anos de experiência`
}

function initials(name: string): string {
  const parts = name.trim().split(/\s+/)
  const first = parts[0]?.[0] ?? ''
  const last = parts.length > 1 ? (parts[parts.length - 1]?.[0] ?? '') : ''
  return (first + last).toUpperCase()
}

interface ProfessionalCardProps {
  professional: Professional
  accent: AccentColor
  /** Cartão largo e horizontal, para quando há um único profissional na especialidade. */
  wide?: boolean
}

export function ProfessionalCard({ professional, accent, wide = false }: ProfessionalCardProps) {
  const [expanded, setExpanded] = useState(false)
  const bioId = useId()
  const colors = accentClasses[accent]
  const { name, role, registry, photoUrl, education, specializations, startYear, summary, bio } = professional

  const whatsappHref = buildWhatsAppLink(
    WHATSAPP_NUMBER,
    `Olá! Vi no site da EAPE o perfil de ${name} (${role}) e gostaria de mais informações.`,
  )

  return (
    <article
      className={cx(
        'relative flex h-full flex-col gap-6 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8',
        wide && 'md:flex-row md:gap-10',
      )}
    >
      {/* Aba colorida no topo, como a etiqueta de uma ficha. */}
      <span aria-hidden="true" className={cx('absolute -top-2.5 left-8 h-5 w-16 rounded-full', colors.solid)} />

      <header className={cx('flex items-center gap-4', wide && 'md:w-64 md:shrink-0 md:flex-col md:items-start')}>
        {photoUrl ? (
          <img
            src={photoUrl}
            alt=""
            width={96}
            height={96}
            loading="lazy"
            className="size-20 shrink-0 rounded-full object-cover ring-4 ring-white shadow-soft sm:size-24"
          />
        ) : (
          <span
            aria-hidden="true"
            className={cx(
              'flex size-20 shrink-0 items-center justify-center rounded-full font-heading text-2xl font-semibold ring-4 ring-white shadow-soft sm:size-24 sm:text-3xl',
              colors.soft,
              colors.text,
            )}
          >
            {initials(name)}
          </span>
        )}

        <div className="min-w-0">
          <h3 className="text-xl/tight">{name}</h3>
          <p className={cx('mt-1 font-heading text-sm font-medium', colors.text)}>{role}</p>
          {registry && <p className="mt-0.5 text-sm text-ink/80">{registry}</p>}
        </div>
      </header>

      <div className="flex flex-1 flex-col gap-5">
        <p className={cx('inline-flex w-fit items-center gap-2 rounded-full px-3 py-1 text-sm font-medium text-navy', colors.soft)}>
          <Award className={cx('size-4', colors.text)} aria-hidden="true" />
          {experienceLabel(startYear)}
        </p>

        <p>{summary}</p>

        {education.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold">
              <GraduationCap className={cx('size-4', colors.text)} aria-hidden="true" />
              Formação
            </h4>
            <ul className="mt-2 space-y-1 text-[15px]">
              {education.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {specializations.length > 0 && (
          <div>
            <h4 className="flex items-center gap-2 text-sm font-semibold">
              <Sparkles className={cx('size-4', colors.text)} aria-hidden="true" />
              Áreas de atuação
            </h4>
            <ul className="mt-2 flex flex-wrap gap-2">
              {specializations.map((item) => (
                <li key={item} className="rounded-full border border-line px-3 py-1 text-sm">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* "Ler mais": expande a descrição no próprio cartão. */}
        <div
          id={bioId}
          inert={!expanded}
          className={cx(
            'grid transition-[grid-template-rows] duration-250 ease-out-strong motion-reduce:transition-none',
            expanded ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
          )}
        >
          <div className="overflow-hidden">
            <p className="border-l-4 border-line pl-4">{bio}</p>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap items-center gap-3 pt-2">
          <ButtonLink
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            size="md"
            className="max-sm:w-full"
          >
            <MessageCircle className="size-4" aria-hidden="true" />
            Falar pelo WhatsApp
            <span className="sr-only"> (abre em nova aba)</span>
          </ButtonLink>
          <button
            type="button"
            aria-expanded={expanded}
            aria-controls={bioId}
            onClick={() => setExpanded((value) => !value)}
            className="inline-flex min-h-12 items-center gap-1.5 rounded-full px-4 font-heading text-[15px] font-medium text-navy transition-colors duration-150 hover:bg-paper max-sm:w-full max-sm:justify-center"
          >
            {expanded ? 'Ler menos' : 'Ler mais'}
            <ChevronDown
              className={cx(
                'size-4 transition-transform duration-250 ease-out-strong motion-reduce:transition-none',
                expanded && 'rotate-180',
              )}
              aria-hidden="true"
            />
          </button>
        </div>
      </div>
    </article>
  )
}

/** Versão "esqueleto" do cartão, exibida enquanto os dados carregam. */
export function ProfessionalCardSkeleton() {
  return (
    <div aria-hidden="true" className="flex flex-col gap-6 rounded-3xl border border-line bg-white p-6 shadow-soft sm:p-8">
      <div className="flex items-center gap-4">
        <span className="size-20 shrink-0 rounded-full bg-paper motion-safe:animate-pulse sm:size-24" />
        <div className="flex-1 space-y-2">
          <span className="block h-5 w-2/3 rounded-full bg-paper motion-safe:animate-pulse" />
          <span className="block h-4 w-1/3 rounded-full bg-paper motion-safe:animate-pulse" />
        </div>
      </div>
      <span className="block h-7 w-44 rounded-full bg-paper motion-safe:animate-pulse" />
      <div className="space-y-2">
        <span className="block h-4 w-full rounded-full bg-paper motion-safe:animate-pulse" />
        <span className="block h-4 w-5/6 rounded-full bg-paper motion-safe:animate-pulse" />
      </div>
      <span className="block h-12 w-52 rounded-full bg-paper motion-safe:animate-pulse" />
    </div>
  )
}
