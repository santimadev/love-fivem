<script>
  import { fly } from 'svelte/transition';
  import { onMount } from 'svelte';
  import { player } from '../store/stores';
  import LoginScene from './scenes/login.scene.svelte';
  import VehiclesScene from './scenes/vehicles.scene.svelte'
  import Select from './components/Select.svelte';
  // import SignupScene from './scenes/signup.scene.svelte';


  let label = 'empty'

  function handleKeyReleased(e) {
    label = JSON.stringify(e.detail)
  }

</script>

<main>
  <VehiclesScene />
</main>

<svelte:body on:keyReleased={handleKeyReleased} />

<style>
  main {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
  }
  h1 {
    font-size: 80px;
  }
</style>
