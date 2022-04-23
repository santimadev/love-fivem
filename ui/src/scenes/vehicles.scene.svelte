<script>
  import vehicles from "../../assets/jsons/vehicles";

  let selectedOption = 0;
  let translateY = 0;

  const totalVehicles = Object.keys(vehicles).length

  function goDown() {
    if (selectedOption >= totalVehicles - 1) {
      selectedOption = 0;
      translateIntoFocusedElement('LOOP_DOWN');
      return
    }
    selectedOption += 1;
    translateIntoFocusedElement('DOWN');
  }

  function goUp() {
    if (selectedOption === 0) {
      selectedOption = totalVehicles - 1;
      translateIntoFocusedElement('LOOP_UP');
      return
    }
    selectedOption -= 1;
    translateIntoFocusedElement('UP');
  }

  function handleKeyReleased(e) {
    const { key } = e.detail;
    switch (key) {
      case "ARROW_DOWN":
        goDown();
        break;
      case "ARROW_UP":
        goUp();
        break;
      case "ENTER":
        emitSpawnVehicleEvent();
    }
  }

  function emitSpawnVehicleEvent() {
    fetch(`https://${GetParentResourceName()}/spawnVehicle`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify({
        modelHash: Object.values(vehicles)[selectedOption],
      }),
    })
      .then((resp) => resp.json())
      .then((resp) => console.log(resp));
  }

  function translateIntoFocusedElement(direction) {
    const selectedElement = document.querySelector(".focused");
    const { height } = selectedElement.getBoundingClientRect()
    const heightWithMargins = height + (0.5 * 16) // MARGIN BOTTOM
    switch (direction) {
        case 'UP':
            translateY += heightWithMargins
            break
        case 'DOWN':
            translateY -= heightWithMargins
            break
        case 'LOOP_DOWN':
            translateY = 0
            break
        case 'LOOP_UP':
            const containerHeight = (window.innerHeight * 0.2) + 16
            translateY = -(heightWithMargins * (totalVehicles)) + containerHeight
            break
    }
  }
</script>

<ul>
    <div style="transform: translateY({translateY}px)" class="smooth">    
        {#each Object.keys(vehicles) as vehicleName, i}
          <li class:focused={i === selectedOption}>
            {vehicleName}
          </li>
        {/each}
    </div>
</ul>
<svelte:body on:keyReleased={handleKeyReleased} />

<style>
  ul {
    position: absolute;
    right: 20px;
    top: 0;
    max-height: 20vh;
    overflow: hidden;
    width: 20vw;
    background: white;
    list-style-type: none;
    font-family: "Courier New", Courier, monospace;
    padding: 1rem;
  }
  li {
    margin-bottom: 0.5rem;
    padding: 1rem;
    border: 1px solid black;
    border-radius: 0.5rem;
    transition: background-color 1s;
  }
  .focused {
    background-color: rgba(0, 0, 0, 0.2);
  }
  .smooth {
      transition: transform .2s;
  }
</style>
