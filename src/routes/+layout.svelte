<script>
	import '../global.css';
	let title = 'Oluwatimilehin Awoniyi';
	let description = 'Official website of Oluwatimilehin Awoniyi';
	let url = 'https://www.oluwatimilehinawoniyi.com';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<meta
		name="keywords"
		content="frontend, frontend developer, frontend engineer, UX engineer, software engineer, website, Oluwatimilehin Awoniyi,"
	/>

	<meta property="og:type" content="website" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<!-- <meta property="og:image" content={image} /> -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<!-- <meta name="twitter:image" content={image} /> -->
</svelte:head>

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
