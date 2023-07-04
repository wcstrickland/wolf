<script>
  import RollerBar from "./RollerBar.svelte";
  let visible = false;
</script>

<div class="Roll-btn-container">
  <button id="Roll-btn" on:click={() => (visible = !visible)}>Roll</button>
  {#if visible}
    <RollerBar/>
  {/if}
</div>

<style>
  .Roll-btn-container {
    display: flex;
    flex-direction: column-reverse;
    justify-content: start;
    width: 10em;
  }
</style>
