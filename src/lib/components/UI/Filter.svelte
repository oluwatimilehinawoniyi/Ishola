<script lang="ts">
	import { activeFilter } from '$lib/store/FilterPaperStore';
	import { onMount } from 'svelte';

	export let tags: { title: string; _id: string }[];
	const data = ['all', ...tags.map((tag) => tag.title)];
	let activeItem: string | null = 'all';

	function toggleActive(item: string) {
		if (activeItem === item && activeItem !== 'all') {
			activeItem = 'all';
		} else {
			activeItem = item;
		}

		activeFilter.set(activeItem);
	}

	$: currentFilter = $activeFilter;
	onMount(() => {
		toggleActive(currentFilter);
	});
</script>

<section class="filter">
	<div class="filter_head">
		<h6>Filter</h6>
	</div>

	<div class="keys_holder">
		{#each data as item (item)}
			<button
				class="keys {activeItem === item ? 'active' : ''}"
				on:click={() => toggleActive(item)}
			>
				<p>{item}</p>
			</button>
		{/each}
	</div>

	<div class="info">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="18"
			height="18"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
			class="lucide lucide-info"
			><circle cx="12" cy="12" r="10" /><path d="M12 16v-4" /><path d="M12 8h.01" /></svg
		>
		<p>Toggle any of the tabs to filter the blog list.</p>
	</div>
</section>

<style>
	.info {
		margin-top: 1.5rem;
		display: flex;
		align-items: start;
		gap: 0.5rem;
	}
	.info svg {
		transform: translateY(2px);
	}
	.info p {
		font-size: 0.85rem;
	}
	
	.filter {
		display: none;
		margin-top: 5rem;
	}

	.keys_holder {
		width: 200px;
		display: flex;
		gap: 1rem 0.5rem;
		flex-wrap: wrap;
		margin-top: 1rem;
	}

	.keys {
		outline: none;
		border: none;
		cursor: pointer;
		border-radius: 1000px;
		min-width: 40px;
		display: grid;
		place-items: center;
		padding: 0.3rem 0.5rem;
		background-color: rgba(var(--paragraph-col), 0.2);
	}

	.keys p {
		text-transform: capitalize;
		font-weight: 500;
		opacity: 0.5;
		line-height: normal;
	}

	.active {
		background: var(--paragraph-colour);
	}
	.active p {
		color: #fff;
		opacity: 1;
	}

	@media screen and (min-width: 1024px) {
		.filter {
			display: block;
		}
	}
</style>
