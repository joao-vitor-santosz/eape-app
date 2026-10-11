import consultorioImage from '../../../assets/images/consultorio-1.jpeg'
import hidromassagemImage from '../../../assets/images/hidromassagem.jpeg'
import recepcaoImage from '../../../assets/images/sala-de-espera-1.jpeg'
import salaDeEsperaImage from '../../../assets/images/sala-de-espera-2.jpeg'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'
import { accentClasses, type AccentColor } from '../../../lib/accent'
import { cx } from '../../../lib/cx'

interface GalleryImage {
  src: string
  alt: string
  orientation: 'portrait' | 'landscape'
  /** Enquadramento dentro do recorte. */
  position: string
  /** Cor do bloco decorativo atrás da foto. */
  accent: AccentColor
}

/** Ordem pensada para o mosaico no desktop: retrato | duas paisagens empilhadas | retrato. */
const galleryImages: GalleryImage[] = [
  {
    src: recepcaoImage,
    alt: 'Recepção da EAPE, com balcão de atendimento e poltronas',
    orientation: 'portrait',
    position: 'object-[50%_62%]',
    accent: 'yellow',
  },
  {
    src: consultorioImage,
    alt: 'Consultório com estante de brinquedos, jogos e livros infantis',
    orientation: 'landscape',
    position: 'object-[30%_50%]',
    accent: 'pink',
  },
  {
    src: hidromassagemImage,
    alt: 'Área externa com piscina de hidromassagem, gramado e brinquedos',
    orientation: 'landscape',
    position: 'object-[50%_60%]',
    accent: 'green',
  },
  {
    src: salaDeEsperaImage,
    alt: 'Sala de espera com sofá, poltronas e luminárias pendentes',
    orientation: 'portrait',
    position: 'object-[50%_60%]',
    accent: 'purple',
  },
]

const orientationClasses = {
  // Retratos ocupam duas linhas no desktop e se ajustam à altura das paisagens ao lado.
  portrait: {
    item: 'lg:row-span-2',
    image: 'aspect-4/5 sm:aspect-square lg:absolute lg:inset-0 lg:aspect-auto lg:h-full',
  },
  landscape: {
    item: '',
    image: 'aspect-4/3 sm:aspect-square lg:aspect-4/3',
  },
} as const

export function SpaceSection() {
  return (
    <section id="espaco" aria-labelledby="espaco-titulo" className="scroll-mt-24 bg-teal-soft pt-12 pb-28 sm:pb-32 lg:pt-16 lg:pb-40 xl:pb-44">
      <Container>
        <Reveal>
          <SectionHeading id="espaco-titulo" title="Nosso espaço" />
        </Reveal>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-flow-col lg:grid-cols-[1fr_1.35fr_1fr] lg:grid-rows-2 lg:gap-6">
          {galleryImages.map((image) => (
            <li key={image.src} className={cx('relative', orientationClasses[image.orientation].item)}>
              <div
                aria-hidden="true"
                className={cx('absolute inset-0 translate-x-2.5 translate-y-2.5 rounded-3xl', accentClasses[image.accent].solid)}
              />
              <img
                src={image.src}
                alt={image.alt}
                width={image.orientation === 'portrait' ? 899 : 1599}
                height={image.orientation === 'portrait' ? 1599 : 899}
                loading="lazy"
                className={cx(
                  'relative w-full rounded-3xl object-cover',
                  orientationClasses[image.orientation].image,
                  image.position,
                )}
              />
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
