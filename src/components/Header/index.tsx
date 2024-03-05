import { Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { Separator } from '../ui/separator'
import NavLink from './nav-link'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="flex items-center space-x-4 lg:space-x-6">
          <NavLink to="/">
            <Home />
            Início
          </NavLink>
          <NavLink to="/orders">
            <UtensilsCrossed />
            Pedidos
          </NavLink>
        </nav>
      </div>
    </div>
  )
}
