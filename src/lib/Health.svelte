<script>
  import { formState } from "./stores";


</script>

<div style="display: flex; justify-content:space-between;margin-top:.5em; margin-bottom:.5em;">
    <div style="display: flex; flex-direction:column;">
        <div>Hurt</div>
        <input type="checkbox" bind:value={$formState.hurt}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Injured</div>
        <input type="checkbox" bind:value={$formState.injured}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Wounded</div>
        <input type="checkbox" bind:value={$formState.wounded}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Maimed</div>
        <input type="checkbox" bind:value={$formState.maimed}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Incapacitated</div>
        <input type="checkbox" bind:value={$formState.incapacitated}/>
    </div>
</div>