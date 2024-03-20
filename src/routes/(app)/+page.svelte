<script>
	import Connect from '$lib/components/Connect.svelte';
	import Introduction from '$lib/components/Introduction.svelte';
	import Now from '$lib/components/Now.svelte';
	import Projects from '$lib/components/Projects.svelte';
</script>

<svelte:head>
	<title>Oluwatimilehin Awoniyi</title>
	<meta name="description" content="Oluwatimilehin Awoniyi" />
</svelte:head>
<section>
	<Introduction />
	<Projects />
	<Now />
	<Connect />
</section>

<style>
	section {
		background: var(--bg-colour);
		
		margin-bottom: 4rem;
	}
</style>
