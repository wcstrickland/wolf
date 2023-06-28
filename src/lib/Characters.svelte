<script>
  import HomeButton from "./HomeButton.svelte";
  import { characters } from "./characters";
  import { setCharacter } from "./stores";
</script>

<ul style="text-align: start;">
  <li class="char-list">
    <button on:click={() => setCharacter(characters["rogue"])}>The Rogue</button
    > Agile, Charismatic, and Sneaky
  </li>
  <li class="char-list"><button on:click={()=> setCharacter(characters["brawler"])}>The Brawler</button> Strong, Tough, and Forceful</li>
</ul>
<HomeButton />

<style>

    .char-list{
        margin-bottom: .5em;
    }
</style>
