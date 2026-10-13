import { Star } from 'lucide-react'
import heroImage from '../../../assets/images/consultorio-2.jpeg'
import { Arcs } from '../../../components/decorations/Arcs'
import { CurveDivider } from '../../../components/decorations/CurveDivider'
import { DotGrid } from '../../../components/decorations/DotGrid'
import { Breadcrumb } from '../../../components/ui/Breadcrumb'
import { Container } from '../../../components/ui/Container'
import { aboutPageContent } from '../../../content/about'

export function AboutHero() {
  return (
    <section aria-labelledby="sobre-pagina-titulo" className="relative overflow-hidden bg-green-soft">
      <Star className="pointer-events-none absolute top-12 left-[48%] hidden size-5 rotate-12 fill-pink text-pink lg:block" aria-hidden="true" />
      <Star className="pointer-events-none absolute right-[4%] bottom-36 size-4 fill-purple text-purple" aria-hidden="true" />

      <Container className="relative">
        <Breadcrumb className="pt-8" items={[{ label: 'Início', to: '/' }, { label: 'Sobre' }]} />

        <div className="grid items-center gap-14 pt-10 pb-28 sm:pb-32 lg:grid-cols-[1fr_1fr] lg:gap-16 lg:pt-14 lg:pb-40 xl:pb-44">
          <div>
            <h1 id="sobre-pagina-titulo" className="text-4xl/tight sm:text-5xl/tight">
              Sobre a <span className="text-green-ink">EAPE</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg/8">{aboutPageContent.intro}</p>
          </div>

          <div className="relative mx-3 sm:mx-10 lg:mx-4">
            <div aria-hidden="true" className="absolute inset-0 -translate-x-3 translate-y-4 -rotate-3 rounded-[2rem] bg-orange" />
            <Arcs className="absolute -top-12 -left-12 size-44 sm:-top-16 sm:-left-16 sm:size-56" />
            <DotGrid className="absolute -right-4 -bottom-10 w-24 text-teal sm:-right-8 sm:w-28" />
            <img
              src={heroImage}
              alt="Sala de atendimento da EAPE com mesa redonda, cadeiras infantis amarelas, livros e brinquedos"
              width={1599}
              height={899}
              fetchPriority="high"
              className="relative aspect-4/3 w-full rotate-2 rounded-[2rem] border-8 border-white object-cover object-[62%_50%] shadow-soft"
            />
          </div>
        </div>
      </Container>

      <CurveDivider shape="gentle" colors={['teal', 'orange', 'pink']} flip className="absolute inset-x-0 -bottom-px text-white" />
    </section>
  )
}
