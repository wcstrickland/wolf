<script>
  import { formState, updateFormState } from "./stores";

  let hurt = $formState.hurt || false;
  let injured = $formState.injured || false;
  let wounded = $formState.wounded || false;
  let maimed = $formState.maimed || false;
  let incapacitated = $formState.incapacitated || false;

  function toggle(st) {
    let curVal = $formState[st];
    updateFormState(st, !curVal);
  }
</script>

<div
  style="display: flex; justify-content:space-between;margin-top:.5em; margin-bottom:.5em;"
>
  <div style="display: flex; flex-direction:column;">
    <div>Hurt</div>
    <input type="checkbox" checked={hurt} on:click={() => toggle("hurt")} />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Injured</div>
    <input
      type="checkbox"
      checked={injured}
      on:click={() => toggle("injured")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Wounded</div>
    <input
      type="checkbox"
      checked={wounded}
      on:click={() => toggle("wounded")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Maimed</div>
    <input type="checkbox" checked={maimed} on:click={() => toggle("maimed")} />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>Incapacitated</div>
    <input
      type="checkbox"
      checked={incapacitated}
      on:click={() => toggle("incapacitated")}
    />
  </div>
  <div style="display: flex; flex-direction:column;">
    <div>HP</div>
    <input style="width:100px;" type="number" bind:value={$formState.hp} />
  </div>
</div>

<style>
  * {
    width: auto;
  }
</style>
