<script>
  import { formState } from "./stores";

</script>

<div style="display: flex; justify-content:space-between;margin-top:.5em;">
    <div style="display: flex; flex-direction:column;">
        <div>Nervous</div>
        <input type="checkbox" bind:value={$formState.nervous}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Anxious</div>
        <input type="checkbox" bind:value={$formState.anxious}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Panicked</div>
        <input type="checkbox" bind:value={$formState.panicked}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Crazed</div>
        <input type="checkbox" bind:value={$formState.crazed}/>
    </div>
    <div style="display: flex; flex-direction:column;">
        <div>Insane</div>
        <input type="checkbox" bind:value={$formState.insane}/>
    </div>
</div>