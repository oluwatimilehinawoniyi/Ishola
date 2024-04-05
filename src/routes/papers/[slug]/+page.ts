import { createClient } from '@sanity/client';
import type { PageLoad } from '../$types';

const client = createClient({
	projectId: 'ggo1whv8',
	dataset: 'idk',
	apiVersion: '2022-03-07',
	useCdn: false
});

export const load: PageLoad = async ({ url }) => {
	const slugArr = url.pathname.split('/').filter(Boolean);
	const curSlug = slugArr[slugArr.length - 1];

	try {
		const data = await client.fetch(`*[_type == "post" && slug.current == "${curSlug}"]{
			_id,
			"categories": categories[]->{
    title
  },
			title,
			subtitle,
			_createdAt,
			_updatedAt,
			"image": mainImage.asset->url,
			body
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
};
