import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Projetos: um ficheiro Markdown por projeto e por língua,
// em src/content/projects/pt/<nome>.md e src/content/projects/en/<nome>.md
const projects = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		year: z.number().int(),
		context: z.string().optional(),
		stack: z.array(z.string()).default([]),
		repo: z.url().optional(),
		demo: z.url().optional(),
		featured: z.boolean().default(false),
		/** Ordem na lista (menor aparece primeiro); por defeito ordena por ano. */
		order: z.number().optional(),
	}),
});

const period = z.object({
	start: z.string(),
	end: z.string().optional(),
});

// CV: um ficheiro JSON por língua, em src/content/cv/pt.json e src/content/cv/en.json
const cv = defineCollection({
	loader: glob({ pattern: '*.json', base: './src/content/cv' }),
	schema: z.object({
		name: z.string(),
		role: z.string(),
		location: z.string(),
		intro: z.array(z.string()),
		links: z.array(z.object({ label: z.string(), url: z.string() })),
		pdf: z.string().optional(),
		experience: z.array(
			period.extend({
				title: z.string(),
				org: z.string(),
				description: z.string().optional(),
			}),
		),
		education: z.array(
			period.extend({
				title: z.string(),
				org: z.string(),
				description: z.string().optional(),
			}),
		),
		skills: z.array(z.object({ group: z.string(), items: z.array(z.string()) })),
		languages: z.array(z.object({ name: z.string(), level: z.string() })),
	}),
});

export const collections = { projects, cv };
