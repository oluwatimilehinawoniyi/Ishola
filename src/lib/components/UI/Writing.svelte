<script lang="ts">
	import type { PaperType } from '$lib/types/types';
	import { formatDate } from '$lib/utils/formatDate';

	export let papers: PaperType[];
</script>

<svelte:head>
	<title>Papers</title>
</svelte:head>

<section>
	{#each papers as { title, subtitle, date, slug } (title)}
		<a href={`papers/${slug}`} class="container">
			<div class="heading">
				<h3>{title}</h3>
				<p>{subtitle}</p>
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
		cursor: pointer;
		padding: 1rem 0rem;
		display: flex;
		align-items: start;
		justify-content: space-between;
		border-top: 1px solid var(--paragraph-colour);
	}

	h3 {
		text-transform: capitalize;
		margin-bottom: 0.5rem;
	}
	.container:hover {
		background: #ebebeb9a;
	}

	@media (prefers-color-scheme: dark) {
		.container:hover {
			background: #4d4c4c9a;
		}
	}
</style>
