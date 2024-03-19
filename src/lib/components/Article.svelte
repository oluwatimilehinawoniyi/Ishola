<script lang="ts">
	export let title: string;
	export let isLink: boolean = false;
	export let linkTo: string | undefined = undefined;
</script>

<article>
	<header>
		{#if isLink && linkTo}
			<!-- content here -->
			<h3><a href={linkTo}>{title}</a></h3>
		{:else}
			<!-- else content here -->
			<h3>{title}</h3>
		{/if}
	</header>

	<div>
		<slot />
	</div>
</article>

<style>
	a {
		text-decoration: none;
		color: inherit;
	}
	article {
		margin-top: 2rem;
	}

	header {
		margin-block: 1rem;
	}

	h3 {
		text-transform: capitalize;
	}
</style>
