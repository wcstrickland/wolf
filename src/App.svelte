<script>
  import Section from "./lib/Section.svelte";
  import RollerToggle from "./lib/RollerToggle.svelte";
  import FillBlock from "./lib/FillBlock.svelte";
  import Health from "./lib/Health.svelte";
  import Sanity from "./lib/Sanity.svelte";
  import SkillExp from "./lib/SkillExp.svelte";
  import AttrExp from "./lib/AttrExp.svelte";
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
</script>

<main >
  <div id="pg1">
    <div style="display: flex; justify-content:flex-start;">
      Name:<input type="text" style="margin-left:.5em;width:200px;" />
    </div>
    <h4 style="text-decoration: underline;">Attributes</h4>
    <div style="display:flex; justify-content:space-evenly;">
      <Section title="Physical" blocks={["Strength", "Dexterity", "Stamina"]} />
      <Section title="Social" blocks={["Charm", "Manipulation", "Composure"]} />
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
    />
    <input
      type="text"
      style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    />
    <div style="margin-top:1em;">Equipment</div>
    <input
      type="text"
      style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    />
    <input
      type="text"
      style="width:100%; margin-top:.5em; margin-bottom:.5em;"
    />
  </div>
  <hr style="margin-top:3em;margin-bottom:1em;" />
  <AttrExp />
  <SkillExp />
  <hr />
  <h2>How do I do things?</h2>
  <p>
    Actions are made with a combination of an <b>Attribute</b> and a
    <b>Skill</b>.
  </p>
  <p>e.g. Dexterity + Larceny to pick a lock.</p>
  <p>A character with a 3 in Dexterity and 2 in Larceny would roll 5 dice</p>
  <p>
    4, 5, 6's are considered <b>Successes</b>. The GM will tell you how many
    <b>Successes</b>
    you need to accomplish the task.
  </p>
  <p />
  <hr />
  <h2>Virtue & Vice</h2>
  <p>
    Virtue and Vice represent your characters defining positive and negative
    traits. e.g. Patience and Jealousy
  </p>
  <p>
    Making choices that exemplify this behavior will reward the player with a
    point that can be spent in a variety of ways such as adding 1 to a die pool.
  </p>
  <hr />
  <h2>Health: Physical & Mental</h2>
  <p>
    Certain types of interactions will cause certain types of damage. e.g. A
    punch might "hurt" while a lead pipe may "injure"
  </p>
  <p>
    Repeated damage of a certain type will escalate. e.g. A character was
    attacked with a pipe earlier and is "injured". Later a chair is broken over
    them in a fight - the cumulative injuries escalate to "wounded"
  </p>
  <p>
    Mental health degrades due to stressful situations such as seeing someone
    die.
  </p>
  <p>
    Health degradation causes penalties to rolls starting at "Injured/Anxious"
    -1
  </p>
  <hr />
  <h2>Talents</h2>
  <p>Talents represent abilities unique to the character</p>
  <p>Examples:</p>
  <p>Frank the construction worker might have the following talent :</p>
  <p>
    Tough: All damage is reduced by one magnitude. Things that would "Wound" now
    "Injure" and so on.
  </p>
  <br />
  <p>
    Marjaorie studies occult rituals and artifacts. She might have the following
    talent :
  </p>
  <p>
    Seance: Using a Social or Mental attribute + Occult you gain information
    from the other side.
  </p>
  <p>Ingredients, location, and knowledge may increase the odds of success.</p>
  <hr />
  <h2>Equipment</h2>
  <p>Equipment represents objects that the character can use</p>
  <p>Examples:</p>
  <p>A police officer might have a revolver with 6 bullets</p>
  <p>A character may carry a knife</p>
  <br />
  <p>Some equipment may behave like a talent</p>
  <p>First Aid Kit : Reduce character injuries by 1 level</p>
  <p>
    Amulet of protection : Protect the player from 1 instance of Supernatural
    harm per day
  </p>
  <hr />
  <h2>I choose Violence. How do I fight?</h2>
  <p>You decide to attack a character.</p>
  <p>Roll the appropriate combination of Attribute and Skill for the type of attack. E.g. "Strength" + "Brawl", "Dexterity" + "Melee", "Wits" + "Ranged"</p>
  <p>Your opponent will choose a response such as "Agility" + "Dexterity" to dodge or "Strength" + "Melee" to fight back</p>
  <p>For every <b>Success</b> you each deal a point of damage.</p>
  <p>If a character took a defensive action such as "Agility" + "Dexterity" to dodge they do not deal damage but instead mitigate incoming damage 1 for 1</p>
  <p>Each character rolls "Stamina" and reduces incoming damage by that many <b>Successes</b></p>
  <p></p>
  <br/>
  <br/>
  <p>4 damage from a fist could be thought of 4 instances of "Hurt" escalating to 2 instances of "Injured" escalating to "Wounded"</p>
  <p>Damage from a sword would likely be "Injuring" or "Wounding" and 3 of that type of damage could very well kill someone. These judgments are made by the GM.</p>
  <p>Damage type and severity is specifically not precise like a hit point system. This is not a combat simulator.</p>
  <b>This combat system is dramatic, abrupt, and lethal</b>
  <p>Talents and Equipment may mitigate or amplify the intensity of combat depending on the setting and theme of the game.</p>
</main>
<!-- <div style="display:flex;justify-content:end; position:sticky; bottom:10px;"> -->
<div style="position:fixed;bottom:20px;right:20px;">
<RollerToggle />
</div>

<style></style>
