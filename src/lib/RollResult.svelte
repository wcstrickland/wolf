<script>
  export let result;
</script>

<!-- <input type="text" value={result} disabled style="height:30px;"> -->
<div id="result-box">
  {#each result as res}
    {#if res >= 4}
      <span style="color:green">{res}</span>
    {:else}
      <span style="color:brown">{res}</span>
    {/if}
  {/each}
</div>

<style>
  #result-box {
    display: flex;
    justify-content: space-evenly;
    border-radius: 8px;
    border: 1px solid transparent;
    padding: 0.6em 1.2em;
    font-size: 1em;
    font-weight: 500;
    font-family: inherit;
    background-color: #282c34;
    cursor: pointer;
    transition: border-color 0.25s;
  }
</style>
