<script>
  import projects from "$data/projects.csv";
  console.log(projects);

  import Project from '$lib/Project.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="content">
  <h1>Hello</h1>
  {#each projects as project}
    <Project {...project}/>
  {/each}
</div>