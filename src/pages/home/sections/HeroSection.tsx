import { Star } from 'lucide-react'
import heroImage from '../../../assets/images/consultorio-2.jpeg'
import { Arcs } from '../../../components/decorations/Arcs'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { ButtonLink } from '../../../components/ui/Button'
import { Container } from '../../../components/ui/Container'
import { heroContent } from '../../../content/home'

/** Sublinhado ondulado, como um traço de lápis. Decorativo. */
function Squiggle({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 12" preserveAspectRatio="none" fill="none" aria-hidden="true" className={className}>
      <path
        d="M3 8c16-8 24 0 40 0s24-8 40 0 24 0 40 0 24-8 40 0 18-4 34-2"
        stroke="currentColor"
        strokeWidth="4"
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  )
}

export function HeroSection() {
  return (
    <section aria-labelledby="hero-titulo" className="relative overflow-hidden bg-yellow-soft">
      {/* Estrelas soltas, como as da logo. */}
      <Star className="pointer-events-none absolute top-10 left-[46%] hidden size-5 rotate-12 fill-pink text-pink lg:block" aria-hidden="true" />
      <Star className="pointer-events-none absolute bottom-28 left-[4%] hidden size-4 -rotate-12 fill-purple text-purple sm:block" aria-hidden="true" />
      <Star className="pointer-events-none absolute top-24 right-[3%] size-4 fill-teal text-teal" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-16 pt-12 pb-28 sm:pb-32 lg:grid-cols-[1fr_1.05fr] lg:gap-16 lg:pt-20 lg:pb-40 xl:pb-44">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 font-heading text-sm font-medium text-navy shadow-soft">
              <Star className="size-4 fill-orange text-orange" aria-hidden="true" />
              Para crianças e adolescentes
            </p>

            <h1 id="hero-titulo" className="mt-6 text-4xl/tight sm:text-5xl/tight">
              Espaço de Atendimento{' '}
              <span className="text-orange-ink">
                Pedagógico{' '}
                <span className="relative inline-block">
                  Especializado
                  <Squiggle className="absolute inset-x-0 -bottom-2 h-3 w-full text-teal" />
                </span>
              </span>
            </h1>

            <p className="mt-8 max-w-xl text-lg/8">{heroContent.intro}</p>

            <div className="mt-9 flex flex-wrap gap-3">
              <ButtonLink href="/#especialidades">Conheça as especialidades</ButtonLink>
              <ButtonLink href="/#sobre" variant="accent">
                Quem atendemos
              </ButtonLink>
            </div>
          </div>

          {/* Margens para que os elementos decorativos tenham espaço ao redor da foto. */}
          <div className="relative mx-3 sm:mx-10 lg:mx-4">
            <div aria-hidden="true" className="absolute inset-0 translate-x-3 translate-y-4 rotate-3 rounded-[2rem] bg-teal" />
            <Arcs className="absolute -top-12 -right-12 size-44 sm:-top-16 sm:-right-16 sm:size-60" />
            <DotGrid className="absolute -bottom-10 -left-4 w-24 text-pink sm:-left-10 sm:w-28" />
            <img
              src={heroImage}
              alt="Sala de atendimento da EAPE com mesa redonda, cadeiras infantis amarelas, livros e brinquedos"
              width={1599}
              height={899}
              fetchPriority="high"
              className="relative aspect-4/3 w-full -rotate-2 rounded-[2rem] border-8 border-white object-cover object-[62%_50%] shadow-soft"
            />
          </div>
        </div>
      </Container>

      <CurveDivider shape="gentle" colors={['teal', 'orange', 'pink']} className="absolute inset-x-0 -bottom-px text-white" />
    </section>
  )
}
