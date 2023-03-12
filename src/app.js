window.onload = function excuseGenerator() {
  document.getElementById("button").addEventListener("click", function() {
    document.getElementById("excuse").innerText = generateExcuse();
  });
};

let generateExcuse = function generateExcuse() {
  let who = [
    "The dog",
    "My grandma",
    "His turtle",
    "My bird",
    "The son",
    "My doctor",
    "The police",
    "My old classmate",
    "A squirrel",
    "A neighbor"
  ];

  let action = [
    "ate",
    "peed",
    "crushed",
    "broke",
    "borrowed",
    "locked away",
    "selled"
  ];

  let what = [
    "my homework",
    "the keys",
    "the car",
    "my rabbit",
    "my pants",
    "my mother",
    "the television",
    "my glasses"
  ];

  let when = [
    "before the class.",
    "right on time.",
    "when I finished.",
    "during my lunch.",
    "while I was praying.",
    "last night.",
    "on Christmas.",
    "after breakfast.",
    "at noon."
  ];

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
