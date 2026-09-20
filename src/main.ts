declare const require: (path: string) => any;

const game = require("./game")

const $id = (id: string) => document.getElementById(id)

const textScreen = $id("screen")

$id("spell-button")?.addEventListener("click", () => {
    if(!textScreen){
        console.warn("Element #screen not found")
        return
    }

    textScreen.textContent = game.Next()
})

