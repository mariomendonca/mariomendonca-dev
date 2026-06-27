import type { I18nText } from '../i18n/ui';

export type CredentialKind = 'degree' | 'certification' | 'mentoring';

export interface Credential {
  kind: CredentialKind;
  institution: string;
  title: I18nText;
  period: I18nText;
  inProgress?: boolean;
  note?: I18nText;
}

export const credentials: Credential[] = [
  {
    kind: 'degree',
    institution: 'FIAP',
    title: { en: 'Postgraduate — Software Architecture', pt: 'Pós-graduação — Arquitetura de Software' },
    period: { en: 'Mar 2025 — Mar 2026', pt: 'Mar 2025 — Mar 2026' },
    inProgress: true,
  },
  {
    kind: 'degree',
    institution: 'Uninassau',
    title: { en: "Bachelor's — Systems Analysis & Development", pt: 'Bacharelado — Análise e Desenvolvimento de Sistemas' },
    period: { en: 'Jan 2023 — Dec 2024', pt: 'Jan 2023 — Dez 2024' },
  },
  {
    kind: 'mentoring',
    institution: 'Porto Digital',
    title: { en: 'Technical & Strategic Mentor', pt: 'Mentor Técnico & Estratégico' },
    period: { en: 'May 2024', pt: 'Mai 2024' },
    note: {
      en: 'Mentored 6 squads (48–60 students) in a city-government program at Brazil\'s largest urban tech park, guiding teams building startups for environmental and climate challenges.',
      pt: 'Mentorei 6 squads (48–60 estudantes) em um programa do governo municipal no maior parque tecnológico urbano do Brasil, orientando times que construíam startups para desafios ambientais e climáticos.',
    },
  },
  {
    kind: 'certification',
    institution: 'Anthropic',
    title: { en: 'Claude 101', pt: 'Claude 101' },
    period: { en: '2025', pt: '2025' },
  },
  {
    kind: 'certification',
    institution: 'Anthropic',
    title: { en: 'Claude Code 101', pt: 'Claude Code 101' },
    period: { en: '2025', pt: '2025' },
  },
  {
    kind: 'certification',
    institution: 'Anthropic',
    title: { en: 'Introduction to Subagents', pt: 'Introduction to Subagents' },
    period: { en: '2025', pt: '2025' },
  },
];
