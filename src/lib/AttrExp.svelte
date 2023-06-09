<script>
  import AttInstruct from "./AttInstruct.svelte";
</script>

<h2>Attributes</h2>
Choose a Distribution
<div style="display:flex; flex-direction:column; justify-content:center; align-items:center;">
  <AttInstruct />
</div>

<div style="display:flex;justify-content:space-between;">
  <div style="display:flex; flex-direction:column;">
    <h3>Physical</h3>
    <span><b>Strength</b> - Raw Power</span>
    <span><b>Dexterity</b> - Nimbleness & Accuracy</span>
    <span><b>Stamina</b> - Physical Resistance to Harm</span>
  </div>

  <div style="display:flex; flex-direction:column;">
    <h3>Social</h3>
    <span><b>Charisma</b> - Social Presence</span>
    <span><b>Finesse</b> - Social Awareness & Control</span>
    <span><b>Composure</b> - Resistance to Social Pressure</span>
  </div>

  <div style="display:flex; flex-direction:column;">
    <h3>Mental</h3>
    <span><b>Intelligence</b> - Knowledge & Logic</span>
    <span><b>Wits</b> - Quick Practical Thinking</span>
    <span><b>Resolve</b> - Determination & Resistance to Stress</span>
  </div>
</div>

<hr style="margin-top:2em;margin-bottom:2em;" />
