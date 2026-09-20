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
    RunGame: () => RunGame
  });
  function RunGame() {
    const la = word(mrl, 2 /* normalNreverse */);
    console.log(la());
    console.log(la());
    console.log(la());
    console.log(la());
    console.log(la());
    console.log(la());
    console.log(la());
    console.log(la());
  }
  function word(fn, type) {
    let counter = 0;
    return () => {
      if (counter >= vowelLetters.length)
        if (type === 2 /* normalNreverse */ && counter >= vowelLetters.length * 2 - 1)
          counter = 0;
        else counter = 0;
      switch (type) {
        case 0 /* normal */:
          return fn(vowelLetters[counter++]);
        case 1 /* reverse */:
          return fn(vowelLetters[counter++], true);
        case 2 /* normalNreverse */:
          const even = counter % 2 == 0;
          return fn(vowelLetters[counter++], even);
      }
    };
  }
  var vowelLetters, mrl;
  var init_game = __esm({
    "src/game.ts"() {
      vowelLetters = ["\u0456", "\u0435", "\u0430", "\u043E", "\u0443", "\u0438"];
      mrl = (suffix, reverse) => reverse ? `\u043B\u0440\u043C${suffix}` : `\u043C\u0440\u043B${suffix}`;
    }
  });

  // src/main.ts
  var game = (init_game(), __toCommonJS(game_exports));
  game.RunGame();
})();
