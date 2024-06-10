<script lang="ts">
	const date = new Date();
	const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

	const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
</script>

<footer>
	<div>
		<p>oluwatimilehin j. awoniyi</p>
		<p>{`${formatNumber(day)} / ${formatNumber(month)} / ${year}`}</p>
	</div>
</footer>

<style>
	footer {
		grid-column: 1/-1;
		border-top: 1px solid var(--line-colour);
		width: 100%;
		height: 50px;
		display: grid;
		grid-template-columns: subgrid;
	}

	footer div {
		grid-column: 2/3;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}

	p {
		font-weight: lighter;
		text-transform: capitalize;
		font-size: 0.85rem;
	}

	@media (prefers-color-scheme: light) {
		p {
			font-weight: 400;
		}
	}
</style>
