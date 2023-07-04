
<script>
  import { formState, updateFormState } from "./stores";
  export let title;


</script>

<div style="display:flex;justify-content:space-evenly;">
  <div style="display:flex; justify-content:flex-start">
    {title}: 
    {#if title === "Virtue" }
      <input type="text" style="margin-left:.5em; width:6em; max-height:1.5em;" bind:value={$formState.virtueWord}>
      {:else}
      <input type="text" style="margin-left:.5em; width:6em; max-height:1.5em;" bind:value={$formState.viceWord}>
    {/if}
  </div>
  <div>
    <b>:</b>
  </div>
  <div >
    <input bind:value={$formState[title]} type="text" inputmode="numeric" style="width: 2em;"> / 5
  </div>
</div>

<style>
</style>