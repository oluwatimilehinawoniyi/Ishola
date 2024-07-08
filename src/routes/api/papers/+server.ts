import type { PaperType } from '$lib/types/types';
import { json } from '@sveltejs/kit';

async function getPapers() {
	let papers: PaperType[] = [];
	const paths = import.meta.glob('/src/lib/papers/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<PaperType, 'slug'>;
			const paper = { ...metadata, slug } satisfies PaperType;
			paper.published && papers.push(paper);
		}
	}

	papers = papers.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return papers;
}

export async function GET() {
	const papers = await getPapers();
	return json(papers);
}
