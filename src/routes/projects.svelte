<script>
  import projects from "$data/projects.csv";
  console.log(projects);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="content">
  <h1>Hello</h1>
  {#each projects as { title, type, description }}
    <div>
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{description}</p>
    </div>
  {/each}
</div>