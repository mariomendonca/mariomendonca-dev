import type { I18nText } from '../i18n/ui';

export interface Project {
  name: string;
  role: I18nText;
  period: I18nText;
  summary: I18nText;
  description: I18nText;
  tech: string[];
  featured?: boolean;
  links?: { repo?: string; live?: string };
}

export const projects: Project[] = [
  {
    name: 'Zuno',
    role: { en: 'Personal Project · Creator', pt: 'Projeto Pessoal · Criador' },
    period: { en: 'Jan 2026 — Present', pt: 'Jan 2026 — Atual' },
    featured: true,
    summary: {
      en: 'A platform that helps people discover local sports events in Recife, Brazil.',
      pt: 'Uma plataforma que ajuda as pessoas a descobrir eventos esportivos locais em Recife, Brasil.',
    },
    description: {
      en: 'A side project built in personal time to explore and integrate emerging technologies and AI tooling. Built with a Java backend and a React frontend, using a "vibe coding" approach to experiment with modern, AI-assisted development workflows.',
      pt: 'Um projeto pessoal criado no tempo livre para explorar e integrar tecnologias emergentes e ferramentas de IA. Construído com backend em Java e frontend em React, usando uma abordagem de "vibe coding" para experimentar fluxos de desenvolvimento modernos assistidos por IA.',
    },
    tech: ['Java', 'Spring Boot', 'React', 'TypeScript', 'AI Tooling'],
    links: { repo: 'https://github.com/mariomendonca' },
  },
  {
    name: 'FalaAgro',
    role: { en: 'Co-Founder & Developer', pt: 'Cofundador & Desenvolvedor' },
    period: { en: 'Jun 2021 — Jan 2023', pt: 'Jun 2021 — Jan 2023' },
    featured: true,
    summary: {
      en: 'An agribusiness mobile platform for news, events and business opportunities in the rural sector.',
      pt: 'Uma plataforma mobile de agronegócio para notícias, eventos e oportunidades de negócio no setor rural.',
    },
    description: {
      en: 'My first experience as a startup co-founder. I developed the full React Native app and the Node.js / Express / TypeORM / PostgreSQL backend from concept to production. Beyond engineering, the journey through incubation (Garoa Habitat), InovAtiva acceleration and SEBRAE\'s Startups NE program built deep product-ownership and entrepreneurial skills.',
      pt: 'Minha primeira experiência como cofundador de startup. Desenvolvi todo o app em React Native e o backend em Node.js / Express / TypeORM / PostgreSQL, do conceito à produção. Além da engenharia, a jornada por incubação (Garoa Habitat), aceleração InovAtiva e o programa Startups NE do SEBRAE construiu habilidades profundas de product ownership e empreendedorismo.',
    },
    tech: ['React Native', 'Node.js', 'Express', 'TypeORM', 'PostgreSQL'],
  },
];
