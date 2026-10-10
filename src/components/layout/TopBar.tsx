import { Mail, MapPin, Phone } from 'lucide-react'
import { siteInfo } from '../../content/site'
import { Container } from '../ui/Container'

export function TopBar() {
  const { address, phone, email } = siteInfo.contact

  return (
    <div className="hidden text-[15px] font-medium text-navy md:block">
      <Container size="wide">
        <div className="flex h-[50px] items-center justify-between border-b border-line">
          <p className="flex items-center gap-2">
            <MapPin className="size-4 text-pink" aria-hidden="true" />
            <span className="sr-only">Endereço: </span>
            {address}
          </p>
          <ul className="flex items-center gap-8">
            <li className="flex items-center gap-2">
              <Phone className="size-4 text-pink" aria-hidden="true" />
              <span className="sr-only">Telefone: </span>
              {phone}
            </li>
            <li className="flex items-center gap-2">
              <Mail className="size-4 text-pink" aria-hidden="true" />
              <span className="sr-only">E-mail: </span>
              {email}
            </li>
          </ul>
        </div>
      </Container>
    </div>
  )
}
