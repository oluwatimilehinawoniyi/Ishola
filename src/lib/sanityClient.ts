import { createClient } from '@sanity/client';

export const client = createClient({
	projectId: 'ggo1whv8',
	dataset: 'idk',
	apiVersion: '2022-03-07',
	useCdn: false
});
