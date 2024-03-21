<script lang="ts">
	import { writeUps } from '$lib/data/index';
	import SinglePaper from '../common/SinglePaper.svelte';
</script>

<svelte:head>
	<title>Papers</title>
</svelte:head>

<section>
	{#each writeUps as { title, id, subtitle, date, tag } (id)}
		<SinglePaper {title} {subtitle} {date} />
	{/each}
</section>

<style>
	section {
		width: 100%;
	/*
		margin: 0 auto;
		max-width: 700px;
		*/
	}
</style>
