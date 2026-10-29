export const languages = {
	pt: { label: 'PT', htmlLang: 'pt-PT', ogLocale: 'pt_PT' },
	en: { label: 'EN', htmlLang: 'en', ogLocale: 'en_GB' },
} as const;

export type Lang = keyof typeof languages;
export const langs = Object.keys(languages) as Lang[];
export const defaultLang: Lang = 'pt';

/** Identificadores de página, independentes da língua. */
export type PageKey = 'home' | 'projects' | 'cv';

const segments: Record<Lang, Record<PageKey, string>> = {
	pt: { home: '', projects: 'projetos', cv: 'cv' },
	en: { home: '', projects: 'projects', cv: 'cv' },
};

/** Constrói o URL de uma página numa língua, respeitando o `base` do Astro. */
export function pathTo(lang: Lang, page: PageKey, slug?: string): string {
	const base = import.meta.env.BASE_URL.replace(/\/$/, '');
	const parts = [lang, segments[lang][page], slug].filter(Boolean);
	return `${base}/${parts.join('/')}/`;
}

export const ui = {
	pt: {
		'site.description': 'Engenharia Informática, redes e sistemas distribuídos. Portfólio e CV.',
		'nav.home': 'início',
		'nav.projects': 'projetos',
		'nav.cv': 'cv',
		'nav.switch': 'Ver em inglês',
		'skip': 'Saltar para o conteúdo',
		'home.featured': 'projetos em destaque',
		'home.allProjects': 'todos os projetos',
		'home.contact': 'contacto',
		'projects.title': 'Projetos',
		'projects.intro': 'Trabalhos académicos e pessoais. Alguns não têm código público.',
		'projects.repo': 'código',
		'projects.demo': 'demo',
		'projects.back': 'voltar aos projetos',
		'projects.private': 'código privado',
		'cv.title': 'Currículo',
		'cv.download': 'descarregar PDF',
		'cv.experience': 'experiência',
		'cv.education': 'formação',
		'cv.skills': 'competências',
		'cv.languages': 'línguas',
		'cv.present': 'presente',
		'404.title': 'Página não encontrada',
		'404.text': 'Este endereço não existe ou mudou de sítio.',
		'404.back': 'voltar ao início',
		'footer.source': 'código-fonte',
	},
	en: {
		'site.description': 'Computer engineering, networks and distributed systems. Portfolio and CV.',
		'nav.home': 'home',
		'nav.projects': 'projects',
		'nav.cv': 'cv',
		'nav.switch': 'Ver em português',
		'skip': 'Skip to content',
		'home.featured': 'selected projects',
		'home.allProjects': 'all projects',
		'home.contact': 'contact',
		'projects.title': 'Projects',
		'projects.intro': 'Academic and personal work. Some of it has no public code.',
		'projects.repo': 'code',
		'projects.demo': 'demo',
		'projects.back': 'back to projects',
		'projects.private': 'private code',
		'cv.title': 'Résumé',
		'cv.download': 'download PDF',
		'cv.experience': 'experience',
		'cv.education': 'education',
		'cv.skills': 'skills',
		'cv.languages': 'languages',
		'cv.present': 'present',
		'404.title': 'Page not found',
		'404.text': 'This address does not exist or has moved.',
		'404.back': 'back to home',
		'footer.source': 'source',
	},
} as const;

export type UiKey = keyof (typeof ui)['pt'];

export function useT(lang: Lang) {
	return (key: UiKey) => ui[lang][key];
}

export const otherLang = (lang: Lang): Lang => (lang === 'pt' ? 'en' : 'pt');
