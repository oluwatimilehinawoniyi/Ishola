<script lang="ts">
	export let activeTab: string = 'experience';
	export let changeTab: (tab: string) => void;
	export let btn: string;
</script>

<button on:click={() => changeTab(btn)} class={activeTab === btn ? 'active' : ''}>{btn}</button>

<style>
	button {
		text-transform: capitalize;
		padding: 0.5rem 0rem;
		border: none;
		background: none;
		cursor: pointer;
	}

	button:not(:last-of-type) {
		margin-right: 1rem;
	}

	button.active {
		border-bottom: 2px solid var(--heading-colour);
		/* font-weight: 500; */
	}
</style>
