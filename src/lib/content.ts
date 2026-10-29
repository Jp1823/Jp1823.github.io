import { getCollection, getEntry, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/ui';

export type Project = CollectionEntry<'projects'>;

/** "pt/v2x-fog" → "v2x-fog" */
export const slugOf = (project: Project) => project.id.split('/').slice(1).join('/');

export async function getProjects(lang: Lang) {
	const all = await getCollection('projects', ({ id }) => id.startsWith(`${lang}/`));
	return all.sort(
		(a, b) =>
			(a.data.order ?? Infinity) - (b.data.order ?? Infinity) || b.data.year - a.data.year,
	);
}

export async function getCv(lang: Lang) {
	const entry = await getEntry('cv', lang);
	if (!entry) throw new Error(`Falta src/content/cv/${lang}.json`);
	return entry.data;
}

/** Junta o `base` do site a um caminho absoluto de /public (ex.: "/cv/cv-pt.pdf"). */
export const withBase = (path: string) =>
	/^[a-z]+:/i.test(path) ? path : `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
