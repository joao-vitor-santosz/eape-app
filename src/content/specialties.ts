import {
  Blocks,
  BookOpen,
  Brain,
  BrainCircuit,
  GraduationCap,
  HandHeart,
  PersonStanding,
  Puzzle,
  Speech,
  WavesLadder,
  type LucideIcon,
} from 'lucide-react'
import type { AccentColor } from '../lib/accent'

export interface Specialty {
  id: string
  name: string
  icon: LucideIcon
  accent: AccentColor
}

/** Especialidades e serviços da equipe multidisciplinar da EAPE (nomes definidos pela clínica). */
export const specialties: Specialty[] = [
  { id: 'fonoaudiologa', name: 'Fonoaudióloga', icon: Speech, accent: 'pink' },
  { id: 'psicologa', name: 'Psicóloga', icon: Brain, accent: 'purple' },
  { id: 'fisioterapia', name: 'Fisioterapia', icon: PersonStanding, accent: 'green' },
  { id: 'terapeuta-ocupacional', name: 'Terapeuta Ocupacional', icon: HandHeart, accent: 'orange' },
  { id: 'psicopedagoga', name: 'Psicopedagoga', icon: Puzzle, accent: 'teal' },
  { id: 'neuropsicopedagoga', name: 'Neuropsicopedagoga', icon: BrainCircuit, accent: 'yellow' },
  { id: 'pedagoga', name: 'Pedagoga', icon: GraduationCap, accent: 'blue' },
  { id: 'reforco-escolar', name: 'Reforço Escolar', icon: BookOpen, accent: 'pink' },
  { id: 'aba', name: 'ABA', icon: Blocks, accent: 'purple' },
  { id: 'hidroterapia', name: 'Hidroterapia', icon: WavesLadder, accent: 'teal' },
]
