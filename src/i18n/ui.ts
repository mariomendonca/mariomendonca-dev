export const locales = ['en', 'pt'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'en';

/** A string that exists in both languages. */
export type I18nText = Record<Locale, string>;
/** A list of strings that exists in both languages. */
export type I18nList = Record<Locale, string[]>;

/** Static UI strings (labels, buttons, section titles). */
export const ui = {
  'nav.about': { en: 'About', pt: 'Sobre' },
  'nav.experience': { en: 'Experience', pt: 'Experiência' },
  'nav.projects': { en: 'Projects', pt: 'Projetos' },
  'nav.education': { en: 'Education', pt: 'Formação' },
  'nav.skills': { en: 'Skills', pt: 'Skills' },

  'hero.eyebrow': { en: 'Full Stack Engineer · Tech Lead', pt: 'Engenheiro Full Stack · Tech Lead' },
  'hero.cta.contact': { en: 'Get in touch', pt: 'Entrar em contato' },
  'hero.cta.cv': { en: 'Download CV', pt: 'Baixar CV' },
  'hero.available': { en: 'Open to opportunities & freelance', pt: 'Aberto a oportunidades & freelas' },

  'section.about': { en: 'About', pt: 'Sobre' },
  'section.experience': { en: 'Experience', pt: 'Experiência' },
  'section.projects': { en: 'Projects', pt: 'Projetos' },
  'section.education': { en: 'Education', pt: 'Formação' },
  'section.skills': { en: 'Skills', pt: 'Tecnologias' },

  'experience.present': { en: 'Present', pt: 'Atual' },
  'experience.current': { en: 'Current', pt: 'Atual' },

  'projects.viewRepo': { en: 'Code', pt: 'Código' },
  'projects.viewLive': { en: 'Live', pt: 'Demo' },
  'projects.featured': { en: 'Featured', pt: 'Destaque' },

  'education.inProgress': { en: 'In progress', pt: 'Em andamento' },

  'footer.heading': { en: "Let's build something", pt: 'Vamos construir algo' },
  'footer.subheading': {
    en: 'Available for full-time roles and freelance projects.',
    pt: 'Disponível para vagas full-time e projetos freelance.',
  },
  'footer.email': { en: 'Email me', pt: 'Me enviar email' },
  'footer.rights': { en: 'All rights reserved.', pt: 'Todos os direitos reservados.' },
  'footer.builtWith': { en: 'Built with Astro.', pt: 'Feito com Astro.' },

  'a11y.theme': { en: 'Toggle color theme', pt: 'Alternar tema de cor' },
  'a11y.lang': { en: 'Switch to Portuguese', pt: 'Mudar para inglês' },
  'a11y.toTop': { en: 'Back to top', pt: 'Voltar ao topo' },
  'a11y.menu': { en: 'Open menu', pt: 'Abrir menu' },
} satisfies Record<string, I18nText>;

export type UIKey = keyof typeof ui;

/** Returns a translator bound to a locale: t('nav.about'). */
export function useTranslations(locale: Locale) {
  return (key: UIKey) => ui[key][locale];
}

/** Resolve an I18nText/I18nList for the active locale. */
export function pick<T>(value: Record<Locale, T>, locale: Locale): T {
  return value[locale];
}

/** The opposite locale (for the language toggle). */
export function otherLocale(locale: Locale): Locale {
  return locale === 'en' ? 'pt' : 'en';
}

/** Home URL for a locale ('/' for en, '/pt/' for pt). */
export function localeHome(locale: Locale): string {
  return locale === 'en' ? '/' : '/pt/';
}
