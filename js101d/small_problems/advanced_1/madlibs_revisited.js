function madlibs(template) {
  let grammar = {
    adjective: ["quick", "lazy", "sleepy", "noisy", "hungry"],
    noun: ["fox", "dog", "head", "leg", "tail", "cat"],
    verb: ["jumps", "lifts", "bites", "licks", "pats"],
    adverb: ["easily", "lazily", "noisily", "excitedly"],
  };
  function replaceText(el) {
    let random = Math.floor(Math.random() * grammar[el].length);
    el = grammar[el][random];
    return el;
  }
  let regex = new RegExp(Object.keys(grammar).join("|"), "g");
  return template.replace(regex, replaceText);
}

let template1 =
  "The adjective brown noun adverb verb the adjective yellow noun, who adverb verb his noun and looks around";
let template2 = "The noun verb the noun's tail.";

// Examples
console.log(madlibs(template1));
console.log(madlibs(template1));
console.log(madlibs(template2));
console.log(madlibs(template2));
