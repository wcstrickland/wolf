<script>
  import Section from "./lib/Section.svelte";
  import Balanced from "./lib/Balanced.svelte";
  import AttInstruct from "./lib/AttInstruct.svelte";
  import Jack from "./lib/Jack.svelte";
  import Specialist from "./lib/Specialist.svelte";
  import FillBlock from "./lib/FillBlock.svelte";
  import Health from "./lib/Health.svelte";
  import Sanity from "./lib/Sanity.svelte";
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
    "Leadership",
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
  <div id="pg1">
    <div style="display: flex; justify-content:flex-start;">
      Name:<input type="text" />
    </div>
    <b style="text-decoration: underline;">Attributes</b>
    <AttInstruct title="" />
    <div style="display:flex; justify-content:space-evenly;">
      <Section title="Physical" blocks={["Strength", "Dexterity", "Stamina"]} />
      <Section title="Social" blocks={["Charm", "Manipulation", "Composure"]} />
      <Section title="Mental" blocks={["Intelligence", "Wits", "Resolve"]} />
    </div>
    <hr>
    <h4 style="text-decoration: underline;">Skills</h4>
    <div >
      <div>Distributions</div>
      <div style="display:flex; justify-content:space-evenly;">
        <Jack />
        <Balanced />
        <Specialist />
      </div>
      <hr>
    </div>
    <div style="display:flex; justify-content:space-evenly;">
      <Section title="" blocks={phySkills} />
      <Section title="" blocks={socSkills} />
      <Section title="" blocks={menSkills} />
    </div>
    <hr>
    <div style="margin-top:1em; display:flex; justify-content:space-between;">
      <FillBlock title="Virtue" />
      <FillBlock title="Vice" />
    </div>
    <Health />
    <Sanity />
  </div>
</main>

<style></style>
