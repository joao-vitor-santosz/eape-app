import type { AccentColor } from '../lib/accent'
import { siteInfo } from './site'

/**
 * Conteúdo da página "Sobre".
 *
 * `pending`: espaço que depende de texto da EAPE. É exibido no site como
 * "Aguardando conteúdo da EAPE" e deve ser substituído antes da publicação
 * (ver questionário em ajustes.md, seção 5).
 */
export type MaybePending = { text: string } | { pending: string }

export const aboutPageContent = {
  intro:
    'Conheça um pouco mais sobre quem somos, como funciona o atendimento e o cuidado que dedicamos a cada criança, adolescente e família.',
  history: {
    pending: 'Como e quando a EAPE começou, quem fundou a clínica e por quê, e os marcos da sua trajetória.',
  } satisfies MaybePending,
  values: {
    pending: 'Os 3 ou 4 valores ou princípios que definem a EAPE, com uma frase curta para cada um.',
  } satisfies MaybePending,
}

export interface ProcessStep {
  title: string
  content: MaybePending
  accent: AccentColor
}

/** Etapas do atendimento. Apenas o primeiro contato é conhecido; as demais aguardam a EAPE. */
export const processSteps: ProcessStep[] = [
  {
    title: 'Primeiro contato',
    content: {
      text: 'Fale com a EAPE pelo WhatsApp ou por telefone para tirar dúvidas e conversar sobre a necessidade da criança ou do adolescente.',
    },
    accent: 'orange',
  },
  {
    title: 'Etapa 2',
    content: { pending: 'Próxima etapa do atendimento (por exemplo, acolhimento ou avaliação inicial).' },
    accent: 'teal',
  },
  {
    title: 'Etapa 3',
    content: { pending: 'Próxima etapa do atendimento (por exemplo, plano de atendimento individual).' },
    accent: 'purple',
  },
  {
    title: 'Etapa 4',
    content: { pending: 'Próxima etapa do atendimento (por exemplo, acompanhamento com a família e a escola).' },
    accent: 'green',
  },
]

export interface FaqItem {
  question: string
  answer: MaybePending
}

export const faqItems: FaqItem[] = [
  {
    question: 'Quem a EAPE atende?',
    answer: {
      text: 'Crianças e adolescentes com transtornos e dificuldades de aprendizagem, como TDAH, TEA, Síndrome de Down, paralisia cerebral e dislexia.',
    },
  },
  {
    question: 'Como faço para agendar?',
    answer: {
      text: `Entre em contato pelo WhatsApp ou pelo telefone ${siteInfo.contact.phone.label}. A equipe vai tirar suas dúvidas e orientar os próximos passos.`,
    },
  },
  {
    question: 'Onde a EAPE fica?',
    answer: { text: siteInfo.contact.address.label },
  },
  {
    question: 'A partir de qual idade vocês atendem?',
    answer: { pending: 'Faixa de idade atendida pela EAPE.' },
  },
  {
    question: 'É preciso ter encaminhamento para iniciar o atendimento?',
    answer: { pending: 'Se é necessário encaminhamento médico ou de outro profissional.' },
  },
  {
    question: 'Vocês atendem por convênio?',
    answer: { pending: 'Convênios aceitos ou se o atendimento é somente particular.' },
  },
  {
    question: 'Qual é o horário de atendimento?',
    answer: { pending: 'Dias e horários de funcionamento da clínica.' },
  },
]
