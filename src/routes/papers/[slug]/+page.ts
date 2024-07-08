import { error } from '@sveltejs/kit';

export const load = async ({ params }) => {
	try {
		const paper = await import(`../../../lib/papers/${params.slug}.md`);

		return {
			content: paper.default,
			metadata: paper.metadata
		};
	} catch (e) {
		throw error(404, `Could not find ${params.slug}`);
	}
};
