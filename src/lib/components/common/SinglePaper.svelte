<script lang="ts">
	export let title: string;
	export let subtitle: string;
	export let _createdAt: string;
	export let slug: string;

	function formatDate(dateString: string) {
		const date = new Date(dateString);
		const day = date.getDate().toString().padStart(2, '0');
		const month = (date.getMonth() + 1).toString().padStart(2, '0');
		const year = date.getFullYear();
		return `${day}/${month}/${year}`;
	}
</script>

<a href={`papers/${slug}`} class="container">
	<div class="heading">
		<h3>{title}</h3>
		<p>{subtitle}</p>
	</div>
	<p class="date">{formatDate(_createdAt)}</p>
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
