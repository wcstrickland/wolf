<script>
  import AttInstruct from "./AttInstruct.svelte";
</script>

<h2>Attributes</h2>
Choose a Distribution
<div style="margin-left:33%">
  <AttInstruct />
</div>

<h3>Physical</h3>
<div style="display:flex; flex-direction:column;">
  <span><b>Strength</b> -  Raw Power.</span>
  <span><b>Dexterity</b>  - Nimbleness and Acuracy.</span>
  <span><b>Stamina</b> -  Physical Resistance to harm.</span>
</div>

<h3>Social</h3>
<div style="display:flex; flex-direction:column;">
  <span><b>Charisma</b> - Social Presence</span>
  <span><b>Manipulation</b>  - Social Control</span>
  <span><b>Composure</b> - Resistance to Social Pressure</span>
</div>

<h3>Mental</h3>
<div style="display:flex; flex-direction:column;">
  <span><b>Inelligence</b> - Knowledge and Logic</span>
  <span><b>Wits</b>  - Quick Pratical Thinking</span>
  <span><b>Resolve</b> -  Determination and Resistance to Stress</span>
</div>

<hr style="margin-top:1em;margin-bottom:1em;"/>