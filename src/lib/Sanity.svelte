<script>
  import { formState, updateFormState } from "./stores";

  let nervous = $formState.nervous || false;
  let anxious = $formState.anxious || false;
  let panicked = $formState.panicked || false;
  let crazed = $formState.crazed || false;
  let insane = $formState.insane || false;

  function toggle(st) {
    let curVal = $formState[st];
    updateFormState(st, !curVal);
  }
</script>

<div style="display: flex; justify-content:space-between;margin-top:.5em;">
  <div style="display: flex; flex-direction:column;">
    <div>Nervous</div>
    <input
      type="checkbox"
      checked={nervous}
      on:click={() => toggle("nervous")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Anxious</div>
    <input
      type="checkbox"
      checked={anxious}
      on:click={() => toggle("anxious")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Panicked</div>
    <input
      type="checkbox"
      checked={panicked}
      on:click={() => toggle("panicked")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Crazed</div>
    <input type="checkbox" checked={crazed} on:click={() => toggle("crazed")} />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Insane</div>
    <input type="checkbox" checked={insane} on:click={() => toggle("insane")} />
  </div>
  <div>
    <div>Sanity</div>
    <input style="width:100px;" type="number" bind:value={$formState.sanity} />
  </div>
</div>

<style>
  * {
    width: auto;
  }
</style>
