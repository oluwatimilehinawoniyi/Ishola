import type { PaperType } from '$lib/types/types.js';

export async function load({ fetch }) {
	const response = await fetch('/api/papers');
	const papers: PaperType[] = await response.json();
	return {
		papers
	};
}