<script lang="ts">
	import { formatDate } from '$lib/utils/formatDate';
	export let data;

	const { title, date, subtitle } = data.metadata;
</script>

<svelte:head>
	<title>{title}</title>
	<meta property="og:type" content="article" />
	<meta property="og:title" content={title} />
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

	<artivle>
		<hgroup>
			<h3>{title}</h3>
			<h5>{subtitle}</h5>
			<p>{`published at: ${formatDate(date)}`}</p>
		</hgroup>

		<section class="prose">
			<svelte:component this={data.content} />
		</section>

		<!-- 
		<div class="image_holder">
			<img src={image} alt="" />
		</div>
		-->
	</artivle>
</main>

<style>
	main {
		width: 100%;
		min-height: 100%;
		background: var(--bg-colour);
		position: relative;
		align-items: flex-start;
		padding-bottom: 2rem;
	}

	.control {
		margin-bottom: 1.5rem;
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

	.prose :is(h1, h2, h3, h4, h5, h6) {
	}

	.prose pre {
		tab-size: 2;
		color: white;
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
