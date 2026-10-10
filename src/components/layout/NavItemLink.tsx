import { NavLink } from 'react-router'
import { isAnchorLink, type NavItem } from '../../content/site'

interface NavItemLinkProps {
  item: NavItem
  className: (isActive: boolean) => string
  onClick?: () => void
}

/** Usa <NavLink> para rotas e <a> para âncoras da página inicial. */
export function NavItemLink({ item, className, onClick }: NavItemLinkProps) {
  if (isAnchorLink(item.to)) {
    return (
      <a href={item.to} onClick={onClick} className={className(false)}>
        {item.label}
      </a>
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
