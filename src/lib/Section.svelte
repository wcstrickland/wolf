<script>
  import Block from "./Block.svelte";
  export let title;
  export let blocks = [];
</script>

<div class="sect">
  {#if title != ""}
    <b>{title}</b>
  {:else}{/if}
  {#each blocks as block}
    <Block title={block} />
  {/each}
</div>

<style>
  .sect{
    min-width: 8em;
  }
</style>