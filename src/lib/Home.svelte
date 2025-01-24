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
<h2>Making a Character</h2>
<button on:click={() => push("/characters")}>Sample Characters</button>
<div style="margin-top:1em;">
  <b
    >0 : Untrained, 1 : Below Average, 2 : Average, 3 : Professional, 4 :
    Prodigy, 5 : Superhuman</b
  >
</div>
<AttrExp />
<SkillExp />
<hr />
<hr />
<h1>Playing the Game</h1>

<h2>A Generic System</h2>
<p>
  This system is dice agnostic and aims simply to create a rubric for
  determining a character's ability to perform a task.
</p>
<p>The number of points you have in any skill is meant to reflect this.</p>
<b
  >0 : Untrained, 1 : Below Average, 2 : Average, 3 : Professional, 4 : Prodigy,
  5 : Superhuman </b>
<p>The GM may use d20+mod, dice pool, or a percentile system. The choice of how the characters attributes map to these is up to the GM.</p>
<h3>Here are some suggestions:</h3>
  <p>D20: each point is a +1 mod. Untrained rolls at disadvantage. GM determines a target.</p>
  <p>Each point represents a dice of a dice pool. The type of dice and "target" number allow the GM to fine tune difficulty. e.g. roll d10s and 8 is the target</p>
  <p>Each point represents 10% with the GM determining that simple checks require a d100 roll of less than your total skill, hard less than 1/2, and extreme less than 1/4 </p>
  <h3>Guiding Principles</h3>
  <p>This system favors cinema over simulation.</p>
  <p>This system favors "degrees of success" or "success at a cost" over a pass / fail binary.</p>
  <p>If a piece of information or action is critical to progressing the story any attempt should automatically succeed, with the roll determining a "cost" or "complication".</p>
  <p>Always fail forward.</p>
<hr />
<h2>Actions</h2>
<p>
  Actions are made with a combination of an <b>Attribute</b> and a
  <b>Skill</b>.
</p>
<p>e.g. <b>Dexterity</b> + <b>Larceny</b> to pick a lock.</p>
<p>
  A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> add 5 (3 for dex
  and 2 for larceny)
</p>
<p>
  If you are <b>Untrained (0 points in a skill)</b> suffer a disadvantage. Such as
  2d20 take the lowest, a higher target number, or a smaller dice pool.
</p>
<p></p>
<p />
<hr />
<h2>Virtue & Vice</h2>
<p>
  <b>Virtue</b> and <b>Vice</b> represent your characters defining positive and negative
  traits. e.g. Patience and Jealousy
</p>
<p>
  Making choices that exemplify this behavior will reward the player with a
  point that can be spent in a variety of ways such as adding 1 die to a roll or
  rolling another die.
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
  <b>Stress</b>
  you have and in a gritty setting degradation may causes penalties to rolls starting at a point and
  intensity determined by the GM.
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
<p>
  If the attack result is higher than the defense, or no defense is mounted, the
  damage occurs.
</p>
<p>
  If both players choose to attack damage occurs <b>simultaneously</b> potentially
  leading to co mortality.
</p>
<p><b>This combat system is dramatic, abrupt, and lethal.</b></p>
<p>
  Should the game call for decreased lethality, the GM may decide that all attacks can be defended against without making a
  player choose between defending and attacking
</p>
<p>
  Talents and Equipment may mitigate or amplify the intensity of combat
  depending on the setting and theme of the game.
</p>
<p>
  If you feel HP is too specific for a cinematic style game feel free to just
  use the "HP States" such as "Wounded"
</p>
<hr>
<p>
  Different types of damage are represented by different damage dice or
  modifiers as <b>interpreted or decided by the GM.</b> plus the roll modifiers (DEX
  + Melee)
</p>
  <h4>Examples / Suggested Values</h4>
  <p>Punch: Flat Strength or Brawl Score</p>
  <p>Small Weapons (Scissors, thrown Rock, Brick): <b>1d4 + mods</b></p>
  <p>Medium Weapons (Knife, Sling Shot, Baseball Bat): <b>1d6 + mods</b></p>
  <p>Large Weapons (Machete, Bow and Arrow, Crowbar): <b>1d8 + mods</b></p>
  <p>
    Lethal Weapons (Pistol : <b>1d10</b>, Rifle: <b>2d8</b>, Shotgun:
    <b>4/5d4</b>, Grenade: <b>4d6</b>) + mods
  </p>
<br />

{#if rollerVisible}
  <Roller />
{/if}
<br />
<button
  style="margin-bottom:3em;"
  on:click={() => (rollerVisible = !rollerVisible)}
  >Full Dice Roller
</button>
<br />
<br />

<style>
  * {
    width: auto;
  }
</style>
