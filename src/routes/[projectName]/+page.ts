import type { PageLoad } from './$types';
import { myProjects } from '$lib/data';

export const load: PageLoad = ({ params }) => {
	const projectName = params.projectName;
	const project = myProjects.find(
		(p) => p.title.toLowerCase() === projectName.toLowerCase().replace(/-/g, ' ')
	);

	if (!project) {
		throw new Error(`Project ${projectName} not found`);
	}

	return {
		data: project
	};
};
