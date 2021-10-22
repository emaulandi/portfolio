<script>
  import projects from "$data/projects.csv";

  import Project from '$lib/Project.svelte';
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="content">
  <div class="project-container">
    {#each projects as project}
      <Project {...project}/>
    {/each}
  </div>
</div>

<style>
  .project-container {
    display: flex;
    flex-wrap: wrap;
  }
</style>