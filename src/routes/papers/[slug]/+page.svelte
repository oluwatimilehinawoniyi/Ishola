<script lang="ts">
	import CustomHeading from '$lib/components/CustomSanities/CustomHeading.svelte';
	import CustomLink from '$lib/components/CustomSanities/CustomLink.svelte';
	import CustomParagraph from '$lib/components/CustomSanities/CustomParagraph.svelte';
	import CustomQuote from '$lib/components/CustomSanities/CustomQuote.svelte';
	import { formatDate } from '$lib/utils/utils.js';
	import { PortableText } from '@portabletext/svelte';
	export let data;

	const { title, subtitle, _createdAt, _updatedAt, image, body } = data.props?.post[0];

	const components = {
		types: {
			link: CustomLink
		},
		marks: {
			link: CustomLink
		},
		block: {
			normal: CustomParagraph,
			blockquote: CustomQuote,
			h1: CustomHeading,
			h2: CustomHeading,
			h3: CustomHeading,
			h4: CustomHeading,
			h5: CustomHeading,
			h6: CustomHeading
		}
	};
</script>

<main>
	<div class="control">
		<a href="/papers">
			<i>go to papers</i>
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
				class="lucide lucide-undo-2"
				><path d="M9 14 4 9l5-5" /><path
					d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11"
				/>
			</svg>
		</a>
	</div>

	<section>
		<h3>{title}</h3>

		<h5>{subtitle}</h5>
		<div class="date">
			<p>{`created: ${formatDate(_createdAt)}`}</p>
			<p>{`updated: ${formatDate(_updatedAt)}`}</p>
		</div>

		<div class="image_holder">
			<img src={image} alt="" />
		</div>

		<div class="post_content">
			<PortableText
				value={body}
				components={{
					...components
				}}
			/>
		</div>
	</section>
</main>

<style>
	main {
		width: 100%;
		background: var(--bg-colour);
		position: relative;
		align-items: flex-start;
		padding-bottom: 2rem;
	}

	.date {
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.date p {
		font-size: 0.8rem;
	}

	.image_holder {
		margin-block: 2rem;
	}
	.image_holder img {
		width: 100%;
	}

	section {
		width: 100%;
		grid-column: 2/3;
	}
	section h3 {
		font-size: 1.35rem;
		text-transform: capitalize;
		margin-bottom: 0.85rem;
	}

	section h5 {
		font-size: 1rem;
		margin-bottom: 1.6rem;
	}

	.control {
		margin-bottom: 1.5rem;
		grid-column: 1/2;
	}
	.control a {
		display: flex;
		align-items: center;
		flex-direction: row-reverse;
		width: max-content;
		gap: 0.3rem;
	}
	.control a i {
		font-weight: 500;
	}

	/* @media screen and (min-width: 768px) {
		main {
		}
	} */

	@media screen and (min-width: 1024px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
			gap: 1rem;
		}

		.control {
			position: sticky;
			top: var(--top-padding);
		}

		.image_holder {
			height: 300px;
		}
		
		.image_holder img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
	}

	@media screen and (min-width: 1240px) {
		main {
			display: grid;
			grid-template-columns: 1fr 700px 1fr;
			/* gap: 2rem; */
		}

		.control {
			width: 280px;
			position: fixed;
			left: 0;
			padding-left: 4rem;
		}
	}
</style>
