<script>
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
    "Socialize",
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

  // bind the formState store and local storage
  formState.subscribe((value) => (localStorage.form = JSON.stringify(value)));
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
      <h4 style="text-decoration: underline;">Attributes</h4>
      <div style="display:flex; justify-content:space-evenly;">
        <Section
          title="Physical"
          blocks={["Strength", "Dexterity", "Stamina"]}
        />
        <Section title="Social" blocks={["Charisma", "Finesse", "Composure"]} />
        <Section title="Mental" blocks={["Intelligence", "Wits", "Resolve"]} />
      </div>
      <hr style="margin-top:1em;margin-bottom:1em;" />
      <h4 style="text-decoration: underline;">Skills</h4>
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
      <b>Partial Successes</b> The GM will tell you how many you need to accomplish
      the task.
    </p>
    <p>
      If you are <b>Untrained</b> (0 points in a skill) only <b>6's</b> are
      considered
      <b>Successes</b>
      <b>5's</b> are considered <b>Partial Successes</b>
    </p>
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
      <span
        class="link"
        on:click={() => setCurrentPage("virtue")}
        on:keypress={() => setCurrentPage("virtue")}
      >
        virtues
      </span>
      <span
        class="link"
        on:click={() => setCurrentPage("vice")}
        on:keypress={() => setCurrentPage("vice")}
      >
        vices
      </span>
    </p>

    <hr />
    <h2>Health: Physical & Mental</h2>
    <p>
      Certain types of interactions will cause certain types of damage. A punch
      might <b>Hurt</b> while a lead pipe may <b>Injure</b>
    </p>
    <p>
      Mental health degrades due to stressful situations such as seeing someone
      die.
    </p>
    <p>
      Health degradation causes penalties to rolls starting at <b
        >Injured / Anxious : - 1</b
      >
    </p>
    <hr />
    <h2>Talents</h2>
    <p>Talents represent abilities unique to the character</p>
    <p>Examples:</p>
    <p>Frank the construction worker might have the following talent :</p>
    <p>
      Tough: All damage is reduced by one magnitude. Things that would "Wound"
      now "Injure" and so on.
    </p>
    <br />
    <p>
      Marjaorie studies occult rituals and artifacts. She might have the
      following talent :
    </p>
    <p>
      Seance: Using a Resolve + Occult you gain information
      from the other side.
    </p>
    <hr />
    <h2>Equipment</h2>
    <p>Equipment represents objects that the character can use.</p>
    <p><b>Example:</b> A police officer might have a revolver with 6 bullets</p>
    <p>Some equipment may behave like a talent</p>
    <p><b>First Aid Kit :</b> Reduce character injuries by 1 level</p>
    <hr />
    <h2>Combat</h2>
    <p>
      When attacking: Roll the appropriate combination of Attribute and Skill
      for the type of attack.
    </p>
    <p>
      <b>Strength + Brawl</b> , <b>Dexterity + Melee</b> ,
      <b>Wits + Ranged</b>
    </p>
    <p>
      Your opponent will choose a response such as <b>Agility + Dexterity</b> to
      dodge or <b>Strength + Melee</b> to fight back
    </p>
    <p>For every <b>Success</b> you each deal a point of damage.</p>
    <p>
      If a character took a defensive action such as <b>Agility + Dexterity</b>
      to
      <b>Dodge</b> or <b>Brawl + Stamina</b> to <b>Soak</b> damage they do not deal
      damage but instead mitigate incoming damage by 1 for each success.
    </p>
    <p />
    <br />
    <p>
      4 damage from a fist could be thought of 4 instances of <b>Hurt</b>
      escalating to 2 instances of <b>Injured</b> escalating to <b>Wounded</b>
    </p>
    <p>
      Damage from a sword would likely be <b>Injuring</b> or <b>Wounding</b> and
      3 of that type of damage could very well kill someone. These judgments are
      made by the GM.
    </p>
    <p><b>This combat system is dramatic, abrupt, and lethal</b></p>
    <p>
      Talents and Equipment may mitigate or amplify the intensity of combat
      depending on the setting and theme of the game.
    </p>
    <p>
      If your game is better suited by a "hit-point" system feel free to
      substitute.
    </p>
    <div style="position:fixed;bottom:20px;right:20px;">
      <RollerToggle />
    </div>
    <br />
    <br />
    <br />
    <br />
    {#if rollerVisible}
      <Roller />
    {/if}
    <br />
    <button
      style="margin-bottom:3em;"
      on:click={() => (rollerVisible = !rollerVisible)}>Full Dice Roller</button
    >
    <br />
  {/if}
  {#if $currentPage === "virtue"}
    <Virtues />
  {/if}
  {#if $currentPage === "vice"}
    <Vices />
  {/if}
</main>

<style>
  .link {
    cursor: pointer;
    color: rgb(63, 63, 206);
    margin-left: 1em;
  }
  @media (prefers-color-scheme: light) {
    .link {
      cursor: pointer;
      color: rgb(23, 23, 61);
      margin-left: 1em;
    }
  }
</style>
