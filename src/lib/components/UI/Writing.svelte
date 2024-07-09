<script lang="ts">
	import type { PaperType } from '$lib/types/types';
	import { formatDate } from '$lib/utils/formatDate';

	export let papers: PaperType[];
</script>

<svelte:head>
	<title>Papers</title>
</svelte:head>

<section>
	{#each papers as { title, date, slug } (title)}
		<a href={`papers/${slug}`} class="container">
			<div class="heading">
				<h3 class="">{title}</h3>
			</div>
			<p class="date">{formatDate(date)}</p>
		</a>
	{/each}
</section>

<style>
	section {
		width: 100%;
	}

	.container {
		width: 100%;
		cursor: pointer;
		padding: 1rem 0rem;
		display: flex;
		align-items: start;
		justify-content: space-between;
		border-top: 1px solid var(--paragraph-colour);
	}

	.heading {
		max-width: 70%;
	}
	
	h3 {
		text-transform: capitalize;
		margin-bottom: 0.5rem;
		font-weight: 500;
	}

	h3,
	p {
		transition: opacity 0.2s linear;
	}

	section:hover a.container:not(:hover) h3,
	section:hover a.container:not(:hover) p {
		opacity: 0.5;
	}
</style>
