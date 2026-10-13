import { siteInfo } from '../../content/site'
import { SpaceSection } from '../home/sections/SpaceSection'
import { AboutHero } from './sections/AboutHero'
import { AudienceSection } from './sections/AudienceSection'
import { HistorySection } from './sections/HistorySection'
import { ProcessSection } from './sections/ProcessSection'
import { ValuesFaqSection } from './sections/ValuesFaqSection'

export function AboutPage() {
  return (
    <>
      <title>{`Sobre — ${siteInfo.shortName}`}</title>
      <AboutHero />
      <HistorySection />
      <ProcessSection />
      <AudienceSection />
      <ValuesFaqSection />
      {/* Mesma galeria da página inicial; será ampliada quando houver mais fotos (ajustes.md). */}
      <SpaceSection />
    </>
  )
}
