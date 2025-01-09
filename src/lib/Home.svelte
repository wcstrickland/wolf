<script>
  // @ts-nocheck

  import Section from "./Section.svelte";
  import RollerToggle from "./RollerToggle.svelte";
  import FillBlock from "./FillBlock.svelte";
  import Health from "./Health.svelte";
  import Sanity from "./Sanity.svelte";
  import SkillExp from "./SkillExp.svelte";
  import AttrExp from "./AttrExp.svelte";
  import Roller from "./Roller.svelte";
  import Difficulty from "./Difficulty.svelte";
  import Jack from "./Jack.svelte";
  import Balanced from "./Balanced.svelte";
  import Specialist from "./Specialist.svelte";
  import AttInstruct from "./AttInstruct.svelte";
  import { formState } from "./stores.js";
  import { push, pop, replace } from "svelte-spa-router";

  let phySkills = [
    "Athletics",
    "Brawl",
    "Agility",
    "Ranged",
    "Larceny",
    "Stealth",
    "Survival",
    "Melee",
  ];
  let socSkills = [
    "Animal Ken",
    "Insight",
    "Expression",
    "Intimidation",
    "Persuasion",
    "Etiquette",
    "Streetwise",
    "Subterfuge",
  ];
  let menSkills = [
    "Academics",
    "Tech",
    "Finance",
    "Investigation",
    "Medicine",
    "Occult",
    "Politics",
    "Craft",
  ];

  let rollerVisible = false;
  let difficultyVisible = false;
  let attrVisible = false;
  let skillVisible = false;

  // bind the formState store and local storage
  formState.subscribe((value) => (localStorage.form = JSON.stringify(value)));
</script>

<div id="pg1">
  <div style="display: flex; justify-content:space-between;">
    <div>
      Name:<input
        type="text"
        style="margin-left:.5em;width:20em;"
        bind:value={$formState.name}
      />
    </div>
    <button
      on:click={() => {
        localStorage.clear();
        location.reload();
      }}>Clear</button
    >
  </div>
  <button
    on:click={() => (attrVisible = !attrVisible)}
    on:keypress={() => (attrVisible = !attrVisible)}
    style="margin-bottom:1em;text-decoration:underline;"
  >
    Attributes
  </button>
  {#if attrVisible}
    <div
      style="display:flex; flex-direction:column; justify-content:center; align-items:center; margin-bottom:1em;"
    >
      <AttInstruct />
    </div>
  {/if}
  <div style="display:flex; justify-content:space-evenly;">
    <Section title="Physical" blocks={["Strength", "Dexterity", "Stamina"]} />
    <Section title="Social" blocks={["Charisma", "Finesse", "Intuition"]} />
    <Section title="Mental" blocks={["Intelligence", "Wits", "Resolve"]} />
  </div>
  <hr style="margin-top:1em;margin-bottom:1em;" />
  <button
    on:click={() => (skillVisible = !skillVisible)}
    on:keypress={() => (skillVisible = !skillVisible)}
    style="margin-bottom:1em;text-decoration:underline;"
  >
    Skills
  </button>
  {#if skillVisible}
    <div>
      <div>Choose a Distribution</div>
      <div style="display:flex; justify-content:space-evenly;">
        <Jack />
        <Balanced />
        <Specialist />
      </div>
    </div>
  {/if}
  <div style="display:flex; justify-content:space-evenly;">
    <Section title="" blocks={phySkills} />
    <Section title="" blocks={socSkills} />
    <Section title="" blocks={menSkills} />
  </div>
  <hr style="margin-top:1em; margin-bottom:2em;" />
  <div style="margin-top:1em; display:flex; justify-content:space-between;">
    <FillBlock title="Virtue" />
    <FillBlock title="Vice" />
  </div>
  <Health />
  <Sanity />
  <div style="margin-top:2em;">Talents</div>
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.talent1}
  />
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.talent2}
  />
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.talent3}
  />
  <div style="margin-top:1em;">Equipment</div>
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.equipment1}
  />
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.equipment2}
  />
  <input
    type="text"
    style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    bind:value={$formState.equipment3}
  />
</div>
<hr style="margin-top:3em;margin-bottom:1em;" />
<button on:click={() => push("/characters")}>Sample Characters</button>
<AttrExp />
<SkillExp />
<hr />
<h2>Actions</h2>
<p>
  Actions are made with a combination of an <b>Attribute</b> and a
  <b>Skill</b>.
</p>
<p>e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.</p>
<p>
  A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll a d20
  and add 5 (3 for dex and 2 for larceny)
</p>
<p>
  If you are <b>Untrained (0 points in a skill)</b> roll at disadvantage.
</p>
<p>
  The GM will tell you how many you need to accomplish the task.
  <!-- The GM will tell you how many you need to accomplish the task, but here is a
  rough estimate -->
</p>
<!-- <div>Routine: convince a friend to help you</div>
      <div>1 success</div>
      <div>Straightforward: seduce someone already in the mood</div>
      <div>2 success</div>
      <div>Moderate: walk a tightrope</div>
      <div>3 success</div>
      <div>Challenging: locate the source of a whisper</div>
      <div>4 success</div>
      <div>Hard: convince a cop it isn't your cocaine</div>
      <div>5 success</div>
      <div>Very Hard: run across a tightrope while juggling</div>
      <div>6 success</div>
      <div>
        Improbable: find a specific homeless person in LA during the night
      </div>
      <div>7+ success</div> -->

<p />
<hr />
<h2>Virtue & Vice</h2>
<p>
  <b>Virtue</b> and <b>Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy
</p>
<p>
  Making choices that exemplify this behavior will reward the player with a
  point that can be spent in a variety of ways such as adding 1 die to a roll.
</p>
<p>
  examples:
  <button style="margin-left:.5em;" on:click={() => push("/virtues")}>
    virtues
  </button>
  <button style="margin-left:.5em;" on:click={() => push("/vices")}>
    vices
  </button>
</p>

<hr />
<h2>Health: Physical & Mental</h2>
<p>
  Physical Health = <b>5 x Stamina + 5</b>
</p>
<p>
  Mental Health = <b>5 x Resolve + 5</b>
</p>
<p>
  Mental health degrades due to stressful situations such as seeing someone die.
</p>
<p>
  Your <b>State</b> is determined by what percentage of your <b>Health</b> or
  <b>Sanity</b>
  you have and degradation causes penalties to rolls starting at
  <b>Injured / Anxious : - 1</b>
</p>
<hr />
<h2>Talents</h2>
<p>Talents represent abilities unique to the character.</p>
<p>Talents should define and reflect the theme of the game you are creating.</p>
<p>
  Creating talents should be a collaborative effort between GM and player,
  ensuring the character concept is realized without breaking game balance.
</p>
<p>Work with you GM to create Talents that bring your character to life.</p>
<button
  style="margin-top:.5em; margin-bottom:.5em;"
  on:click={() => push("/talents")}>Example Talents</button
>
<hr />
<h2>Equipment</h2>
<p>Equipment represents objects that the character can use.</p>
<p><b>Example:</b> A police officer might have a revolver with 6 bullets</p>
<p>Some equipment may behave like a talent</p>
<p><b>First Aid Kit :</b> Restore "X" HP</p>
<hr />

<h2>Combat</h2>
<p>Different types of damage are represented by different damage dice as <b>interpreted or decided by the GM.</b></p>
<ul>
 <h4>Examples / Suggested Values</h4> 
  <li>Punch: Flat Strength or Brawl Score</li>
  <li>Small Weapons (Scissors, thrown Rock,  Brick): <b>1d4</b></li>
  <li>Medium Weapons (Knife, Sling Shot, Baseball Bat): <b>1d6</b></li>
  <li>Large Weapons (Machete, Bow and Arrow, Crowbar): <b>1d8</b></li>
  <li>Lethal Weapons (Pistol : <b>1d10</b>, Rifle: <b>2d8</b>, Shotgun: <b>4/5d4</b>, Grenade: <b>4d6</b>)</li>
</ul>
<p>
  When attacking: Roll the appropriate combination of Attribute and Skill for
  the type of attack.
</p>
<p>
  <b>Strength + Brawl</b> to throw a punch , <b>Dexterity + Melee</b> to stab
  with a knife ,
  <b>Wits + Ranged</b> to shoot a gun
</p>
<p>
  The attacked character can use their turn to defend with a combination such as
  <b>Agility + Dexterity</b>
  to <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak/Avoid</b> damage.
</p>
<p>If the attack result is higher than the defense, or no defense is mounted, the damage occurs</p>
<p>If both players choose to attack damage occurs <b>simultaneously</b> potentially leading to co mortality</p>
<br />
<p><b>This combat system is dramatic, abrupt, and lethal</b></p>
<p>
  Talents and Equipment may mitigate or amplify the intensity of combat
  depending on the setting and theme of the game.
</p>
<p>
  If you feel HP is too specific for a cinematic style game feel free to just
  use the "HP States" such as "Wounded"
</p>

<!-- <div style="position:fixed;bottom:20px;right:20px;">
  <RollerToggle />
</div>
{#if rollerVisible}
  <Roller />
{/if}
<br />
<button
  style="margin-bottom:3em;"
  on:click={() => (rollerVisible = !rollerVisible)}
  >Full Dice Roller
</button> -->
<br />
<br />

<style>
  * {
    width: auto;
  }
</style>
