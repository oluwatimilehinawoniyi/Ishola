<script lang="ts">
	import Experience from './Experience.svelte';
	import ProjectTab from './ProjectTab.svelte';
	import Building from './Building.svelte';
	import Button from './common/Button.svelte';

	import { myProjects, myBuilds } from '$lib/data/index';

	let activeTab = 'project';

	function changeTab(tab: string) {
		activeTab = tab;
	}

	const data = ['experience', 'project', 'building', 'explorations'];
</script>

<section>
	<div class="tab_header">
		{#each data as item (item)}
			<Button btn={item} {changeTab} {activeTab} />
		{/each}
	</div>
	<div class="tab_content">
		{#if activeTab === 'experience'}
			<Experience />
		{:else if activeTab === 'project'}
			<div class="grid_tab">
				{#each myProjects as { id, link, title } (id)}
					<ProjectTab {link} {title} />
				{/each}
			</div>
		{:else if activeTab === 'building'}
			<div class="grid_tab">
				{#each myBuilds as { id, link, title } (id)}
					<Building {link} {title} />
				{/each}
			</div>
		{:else if activeTab === 'explorations'}
			<div></div>
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
		min-height: 250px;
		margin-top: 1.5rem;
	}

	.grid_tab {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: max-content;
		gap: 1.5rem 1rem;
	}
</style>
