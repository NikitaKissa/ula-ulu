const $id = (id: string) => document.getElementById(id)

export function RunGame() {
    const la = word(mrl, WordType.normalNreverse)

    console.log(la())
    console.log(la())
    console.log(la())
    console.log(la())
    console.log(la())
    console.log(la())
    console.log(la())
    console.log(la())
}

// Words

const vowelLetters = ['і', 'е', 'а', 'о', 'у', 'и']

const mrl = (suffix: string, reverse?: boolean) => reverse ? `лрм${suffix}` : `мрл${suffix}`
const bd = (suffix: string, reverse?: boolean) => reverse ? `дб${suffix}` : `бд${suffix}`
const mn = (suffix: string, reverse?: boolean) => reverse ? `сн${suffix}` : `мн${suffix}` 
const kpt = (suffix: string, reverse?: boolean) => reverse ? `пкт${suffix}` : `кпт${suffix}` 
const shch = (suffix: string, reverse?: boolean) => reverse ? `чш${suffix}` : `шч${suffix}` 
const mrktch = (suffix: string, reverse?: boolean) => reverse ? `чмркт${suffix}` : `мрктч${suffix}` 
const zd = (suffix: string, reverse?: boolean) => reverse ? `дз${suffix}` : `зд${suffix}` 
const zis = (suffix: string, reverse?: boolean) => reverse ? `сіз${suffix}` : `зіс${suffix}` 
const lv = (suffix: string, reverse?: boolean) => reverse ? `вл${suffix}` : `лв${suffix}`

enum WordType{
    normal,
    reverse,
    normalNreverse
}

function word(fn: (suffix: string, reverse?: boolean) => string, type: WordType) {
    let counter = 0
    return () => {
        if(counter >= vowelLetters.length)
            if(type === WordType.normalNreverse && counter >= vowelLetters.length*2-1)
                counter = 0
            else counter = 0

        switch(type){
            case WordType.normal: 
                return fn(vowelLetters[counter++])
            case WordType.reverse: 
                return fn(vowelLetters[counter++], true)
            case WordType.normalNreverse:
                const even: boolean = counter % 2 == 0 
                return fn(vowelLetters[counter++], even)
        }
    }
}