window.onload = function excuseGenerator() {
  let randomWho = Math.floor(Math.random() * 4 + 1);
  let who = ["The dog", "My grandma", "His turtle", "My bird"];
  Math.floor(Math.random() * 4 + 1);
  let action = ["ate", "peed", "crushed", "broke"];
  Math.floor(Math.random() * 4 + 1);
  let what = ["my homework", "the keys", "the car"];
  Math.floor(Math.random() * +1);
  let when = [
    "before the class",
    "right on time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];

  var excuse = (document.getElementById("excuse").innerText = randomWho);

  who.concat(" ", action, " ", what, " ", when);

  return excuse;
};
