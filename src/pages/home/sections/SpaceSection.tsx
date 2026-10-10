import consultorioImage from '../../../assets/images/consultorio-2.jpeg'
import hidromassagemImage from '../../../assets/images/hidromassagem.jpeg'
import salaDeEsperaImage from '../../../assets/images/sala-de-espera-2.jpeg'
import { Container } from '../../../components/ui/Container'
import { Reveal } from '../../../components/ui/Reveal'
import { SectionHeading } from '../../../components/ui/SectionHeading'

interface GalleryImage {
  src: string
  alt: string
  width: number
  height: number
  /** Enquadramento dentro do recorte quadrado. */
  position: string
}

const galleryImages: GalleryImage[] = [
  {
    src: consultorioImage,
    alt: 'Sala de atendimento com mesa redonda, cadeiras infantis, livros e brinquedos',
    width: 1599,
    height: 899,
    position: 'object-[65%_50%]',
  },
  {
    src: hidromassagemImage,
    alt: 'Área externa com piscina de hidromassagem, gramado e brinquedos',
    width: 1599,
    height: 899,
    position: 'object-[45%_50%]',
  },
  {
    src: salaDeEsperaImage,
    alt: 'Sala de espera com sofá, poltronas e luminárias pendentes',
    width: 899,
    height: 1599,
    position: 'object-[50%_60%]',
  },
]

export function SpaceSection() {
  return (
    <section id="espaco" aria-labelledby="espaco-titulo" className="scroll-mt-24 pt-14 pb-16 lg:pt-20 lg:pb-24">
      <Container>
        <Reveal>
          <SectionHeading id="espaco-titulo" eyebrow="Estrutura" title="Nosso espaço" />
        </Reveal>

        <ul className="mt-12 grid gap-[30px] sm:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <li key={image.src} className={index === 2 ? 'sm:col-span-2 lg:col-span-1' : undefined}>
              <Reveal delay={index * 150}>
                <img
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  loading="lazy"
                  className={`mx-auto aspect-square w-full max-w-[360px] rounded-3xl object-cover sm:max-w-none lg:max-w-[360px] ${image.position}`}
                />
              </Reveal>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
