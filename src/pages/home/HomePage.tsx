import { siteInfo } from '../../content/site'
import { AboutSection } from './sections/AboutSection'
import { HeroSection } from './sections/HeroSection'
import { SpaceSection } from './sections/SpaceSection'
import { SpecialtiesSection } from './sections/SpecialtiesSection'

export function HomePage() {
  return (
    <>
      <title>{`${siteInfo.shortName} — ${siteInfo.fullName}`}</title>
      <HeroSection />
      <SpecialtiesSection />
      <AboutSection />
      <SpaceSection />
    </>
  )
}
