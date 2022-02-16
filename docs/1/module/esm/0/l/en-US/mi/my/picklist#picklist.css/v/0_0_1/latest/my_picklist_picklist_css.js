function stylesheet(token, useActualHostSelector, useNativeDirPseudoclass) {
  var shadowSelector = token ? ("[" + token + "]") : "";
  var hostSelector = token ? ("[" + token + "-host]") : "";
  return [".greet", shadowSelector, " {font-size: xx-large;}.fade-fast", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 1s;}.fade-slow", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 5s;}.fade-medium", shadowSelector, " {opacity: 0;animation: fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " 2s;}@keyframes fade-in", shadowSelector ? ('-' + shadowSelector.substring(1, shadowSelector.length - 1)) : '', " {0% {opacity: 0;}35% {opacity: 1;}65% {opacity: 1;}100% {opacity: 0;}}.hide", shadowSelector, " {opacity: 0;}"].join('');
}
export default [stylesheet];