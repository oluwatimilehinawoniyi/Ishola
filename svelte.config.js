import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

import { escapeSvelte, mdsvex } from 'mdsvex';
import { createHighlighter } from 'shiki';

const mdsvexOptions = {
	extensions: ['.md'],
	highlighter: {
		highlighter: async (code, lang = 'text') => {
			const highlighter = await createHighlighter({ theme: 'nord' });
			const html = escapeSvelte(highlighter.codeToHtml(code, { lang }));

			return `{@html \`${html}\`}`;
		}
	}
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md'],
	preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

	kit: {
		adapter: adapter()
	}
};

export default config;
