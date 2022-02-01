function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [useNativeDirPseudoclass ? '' : '[dir="rtl"]', " .slds-dropdown_left", useNativeDirPseudoclass ? ':dir(rtl)' : '', shadowSelector, " {left: 0;right: auto;}"].join('');
}
export default [stylesheet];