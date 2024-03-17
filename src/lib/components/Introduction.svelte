<script>
	import Article from './Article.svelte';
	import LoveSVG from '$lib/components/LoveSVG.svelte';
</script>

<div>
	<h2>oluwatimilehin j. awoniyi <span>frontend engineer</span></h2>
	<i>
		Intensely in
		<LoveSVG />
		with web interfaces!
	</i>
	<p>Dedicated to weaving the thread of web interfaces with cool user experience in mind.</p>
</div>

<style>
	span {
		display: block;
		margin-top: 0.5rem;
		color: var(--paragraph-colour);
	}
	h2 {
		text-transform: capitalize;
		margin-bottom: 1rem;
		font-size: 1.45rem;
	}
	i {
		display: block;
		font-family: var(--font-sacramento);
		font-style: normal;
		font-size: 1.5rem;
	}
</style>
