(() => {
  var __defProp = Object.defineProperty;
  var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __hasOwnProp = Object.prototype.hasOwnProperty;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e) {
      throw err = [e], e;
    }
  };
  var __export = (target, all) => {
    for (var name in all)
      __defProp(target, name, { get: all[name], enumerable: true });
  };
  var __copyProps = (to, from, except, desc) => {
    if (from && typeof from === "object" || typeof from === "function") {
      for (let key of __getOwnPropNames(from))
        if (!__hasOwnProp.call(to, key) && key !== except)
          __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
    }
    return to;
  };
  var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

  // src/game.ts
  var game_exports = {};
  __export(game_exports, {
    Next: () => Next,
    getGameType: () => getGameType,
    setGameType: () => setGameType,
    startGame: () => startGame
  });
  function startGame(t) {
    gameType = t;
    pos[t] = 0;
  }
  function Next() {
    const seq = sequences[gameType];
    const word = seq[pos[gameType]];
    pos[gameType] = (pos[gameType] + 1) % seq.length;
    return word;
  }
  var VOWELS, GAMES, KEYS, build, perGame, sequences, pos, gameType, getGameType, setGameType;
  var init_game = __esm({
    "src/game.ts"() {
      VOWELS = ["\u0456", "\u0435", "\u0430", "\u043E", "\u0443", "\u0438"];
      GAMES = {
        mrl: ["\u043C\u0440\u043B", "\u043B\u0440\u043C"],
        bd: ["\u0431\u0434", "\u0434\u0431"],
        mn: ["\u043C\u043D", "\u0441\u043D"],
        kpt: ["\u043A\u043F\u0442", "\u043F\u043A\u0442"],
        shch: ["\u0448\u0447", "\u0447\u0448"],
        mrktch: ["\u043C\u0440\u043A\u0442\u0447", "\u0447\u043C\u0440\u043A\u0442"],
        zd: ["\u0437\u0434", "\u0434\u0437"],
        zis: ["\u0437\u0456\u0441", "\u0441\u0456\u0437"],
        lv: ["\u043B\u0432", "\u0432\u043B"]
      };
      KEYS = Object.keys(GAMES);
      build = ([root, rev]) => [
        ...VOWELS.map((v) => root + v),
        ...VOWELS.map((v) => rev + v),
        ...VOWELS.flatMap((v) => [root + v, rev + v])
      ];
      perGame = Object.fromEntries(
        KEYS.map((k) => [k, build(GAMES[k])])
      );
      sequences = {
        ...perGame,
        all: KEYS.flatMap((k) => perGame[k])
      };
      pos = Object.fromEntries(
        Object.keys(sequences).map((k) => [k, 0])
      );
      gameType = "all";
      getGameType = () => gameType;
      setGameType = (t) => {
        gameType = t;
      };
    }
  });

  // src/form.ts
  var form_exports = {};
  __export(form_exports, {
    AfterPipelineAction: () => AfterPipelineAction,
    RunPipeline: () => RunPipeline
  });
  function RunPipeline(form2) {
    form2.addEventListener("submit", (e) => {
      e.preventDefault();
      const formData = new FormData(form2);
      const gameType2 = formData.get("game-type");
      game.setGameType(gameType2);
      afterPipelineActionFn();
    });
  }
  function AfterPipelineAction(callBack) {
    afterPipelineActionFn = callBack;
  }
  var game, afterPipelineActionFn;
  var init_form = __esm({
    "src/form.ts"() {
      game = (init_game(), __toCommonJS(game_exports));
    }
  });

  // src/main.ts
  var game2 = (init_game(), __toCommonJS(game_exports));
  var form = (init_form(), __toCommonJS(form_exports));
  var $id = (id) => document.getElementById(id);
  var textScreen = $id("screen");
  $id("spell-button")?.addEventListener("click", () => {
    if (!textScreen) {
      console.warn("Element #screen not found");
      return;
    }
    textScreen.textContent = game2.Next();
  });
  var gameTypeForm = $id("game-type-form");
  if (gameTypeForm) {
    form.RunPipeline(gameTypeForm);
    form.AfterPipelineAction(() => {
      gameTypeForm.remove();
    });
  } else console.warn("Form #game-type-form not found");
})();
