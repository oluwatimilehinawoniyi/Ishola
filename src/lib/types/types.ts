export type CategoryType = 'svelte' | 'react' | 'tech' | 'Mdsvex' | 'Markdown';

export interface PaperType {
	title: string;
	slug: string;
	categories: CategoryType[];
	subtitle: string;
	date: string;
	published: boolean;
	// image: string;
	// body: string[];
}

export interface ProjectType {
	description: string;
	id: number;
	lessons: string;
	link: string;
	links: string[];
	purpose: string;
	role: string;
	screenshots: string[];
	title: string;
	webStack: string;
	stackReason: string;
}
