<script>
	import Footer from '$lib/components/Footer.svelte';
	import '../global.css';
</script>

<main>
	<slot />
	<Footer />
</main>

<style>
	main {
		width: 100%;
		max-width: 700px;
		margin: 0 auto;
		padding: 0rem 1.25rem;
		
	}

	/* @media (min-width: ){} */
</style>
