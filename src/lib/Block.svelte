<script>
  import { formState, updateFormState } from "./stores";


  export let title;
  export let val = $formState[title] || 0;

  function setVal(vl) {
    if(val === vl){
      updateFormState(title, vl - 1)
      val = $formState[title]
    }else{
      updateFormState(title, vl)
      val = $formState[title]
    }
  }

  function setSanity(){
    if(title === "Resolve"){
      updateFormState("sanity", ($formState.Resolve * 5 ) + 5)
    }
  }
  
  function setHealth(){
    if(title === "Stamina"){
      updateFormState("hp", ($formState.Stamina * 5 ) + 5)
    }
  }

  function setVals(){
    setHealth()
    setSanity()
  }

</script>

<div style="display:flex;justify-content:space-between; ">
  <div style="display:flex; justify-content:flex-start">
    {title}
  </div>
  <div style="display:flex; justify-content:flex-end">
    <input type="checkbox" checked= {val >= 1} on:click={() => setVal(1)} on:change={()=>setVals()}/>
    <input type="checkbox" checked={val >= 2} on:click={() => setVal(2)} on:change={()=>setVals()} />
    <input type="checkbox" checked={val >= 3} on:click={() => setVal(3)} on:change={()=>setVals()} />
    <input type="checkbox" checked={val >= 4} on:click={() => setVal(4)} on:change={()=>setVals()} />
    <input type="checkbox" checked={val >= 5} on:click={() => setVal(5)} on:change={()=>setVals()} />
  </div>
</div>

<style>
  *{
    width:auto;
  }
</style>