function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".h2", shadowSelector, " {font-size: xx-large;}"].join('');
}
export default [stylesheet];