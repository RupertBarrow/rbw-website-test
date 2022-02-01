import _implicitStylesheets from "./keypad.css";

import _implicitScopedStylesheets from "./keypad.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 52 52"
    },
    key: 0,
    svg: true
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M8.55 36.91A6.55 6.55 0 112 43.45a6.54 6.54 0 016.55-6.54zm17.45 0a6.55 6.55 0 11-6.55 6.54A6.55 6.55 0 0126 36.91zm17.45 0a6.55 6.55 0 11-6.54 6.54 6.54 6.54 0 016.54-6.54zM8.55 19.45A6.55 6.55 0 112 26a6.55 6.55 0 016.55-6.55zm17.45 0A6.55 6.55 0 1119.45 26 6.56 6.56 0 0126 19.45zm17.45 0A6.55 6.55 0 1136.91 26a6.55 6.55 0 016.54-6.55zM8.55 2A6.55 6.55 0 112 8.55 6.54 6.54 0 018.55 2zM26 2a6.55 6.55 0 11-6.55 6.55A6.55 6.55 0 0126 2zm17.45 0a6.55 6.55 0 11-6.54 6.55A6.55 6.55 0 0143.45 2z",
      "fill-rule": "evenodd"
    },
    key: 2,
    svg: true
  }, [])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_keypad"
