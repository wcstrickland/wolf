
<script>
  import { prevent_default } from "svelte/internal";

  export let title;
  export let val = 0;
  function setVal(vl) {
    val = vl;
  }
</script>

<div style="display:flex;">
  <div style="display:flex; justify-content:flex-start">
    {title} : 
    <input type="text" style="margin-left:.5em; width:120px;">
  </div>
  <div style="display:flex; justify-content:flex-end">
    <input type="checkbox" checked={val >= 1} on:click={() => setVal(1)} />
    <input type="checkbox" checked={val >= 2} on:click={() => setVal(2)} />
    <input type="checkbox" checked={val >= 3} on:click={() => setVal(3)} />
    <input type="checkbox" checked={val >= 4} on:click={() => setVal(4)} />
    <input type="checkbox" checked={val >= 5} on:click={() => setVal(5)} />
  </div>
</div>
