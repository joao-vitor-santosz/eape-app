import { ButtonLink } from '../../../components/ui/Button'
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
      className="scroll-mt-24 pt-10 pb-20 lg:pt-14 lg:pb-28"
    >
      <Container>
        <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,520px)_minmax(0,1fr)] lg:gap-10">
          <div>
            <Reveal>
              <SectionHeading
                id="especialidades-titulo"
                eyebrow="Especialidades"
                title="Especialidades e serviços"
                align="left"
                uppercaseEyebrow
              />
            </Reveal>
            <Reveal delay={150}>
              <p className="mt-6">{specialtiesContent.intro}</p>
            </Reveal>
            <Reveal delay={300}>
              <ButtonLink href="/#contato" variant="cyan" className="mt-10">
                Fale conosco
              </ButtonLink>
            </Reveal>
          </div>

          <ul className="grid grid-cols-2 sm:grid-cols-3">
            {specialties.map(({ id, name, icon: Icon, accent }, index) => (
              <li
                key={id}
                className={cx(
                  'border-line',
                  // Divisórias como na referência: verticais entre colunas e horizontal entre linhas.
                  index % 2 === 1 && 'max-sm:border-l',
                  index < 4 && 'max-sm:border-b',
                  index % 3 !== 0 && 'sm:border-l',
                  index < 3 && 'sm:border-b',
                )}
              >
                <Reveal delay={(index % 3) * 120} className="flex flex-col items-center px-3 py-8 text-center">
                  <span
                    className={cx(
                      'flex size-[90px] items-center justify-center rounded-full',
                      accentClasses[accent].soft,
                      accentClasses[accent].text,
                    )}
                  >
                    <Icon className="size-11" strokeWidth={1.75} aria-hidden="true" />
                  </span>
                  <h3 className="mt-5 text-lg/[26px] font-bold">{name}</h3>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  )
}
