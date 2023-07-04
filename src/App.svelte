<script>
import Router from "svelte-spa-router";
  import Home from "./lib/Home.svelte";
  import Virtues from "./lib/Virtues.svelte";
  import Vices from "./lib/Vices.svelte";
  import Talents from "./lib/Talents.svelte";
  import Characters from "./lib/Characters.svelte";

const routes = {
  '/' : Home,
  '/virtues' : Virtues,
  '/vices' : Vices,
  '/talents' : Talents,
  "/characters" : Characters
}
  </script>


<main>
  <Router {routes}/>
</main>

