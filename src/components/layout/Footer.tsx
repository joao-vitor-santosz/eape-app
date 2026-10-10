import { Clock, Mail, MapPin, Phone, type LucideIcon } from 'lucide-react'
import logoImage from '../../assets/images/logo-2-sm.jpeg'
import { mainNav, siteInfo } from '../../content/site'
import { accentClasses, type AccentColor } from '../../lib/accent'
import { cx } from '../../lib/cx'
import { PencilTips } from '../decorations/PencilTips'
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
  { label: 'E-mail', value: siteInfo.contact.email, icon: Mail, accent: 'yellow' },
  { label: 'Endereço', value: siteInfo.contact.address, icon: MapPin, accent: 'green' },
  { label: 'Horário de atendimento', value: siteInfo.contact.openingHours, icon: Clock, accent: 'teal' },
]

const CURRENT_YEAR = new Date().getFullYear()

const footerLinkClass = () =>
  'rounded-sm text-white/85 underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'

interface FooterTitleProps {
  children: string
  id: string
  /** Cor do traço sob o título. */
  barClass: string
}

function FooterTitle({ children, id, barClass }: FooterTitleProps) {
  return (
    <h2 id={id} className="mb-6 text-lg text-white">
      {children}
      <span aria-hidden="true" className={cx('mt-2 block h-1 w-8 rounded-full', barClass)} />
    </h2>
  )
}

export function Footer() {
  return (
    <footer className="on-dark bg-navy text-white/85">
      <Container>
        <div className="grid gap-12 pt-16 pb-12 md:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1.3fr] lg:gap-16 lg:pt-20">
          <div>
            <img
              src={logoImage}
              alt={`${siteInfo.shortName} — ${siteInfo.fullName}`}
              width={160}
              height={160}
              loading="lazy"
              className="size-24 clip-circle"
            />
            <p className="mt-5 max-w-xs">{siteInfo.fullName}</p>
            <ButtonLink href="/#sobre" variant="accent" size="md" className="mt-7">
              Sobre a EAPE
            </ButtonLink>
          </div>

          <nav aria-labelledby="rodape-navegacao">
            <FooterTitle id="rodape-navegacao" barClass="bg-orange">
              Navegação
            </FooterTitle>
            <ul className="space-y-3">
              {mainNav.map((item) => (
                <li key={item.to}>
                  <NavItemLink item={item} className={footerLinkClass} />
                </li>
              ))}
            </ul>
          </nav>

          <section id="contato" aria-labelledby="rodape-contato" className="scroll-mt-24 md:col-span-2 lg:col-span-1">
            <FooterTitle id="rodape-contato" barClass="bg-teal">
              Contato
            </FooterTitle>
            <address className="not-italic">
              <ul className="space-y-4">
                {contactItems.map(({ label, value, icon: Icon, accent }) => (
                  <li key={label} className="flex items-center gap-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                      <Icon className={cx('size-5', accentClasses[accent].onDark)} aria-hidden="true" />
                    </span>
                    <span>
                      <span className="block text-sm text-white/70">{label}</span>
                      <span className="block text-white">{value}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </address>
          </section>
        </div>
      </Container>

      <div className="border-t border-white/10">
        <Container>
          <p className="py-6 text-sm text-white/70">
            © {CURRENT_YEAR} {siteInfo.shortName} — {siteInfo.fullName}. Todos os direitos reservados.
          </p>
        </Container>
      </div>

      <PencilTips />
    </footer>
  )
}
