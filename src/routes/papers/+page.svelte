<script>
	import Writing from '$lib/components/Writing.svelte';
</script>

<main>
	<div class="control">
		<a href="/">
			<i>go back</i>
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
	<section>
		<div class="container">
			<Writing />
		</div>
	</section>
</main>

<style>
	main {
		width: 100%;
		background: var(--bg-colour);
	}

	section {
		grid-column: 2/3;
	}

	.container {
		width: 100%;
		position: relative;
		padding-bottom: 2rem;
	}

	/* @media screen and (min-width: 768px) {
		main {
			background: #000;
		}
	} */

	@media screen and (min-width: 1024px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
		}
	}

	.control {
		width: max-content;
		justify-self: center;
	}

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
</style>
