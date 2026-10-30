import type { I18nText } from '../i18n/ui';

export interface Project {
  name: string;
  role: I18nText;
  period: I18nText;
  summary: I18nText;
  description: I18nText;
  tech: string[];
  featured?: boolean;
  /** Cover image(s) from /public — the first is shown as the card cover. */
  images?: string[];
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
    links: { live: 'https://www.zunoesportes.com/' },
  },
  {
    name: 'Volta',
    role: { en: 'Personal Project · Creator', pt: 'Projeto Pessoal · Criador' },
    period: { en: 'Sep 2026 — Present', pt: 'Set 2026 — Atual' },
    summary: {
      en: 'A digital loyalty card for shops and service businesses — no app for the customer to download.',
      pt: 'Um cartão fidelidade digital para lojas e serviços — sem aplicativo para o cliente baixar.',
    },
    description: {
      en: 'A SaaS that replaces paper punch cards. Businesses add stamps in seconds using the customer\'s phone number, and customers track their rewards without installing anything. Includes a free trial flow so shops can start without a credit card.',
      pt: 'Um SaaS que substitui o cartão fidelidade de papel. O estabelecimento adiciona selos em segundos pelo número de celular do cliente, que acompanha suas recompensas sem instalar nada. Inclui período de teste gratuito, sem cartão de crédito.',
    },
    tech: ['TypeScript', 'NestJS', 'React', 'PostgreSQL', 'Drizzle', 'Turborepo'],
    links: { live: 'https://site.voltarecompensas.com/' },
  },
  {
    name: 'Mind Eaters FC Dashboard',
    role: { en: 'Personal Project · Creator', pt: 'Projeto Pessoal · Criador' },
    period: { en: 'Oct 2026', pt: 'Out 2026' },
    summary: {
      en: 'A stats dashboard for my EA FC Pro Clubs team, Mind Eaters FC.',
      pt: 'Um dashboard de estatísticas para meu time de Pro Clubs do EA FC, o Mind Eaters FC.',
    },
    description: {
      en: 'Tracks the club\'s matches over time: player totals, Man of the Match awards, recent form and per-player rating trends, with match history saved after every session.',
      pt: 'Acompanha as partidas do clube ao longo do tempo: totais por jogador, prêmios de Melhor em Campo, forma recente e evolução da nota de cada jogador, com o histórico salvo após cada sessão.',
    },
    tech: ['Python', 'FastAPI', 'React', 'TypeScript', 'Vite'],
    links: { live: 'https://mindeatersfc.mariomendonca.dev/' },
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
  {
    name: 'La Copa',
    role: { en: 'Freelance · Design & Development', pt: 'Freelance · Design & Desenvolvimento' },
    period: { en: 'Freelance', pt: 'Freelance' },
    summary: {
      en: 'A website for a footvolley tournament organizer — designed, built and sold as a freelance project.',
      pt: 'Um site para uma organização de torneios de futevôlei — projetado, construído e vendido como projeto freelance.',
    },
    description: {
      en: 'An institutional website for La Copa, which organizes footvolley (beach footvolley) tournaments. I designed and developed the site end-to-end and delivered it to the client.',
      pt: 'Um site institucional para a La Copa, que organiza torneios de futevôlei. Projetei e desenvolvi o site de ponta a ponta e o entreguei ao cliente.',
    },
    tech: ['Web Design', 'Frontend'],
    links: { live: 'https://lacopa.com.br/' },
  },
];
