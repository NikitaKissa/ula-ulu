declare const require: (path: string) => any;

const game = require("./game")
const form = require("./form")

const $id = (id: string) => document.getElementById(id)

const textScreen = $id("screen")

$id("spell-button")?.addEventListener("click", () => {
    if(!textScreen){
        console.warn("Element #screen not found")
        return
    }

    textScreen.textContent = game.Next()
})

const gameTypeForm = $id("game-type-form")
if(gameTypeForm){
    form.RunPipeline(gameTypeForm)
    form.AfterPipelineAction(() => { gameTypeForm.remove() })
}
else console.warn("Form #game-type-form not found")
    

