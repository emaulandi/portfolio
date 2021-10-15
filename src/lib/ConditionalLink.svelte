<script>
  export let isWrapped = false;
  export let href;
</script>

{#if isWrapped}
<a {href} target= '_blank' rel='noreferrer'>
  <slot/>
</a>
{:else}
<slot/>
{/if}