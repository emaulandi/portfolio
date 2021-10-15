<script>
  import projects from "$data/projects.csv";
  import { base } from '$app/paths';
  console.log(projects);
</script>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<div class="content">
  <h1>Hello</h1>
  {#each projects as { title, type, img, tech, link, description }}
    <div>
      <h2>{title}</h2>
      <p>{type}</p>
      <p>{@html description}</p>
      <p>Tech {tech.split(',')}</p>
      <img width='300px' src={`${base}/images/${img}`} alt={`${base}/images/${img}`}>
    </div>
  {/each}
</div>