import { client } from '$lib/sanityClient';
import { papersStore } from '$lib/store/FilterPaperStore';

export async function load() {
	try {
		const postsData = await client.fetch(`*[_type == "post"]{
			_id,
			 "categories": categories[]->{
    title
  },
			title,
			subtitle,
			_createdAt,
			"slug": slug.current,
		}`);

		const categoriesData = await client.fetch(`*[_type == "category"]{
      title, _id
    }`);

		papersStore.set(postsData);

		return {
			props: {
				posts: postsData,
				categories: categoriesData
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

// data to be fetched secondly

// *[_type == "category"]{
//   title, _id
// }
