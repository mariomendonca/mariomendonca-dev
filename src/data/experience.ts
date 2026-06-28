import type { I18nText, I18nList } from '../i18n/ui';

export interface Experience {
  company: string;
  role: I18nText;
  /** Display period, e.g. "Oct 2022 — Present". */
  period: I18nText;
  location: I18nText;
  current?: boolean;
  summary: I18nText;
  bullets: I18nList;
  tech: string[];
}

export const experiences: Experience[] = [
  {
    company: 'Livelo',
    role: { en: 'Tech Lead · Full Stack Software Engineer', pt: 'Tech Lead · Engenheiro de Software Full Stack' },
    period: { en: 'Oct 2022 — Present', pt: 'Out 2022 — Atual' },
    location: { en: 'Recife, Brazil', pt: 'Recife, Brasil' },
    current: true,
    summary: {
      en: 'Joined as a Mobile Developer and was progressively promoted to Software Engineer and then Tech Lead, taking on growing responsibility across mobile, backend and frontend engineering.',
      pt: 'Entrei como Desenvolvedor Mobile e fui progressivamente promovido a Engenheiro de Software e, depois, a Tech Lead, assumindo responsabilidade crescente em mobile, backend e frontend.',
    },
    bullets: {
      en: [
        'As Tech Lead of Trip Management (post-sales), I own the architecture of the post-travel experience — purchase history, travel cancellation with and without penalty, and self-service flows that cut down paid support calls.',
        'Previously led the Hotels vertical, one of Livelo\'s high-volume booking platforms, owning architecture decisions and long-term scalability.',
        'As a React Native developer, co-built the full car-rental flow in the Livelo app, driving a 50% increase in car-rental sales within months of launch.',
        'Helped build new backend architectures that enabled partner integrations, expanding the product catalog to flight tickets and car rentals.',
        'Led the frontend modernization of the Hotels booking experience using Micro Frontends (React), improving developer autonomy and delivery speed.',
        'Deepened backend expertise across Java, Spring Boot, Node.js, NestJS, microservices, Kubernetes, CI/CD, RabbitMQ, logging and monitoring.',
      ],
      pt: [
        'Como Tech Lead de “Gestão da Minha Viagem” (pós-venda), sou responsável pela arquitetura da experiência de pós-viagem — histórico de compras, cancelamento de viagem com e sem multa, e fluxos de autoatendimento que reduzem as ligações para o suporte (pago).',
        'Anteriormente liderei a vertical de Hotéis, uma das plataformas de reservas de alto volume da Livelo, responsável por decisões de arquitetura e escalabilidade de longo prazo.',
        'Como desenvolvedor React Native, co-construí todo o fluxo de aluguel de carros no app da Livelo, gerando um aumento de 50% nas vendas de aluguel de carros poucos meses após o lançamento.',
        'Ajudei a construir novas arquiteturas de backend que habilitaram integrações com parceiros, expandindo o catálogo para passagens aéreas e aluguel de carros.',
        'Liderei a modernização do frontend da experiência de reservas de Hotéis usando Micro Frontends (React), melhorando a autonomia dos desenvolvedores e a velocidade de entrega.',
        'Aprofundei a expertise em backend com Java, Spring Boot, Node.js, NestJS, microsserviços, Kubernetes, CI/CD, RabbitMQ, logging e monitoramento.',
      ],
    },
    tech: ['Java', 'Spring Boot', 'Node.js', 'NestJS', 'React', 'React Native', 'Micro Frontends', 'Kubernetes', 'RabbitMQ', 'CI/CD'],
  },
  {
    company: 'Gowdock',
    role: { en: 'Full Stack Developer', pt: 'Desenvolvedor Full Stack' },
    period: { en: 'Apr 2021 — Sep 2022', pt: 'Abr 2021 — Set 2022' },
    location: { en: 'Recife, Brazil', pt: 'Recife, Brasil' },
    summary: {
      en: 'Early-stage startup with broad responsibilities across product and engineering, with direct exposure to investor discussions and product strategy alongside the founders.',
      pt: 'Startup em estágio inicial com responsabilidades amplas em produto e engenharia, com contato direto com discussões de investidores e estratégia de produto junto aos fundadores.',
    },
    bullets: {
      en: [
        'Built web and mobile applications with React and React Native.',
        'Expanded into backend development with Node.js and Express, taking end-to-end ownership of features.',
        'Applied SOLID principles and clean architecture; picked up GraphQL and TypeScript.',
      ],
      pt: [
        'Construí aplicações web e mobile com React e React Native.',
        'Avancei para o backend com Node.js e Express, assumindo a responsabilidade ponta a ponta das features.',
        'Apliquei princípios SOLID e clean architecture; aprendi GraphQL e TypeScript.',
      ],
    },
    tech: ['React', 'React Native', 'Node.js', 'Express', 'GraphQL', 'TypeScript'],
  },
  {
    company: 'Seed a Bit',
    role: { en: 'Frontend Developer · Junior Enterprise', pt: 'Desenvolvedor Frontend · Empresa Júnior' },
    period: { en: 'Jan 2020 — Mar 2021', pt: 'Jan 2020 — Mar 2021' },
    location: { en: 'Recife, Brazil', pt: 'Recife, Brasil' },
    summary: {
      en: 'My first professional experience, at the junior enterprise of the Rural Federal University of Pernambuco (UFRPE) — collaborating on multi-developer projects for real clients.',
      pt: 'Minha primeira experiência profissional, na empresa júnior da Universidade Federal Rural de Pernambuco (UFRPE) — colaborando em projetos com múltiplos desenvolvedores para clientes reais.',
    },
    bullets: {
      en: [
        'Built institutional and corporate websites and contributed to an e-commerce platform.',
        'Developed skills in HTML, CSS, JavaScript and React, and learned solid Git workflows.',
        'Sharpened communication and leadership through the junior-enterprise movement (MEJ) and strategic company decisions.',
      ],
      pt: [
        'Construí sites institucionais e corporativos e contribuí para uma plataforma de e-commerce.',
        'Desenvolvi habilidades em HTML, CSS, JavaScript e React, e aprendi fluxos de trabalho sólidos com Git.',
        'Aprimorei comunicação e liderança através do Movimento Empresa Júnior (MEJ) e de decisões estratégicas da empresa.',
      ],
    },
    tech: ['HTML', 'CSS', 'JavaScript', 'React', 'Git'],
  },
];
