import _implicitStylesheets from "./move.css";

import _implicitScopedStylesheets from "./move.scoped.css?scoped=true";

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
      "d": "M49.7 25.3l-8.3-9c-.6-.6-1.4-.1-1.4.9V23H30c-.6 0-1-.4-1-1V12h5.9c1 0 1.5-.9.9-1.4l-9-8.3c-.4-.3-1-.3-1.4 0l-9 8.3c-.6.6-.1 1.4.9 1.4H23v10c0 .6-.4 1-1 1H12v-5.9c0-1-.9-1.5-1.4-.9l-8.3 9c-.3.4-.3 1 0 1.4l8.3 9c.6.6 1.4.1 1.4-.9V29h10c.6 0 1 .4 1 1v10h-5.9c-1 0-1.5.9-.9 1.4l9 8.3c.4.3 1 .3 1.4 0l9-8.3c.6-.6.1-1.4-.9-1.4H29V30c0-.6.4-1 1-1h10v5.9c0 1 .9 1.5 1.4.9l8.3-9c.4-.5.4-1.1 0-1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_move"
