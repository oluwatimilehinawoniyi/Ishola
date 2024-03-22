<script>
	import Filter from '$lib/components/UI/Filter.svelte';
	import Writing from '$lib/components/UI/Writing.svelte';
	export let data;

	console.log(data.props?.post);
	const posts = data.props?.post;
</script>

<main>
	<div class="control">
		<a href="/">
			<i>go home</i>
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
		<Filter />
	</div>

	<section>
		<h3>pen on papers</h3>
		<p>I use this medium to write about various topics including tech, agriculture, IoT etc.</p>
		<div class="container">
			<Writing {posts} />
		</div>
	</section>
</main>

<style>
	main {
		width: 100%;
		background: var(--bg-colour);
		position: relative;
		align-items: flex-start;
	}

	section {
		width: 100%;
		grid-column: 2/3;

		h3 {
			font-size: 1.35rem;
			text-transform: capitalize;
			margin-bottom: 0.85rem;
		}
	}

	.container {
		width: 100%;
		margin-block: 3rem;
	}

	.control {
		margin-bottom: 1.5rem;
		grid-column: 1/2;

		a {
			display: flex;
			align-items: center;
			flex-direction: row-reverse;
			width: max-content;
			gap: 0.3rem;

			i {
				font-weight: 500;
			}
		}
	}

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
		}

		.control {
			width: 280px;
			position: fixed;
			left: 0;
			padding-left: 4rem;
		}
	}
</style>
