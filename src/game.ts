const VOWELS = ['і', 'е', 'а', 'о', 'у', 'и']

const GAMES = {
    mrl:    ['мрл',   'лрм'],
    bd:     ['бд',    'дб'],
    mn:     ['мн',    'сн'],
    kpt:    ['кпт',   'пкт'],
    shch:   ['шч',    'чш'],
    mrktch: ['мрктч', 'чмркт'],
    zd:     ['зд',    'дз'],
    zis:    ['зіс',   'сіз'],
    lv:     ['лв',    'вл'],
} as const satisfies Record<string, readonly [string, string]>

export type GameKey = keyof typeof GAMES
export type GameType = GameKey | 'all'

const KEYS = Object.keys(GAMES) as GameKey[]

const build = ([root, rev]: readonly [string, string]): string[] => [
    ...VOWELS.map(v => root + v),
    ...VOWELS.map(v => rev + v),
    ...VOWELS.flatMap(v => [root + v, rev + v]),
]

const perGame = Object.fromEntries(
    KEYS.map(k => [k, build(GAMES[k])])
) as Record<GameKey, string[]>

const sequences: Record<GameType, string[]> = {
    ...perGame,
    all: KEYS.flatMap(k => perGame[k]),
}

const pos = Object.fromEntries(
    (Object.keys(sequences) as GameType[]).map(k => [k, 0])
) as Record<GameType, number>

let gameType: GameType = 'all'

export const setGameType = (t: GameType) => { gameType = t }

export function startGame(t: GameType) {
    gameType = t
    pos[t] = 0
}

export function Next() {
    const seq = sequences[gameType]
    const word = seq[pos[gameType]]
    pos[gameType] = (pos[gameType] + 1) % seq.length
    return word
}