function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".center", shadowSelector, " {text-align: center;}.link", shadowSelector, " {border: none;padding: 10px;border-radius: 5px;text-decoration: none;background-color: #ff6000;color: white;margin-left: 33%;margin-right: 33%;display: inline-block;margin-top: 1em;}.info", shadowSelector, " {color: black;background-color: #e4f2f8;margin: auto;padding: 15px 10px;text-align: left;width: 300px;border-radius: 5px;}.code", shadowSelector, " {font-family: monospace;}.container", shadowSelector, " {margin-top: 30px;}img", shadowSelector, " {max-width: 150px;}.greeting", shadowSelector, " {height: 75px;}"].join('');
}
export default [stylesheet];