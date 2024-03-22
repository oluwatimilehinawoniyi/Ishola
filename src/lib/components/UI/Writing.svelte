<script lang="ts">
	import SinglePaper from '../common/SinglePaper.svelte';

	export let posts: {
		title: string;
		_id: string;
		subtitle: string;
		_createdAt: string;
		slug: string;
	}[];
</script>

<svelte:head>
	<title>Papers</title>
</svelte:head>

<section>
	{#each posts as { title, _id, subtitle, _createdAt, slug } (_id)}
		<SinglePaper {title} {subtitle} {_createdAt} {slug} />
	{/each}
</section>

<style>
	section {
		width: 100%;
	}
</style>
