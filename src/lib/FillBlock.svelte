
<script>
  import { formState, updateFormState } from "./stores";
  export let title;


  export let val = $formState[title] || 0;
  function setVal(vl) {
    if(val === vl){
      updateFormState(title, vl - 1)
      val = $formState[title]
    }else{
      updateFormState(title, vl)
      val = $formState[title]
    }
  }
</script>

<div style="display:flex;">
  <div style="display:flex; justify-content:flex-start">
    {title}: 
    {#if title === "Virtue" }
      <input type="text" style="margin-left:.5em; width:140px;" bind:value={$formState.virtueWord}>
      {:else}
      <input type="text" style="margin-left:.5em; width:140px;" bind:value={$formState.viceWord}>
    {/if}
  </div>
  <div style="display:flex; justify-content:flex-end">
    <input type="checkbox" checked={val >= 1} on:click={() => setVal(1)} />
    <input type="checkbox" checked={val >= 2} on:click={() => setVal(2)} />
    <input type="checkbox" checked={val >= 3} on:click={() => setVal(3)} />
    <input type="checkbox" checked={val >= 4} on:click={() => setVal(4)} />
    <input type="checkbox" checked={val >= 5} on:click={() => setVal(5)} />
  </div>
</div>
