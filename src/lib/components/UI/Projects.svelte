<script lang="ts">
	import ProjectTab from '../UI/ProjectTab.svelte';
	import Explorations from '../UI/Explorations.svelte';
	import Button from '../common/Button.svelte';

	import { myProjects } from '$lib/data/index';

	let activeTab = 'projects';

	function changeTab(tab: string) {
		activeTab = tab;
	}

	const data = ['projects', 'explorations'];
</script>

<section>
	<div class="tab_header">
		{#each data as item (item)}
			{#if item !== 'explorations'}
				<Button btn={item} {changeTab} {activeTab} />
			{:else}
				<a href="/explorations" class="explore">{item}</a>
			{/if}
		{/each}
	</div>
	<div class="tab_content">
		{#if activeTab === 'projects'}
			<div class="grid_tab">
				{#each myProjects as { id, link, title, description } (id)}
					<ProjectTab {link} {title} {description} />
				{/each}
			</div>
		{:else if activeTab === 'explorations'}
			<div class="grid_tab">
				<Explorations />
			</div>
		{/if}
	</div>
</section>

<style>
	.explore {
		text-transform: capitalize;
		padding: 0.35rem 0rem;
		border: none;
		background: none;
		cursor: pointer;
		outline: none;
		color: var(--heading-colour);
	}

	section {
		margin: 3rem 0rem;
	}
	.tab_header {
		display: flex;
		align-items: start;
		gap: 2rem;
	}
	.tab_content {
		min-height: 100px;
		margin-top: 1.5rem;
	}

	.grid_tab {
		display: grid;
		grid-template-columns: repeat(2, 1fr);
		grid-auto-rows: max-content;
		gap: 1.5rem 1rem;
	}

	@media screen and (min-width: 768px) {
		.grid_tab {
			grid-template-columns: repeat(3, 1fr);
		}
	}
</style>
