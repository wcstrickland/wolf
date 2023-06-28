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
  <li class="char-list">
    <button on:click={() => setCharacter(characters["brawler"])}
      >The Brawler</button
    > Strong, Tough, and Forceful
  </li>
  <li class="char-list">
    <button on:click={() => setCharacter(characters["knight"])}
      >The Knight</button
    > A natural fighter with noble bearing
  </li>
  <li class="char-list">
    <button on:click={() => setCharacter(characters["face"])}>The Face</button>A
    silver tongue made flesh
  </li>
  <li class="char-list">
    <button on:click={() => setCharacter(characters["investigator"])}
      >The Investigator</button
    >Capable and Curious
  </li>
  <li class="char-list">
    <button on:click={() => setCharacter(characters["healer"])}
      >The Healer</button
    >Focused on Medicine and being Healthy
  </li>
  <li class="char-list">
    <button on:click={() => setCharacter(characters["scientist"])}
      >The Scientist</button
    >The titular Academic
  </li>
</ul>
<HomeButton />

<style>
  .char-list {
    margin-bottom: 0.5em;
  }
</style>
