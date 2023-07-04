<script>
  import Block from "./Block.svelte";
  export let title;
  export let blocks = [];
</script>

<article style="margin-left:1em;margin-right:1em;">
  {#if title != ""}
    <b>{title}</b>
  {:else}{/if}
  {#each blocks as block}
    <Block title={block} />
  {/each}
</article>

<style>
  *{
    width:auto;
  }
</style>