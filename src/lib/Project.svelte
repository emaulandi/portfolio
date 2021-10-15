<script>
  export let title;
  export let type;
  export let description;
  export let img;
  export let tech;

  import { base } from '$app/paths';
  import { projectTypeColors } from '../config';
</script>

<div
  class="project"
  style="--color: {projectTypeColors[type]}"
>
  <h2>{title}</h2>
  <p>{type}</p>
  <p>{@html description}</p>
  <p>Tech {tech.split(',')}</p>
  <img
    width='300px'
    src={`${base}/images/${img}`}
    alt={`${base}/images/${img}`}
  >
</div>

<style>
  .project {
    border-left: 0.5rem solid var(--color);
    padding-left: 1rem;
  }
</style>