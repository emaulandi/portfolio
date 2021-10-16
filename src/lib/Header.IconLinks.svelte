<script>
  import FaGithub from 'svelte-icons/fa/FaGithub.svelte';
  import FaMedium from 'svelte-icons/fa/FaMedium.svelte';
  import FaRegChartBar from 'svelte-icons/fa/FaRegChartBar.svelte';
  import FaLinkedinIn from 'svelte-icons/fa/FaLinkedinIn.svelte';
  import FaTwitter from 'svelte-icons/fa/FaTwitter.svelte';
  import FaInstagram from 'svelte-icons/fa/FaInstagram.svelte';

  import links from "$data/links.csv";

  const iconByType = {
    github: FaGithub,
    twitter: FaTwitter,
    linkedin: FaLinkedinIn,
    medium: FaMedium,
    instagram: FaInstagram,
    observable: FaRegChartBar,
  };
</script>

<div class="icons-container">
  {#each links as { type, link }}
    <a class="icon" href={link} target= '_blank' rel='noreferrer'>
      <svelte:component this={iconByType[type]}/>
    </a>
  {/each}
</div>

<style>
  .icons-container {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }

	.icon {
		width: 1.3em;
	}
</style>