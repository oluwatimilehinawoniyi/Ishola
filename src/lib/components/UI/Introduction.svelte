<script>
	import LoveSVG from '$lib/components/UI/LoveSVG.svelte';
</script>

<div>
	<h2>oluwatimilehin j. awoniyi <span>frontend and UX engineer</span></h2>
	<i>
		Intensely in
		<LoveSVG />
		with web interfaces and fullstack solutions!
	</i>
	<p>Dedicated to weaving seamless and engaging web experiences from front to back.</p>

	<p>
		I put pen to paper sometimes.
		<a href="papers" class="blog">
			Blog <svg
				xmlns="http://www.w3.org/2000/svg"
				width="16"
				height="16"
				viewBox="0 0 24 24"
				fill="none"
				stroke="currentColor"
				stroke-width="2"
				stroke-linecap="round"
				stroke-linejoin="round"
				class="lucide lucide-scroll-text"
				><path d="M8 21h12a2 2 0 0 0 2-2v-2H10v2a2 2 0 1 1-4 0V5a2 2 0 1 0-4 0v3h4" /><path
					d="M19 17V5a2 2 0 0 0-2-2H4"
				/><path d="M15 8h-5" /><path d="M15 12h-5" /></svg
			>
		</a>
	</p>
</div>

<style>
	.blog {
		cursor: pointer;
		text-transform: capitalize;
		font-weight: 500;
		position: relative;
		overflow: hidden;
	}
	.blog svg {
		transform: translateY(3px);
	}

	.blog::before,
	.blog::after {
		content: '';
		position: absolute;
		bottom: 0px;
		left: 0%;
		height: 1px;
		background: var(--paragraph-colour);
		transition: all 0.5s ease;
	}

	.blog::before {
		left: 0;
		width: 100%; /* Full width initially */
	}

	.blog::after {
		right: 0;
		width: 0%; /* Hidden initially */
		transition-delay: 0.1s;
	}

	.blog:hover::before {
		width: 0%; /* Shrinks away */
		left: 100%; /* Moves to the right, effectively disappearing */
	}

	.blog:hover::after {
		width: 100%; /* Grows to full width */
		right: 0; /* Starts growing from the left */
	}
	span {
		display: block;
		margin-top: 0.5rem;
		color: var(--paragraph-colour);
	}
	h2 {
		text-transform: capitalize;
		margin-bottom: 2rem;
		font-size: 1.45rem;
	}
	i {
		display: block;
		font-family: var(--font-sacramento);
		font-style: normal;
		font-size: 1.5rem;
	}
</style>
