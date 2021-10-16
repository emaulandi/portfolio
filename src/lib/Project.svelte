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
      <h2>{title}</h2>
      <p>{year}</p>
      <p>{@html description}</p>
      <p>Tech {tech.split(',')}</p>
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
</style>