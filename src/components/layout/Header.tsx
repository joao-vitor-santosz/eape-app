import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { mainNav } from '../../content/site'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { cx } from '../../lib/cx'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from './Logo'
import { NavItemLink } from './NavItemLink'

/** Cada item do menu tem o sublinhado em uma cor dos lápis. */
const underlineColors = ['after:bg-orange', 'after:bg-teal', 'after:bg-pink', 'after:bg-green', 'after:bg-purple']

function desktopLinkClass(isActive: boolean, underlineColor: string) {
  return cx(
    'relative block rounded-md px-3 py-2 font-heading text-[15px] font-medium text-navy xl:px-4',
    // Sublinhado colorido: fixo no item ativo, aparece no hover dos demais.
    'after:absolute after:inset-x-3 after:bottom-0 after:h-1 after:rounded-full xl:after:inset-x-4',
    underlineColor,
    'after:origin-left after:transition-transform after:duration-200 motion-reduce:after:transition-none',
    isActive ? 'after:scale-x-100' : 'after:scale-x-0 hover:after:scale-x-100',
  )
}

function mobileLinkClass(isActive: boolean) {
  return cx(
    'block rounded-xl px-4 py-3 font-heading text-lg font-medium text-navy transition-colors duration-200',
    isActive ? 'bg-paper' : 'hover:bg-paper',
  )
}

export function Header() {
  const hasShadow = useScrolledPast(8)
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  useEffect(() => {
    if (!menuOpen) return
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setMenuOpen(false)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [menuOpen])

  return (
    <header
      className={cx(
        'sticky top-0 z-40 border-b bg-white transition-shadow duration-200',
        hasShadow ? 'border-line shadow-soft' : 'border-transparent',
      )}
    >
      <Container>
        <div className="flex h-18 items-center justify-between gap-6 lg:h-20">
          <Logo onClick={closeMenu} />

          <nav aria-label="Navegação principal" className="hidden lg:block">
            <ul className="flex items-center gap-1">
              {mainNav.map((item, index) => (
                <li key={item.to}>
                  <NavItemLink
                    item={item}
                    className={(isActive) => desktopLinkClass(isActive, underlineColors[index % underlineColors.length])}
                  />
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <ButtonLink href="/#contato" variant="accent" size="md">
              Fale conosco
            </ButtonLink>
          </div>

          <button
            type="button"
            className="inline-flex size-11 items-center justify-center rounded-full border border-line text-navy transition-colors duration-200 hover:bg-paper lg:hidden"
            aria-expanded={menuOpen}
            aria-controls="menu-mobile"
            aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X className="size-5" aria-hidden="true" /> : <Menu className="size-5" aria-hidden="true" />}
          </button>
        </div>
      </Container>

      <div
        id="menu-mobile"
        inert={!menuOpen}
        className={cx(
          'grid transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none lg:hidden',
          menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
        )}
      >
        <div className="overflow-hidden">
          <nav aria-label="Navegação principal (celular)" className="border-t border-line">
            <Container className="py-4">
              <ul className="flex flex-col gap-1">
                {mainNav.map((item) => (
                  <li key={item.to}>
                    <NavItemLink item={item} className={mobileLinkClass} onClick={closeMenu} />
                  </li>
                ))}
              </ul>
              <ButtonLink href="/#contato" variant="accent" size="md" className="mt-4 w-full" onClick={closeMenu}>
                Fale conosco
              </ButtonLink>
            </Container>
          </nav>
        </div>
      </div>
    </header>
  )
}
