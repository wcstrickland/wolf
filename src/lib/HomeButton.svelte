<script>
  import { push, pop, replace } from "svelte-spa-router";
</script>

<div>
  <button class="home-btn" on:click={() => push('/')}>HOME</button>
</div>

<style>
  .home-btn {
    position: fixed;
    bottom: 20px;
    right: 20px;
  }
  *{
    width:auto;
  }
</style>
