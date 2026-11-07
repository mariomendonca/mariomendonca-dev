import type { I18nText, I18nList } from '../i18n/ui';

export interface SkillGroup {
  category: I18nText;
  items: string[] | I18nList;
}

export const skillGroups: SkillGroup[] = [
  {
    category: { en: 'Languages & Frameworks', pt: 'Linguagens & Frameworks' },
    items: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'JavaScript', 'TypeScript', 'React', 'React Native'],
  },
  {
    category: { en: 'Architecture & Infrastructure', pt: 'Arquitetura & Infraestrutura' },
    items: ['Microservices', 'Micro Frontends', 'Kubernetes', 'RabbitMQ', 'CI/CD', 'REST APIs', 'AWS'],
  },
  {
    category: { en: 'Observability & DevOps', pt: 'Observabilidade & DevOps' },
    items: ['Logging', 'Monitoring', 'Distributed Tracing'],
  },
  {
    category: { en: 'Databases', pt: 'Bancos de Dados' },
    items: ['PostgreSQL', 'OracleDB', 'MongoDB', 'Redis'],
  },
  {
    category: { en: 'Leadership', pt: 'Liderança' },
    items: ['Technical Leadership', 'Developer Mentoring', 'Stakeholder Communication', 'Architecture Decisions'],
  },
  {
    category: { en: 'Languages', pt: 'Idiomas' },
    items: { en: ['Portuguese — Native', 'English — C1'], pt: ['Português — Nativo', 'Inglês — C1'] },
  },
];
