<script>
  import { formState, updateFormState } from "./stores";


  export let title;
</script>

<div class="block" >
  <div >
    {title}
  </div>
  <div >
    <input bind:value={$formState[title]} type="text" inputmode="numeric" style="width: 1em;margin-top:.25em;"> / 5
  </div>
</div>

<style>
  .block{
    display: flex;
    justify-content: space-between;
  }
</style>