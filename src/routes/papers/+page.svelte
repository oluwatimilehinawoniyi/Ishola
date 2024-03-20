<script>
	import Writing from '$lib/components/UI/Writing.svelte';
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

		<div class="filter">
			<h6>Filter</h6>
		</div>
	</div>
	<section>
		<h3>pen on papers</h3>
		<p>I use this medium to write about various topics including tech, agriculture, IoT etc.</p>
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

		h3 {
			font-size: 1.15rem;
			text-transform: capitalize;
			margin-bottom: 0.85rem;
		}
	}

	.filter {
		display: none;
		margin-top: 5rem;
	}

	.container {
		width: 100%;
		margin-block: 3rem;
	}

	/* @media screen and (min-width: 768px) {
		main {
			background: #000;
		}
	} */

	.control {
		width: max-content;
		justify-self: center;
		margin-bottom: 1.5rem;
		grid-column: 1/2;
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

	@media screen and (min-width: 1024px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
		}

		.filter {
			display: block;
		}
	}
</style>
