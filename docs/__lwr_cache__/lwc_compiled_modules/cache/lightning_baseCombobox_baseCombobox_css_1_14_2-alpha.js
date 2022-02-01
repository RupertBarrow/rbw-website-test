function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".slds-inline-logo", shadowSelector, " {height: 1rem;margin-top: 1rem;margin-bottom: 1rem;}input[aria-readonly=\"true\"]", shadowSelector, " {caret-color: transparent;}"].join('');
}
export default [stylesheet];