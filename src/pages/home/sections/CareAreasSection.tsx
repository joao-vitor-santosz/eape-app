import { TicTacToeDoodle } from '../../../components/decorations/Doodles'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { careAreas } from '../../../content/home'
import { accentClasses } from '../../../lib/accent'
import { cx } from '../../../lib/cx'

export function CareAreasSection() {
  return (
    <section
      aria-labelledby="areas-titulo"
      className="on-dark relative overflow-hidden bg-primary pt-16 pb-24 lg:pt-20 lg:pb-32"
    >
      <TicTacToeDoodle className="pointer-events-none absolute top-6 right-[16%] hidden w-[80px] rotate-12 text-white/10 lg:block" />

      <Container className="relative">
        <Reveal>
          <SectionHeading
            id="areas-titulo"
            eyebrow="O que fazemos"
            title="Áreas de atendimento"
            tone="light"
            uppercaseEyebrow
          />
        </Reveal>

        <ul className="mt-14 grid gap-[30px] md:grid-cols-2 lg:grid-cols-3">
          {careAreas.map(({ id, title, description, icon: Icon, accent }, index) => (
            <li key={id}>
              <Reveal delay={index * 150} className="h-full">
                <article className="flex h-full flex-col items-center rounded-md border border-white/10 px-8 pt-10 pb-12 text-center">
                  <span
                    className={cx(
                      'flex size-[140px] items-center justify-center rounded-full text-white shadow-pressed',
                      accentClasses[accent].solid,
                    )}
                  >
                    <Icon className="size-16" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-10 text-[26px]/[30px] text-white">{title}</h3>
                  <p className="mt-4 text-white/85">{description}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
