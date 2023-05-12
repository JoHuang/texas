const texas = require("../dist/texas");

texas.benchmark();
console.log(texas.deck().map(texas.abbr));
