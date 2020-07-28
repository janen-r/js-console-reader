module.exports = {
  read: code => {
    const logResult = [];
    global.JS_CONSOLE_READER_FUNCTION = (data, type = "log") => {
      logResult.push({ data: data, type: type });
    };
    code = code.replace(
      new RegExp("console.log", "g"),
      "JS_CONSOLE_READER_FUNCTION"
    );
    let codeFunc = new Function(code);
    codeFunc();
    return logResult;
  }
};
