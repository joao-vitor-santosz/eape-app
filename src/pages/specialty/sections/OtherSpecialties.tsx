import { Link } from 'react-router'
import { Container } from '../../../components/ui/Container'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { specialties, specialtyPath } from '../../../content/specialties'
import { accentClasses } from '../../../lib/accent'
import { cx } from '../../../lib/cx'

interface OtherSpecialtiesProps {
  /** Especialidade atual, que fica fora da lista. Ausente na página de "não encontrada". */
  currentId?: string
  title?: string
}

/** Atalhos para as demais especialidades, para seguir navegando sem voltar à página inicial. */
export function OtherSpecialties({ currentId, title = 'Outras especialidades' }: OtherSpecialtiesProps) {
  const items = specialties.filter((specialty) => specialty.id !== currentId)

  return (
    <section aria-labelledby="outras-titulo" className="bg-teal-soft pt-16 pb-28 sm:pb-32 lg:pt-20 lg:pb-40 xl:pb-44">
      <Container>
        <SectionHeading id="outras-titulo" title={title} />
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {items.map(({ id, name, icon: Icon, accent }) => (
            <li key={id}>
              <Link
                to={specialtyPath(id)}
                className={cx(
                  'flex items-center gap-2.5 rounded-full bg-white py-2 pr-5 pl-2 font-heading text-[15px] font-medium text-navy shadow-soft',
                  'transition-[translate,scale] duration-200 ease-out-strong hover:-translate-y-0.5 active:scale-97 motion-reduce:transition-none',
                )}
              >
                <span className={cx('flex size-9 items-center justify-center rounded-full', accentClasses[accent].soft, accentClasses[accent].text)}>
                  <Icon className="size-5" strokeWidth={1.75} aria-hidden="true" />
                </span>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
