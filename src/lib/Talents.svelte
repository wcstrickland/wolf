<script>
  import HomeButton from "./HomeButton.svelte";
</script>

<p>
  Talents can and should vary greatly between types of games. A murder mystery
  falls apart if one player can read minds, and a horror game isn't scary if
  everyone is a demi-god.
</p>
<p>
  Beyond just adding points to an Attribute or Skill, "leveling up" characters through
  talents re-enforces the narrative. Characters improve in ways that match their
  motivations and experience and their abilities feel like a direct result of
  the story.
</p>
<p>
  One way to think of talents is as passive improvements or as active things the
  character does. Its a good idea to consider adding a "resource" cost to active
  talents.
</p>
<p>
  If you have an idea for a talent that feels like multiple people should be
  able to use it, or it should have limited uses, consider making it <b
    >Equipment</b
  >
  instead. Anyone in the story could possess a <b>first aid kit</b> and it can now
  be balanced by only working "x" number of times
</p>
<hr />
<h4>Passive Talents</h4>
<ul style="text-align: start;">
  <li class="tal-list">
    Tough: Damage is reduced one "type". Things that would "Injure" now "Hurt"
    and so on.
  </li>
  <li class="tal-list">
    Flirt: Add 3 dice to positive social rolls such as <b
      >Finesse + Persuasion</b
    > when interacting with the opposite sex.
  </li>
  <li class="tal-list">
    True Grit: You don't suffer any penalties to dice rolls due to your mental
    or physical health.
  </li>
  <li class="tal-list">
    Read Lips: You can discern what was said with sight alone.
  </li>
  <li class="tal-list">Infernal: Fire deals reduced damage to you.</li>
  <li class="tal-list">
    Specialist: For one <b>Skill</b> any <b>Virtue or Vice</b> dice you add to the
    roll are doubled.
  </li>
  <li class="tal-list">
    VIP: Your status and reputation precedes you. You gain access to places
    others cannot go.
  </li>
  <li class="tal-list">
    Malice: <b>Vice</b> added to a dice roll are doubled if the skill is devious
    or of ill intent.
  </li>
  <li class="tal-list">
    Master of Disguise: Add 3 dice to any roll related to impersonation of
    another
  </li>
  <li class="tal-list">
    Expert: Determine an area of expertise. You now have extensive knowledge on
    this matter.
  </li>
</ul>
<h4>Active Talents</h4>
<ul style="text-align: start;">
  <li class="tal-list">
    Adrenaline Rush: You gain 3 dice to your next roll. Exhausted you lose that
    many on your next <b>meaningful</b> roll.
  </li>
  <li class="tal-list">
    Berserker: You take damage and gain a proportional number of dice for a
    roll. Numbers decided by GM
  </li>
  <li class="tal-list">
    Sense Thoughts: You ascertain the thoughts of another. Deeper thoughts are
    acquired with more <b>Successes</b>. You spend <b>Virtue or Vice</b> for the
    roll.
  </li>
  <li class="tal-list">
    Fire Bolt: Deal damage with a <b>Resolve + Occult</b> roll. You must spend
    <b>Virtue or Vice</b> to cast.
  </li>
  <li class="tal-list">
    Cartoon Logic: By spending <b>Virtue or Vice</b> you can defy the laws of
    physics, but only when it is <b>funny</b>. The extent or duration depends on
    spent <b>Virtue or Vice</b>
  </li>
  <li class="tal-list">
    Consecrate: You call on divine power to bless items or people. You roll a
    number of <b>Virtue</b> dice and the GM interprets the results.
  </li>
  <li class="tal-list">
    Sense Significance: Roll a number of <b>Virtue or Vice</b> to get a sense of
    the importance, history, or meaning of an object you can touch.
  </li>
</ul>
<HomeButton />

<style>
  .tal-list {
    margin-bottom: 0.5em;
  }
  *{
    width:auto;
  }
</style>
