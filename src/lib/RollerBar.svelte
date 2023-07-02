<script>
  import RollResult from "./RollResult.svelte";

let array = [];
let output = "";
function between(min, max) {  
  return Math.floor(
    Math.random() * (max - min + 1) + min
  )
}
function roll(numDice){
    array = [];
    for (let i = 1; i <= numDice; i++) {
        let roll = between(1,6)
        array.push(roll)
    }
    // output = array.join(" - ")
    output = array
}
</script>

<button style="margin-top:1em; margin-bottom:1em;" on:click={()=>roll(1)}>1</button>
<button style="margin-top:1em;" on:click={()=>roll(2)}>2</button>
<button style="margin-top:1em;" on:click={()=>roll(3)}>3</button>
<button style="margin-top:1em;" on:click={()=>roll(4)}>4</button>
<button style="margin-top:1em;" on:click={()=>roll(5)}>5</button>
<button style="margin-top:1em;" on:click={()=>roll(6)}>6</button>
<button style="margin-top:1em;" on:click={()=>roll(7)}>7</button>
<button style="margin-top:1em;" on:click={()=>roll(8)}>8</button>
<button style="margin-top:1em;" on:click={()=>roll(9)}>9</button>

<RollResult result={output}/>

<style>

  *{
    width:auto;
  }
</style>