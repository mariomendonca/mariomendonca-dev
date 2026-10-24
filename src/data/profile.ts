import type { I18nText } from '../i18n/ui';

export interface SocialLink {
  label: string;
  href: string;
  handle: string;
}

export interface Profile {
  name: string;
  title: I18nText;
  location: I18nText;
  email: string;
  phone: string;
  cv: string;
  photo: string;
  /** Short hero pitch. */
  tagline: I18nText;
  /** Longer About paragraphs. */
  about: I18nText[];
  socials: SocialLink[];
  /** Quick stats shown in the hero/about. */
  stats: { value: string; label: I18nText }[];
}

export const profile: Profile = {
  name: 'Mario Mendonça',
  title: {
    en: 'Full Stack Software Engineer & Tech Lead',
    pt: 'Engenheiro de Software Full Stack & Tech Lead',
  },
  location: { en: 'Recife, Brazil', pt: 'Recife, Brasil' },
  email: 'mariomendoncaneto@gmail.com',
  phone: '+55 81 98851-3328',
  cv: '/mario-mendonca-cv.pdf',
  photo: '/mario-profile.png',
  tagline: {
    en: 'I build robust, scalable web and mobile products — and lead the teams that ship them.',
    pt: 'Construo produtos web e mobile robustos e escaláveis — e lidero os times que os entregam.',
  },
  about: [
    {
      en: "I'm a Full Stack Software Engineer and Tech Lead with over 5 years of experience building robust, scalable web and mobile applications. I work across the stack with Java, Spring Boot, Node.js, NestJS, React, React Native and TypeScript.",
      pt: 'Sou Engenheiro de Software Full Stack e Tech Lead com mais de 5 anos de experiência construindo aplicações web e mobile robustas e escaláveis. Atuo em toda a stack com Java, Spring Boot, Node.js, NestJS, React, React Native e TypeScript.',
    },
    {
      en: "Today I'm a Software Engineer at OneBeat, an AI-driven inventory optimization platform for retailers. Before that, I spent nearly four years at Livelo, one of Brazil's largest loyalty programs (nearly 60M users), growing from Mobile Developer to Tech Lead — leading Trip Management, the post-sales travel experience, making architecture decisions, mentoring engineers and partnering with stakeholders to turn business goals into shipped software.",
      pt: 'Hoje sou Engenheiro de Software na OneBeat, uma plataforma de otimização de estoque baseada em IA para o varejo. Antes disso, passei quase quatro anos na Livelo, um dos maiores programas de fidelidade do Brasil (quase 60 milhões de usuários), evoluindo de Desenvolvedor Mobile a Tech Lead — liderando a experiência de pós-venda “Gestão da Minha Viagem”, tomando decisões de arquitetura, mentorando engenheiros e trabalhando próximo aos stakeholders para transformar objetivos de negócio em software entregue.',
    },
    {
      en: 'Outside the day job I co-founded a startup, mentor university teams, and build side projects to explore emerging technologies and AI tooling.',
      pt: 'Fora do trabalho, cofundei uma startup, mentoro times universitários e crio projetos pessoais para explorar tecnologias emergentes e ferramentas de IA.',
    },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/mariomendonca', handle: 'mariomendonca' },
    { label: 'LinkedIn', href: 'https://linkedin.com/in/mariommendonca', handle: 'mariommendonca' },
    { label: 'Email', href: 'mailto:mariomendoncaneto@gmail.com', handle: 'mariomendoncaneto@gmail.com' },
  ],
  stats: [
    { value: '5+', label: { en: 'Years of experience', pt: 'Anos de experiência' } },
    { value: '~60M', label: { en: 'Users served at Livelo', pt: 'Usuários atendidos na Livelo' } },
    { value: '50+', label: { en: 'Students mentored', pt: 'Estudantes mentorados' } },
  ],
};
