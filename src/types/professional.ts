/**
 * Profissional da equipe da EAPE.
 * Estrutura pensada para o futuro retorno da API (GET de profissionais).
 */
export interface Professional {
  id: string
  name: string
  /** Cargo exibido no cartão, ex.: "Fonoaudióloga". */
  role: string
  /** Registro no conselho profissional, ex.: "CRFa 2-00000". */
  registry?: string
  photoUrl?: string
  /** Graduação e pós-graduações. */
  education: string[]
  /** Cursos, abordagens e áreas de aprofundamento. */
  specializations: string[]
  /** Ano de início da atuação; o tempo de experiência é calculado a partir dele. */
  startYear: number
  /** Resumo sempre visível no cartão. */
  summary: string
  /** Descrição completa, exibida ao clicar em "Ler mais". */
  bio: string
  /** Um profissional pode atuar em mais de uma especialidade (ids de `specialties`). */
  specialtyIds: string[]
}
