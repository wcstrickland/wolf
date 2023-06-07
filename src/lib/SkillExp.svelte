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
  <li>Athletics - feats of strength and movement</li>
  <li>Brawl - unarmed combat</li>
  <li>Vehicle - operating automobiles under rough conditions</li>
  <li>Ranged - identifying, using, and maintaining shooting weapons.</li>
  <li>
    Larceny - picking locks, burglary, bypassing security, sleight of hand, etc
  </li>
  <li>Stealth - moving silently and unnoticed</li>
  <li>Survival - enduring harsh environments</li>
  <li>Melee - identifying, using, and maintaining non-firearm weapons</li>
</ul>
<li>
  <h3>
    <b>Social</b> Skills often represent practiced and honed natural knack.
  </h3>
  <ul style="text-align:start">
    <li>Animal Ken - understanding animal minds and behaviors</li>
    <li>Insight - observing emotions and understanding viewpoints</li>
    <li>Expression - art of communication and entertainment</li>
    <li>Intimidation - coercing via force and threat</li>
    <li>Persuasion - convincing others and inspiring their emotions</li>
    <li>Socialize - social interaction in various situations</li>
    <li>Streetwise - navigating urban streets and gathering intel there</li>
    <li>Subterfuge - deceiving others and noticing it</li>
  </ul>
</li>
<li>
  <h3><b>Mental</b> Skills often represent knowledge from formal education.</h3>
  <ul style="text-align:start">
    <li>Academics - knowledge in Arts and Humanities</li>
    <li>Tech - computer programs and operating systems</li>
    <li>Craft - constructing, crafting, and repairing objects</li>
    <li>Investigation - solving riddles and finding evidence</li>
    <li>Medicine - physiology, anatomy, and medical treatments</li>
    <li>Occult - lore about the supernatural</li>
    <li>Politics - political processes and bureaucratic maneuvers</li>
    <li>
      Finance - understanding of mathematics, money, and financial systems
    </li>
  </ul>
</li>

