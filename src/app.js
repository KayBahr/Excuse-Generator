window.onload = function excuseGenerator() {
  document.getElementById("excuse").innerText = generateExcuse();
};

let generateExcuse = function generateExcuse() {
  let who = ["The dog", "My grandma", "His turtle", "My bird"];

  let action = ["ate", "peed", "crushed", "broke"];

  let what = ["my homework", "the keys", "the car"];

  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ]; /* Update arrays for fun */

  let whoRand = Math.floor(Math.random() * who.length);
  let actionRand = Math.floor(Math.random() * action.length);
  let whatRand = Math.floor(Math.random() * what.length);
  let whenRand = Math.floor(Math.random() * when.length);

  return (
    who[whoRand] +
    " " +
    action[actionRand] +
    " " +
    what[whatRand] +
    " " +
    when[whenRand]
  );
};
