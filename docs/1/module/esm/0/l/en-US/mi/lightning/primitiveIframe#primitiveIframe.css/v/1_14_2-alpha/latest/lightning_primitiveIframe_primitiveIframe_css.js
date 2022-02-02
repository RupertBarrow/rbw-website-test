function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".slds-non-salseforce-resource", shadowSelector, " {display: none;}"].join('');
}
export default [stylesheet];