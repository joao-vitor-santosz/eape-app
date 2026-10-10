import { Mail, MapPin, Phone } from 'lucide-react'
import { siteInfo } from '../../content/site'
import { Container } from '../ui/Container'

export function TopBar() {
  const { address, phone, email } = siteInfo.contact

  return (
    <div className="hidden bg-navy text-sm text-white/90 md:block">
      <Container>
        <div className="flex h-10 items-center justify-between gap-6">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-orange" aria-hidden="true" />
            <span className="sr-only">Endereço: </span>
            {address}
          </p>
          <ul className="flex items-center gap-6">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-orange" aria-hidden="true" />
              <span className="sr-only">Telefone: </span>
              {phone}
            </li>
            <li className="flex items-center gap-2">
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
