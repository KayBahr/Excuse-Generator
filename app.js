
object.onload = function excuseGenerator() {
    Math.floor((Math.random() * who.length) + 1);
    let who = ['The dog','My grandma','His turtle','My bird'];
    Math.floor((Math.random() * action.length) + 1);
    let action = ['ate','peed','crushed','broke'];
    Math.floor((Math.random() * what.length) + 1);
    let what = ['my homework', 'the keys', 'the car'];
    Math.floor((Math.random() * when.length) + 1);
    let when = ['before the class','right on time','when I finished','during my lunch','while I was praying'];

    let excuse = who.concat(" ", action, " ", what, " ", when);

    return excuse;
}

console.log(excuseGenerator());
