import { AtSign, Mail, MapPin, MessageCircle } from 'lucide-react'
import { siteInfo } from '../../content/site'
import { cx } from '../../lib/cx'
import { Container } from '../ui/Container'

const linkClass = 'rounded-sm underline-offset-4 transition-colors duration-200 hover:text-white hover:underline'

export function TopBar() {
  const { address, whatsapp, instagram, email } = siteInfo.contact

  return (
    <div className="on-dark hidden bg-navy text-sm text-white/90 md:block">
      <Container>
        <div className="flex h-10 items-center justify-between gap-6">
          <p className="flex min-w-0 items-center gap-2">
            <MapPin className="size-4 shrink-0 text-orange" aria-hidden="true" />
            <span className="sr-only">Endereço: </span>
            <a href={address.href} target="_blank" rel="noopener noreferrer" className={cx(linkClass, 'truncate')}>
              {address.label}
              <span className="sr-only"> (abre o Google Maps em nova aba)</span>
            </a>
          </p>
          <ul className="flex shrink-0 items-center gap-6">
            <li className="flex items-center gap-2">
              <MessageCircle className="size-4 text-orange" aria-hidden="true" />
              <span className="sr-only">WhatsApp: </span>
              <a href={whatsapp.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {whatsapp.label}
                <span className="sr-only"> (abre o WhatsApp em nova aba)</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <AtSign className="size-4 text-orange" aria-hidden="true" />
              <span className="sr-only">Instagram: </span>
              <a href={instagram.href} target="_blank" rel="noopener noreferrer" className={linkClass}>
                {instagram.label}
                <span className="sr-only"> (abre em nova aba)</span>
              </a>
            </li>
            <li className="hidden items-center gap-2 lg:flex">
              <Mail className="size-4 text-orange" aria-hidden="true" />
              <span className="sr-only">E-mail: </span>
              {email}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
