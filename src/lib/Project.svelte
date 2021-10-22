<script>
  export let year;
  export let title;
  export let type;
  export let description;
  export let img;
  export let tech;
  export let link;

  import { base } from '$app/paths';
  import { projectTypeColors } from '../config';
  import ConditionalLink from './ConditionalLink.svelte';
  import Tag from '$lib/Header.Tag.svelte';

  const techs = tech.split(',').filter(label => label !== "");
</script>

<div
  class="project"
  style="--color: {projectTypeColors[type]}"
>
  <ConditionalLink isWrapped={link} href={link}>
    <img
      width='100%'
      src={`${base}/images/${img}`}
      alt={`${base}/images/${img}`}
    >
    <div class="project-content">
      <h2 class="title">{title}</h2>
      <p class="description">{@html description}</p>
      {#each techs as tech}
        <Tag type={tech} color={"#8d99ae"}/>
      {/each}
    </div>
  </ConditionalLink>
</div>

<style>
  .project {
    border-top: 0.5rem solid var(--color);
    border-left: 0.5rem solid var(--color);
    height: 35vh;
    width: 35vh;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  .project:hover {
    background-color: var(--color);
    color: white;
  }

  .project:hover img {
    opacity: 0;
  }

  .project-content {
    visibility: hidden;
    padding: 0rem 2rem;
    position: absolute;
    width: 85%;
    top: 0;
  }

  .project:hover .project-content{
    visibility: visible;
  }

  .description {
    margin: 0;
  }

  .title {
    margin-bottom: 0.5em;
  }

</style>