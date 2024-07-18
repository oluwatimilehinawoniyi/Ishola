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

<style>
	.control {
		margin-bottom: 1.5rem;
		grid-column: 1/2;
	}

	i {
		font-weight: 500;
	}

	a {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		width: max-content;
		gap: 0.3rem;
	}

	@media screen and (min-width: 1024px) {
		.control {
			position: sticky;
			top: var(--top-padding);
		}
	}

	@media screen and (min-width: 768px) {
		.control {
			width: 280px;
			position: fixed;
			left: 0;
			padding-left: 1rem;
		}
	}
	@media screen and (min-width: 1024px) {
		.control {
			padding-left: 4rem;
		}
	}
</style>
