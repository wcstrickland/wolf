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

  function checkSanity() {
    if ($formState.sanity && $formState.Resolve) {

      let max = parseInt($formState.Resolve) * 5 + 5;

      if ($formState.sanity <= Math.floor(max / 5) * 4) {
        nervous = true;
        updateFormState("nervous", true);
      } else {
        nervous = false;
        updateFormState("nervous", false);
      }

      if ($formState.sanity <= Math.floor(max / 5) * 3) {
        anxious = true;
        updateFormState("anxious", true);
      } else {
        anxious = false;
        updateFormState("anxious", false);
      }

      if ($formState.sanity <= Math.floor(max / 5) * 2) {
        panicked = true;
        updateFormState("panicked", true);
      } else {
        panicked = false;
        updateFormState("panicked", false);
      }

      if ($formState.sanity <= Math.floor(max / 5) * 1) {
        crazed = true;
        updateFormState("crazed", true);
      } else {
        crazed = false;
        updateFormState("crazed", false);
      }

      if (parseInt($formState.sanity) === 0) {
        insane = true;
        updateFormState("insane", true);
      } else {
        insane = false;
        updateFormState("insane", false);
      }
    }
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
    <div>Stress</div>
    <input
      style="width:8em;"
      type="number"
      on:change={() => checkSanity()}
      bind:value={$formState.sanity}
    />
  </div>
</div>

<style>
  * {
    width: auto;
  }
</style>
