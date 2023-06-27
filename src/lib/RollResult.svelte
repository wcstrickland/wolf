<script>
  export let result;
</script>

<div id="result-box">
  {#each result as res}
    {#if res === 6}
      <span class="crit">{res}</span>
    {:else if res === 5}
      <span class="success">{res}</span>
    {:else if res < 4}
      <span class="failure">{res}</span>
    {:else}
      <span class="partial">{res}</span>
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
    background-color: #292929;
    cursor: pointer;
    transition: border-color 0.25s;
  }

  .success {
    color: rgb(0, 192, 0);
  }
  .crit {
    color: rgb(253, 236, 0);
  }

  .failure {
    color: brown;
  }

  .partial {
    color: white;
  }

  @media (prefers-color-scheme: light) {
    #result-box {
      background-color: rgb(238, 238, 238);
    }
    .success {
      color: rgb(17, 218, 17);
    }
    .crit {
      color: rgb(204, 201, 3);
    }

    .failure {
      color: rgb(248, 2, 2);
    }

    .partial {
      color: rgb(39, 39, 39);
    }
  }
</style>
