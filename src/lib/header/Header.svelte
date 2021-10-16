<script>
	import { base } from '$app/paths';
</script>

<header>
	<nav>
		<a sveltekit:prefetch href="{base}/">Home</a>
		<a sveltekit:prefetch href="{base}/projects">About</a>
	</nav>
</header>

<style>
	header {
		padding-top: 1em;
		width: 15em;
		top: 0;
	}

	nav {
		display: flex;
		justify-content: center;
		flex-direction: column;
		list-style: none;
		background: var(--background);
	}

	nav a {
		height: 100%;
		padding: 0 1em;
		color: var(--heading-color);
		font-weight: 900;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--accent-color);
	}
</style>
