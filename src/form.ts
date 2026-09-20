declare const require: (path: string) => any;

const game = require("./game")

export function RunPipeline(form: HTMLFormElement) {
    form.addEventListener("submit", (e) => {
        e.preventDefault()

        const formData = new FormData(form);
        const gameType = formData.get('game-type');

        game.setGameType(gameType)

        afterPipelineActionFn()
    })
}

let afterPipelineActionFn: () => void

export function AfterPipelineAction(callBack: () => void) {
    afterPipelineActionFn = callBack
}