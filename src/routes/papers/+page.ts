import { createClient } from '@sanity/client';

const client = createClient({
	projectId: 'ggo1whv8',
	dataset: 'idk',
	apiVersion: '2022-03-07',
	useCdn: false
});
export async function load() {
	try {
		const data = await client.fetch(`*[_type == "post"]{
			_id,
			categories,
			title,
			subtitle,
			_createdAt,
			"slug": slug.current,
		}`);
		return {
			props: {
				post: data
			}
		};
	} catch (error) {
		console.error('Failed to fetch posts:', error);
		return {
			status: 500,
			error: new Error('Could not fetch posts')
		};
	}
}
