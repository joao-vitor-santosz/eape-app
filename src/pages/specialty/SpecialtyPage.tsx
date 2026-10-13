import { SearchX } from 'lucide-react'
import { useParams } from 'react-router'
import { ButtonLink } from '../../components/ui/Button'
import { Container } from '../../components/ui/Container'
import { siteInfo } from '../../content/site'
import { findSpecialty } from '../../content/specialties'
import { OtherSpecialties } from './sections/OtherSpecialties'
import { SpecialtyHero } from './sections/SpecialtyHero'
import { TeamSection } from './sections/TeamSection'

export function SpecialtyPage() {
  const { slug } = useParams()
  const specialty = findSpecialty(slug)

  if (!specialty) {
    return (
      <>
        <title>{`Especialidade não encontrada — ${siteInfo.shortName}`}</title>
        <section aria-labelledby="nao-encontrada-titulo" className="py-20 lg:py-28">
          <Container className="flex flex-col items-center text-center">
            <span className="flex size-16 items-center justify-center rounded-2xl bg-paper text-navy">
              <SearchX className="size-8" strokeWidth={1.75} aria-hidden="true" />
            </span>
            <h1 id="nao-encontrada-titulo" className="mt-6 text-3xl sm:text-4xl">
              Especialidade não encontrada
            </h1>
            <p className="mt-4 max-w-lg">O endereço acessado não corresponde a nenhuma especialidade da EAPE.</p>
            <ButtonLink href="/#especialidades" className="mt-8">
              Ver a equipe multidisciplinar
            </ButtonLink>
          </Container>
        </section>
        <OtherSpecialties title="Nossas especialidades" />
      </>
    )
  }

  return (
    <>
      <title>{`${specialty.name} — ${siteInfo.shortName}`}</title>
      <SpecialtyHero specialty={specialty} />
      {/* `key` reinicia o estado (ex.: "Ler mais") ao trocar de especialidade. */}
      <TeamSection key={specialty.id} specialty={specialty} />
      <OtherSpecialties currentId={specialty.id} />
    </>
  )
}
