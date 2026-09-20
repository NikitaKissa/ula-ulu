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

type GameType = keyof typeof GAME_TYPE_LABELS;
const GAME_TYPE_LABELS = {
    all: "Усі",
    mrl: "Мрл(і)",
    bd: "Бд(і)",
    mn: "Мн(і)",
    sn: "Сн(і)",
    kpt: "Кпт(і)",
    shch: "Шч(і)",
    mrktch: "Мрктч(і)",
    zd: "Зд(і)",
    zis: "Зіс(і)",
    lv: "Лв(і)",
};

const gameTypeForm = $id("game-type-form")
if(gameTypeForm){
    form.RunPipeline(gameTypeForm)
    form.AfterPipelineAction(() => { 
        $id("game-type-screen")!.textContent = GAME_TYPE_LABELS[game.getGameType() as GameType]

        gameTypeForm.remove() 
    })
}
else console.warn("Form #game-type-form not found")
    

