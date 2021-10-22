<script>
  export let color;
  export let type;
</script>

<p
  class="tag"
  style="--color: {color}"
>
  {type}
</p>

<style>
  .tag {
    display: inline-block;
    color: white;
    background-color: var(--color);
    padding: 5px 10px;
    margin: 4px;
    font-weight: 900;
  }
</style>