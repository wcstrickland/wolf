<script>
  let output = [];
  let dicePool = {
    4: 0,
    6: 0,
    8: 0,
    10: 0,
    12: 0,
    20: 0,
  };

  function clearDicePool(e) {
    e.preventDefault();
    dicePool = {
      4: 0,
      6: 0,
      8: 0,
      10: 0,
      12: 0,
      20: 0,
    };
  }

  function between(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  function rollOne(numDice, sides) {
    let array = [];
    for (let i = 1; i <= numDice; i++) {
      let roll = between(1, sides);
      array.push(roll);
    }
    return array;
  }

  function increment(n) {
    dicePool[n] = dicePool[n] + 1;
  }

  function decrement(n, e) {
    e.preventDefault();
    if (dicePool[n] > 0) {
      dicePool[n] = dicePool[n] - 1;
    }
  }

  function roll() {
    output = [];
    for (const die in dicePool) {
      let currentRoll = rollOne(dicePool[die], die);
      output = output.concat(currentRoll);
    }
  }
</script>

<div style="display: flex;">
  <button
    on:contextmenu={(e) => decrement(4, e)}
    on:click={() => increment(4)}
    class="diceButton">D4<br />{dicePool[4]}</button
  >
  <button
    on:contextmenu={(e) => decrement(6, e)}
    on:click={() => increment(6)}
    class="diceButton">D6<br />{dicePool[6]}</button
  >
  <button
    on:contextmenu={(e) => decrement(8, e)}
    on:click={() => increment(8)}
    class="diceButton">D8<br />{dicePool[8]}</button
  >
  <button
    on:contextmenu={(e) => decrement(10, e)}
    on:click={() => increment(10)}
    class="diceButton">D10<br />{dicePool[10]}</button
  >
  <button
    on:contextmenu={(e) => decrement(12, e)}
    on:click={() => increment(12)}
    class="diceButton">D12<br />{dicePool[12]}</button
  >
  <button
    on:contextmenu={(e) => decrement(20, e)}
    on:click={() => increment(20)}
    class="diceButton">D20<br />{dicePool[20]}</button
  >
  <button
    class="diceButton"
    style="width:100px;"
    on:contextmenu={(e) => clearDicePool(e)}
    on:click={() => roll()}
  >
    ROLL
  </button>
</div>
<div style="display:flex; margin-left:.5em; margin-top:1em;">
  {#each output as out}
    <div style="margin-left:1em;">{out}</div>
  {/each}
  <div style="margin-left:.5em;">
    Total: {output.reduce((cur, acc) => cur + acc, 0)}
  </div>
</div>

<style>
  .diceButton {
    width: 100px;
    margin-left: 1em;
  }
</style>
