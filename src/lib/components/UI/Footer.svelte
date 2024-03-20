<script lang="ts">
	const date = new Date();
	const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

	const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
</script>

<footer>
	<p>oluwatimilehin j. awoniyi</p>
	<p>{`${formatNumber(day)} / ${formatNumber(month)} / ${year}`}</p>
</footer>

<style>
	footer {
		width: 100%;
		position: sticky;
		/* right: 0px; */
		/* left: 0px; */
		bottom: 0px;
		backdrop-filter: blur(5px);
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	p {
		font-weight: bold;
		text-transform: capitalize;
		font-size: 0.85rem;
	}
</style>
