<script>
  import { currentPage, setCurrentPage } from "./stores";
</script>

<div>
  <button class="home-btn" on:click={() => setCurrentPage("home")}>HOME</button>
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
