import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import { mainNav, siteInfo } from '../../content/site'
import { specialties } from '../../content/specialties'
import { accentClasses, type AccentColor } from '../../lib/accent'
import { cx } from '../../lib/cx'
import { CloudShape, SunDoodle } from '../decorations/Doodles'
import { Wave } from '../decorations/Wave'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { NavItemLink } from './NavItemLink'

interface ContactItem {
  label: string
  value: string
  icon: LucideIcon
  accent: AccentColor
}

const contactItems: ContactItem[] = [
  { label: 'Telefone', value: siteInfo.contact.phone, icon: Phone, accent: 'pink' },
  { label: 'E-mail', value: siteInfo.contact.email, icon: Mail, accent: 'cyan' },
  { label: 'Endereço', value: siteInfo.contact.address, icon: MapPin, accent: 'yellow' },
]

const CURRENT_YEAR = new Date().getFullYear()

const footerLinkClass = () =>
  'font-heading text-base font-bold text-white transition-colors duration-250 hover:text-pink'

function FooterTitle({ children }: { children: string }) {
  return <h2 className="mb-7 text-[26px]/[30px] text-white">{children}</h2>
}

export function Footer() {
  return (
    <footer className="on-dark relative mt-10 text-white/85">
      <Wave variant="footerTop" className="h-[60px] text-primary lg:h-[110px]" />

      <div className="relative overflow-hidden bg-primary">
        <CloudShape className="pointer-events-none absolute top-0 left-[-30px] w-[110px] text-white/10" />
        <CloudShape className="pointer-events-none absolute top-[45%] right-[6%] hidden w-[80px] text-white/10 lg:block" />
        <SunDoodle className="pointer-events-none absolute top-[48%] left-[11%] hidden w-[80px] text-white/10 motion-safe:animate-spin-slow lg:block" />

        <Container className="relative">
          {/* Contatos */}
          <ul id="contato" className="grid scroll-mt-28 gap-8 pt-6 pb-14 md:grid-cols-3 md:gap-6">
            {contactItems.map(({ label, value, icon: Icon, accent }) => (
              <li key={label} className="flex items-center gap-5">
                <span
                  className={cx(
                    'flex size-[50px] shrink-0 items-center justify-center rounded-full text-white shadow-pressed',
                    accentClasses[accent].solid,
                  )}
                >
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <span>
                  <span className="block">{label}</span>
                  <span className="block font-heading text-[17px] font-bold text-white">{value}</span>
                </span>
              </li>
            ))}
          </ul>

          {/* Colunas */}
          <div className="grid gap-12 pt-6 pb-16 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            <div>
              <FooterTitle>Sobre a EAPE</FooterTitle>
              <p className="mb-7">{siteInfo.fullName}.</p>
              <ButtonLink href="/#sobre" variant="pink" size="md">
                Sobre nós
              </ButtonLink>
            </div>

            <nav aria-label="Links úteis">
              <FooterTitle>Links úteis</FooterTitle>
              <ul className="grid grid-cols-2 gap-x-6 gap-y-3">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <NavItemLink item={item} className={footerLinkClass} />
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <FooterTitle>Especialidades</FooterTitle>
              <ul className="space-y-3">
                {specialties.map((specialty) => (
                  <li key={specialty.id} className="font-heading text-base font-bold text-white">
                    {specialty.name}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <FooterTitle>Atendimento</FooterTitle>
              <p className="flex items-start gap-3">
                <Clock className="mt-0.5 size-5 shrink-0 text-yellow" aria-hidden="true" />
                {siteInfo.contact.openingHours}
              </p>
            </div>
          </div>
        </Container>

        <div className="relative border-t border-white/10">
          <Container>
            <p className="py-6 text-center text-[15px] md:text-right">
              © {CURRENT_YEAR} {siteInfo.shortName}. Todos os direitos reservados.
            </p>
          </Container>
        </div>
      </div>
    </footer>
  )
}
