const consoleReader = require("./index.js");

console.log("Tested Successfully !!");
const consoleLogs = consoleReader.read(
  `let a = 'js-console-reader-log'; console.log(a)`
);
console.log(consoleLogs);
