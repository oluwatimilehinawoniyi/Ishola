<script lang="ts">
</script>

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

	<section>
		<h3>Lorem ipsum dolor sit amet.</h3>

		<h5>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ut quod dignissimos aliquid!</h5>

		<p>
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique maiores velit repellendus
			sed modi labore? Fugit nulla blanditiis cumque provident iste eos! Delectus vero asperiores
			modi quis provident consectetur veritatis dolores nostrum, non doloremque alias, dignissimos
			earum beatae quae officia expedita ad itaque iure maxime accusantium tenetur fugiat harum?
			Consequatur quas dolorum earum odit, modi maiores ducimus iusto inventore recusandae libero
			sunt dolorem aliquam totam neque suscipit et provident odio asperiores? Dolores cum, alias
			quidem accusantium, commodi corporis illo, veritatis distinctio recusandae dicta molestiae.
			Suscipit, blanditiis optio omnis aperiam, quos voluptates ratione dolore iste ullam reiciendis
			deserunt, dolores corporis nesciunt.
			Lorem ipsum dolor sit amet consectetur, adipisicing elit. Similique maiores velit repellendus
			sed modi labore? Fugit nulla blanditiis cumque provident iste eos! Delectus vero asperiores
			modi quis provident consectetur veritatis dolores nostrum, non doloremque alias, dignissimos
			earum beatae quae officia expedita ad itaque iure maxime accusantium tenetur fugiat harum?
			Consequatur quas dolorum earum odit, modi maiores ducimus iusto inventore recusandae libero
			sunt dolorem aliquam totam neque suscipit et provident odio asperiores? Dolores cum, alias
			quidem accusantium, commodi corporis illo, veritatis distinctio recusandae dicta molestiae.
			Suscipit, blanditiis optio omnis aperiam, quos voluptates ratione dolore iste ullam reiciendis
			deserunt, dolores corporis nesciunt.
		</p>
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

		h5 {
			font-size: 1rem;
			margin-bottom: 1.6rem;
		}
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
