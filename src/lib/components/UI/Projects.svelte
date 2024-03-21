<script lang="ts">
	import Buildings from '../UI/Buildings.svelte';
	import ProjectTab from '../UI/ProjectTab.svelte';
	import Explorations from '../UI/Explorations.svelte';
	import Button from '../common/Button.svelte';

	import { myProjects, myBuilds } from '$lib/data/index';

	let activeTab = 'project';

	function changeTab(tab: string) {
		activeTab = tab;
	}

	const data = ['building', 'project', 'explorations'];
</script>

<section>
	<div class="tab_header">
		{#each data as item (item)}
			<Button btn={item} {changeTab} {activeTab} />
		{/each}
	</div>
	<div class="tab_content">
		{#if activeTab === 'building'}
			<div class="grid_tab">
				{#each myBuilds as { id, link, title } (id)}
					<Buildings {link} {title} />
				{/each}
			</div>
		{:else if activeTab === 'project'}
			<div class="grid_tab">
				{#each myProjects as { id, link, title } (id)}
					<ProjectTab {link} {title} />
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
	section {
		margin: 3rem 0rem;
	}
	.tab_header {
		display: flex;
		align-items: start;
		gap: 2rem;
	}
	.tab_content {
		min-height: 180px;
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
