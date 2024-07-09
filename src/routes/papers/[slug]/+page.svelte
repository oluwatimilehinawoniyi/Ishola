<script lang="ts">
	import Connect from '$lib/components/UI/Connect.svelte';
	import { formatDate } from '$lib/utils/formatDate';
	export let data;

	const { title, date, description, url, image, keywords } = data.metadata;
</script>

<svelte:head>
	<title>{title}</title>

	<!-- General Meta Tags -->
	<meta name="description" content={description} />
	<meta name="keywords" content={keywords} />

	<!-- Open Graph Meta Tags -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={url} />
	<meta property="og:image" content={image} />

	<!-- Twitter Card Meta Tags -->
	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={title} />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={image} />
</svelte:head>

<main>
	<div class="control">
		<a href="/papers">
			<i>go to papers</i>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-undo-2"
				><path d="M9 14 4 9l5-5" /><path
					d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
				/>
			</svg>
		</a>
	</div>

	<article>
		<hgroup>
			<h1>{title}</h1>
			<p class="">{`published: ${formatDate(date)}`}</p>
		</hgroup>

		<section class="prose">
			<svelte:component this={data.content} />
		</section>

		<Connect />
	</article>
</main>

<style lang="postcss">
	main {
		width: 100%;
		min-height: calc(100vh - var(--top-padding));
		background: var(--bg-colour);
		position: relative;
		align-items: flex-start;
		padding-bottom: 2rem;
	}

	article h1 {
		font-size: 1.35rem;
		text-transform: capitalize;
		margin-bottom: 0.85rem;
	}

	article p {
		text-transform: capitalize;
		font-size: 0.85rem;
		opacity: 0.5;
	}

	.control {
		margin-bottom: 2.5rem;
		grid-column: 1/2;
	}

	.control a {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		width: max-content;
		gap: 0.3rem;
	}
	.control a i {
		font-weight: 500;
	}

	/* @media screen and (min-width: 768px) {
		main {
		}
	} */

	@media screen and (min-width: 1024px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
			gap: 1rem;
		}

		.control {
			position: sticky;
			top: var(--top-padding);
		}

		article {
			grid-column: 2/3;
		}
	}

	@media screen and (min-width: 1240px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
			/* gap: 2rem; */
		}

		.control {
			width: 280px;
			position: fixed;
			left: 0;
			padding-left: 4rem;
		}
	}
</style>
