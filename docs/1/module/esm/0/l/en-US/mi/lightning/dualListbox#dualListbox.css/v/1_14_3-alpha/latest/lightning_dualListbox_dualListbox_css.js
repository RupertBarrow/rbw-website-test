function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return (useActualHostSelector ? ":host {display: block;}" : [hostSelector, " {display: block;}"].join(''));
}
export default [stylesheet];