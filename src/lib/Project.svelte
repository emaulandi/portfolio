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
  <img
    width='100%'
    src={`${base}/images/${img}`}
    alt={`${base}/images/${img}`}
  >
  <div class="project-content">
    <h2>{title}</h2>
    <p>{@html description}</p>
    <p>Tech {tech.split(',')}</p>
  </div>
</div>

<style>
  .project {
    border-top: 0.5rem solid var(--color);
    background-color: #f8f9fa;
    height: 40vh;
    width: 40vh;
    flex-grow: 1;
    overflow: hidden;
    position: relative;
  }

  .project:hover {
    background-color: var(--color);
    color: white;
  }

  .project:hover > img {
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