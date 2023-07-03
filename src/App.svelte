<script>
  // @ts-nocheck

  import Section from "./lib/Section.svelte";
  import RollerToggle from "./lib/RollerToggle.svelte";
  import FillBlock from "./lib/FillBlock.svelte";
  import Health from "./lib/Health.svelte";
  import Sanity from "./lib/Sanity.svelte";
  import SkillExp from "./lib/SkillExp.svelte";
  import AttrExp from "./lib/AttrExp.svelte";
  import Roller from "./lib/Roller.svelte";
  import Virtues from "./lib/Virtues.svelte";
  import Vices from "./lib/Vices.svelte";
  import { currentPage, setCurrentPage, formState } from "./lib/stores";
  import Difficulty from "./lib/Difficulty.svelte";
  import Jack from "./lib/Jack.svelte";
  import Balanced from "./lib/Balanced.svelte";
  import Specialist from "./lib/Specialist.svelte";
  import AttInstruct from "./lib/AttInstruct.svelte";
  import Characters from "./lib/Characters.svelte";
  import Talents from "./lib/Talents.svelte";

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
  function sleep(ms) {
    console.log("starting");
    return new Promise((resolve) => setTimeout(resolve, ms));
  }
</script>

<main>
  {#if $currentPage === "home"}
    <div id="pg1">
      <div style="display: flex; justify-content:space-between;">
        <div>
          Name:<input
            type="text"
            style="margin-left:.5em;width:200px;"
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
        <Section
          title="Physical"
          blocks={["Strength", "Dexterity", "Stamina"]}
        />
        <Section title="Social" blocks={["Charisma", "Finesse", "Composure"]} />
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
    </div>
    <hr style="margin-top:3em;margin-bottom:1em;" />
    <button on:click={() => setCurrentPage("characters")}
      >Sample Characters</button
    >
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
      A character with a 3 in <b>Dexterity</b> and 2 in <b>Larceny</b> would roll
      5 dice
    </p>
    <p>
      <b>5, 6's</b> are considered Successes. <b>4's</b> are considered
      <b>Partial Successes</b>
    </p>
    <p>
      If you are <b>Untrained (0 points in a skill)</b> only <b>6's</b> are
      considered
      <b>Successes</b> and
      <b>5's</b> are considered <b>Partial Successes</b>
    </p>
    <p>
      The GM will tell you how many you need to accomplish the task, but here is
      a rough <button
        style="margin-left:.5em;"
        on:click={() => (difficultyVisible = !difficultyVisible)}
        on:keypress={() => (difficultyVisible = !difficultyVisible)}
        >estimate</button
      >
    </p>
    {#if difficultyVisible}
      <Difficulty />
    {/if}
    <p />
    <hr />
    <h2>Virtue & Vice</h2>
    <p>
      <b>Virtue</b> and <b>Vice</b> represent your characters defining positive and
      negative traits. e.g. Patience and Jealousy
    </p>
    <p>
      Making choices that exemplify this behavior will reward the player with a
      point that can be spent in a variety of ways such as adding 1 die to a
      roll.
    </p>
    <p>
      examples:
      <button
        style="margin-left:.5em;"
        on:click={() => setCurrentPage("virtue")}
        on:keypress={() => setCurrentPage("virtue")}
      >
        virtues
      </button>
      <button
        style="margin-left:.5em;"
        on:click={() => setCurrentPage("vice")}
        on:keypress={() => setCurrentPage("vice")}
      >
        vices
      </button>
    </p>

    <hr />
    <h2>Health: Physical & Mental</h2>
    <p>
      Physical Health = <b>3 x Stamina + 5</b>
    </p>
    <p>
      Mental Health = <b>3 x Resolve + 5</b>
    </p>
    <p>
      Different types of damage are handled with "Multipliers" determined by the GM.
    </p>
    <p>
      A <b>Punch</b> might deal x.5 damage for each success and <b>Firearm</b> might deal x3 for each success.
    </p>
    <p>
      Mental health degrades due to stressful situations such as seeing someone
      die.
    </p>
    <p>
      Your <b>State</b> is determined by what percentage of your <b>Health</b> or <b>Sanity</b> you have and
       degradation causes penalties to rolls starting at <b
        >Injured / Anxious : - 1</b
      >
    </p>
    <hr />
    <h2>Talents</h2>
    <p>Talents represent abilities unique to the character.</p>
    <p>
      Talents should define and reflect the theme of the game you are creating.
    </p>
    <p>
      Creating talents should be a collaborative effort between GM and player,
      ensuring the character concept is realized without breaking game balance.
    </p>
    <p>Work with you GM to create Talents that bring your character to life.</p>
    <button
      style="margin-top:.5em; margin-bottom:.5em;"
      on:click={() => setCurrentPage("talents")}>Example Talents</button
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
      When attacking: Roll the appropriate combination of Attribute and Skill
      for the type of attack.
    </p>
    <p>
      <b>Strength + Brawl</b> to throw a punch , <b>Dexterity + Melee</b> to
      stab with a knife ,
      <b>Wits + Ranged</b> to shoot a gun
    </p>
    <p>
      Your opponent will choose a response such as <b>Strength + Melee</b> to fight
      back
    </p>
    <p>For every <b>Success</b> you each deal a point of damage.</p>
    <p>
      If a character takes a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.
    </p>
    <p />
    <br />
    <p />
    <p><b>This combat system is dramatic, abrupt, and lethal</b></p>
    <p>
      Talents and Equipment may mitigate or amplify the intensity of combat
      depending on the setting and theme of the game.
    </p>
    <p>
      If you feel HP is too specific for a cinematic style game feel free to just use the "HP States" such as "Wounded"
    </p>

    <div style="position:fixed;bottom:20px;right:20px;">
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
    </button>
    <br />
    <br />
  {/if}
  {#if $currentPage === "virtue"}
    <Virtues />
  {/if}
  {#if $currentPage === "vice"}
    <Vices />
  {/if}
  {#if $currentPage === "characters"}
    <Characters />
  {/if}
  {#if $currentPage === "talents"}
    <Talents />
  {/if}
</main>

<style>
  * {
    width: auto;
  }
</style>
