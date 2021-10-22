<script context="module">
	export const prerender = true;

	import DiReact from 'svelte-icons/di/DiReact.svelte';
	import FaVuejs from 'svelte-icons/fa/FaVuejs.svelte';
	import DiPython from 'svelte-icons/di/DiPython.svelte'

	import Tag from '$lib/Header.Tag.svelte';

	import { projectTypeColors } from '../config';
	const client = { type: "client" , color: projectTypeColors["client"]};
	const talk = { type: "talk" , color: projectTypeColors["talk"]};
	const teaching = { type: "teaching" , color: projectTypeColors["teaching"]};
	const corporate = { type: "corporate" , color: projectTypeColors["corporate"]};
	const personal = { type: "personal" , color: projectTypeColors["personal"]};
</script>

<svelte:head>
	<title>About</title>
</svelte:head>

<section>
	<h1>
		Background
	</h1>
	<p>
		First trained as a computer engineer 👩‍💻 in Toulouse - France 🇫🇷, I worked for a few years in Paris as an IT consultant 👩🏼‍💼.
	</p>
	<p>
		Growing my data visualization skills I then developed many projects as a freelancer, see <Tag {...client} /> projects.
	</p>
	<p>
		Sharing my work and facilitating events in meetups I gave <Tag {...talk} /> and built my <Tag {...teaching} /> skills that I know used teaching an <b>Introduction to Datavisulization</b> class to engineering students in Montpellier in 2020/21 and this year.
	</p>
	<p>
		I now work part-time at Makina Corpus doing front-end and data-visualization with a team of great folks on mostly public territory and environment projects 😍, see <Tag {...corporate} /> items.
	</p>
	<p>
		Most of the time, I'm also working on <Tag {...personal} /> projects around social issues, climate change, feminism and some other random topics.
	</p>
	<h1>
		Tech
	</h1>
	<p>
		I often use React <span class="icon"><DiReact /></span>, sometimes Vue <span class="icon"><FaVuejs /></span>, Gatsby, discovering Svelte as front-end frameworks.
	</p>
	<p>
		Regarding visualization, I love D3 but like to try many visualization libraries. I often do data wraggling in Python <span class="icon"><DiPython /></span> and prototyping with Observable and Observable Plot.
	</p>
	<h1>
		Inspiration
	</h1>
	<h1>
		They said
	</h1>
</section>

<style>
	section {
		max-width: 600px;
		margin: auto;
		padding: 1em;
	}

	.icon {
		width: 1.4em;
		display: inline-block;
	}
</style>
