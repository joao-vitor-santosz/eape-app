import { DotGrid } from '../../../components/decorations/DotGrid'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { specialtiesContent } from '../../../content/home'
import { specialties } from '../../../content/specialties'
import { accentClasses } from '../../../lib/accent'
import { cx } from '../../../lib/cx'

export function SpecialtiesSection() {
  return (
    <section
      id="especialidades"
      aria-labelledby="especialidades-titulo"
      className="relative scroll-mt-24 overflow-hidden py-16 lg:py-24"
    >
      <DotGrid className="absolute top-12 -left-4 hidden w-28 text-purple/40 md:block" />
      <DotGrid className="absolute -right-4 bottom-12 hidden w-28 text-teal/40 md:block" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading id="especialidades-titulo" title="Especialidades e serviços" />
          <p className="mt-6 max-w-2xl">{specialtiesContent.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {specialties.map(({ id, name, icon: Icon, accent }, index) => (
            <li key={id}>
              <Reveal delay={(index % 3) * 100} className="h-full">
                <div
                  className={cx(
                    'relative flex h-full items-center gap-4 overflow-hidden rounded-3xl p-5 sm:flex-col sm:items-start sm:gap-6 sm:p-7',
                    accentClasses[accent].soft,
                  )}
                >
                  {/* Círculo decorativo no canto, na cor da especialidade. */}
                  <span
                    aria-hidden="true"
                    className={cx('absolute -right-8 -bottom-8 size-28 rounded-full opacity-25', accentClasses[accent].solid)}
                  />
                  <span
                    className={cx(
                      'relative flex size-14 shrink-0 items-center justify-center rounded-2xl bg-white shadow-soft sm:size-16',
                      accentClasses[accent].text,
                    )}
                  >
                    <Icon className="size-7 sm:size-8" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="relative text-lg sm:text-xl">{name}</h3>
                </div>
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
