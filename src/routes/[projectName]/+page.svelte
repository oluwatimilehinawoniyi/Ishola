<script lang="ts">
	import Connect from '$lib/components/UI/Connect.svelte';
	import Footer from '$lib/components/UI/Footer.svelte';
	import ProjectTab from '$lib/components/UI/ProjectTab.svelte';
	import { myProjects } from '$lib/data';
	import GoBack from '$lib/components/common/GoBack.svelte';

	export let data;
	$: project = data?.data;

	let title: string,
		description: string,
		projectId: number,
		lessons: string,
		links: { title: string | null; link: string }[],
		purpose: string,
		role: string,
		stackReason: string,
		webStack: string,
		problems: string,
		screenShots: string[];

	$: {
		if (project) {
			title = project.title;
			description = project.description;
			projectId = project.id;
			lessons = project.lessons;
			problems = project.problems;
			links = project.links;
			purpose = project.purpose;
			role = project.role;
			stackReason = project.stackReason;
			webStack = project.webStack;
			screenShots = project.screenshots;
		}
	}
</script>

<svelte:head>
	<title>{title ? `${title} | Projects` : 'Projects'}</title>
	<meta name="description" content={description || 'Project details'} />
</svelte:head>

<main>
	<GoBack />
	<section class="project_details">
		<div class="introduction">
			<h1 class="title">{title}</h1>
			<p class="description">{description}</p>
		</div>
		<div class="role_and_stack">
			<ul class="role">
				<h3>role</h3>
				{#each role.split(',') as item (item)}
					<li>-> {item}</li>
				{/each}
			</ul>
			<ul class="stack">
				<h3>stack</h3>
				{#each webStack.split(',') as stack (stack)}
					<li>-> {stack}</li>
				{/each}
			</ul>
			<ul class="links">
				<h3>links</h3>
				{#each links as { title, link }, index (index)}
					{#if title}
						<li>
							<a href={link} target="_blank"
								>-> {title}
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="16"
									height="16"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
									stroke-linecap="round"
									stroke-linejoin="round"
									class="headingIcon"
									><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path
										d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
									/></svg
								></a
							>
						</li>
					{/if}
				{/each}
			</ul>
		</div>
		<div class="image_sample"><img src={screenShots[0]} alt="" /></div>
		<div class="purpose">
			<h3>project purpose</h3>
			<p>{purpose}</p>
		</div>
		<div class="web_stack">
			<h3>web stack usage</h3>
			<p>{stackReason}</p>
		</div>
		<div class="image_sample"><img src={screenShots[1]} alt="" /></div>
		<div class="problems">
			<h3>problems and thought process</h3>
			<p>{problems}</p>
		</div>
		<div class="image_sample"><img src={screenShots[2]} alt="" /></div>

		<div class="lessons">
			<h3>lessons learnt</h3>
			<p>{lessons}</p>
		</div>
		<div class="other_projects_section">
			<div class="others">
				<h3 class="">Other projects:</h3>
				<p>
					Check out other projects I have dabbled into. You can also explore my love for UX
					Engineering by navigating to <a href="/explorations">exploration page</a>
				</p>
			</div>
			<div class="other_projects">
				{#each myProjects as { id, title, description } (id)}
					{#if id !== projectId}
						<ProjectTab {title} {description} />
					{/if}
				{/each}
			</div>
		</div>
		<Connect />
	</section>
	<Footer />
</main>

<style lang="postcss">
	main {
		width: 100%;
		min-height: 100vh;
		background: var(--bg-colour);
		position: relative;
		align-items: flex-start;
	}

	.project_details {
		width: 100%;
		grid-column: 2/3;
		display: flex;
		flex-direction: column;
		gap: 1.5rem;
	}

	h1 {
		font-size: 1.35rem;
		text-transform: capitalize;
		margin-bottom: 0.85rem;
	}

	h3 {
		text-transform: capitalize;
		margin-bottom: 0.5rem;
	}

	a {
		display: flex;
		align-items: center;
		width: max-content;
		gap: 0.3rem;
	}

	.others {
		padding-block: 1rem;
	}

	.others a {
		display: inline;
	}

	.role_and_stack {
		display: flex;
		gap: 4rem;
	}

	ul {
		color: #fff;
		list-style: none;
	}

	.role,
	.stack,
	.links {
		text-transform: capitalize;
	}

	.role_and_stack ul li,
	.role_and_stack ul li a {
		font-size: 0.9rem;
	}

	.role_and_stack ul h3 {
		margin-bottom: 0.7rem;
	}

	.role_and_stack ul li:not(:first-of-type),
	.role_and_stack ul li a:not(:first-of-type) {
		margin-top: 0.7rem;
	}

	.image_sample {
		width: 100%;
	}

	.image_sample img {
		width: 100%;
	}

	.other_projects {
		display: grid;
		grid-template-columns: 1fr;
		grid-auto-rows: max-content;
		gap: 1.5rem 1rem;
	}

	@media screen and (min-width: 420px) {
		.other_projects {
			grid-template-columns: repeat(2, 1fr);
		}
	}

	@media screen and (min-width: 1024px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
			gap: 1rem;
		}
	}

	@media screen and (min-width: 768px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
		}
	}
</style>
