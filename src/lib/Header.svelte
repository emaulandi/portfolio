<script>
	import { base } from "$app/paths";

	import IconLinks from './Header.IconLinks.svelte';
	import Tag from '$lib/Header.Tag.svelte';
	import { projectTypeColors } from '../config';
	const projectsType =Object.entries(projectTypeColors).map(([key, value]) => ({ type: key, color: value}));
	console.log(projectsType);
</script>

<header>
	<nav>
		<a sveltekit:prefetch href="{base}/">Home</a>
		<a sveltekit:prefetch href="{base}/projects">About</a>
	</nav>
	<p>Hi 👋, I'm Edith, a front-end developer and a dataviz practitioner and teacher</p>
	<IconLinks />
	<div>
		{#each projectsType as projectType}
			<Tag {...projectType}/>
		{/each}
	</div>
</header>

<style>
	header {
		padding-top: 1em;
		padding-left: 1.5em;
		padding-right: 1em;
		width: 15em;
	}

	nav {
		display: flex;
		justify-content: center;
		flex-direction: column;
		background: var(--background);
	}

	nav a {
		color: var(--heading-color);
		font-weight: 900;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}

	@media (max-width: 720px) {
		header {
			width: 90%;
		}

		nav {
			flex-direction: row;
			justify-content: space-around;
		}
	}
</style>
