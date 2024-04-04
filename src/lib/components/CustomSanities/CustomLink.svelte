<script lang="ts">
	import type { MarkComponentProps } from '@portabletext/svelte';

	export let portableText: MarkComponentProps<{
		href: string;
	}>;
</script>

<a href={portableText.value.href} target="_blank">
	<slot />
</a>

<style>
	a {
		cursor: pointer;
		position: relative;
		overflow: hidden;

		&::before,
		&::after {
			content: '';
			position: absolute;
			bottom: 0px;
			left: 0%;
			height: 1px;
			background: var(--paragraph-colour);
			transition: all 0.5s ease;
		}

		&::before {
			left: 0;
			width: 100%; /* Full width initially */
		}

		&::after {
			right: 0;
			width: 0%; /* Hidden initially */
			transition-delay: 0.1s;
		}

		&:hover::before {
			width: 0%; /* Shrinks away */
			left: 100%; /* Moves to the right, effectively disappearing */
		}

		&:hover::after {
			width: 100%; /* Grows to full width */
			right: 0; /* Starts growing from the left */
		}
	}
</style>
