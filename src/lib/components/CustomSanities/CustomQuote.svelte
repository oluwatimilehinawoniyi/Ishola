<script lang="ts">
</script>

<blockquote class="relative">
	<slot />
</blockquote>

<style>
	blockquote {
		position: relative;
		padding: 0.5rem 1.5rem 0.5rem 1.5rem;
		margin-block: 1rem;
		text-align: justify;
		font-weight: 500;
		line-height: 1.5;
	}

	blockquote::before {
		content: '';
		position: absolute;
		left: 0;
		top: 0;
		width: 6px;
		height: 100%;
		background-color: var(--paragraph-colour);
	}
</style>
