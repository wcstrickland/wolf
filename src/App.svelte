<script>
  import Section from "./lib/Section.svelte";
  import Balanced from "./lib/Balanced.svelte";
  import AttInstruct from "./lib/AttInstruct.svelte";
  import Jack from "./lib/Jack.svelte";
  import Specialist from "./lib/Specialist.svelte";
  import FillBlock from "./lib/FillBlock.svelte";
  import Health from "./lib/Health.svelte";
  import Sanity from "./lib/Sanity.svelte";
  import SkillExp from "./lib/SkillExp.svelte";
  import AttrExp from "./lib/AttrExp.svelte";
  let phySkills = [
    "Athletics",
    "Brawl",
    "Vehicle",
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
    "Science",
  ];
</script>

<main>
  <div id="pg1" style="min-height:100vh; max-height:100vh;">
    <div style="display: flex; justify-content:flex-start;">
      Name:<input type="text" style="margin-left:.5em;"/>
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
    <hr style="margin-top:2em; margin-bottom:2em;"/>
    <hr style="margin-top:2em; margin-bottom:2em;"/>
    <hr style="margin-top:2em; margin-bottom:2em;"/>
    <hr style="margin-top:2em; margin-bottom:2em;"/>
  </div>
  <hr>
  <AttrExp/>
  <SkillExp/>
</main>

<style></style>
