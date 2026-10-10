import { Menu, X } from 'lucide-react'
import { useEffect, useState } from 'react'
import { mainNav } from '../../content/site'
import { useScrolledPast } from '../../hooks/useScrolledPast'
import { cx } from '../../lib/cx'
import { ButtonLink } from '../ui/Button'
import { Container } from '../ui/Container'
import { Logo } from './Logo'
import { NavItemLink } from './NavItemLink'
import { TopBar } from './TopBar'

const STICKY_OFFSET = 200

function desktopLinkClass(isActive: boolean) {
  return cx(
    'block rounded-md px-[18px] py-[15px] font-heading text-base/5 font-bold tracking-[0.5px] transition-all duration-250 ease-in-out xl:px-[25px]',
    'hover:bg-pink hover:text-white hover:shadow-pressed',
    isActive ? 'bg-pink text-white shadow-pressed' : 'text-navy',
  )
}

function mobileLinkClass(isActive: boolean) {
  return cx(
    'block rounded-md px-4 py-3 font-heading text-lg font-bold transition-colors duration-250',
    isActive ? 'bg-pink text-white' : 'text-navy hover:bg-pink/10',
  )
}

export function Header() {
  const isSticky = useScrolledPast(STICKY_OFFSET)
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
    <header className="relative z-40 bg-cream">
      <TopBar />

      {/* Reserva a altura da barra para não deslocar o conteúdo quando ela fica fixa. */}
      <div className="h-[84px] lg:h-[110px]">
        <div
          className={cx(
            'inset-x-0 top-0 z-50',
            isSticky
              ? 'fixed bg-white shadow-sticky motion-safe:animate-slide-down'
              : 'relative',
          )}
        >
          <Container size="wide">
            <div
              className={cx(
                'flex items-center justify-between gap-6 transition-[height] duration-250',
                isSticky ? 'h-[80px]' : 'h-[84px] lg:h-[110px]',
              )}
            >
              <Logo onClick={closeMenu} />

              <nav aria-label="Navegação principal" className="hidden flex-1 lg:block">
                <ul className="flex items-center gap-0.5 xl:ml-12">
                  {mainNav.map((item) => (
                    <li key={item.to}>
                      <NavItemLink item={item} className={desktopLinkClass} />
                    </li>
                  ))}
                </ul>
              </nav>

              <div className="hidden lg:block">
                <ButtonLink href="/#contato" variant="primary" size="md">
                  Fale conosco
                </ButtonLink>
              </div>

              <button
                type="button"
                className="inline-flex size-12 items-center justify-center rounded-md bg-pink text-white shadow-pressed lg:hidden"
                aria-expanded={menuOpen}
                aria-controls="menu-mobile"
                aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
                onClick={() => setMenuOpen((open) => !open)}
              >
                {menuOpen ? <X className="size-6" aria-hidden="true" /> : <Menu className="size-6" aria-hidden="true" />}
              </button>
            </div>
          </Container>

          <div
            id="menu-mobile"
            inert={!menuOpen}
            className={cx(
              'grid bg-white shadow-sticky transition-[grid-template-rows] duration-300 ease-in-out motion-reduce:transition-none lg:hidden',
              menuOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]',
            )}
          >
            <div className="overflow-hidden">
              <nav aria-label="Navegação principal (celular)">
                <Container className="py-4">
                  <ul className="flex flex-col gap-1">
                    {mainNav.map((item) => (
                      <li key={item.to}>
                        <NavItemLink item={item} className={mobileLinkClass} onClick={closeMenu} />
                      </li>
                    ))}
                  </ul>
                  <ButtonLink
                    href="/#contato"
                    variant="primary"
                    size="md"
                    className="mt-4 w-full"
                    onClick={closeMenu}
                  >
                    Fale conosco
                  </ButtonLink>
                </Container>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
