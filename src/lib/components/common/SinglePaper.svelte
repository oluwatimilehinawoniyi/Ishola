<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let date: string;
</script>

<a href="/" class="container">
	<div class="heading">
		<h3>{title}</h3>
		<p>{subtitle}</p>
	</div>
	<p class="date">{date}</p>
</a>

<style>
	.container {
		cursor: pointer;
		padding: 1rem 0rem;
		display: flex;
		align-items: start;
		justify-content: space-between;
		border-top: 1px solid var(--paragraph-colour);
	}

	h3 {
		text-transform: capitalize;
		margin-bottom: 0.5rem;
	}
	.container:hover {
		background: #ebebeb9a;
	}
</style>
