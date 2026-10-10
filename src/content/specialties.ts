import { Brain, BookOpen, PersonStanding, Puzzle, Shapes, Speech, type LucideIcon } from 'lucide-react'
import type { AccentColor } from '../lib/accent'

export interface Specialty {
  id: string
  name: string
  icon: LucideIcon
  accent: AccentColor
}

/** As seis especialidades e serviços oficiais da EAPE (nomes definidos pela clínica). */
export const specialties: Specialty[] = [
  { id: 'fonoaudiologa', name: 'Fonoaudióloga', icon: Speech, accent: 'pink' },
  { id: 'psicologa', name: 'Psicóloga', icon: Brain, accent: 'purple' },
  { id: 'fisioterapia', name: 'Fisioterapia', icon: PersonStanding, accent: 'green' },
  { id: 'psicomotricidade', name: 'Psicomotricidade', icon: Shapes, accent: 'orange' },
  { id: 'reforco-escolar', name: 'Reforço Escolar', icon: BookOpen, accent: 'blue' },
  { id: 'psicopedagoga', name: 'Psicopedagoga', icon: Puzzle, accent: 'teal' },
]
