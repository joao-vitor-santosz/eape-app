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
  /** Também é o trecho do endereço da página: /especialidades/{id}. */
  id: string
  name: string
  icon: LucideIcon
  accent: AccentColor
  /** TEXTO PROVISÓRIO — explicação geral da área, a validar com a EAPE (ver ajustes.md). */
  description: string
}

/** Especialidades e serviços da equipe multidisciplinar da EAPE (nomes definidos pela clínica). */
export const specialties: Specialty[] = [
  {
    id: 'fonoaudiologa',
    name: 'Fonoaudióloga',
    icon: Speech,
    accent: 'pink',
    description:
      'A Fonoaudiologia cuida da comunicação: fala, linguagem, voz e audição, além da mastigação e da deglutição. Ajuda crianças e adolescentes a se expressarem e a compreenderem melhor o mundo ao seu redor.',
  },
  {
    id: 'psicologa',
    name: 'Psicóloga',
    icon: Brain,
    accent: 'purple',
    description:
      'A Psicologia acolhe emoções, comportamentos e relações. No atendimento de crianças e adolescentes, apoia cada um a compreender o que sente e a lidar com os desafios do dia a dia, em parceria com a família.',
  },
  {
    id: 'fisioterapia',
    name: 'Fisioterapia',
    icon: PersonStanding,
    accent: 'green',
    description:
      'A Fisioterapia trabalha o movimento: força, equilíbrio, coordenação e postura. Estimula o desenvolvimento motor para que a criança ganhe mais autonomia e confiança no próprio corpo.',
  },
  {
    id: 'terapeuta-ocupacional',
    name: 'Terapeuta Ocupacional',
    icon: HandHeart,
    accent: 'orange',
    description:
      'A Terapia Ocupacional favorece a autonomia nas atividades do dia a dia, como se vestir, se alimentar, brincar e estudar, trabalhando também aspectos sensoriais e de coordenação.',
  },
  {
    id: 'psicopedagoga',
    name: 'Psicopedagoga',
    icon: Puzzle,
    accent: 'teal',
    description:
      'A Psicopedagogia investiga como cada criança aprende e o que pode estar dificultando esse processo, propondo estratégias para que a aprendizagem aconteça de forma mais leve.',
  },
  {
    id: 'neuropsicopedagoga',
    name: 'Neuropsicopedagoga',
    icon: BrainCircuit,
    accent: 'yellow',
    description:
      'A Neuropsicopedagogia une conhecimentos sobre o funcionamento do cérebro e sobre a aprendizagem, avaliando e estimulando funções como atenção, memória e raciocínio.',
  },
  {
    id: 'pedagoga',
    name: 'Pedagoga',
    icon: GraduationCap,
    accent: 'blue',
    description:
      'A Pedagogia acompanha o processo de ensino e aprendizagem, com atividades planejadas de acordo com as necessidades e o ritmo de cada criança.',
  },
  {
    id: 'reforco-escolar',
    name: 'Reforço Escolar',
    icon: BookOpen,
    accent: 'pink',
    description:
      'O Reforço Escolar oferece apoio aos conteúdos da escola, ajudando a revisar a matéria, organizar os estudos e ganhar mais segurança nas atividades escolares.',
  },
  {
    id: 'aba',
    name: 'ABA',
    icon: Blocks,
    accent: 'purple',
    description:
      'A ABA (Análise do Comportamento Aplicada) ensina habilidades de forma estruturada e individualizada, como comunicação, interação e autonomia. É muito utilizada no acompanhamento de pessoas com TEA.',
  },
  {
    id: 'hidroterapia',
    name: 'Hidroterapia',
    icon: WavesLadder,
    accent: 'teal',
    description:
      'A Hidroterapia utiliza exercícios na água, que favorecem o movimento, o relaxamento e o fortalecimento muscular de forma lúdica e prazerosa.',
  },
]

export function findSpecialty(id: string | undefined): Specialty | undefined {
  return specialties.find((specialty) => specialty.id === id)
}

export function specialtyPath(id: string): string {
  return `/especialidades/${id}`
}
