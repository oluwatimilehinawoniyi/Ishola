<script lang="ts">
	export let activeTab: string = 'experience';
	export let changeTab: (tab: string) => void;
	export let btn: string;
</script>

<button on:click={() => changeTab(btn)} class={activeTab === btn ? 'active' : ''}>{btn}</button>

<style>
	button {
		text-transform: capitalize;
		padding: 0.35rem 0rem;
		border: none;
		background: none;
		cursor: pointer;
		font-weight: 500;
		outline: none;
	}

	button.active {
		border-bottom: 2px solid var(--heading-colour);
	}
</style>
