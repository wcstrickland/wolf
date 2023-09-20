<script>
  import Jack from "./Jack.svelte";
  import Specialist from "./Specialist.svelte";
  import Balanced from "./Balanced.svelte";
</script>

<h2>SKILLS</h2>
<div>
  <div>Choose a Distribution</div>
  <div style="display:flex; justify-content:space-evenly;">
    <Jack />
    <Balanced />
    <Specialist />
  </div>
  <hr />
</div>
<h3>
  <b>Physical</b> Skills often represent personal experience and training.
</h3>
<ul style="text-align:start">
  <li>Athletics - Feats of strength and movement</li>
  <li>Brawl - Unarmed combat</li>
  <li>Agility - Deft movement. Dodge, duck, dip, dive and dodge.</li>
  <li>Ranged - The familiarity and use of weapons such as bows, guns</li>
  <li>
    Larceny - Picking locks, burglary, bypassing security, sleight of hand
  </li>
  <li>Stealth - Moving silently and unnoticed</li>
  <li>Survival - Enduring harsh environments</li>
  <li>Melee - The familiarity with weapons such as knives, swords, or clubs</li>
</ul>
<li>
  <h3>
    <b>Social</b> Skills often represent practiced and honed natural knack.
  </h3>
  <ul style="text-align:start">
    <li>Animal Ken - Understanding animal minds and behaviors</li>
    <li>Insight - Detect emotions and truthfulness</li>
    <li>Expression - Art of communication and entertainment</li>
    <li>Intimidation - Coercing via force and threat</li>
    <li>Persuasion - Convincing others and inspiring their emotions</li>
    <li>Etiquette - Manners and refinement</li>
    <li>Streetwise - Navigating urban streets and gathering intel there</li>
    <li>Subterfuge - Deceiving others </li>
  </ul>
</li>
<li>
  <h3><b>Mental</b> Skills often represent knowledge from formal education.</h3>
  <ul style="text-align:start">
    <li>Academics - Knowledge in Science, Arts, and Humanities</li>
    <li>Tech - Computers, electronics, engines, and machinery</li>
    <li>Finance - Understanding of mathematics, money, and financial systems</li>
    <li>Investigation - Solving problems and finding evidence</li>
    <li>Medicine - Physiology, anatomy, and medical treatments</li>
    <li>Occult - Lore about the supernatural</li>
    <li>Politics - Political processes and bureaucratic maneuvers</li>
    <li>Craft - Constructing, crafting, and repairing objects</li>
  </ul>
</li>

<style>
  *{
    width:auto;
  }
</style>