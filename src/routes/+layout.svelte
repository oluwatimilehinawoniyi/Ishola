<script>
	import '../global.css';
</script>

<main>
	<slot />
</main>

<style>
	main {
		width: 100%;
		padding: 0rem 1.25rem;
		padding-top: var(--top-padding);
		background-color: var(--bg-colour);
	}

	@media (min-width: 1024px) {
		main {
			padding-inline: 0;
		}
	}
</style>
