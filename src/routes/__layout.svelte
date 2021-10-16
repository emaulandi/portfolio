<script>
	import Header from '$lib/Header.svelte';
	import '../app.css';
</script>

<div class="container">
	<Header />

	<main>
		<slot />
	</main>
</div>

<style>
	.container {
		display: flex;
		flex-direction: row;
		height: 100vh;
	}

	main {
		flex-grow: 1;
		display: flex;
		flex-direction: column;
		overflow-y: scroll;
		width: 100%;
		margin: 0 auto;
		box-sizing: border-box;
	}

	@media (max-width: 720px) {
		.container {
			flex-direction: column;
		}
	}
</style>
