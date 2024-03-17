<script lang="ts">
	import Experience from './Experience.svelte';
	import ProjectTab from './ProjectTab.svelte';
	import Writing from './Writing.svelte';
	import Building from './Building.svelte';
	import Button from './common/Button.svelte';
	let activeTab = 'experience';

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
			<ProjectTab />
		{:else if activeTab === 'writings'}
			<Writing />
		{:else if activeTab === 'building'}
			<Building />
		{/if}
	</div>
</section>

<style>
	section {
		margin: 2rem 0rem;
	}
	.tab_content {
		padding: 20px;
		border: 1px solid #ccc;
		margin-top: 10px;
	}
</style>
