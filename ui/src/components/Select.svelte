<script>

    export let options
    export let selectedOption = 0
    export let focused = true
    let key = null
    $: option = options[selectedOption]

    function goForwards() {
        // Go forward
        if (selectedOption < options.length - 1) {
            selectedOption += 1
            return
        }
        // Loop forward
        selectedOption = 0
    }

    function goBackwards() {
        // Go backwards
        if (selectedOption > 0) {
            selectedOption -= 1
            return
        }
        // Loop backwards
        selectedOption = options.length - 1
    }

    function keyReleased(e) {
        if (focused) {
            const { key } = e.detail
            switch (key) {
                case 'ARROW_LEFT':
                    goBackwards()
                    break
                case 'ARROW_RIGHT':
                    goForwards()
                    break
            }
        }
    }

</script>

<div>
    {option.label}
    {key}
</div>
<svelte:body on:keyReleased={keyReleased} />
