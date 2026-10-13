import { CurveDivider } from '../../../components/decorations/CurveDivider'
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
      className="relative scroll-mt-24 overflow-hidden pt-16 pb-32 sm:pb-36 lg:pt-24 lg:pb-44 xl:pb-48"
    >
      <DotGrid className="absolute top-12 -left-4 hidden w-28 text-purple/40 md:block" />
      <DotGrid className="absolute -right-4 bottom-12 hidden w-28 text-teal/40 md:block" />

      <Container className="relative">
        <Reveal className="flex flex-col items-center text-center">
          <SectionHeading id="especialidades-titulo" title="Equipe Multidisciplinar" />
          <p className="mt-6 max-w-2xl">{specialtiesContent.intro}</p>
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3 lg:gap-6">
          {specialties.map(({ id, name, icon: Icon, accent }, index) => (
            <li
              key={id}
              // Com 3 colunas, um último cartão sozinho na linha fica centralizado.
              className={cx(index === specialties.length - 1 && specialties.length % 3 === 1 && 'lg:col-start-2')}
            >
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

      <CurveDivider
        shape="wave"
        colors={['purple', 'orange', 'teal']}
        flip
        className="absolute inset-x-0 -bottom-px text-navy"
      />
    </section>
  )
}
