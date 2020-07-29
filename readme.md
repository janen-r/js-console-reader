### JAVASCRIPT CONSOLE READER

### Installation

```
$ npm install console-reader

```

### Example

```js
const consoleReader = require("js-console-reader");

const consoleLogs = consoleReader.read(
  `let a = 'js-console-reader-log'; console.log(a)`
);
console.log(consoleLogs);
```

### Test Command

```
$ npm test

```

NOTE: Currently its available only for console.log function.
