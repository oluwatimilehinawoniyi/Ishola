<script lang="ts">
	import Experience from './Experience.svelte';
	import ProjectTab from './ProjectTab.svelte';
	import Writing from './Writing.svelte';
	import Building from './Building.svelte';
	import Button from './common/Button.svelte';

	import { myProjects, myBuilds } from '$lib/data/index';

	let activeTab = 'project';

	function changeTab(tab: string) {
		activeTab = tab;
	}

	const data = ['experience', 'project', 'writings', 'building'];
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
			{#each myProjects as { id, link, title } (id)}
				<ProjectTab {link} {title} />
			{/each}
		{:else if activeTab === 'writings'}
			<Writing />
		{:else if activeTab === 'building'}
			{#each myProjects as { id, link, title } (id)}
				<Building />
			{/each}
		{/if}
	</div>
</section>

<style>
	section {
		margin: 2rem 0rem;
	}
	.tab_content {
		min-height: 250px;
		margin-top: 1.5rem;
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-auto-rows: max-content;
		gap: 1rem;
	}
</style>
