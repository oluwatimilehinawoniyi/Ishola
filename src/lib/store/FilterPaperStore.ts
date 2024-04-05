import { writable, derived } from 'svelte/store';
import type { PaperType } from '$lib/types/types';

export const papersStore = writable<PaperType[]>([]);
export const activeFilter = writable('all');

export const filteredPosts = derived(
	[papersStore, activeFilter],
	([$papersStore, $activeFilter]) => {
		if ($activeFilter === 'all') {
			return $papersStore;
		} else {
			return $papersStore.filter((post) =>
				post.categories.some((category) => category.title === $activeFilter)
			);
		}
	}
);
