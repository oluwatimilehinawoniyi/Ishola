<script lang="ts">
	const date = new Date();
	const [day, month, year] = [date.getDate(), date.getMonth() + 1, date.getFullYear()];

	const formatNumber = (num: number) => (num < 10 ? `0${num}` : num);
</script>

<footer>
	<!-- <div></div> -->
	<p>oluwatimilehin j. awoniyi</p>
	<p>{`${formatNumber(day)} / ${formatNumber(month)} / ${year}`}</p>
</footer>

<style>
	footer {
		position: sticky;
		bottom: 0px;
		/* background: var(--bg-colour); */
		/* filter: blur(5px); */
		backdrop-filter: blur(5px);
		height: 50px;
		display: flex;
		align-items: center;
		justify-content: space-between;
		/* border-top: 1px solid rgb(190, 190, 190); */
	}
	p {
		font-weight: bold;
		text-transform: capitalize;
		font-size: 0.85rem;
	}
</style>
