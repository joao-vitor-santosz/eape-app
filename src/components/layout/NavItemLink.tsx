import { Link, NavLink } from 'react-router'
import { isAnchorLink, type NavItem } from '../../content/site'

interface NavItemLinkProps {
  item: NavItem
  className: (isActive: boolean) => string
  onClick?: () => void
}

/**
 * Usa <NavLink> para rotas (com estado ativo) e <Link> para âncoras,
 * que assim funcionam a partir de qualquer página sem recarregar o site.
 */
export function NavItemLink({ item, className, onClick }: NavItemLinkProps) {
  if (isAnchorLink(item.to)) {
    return (
      <Link to={item.to} onClick={onClick} className={className(false)}>
        {item.label}
      </Link>
    )
  }

  return (
    <NavLink
      to={item.to}
      end
      onClick={onClick}
      className={({ isActive }) => className(isActive)}
    >
      {item.label}
    </NavLink>
  )
}
