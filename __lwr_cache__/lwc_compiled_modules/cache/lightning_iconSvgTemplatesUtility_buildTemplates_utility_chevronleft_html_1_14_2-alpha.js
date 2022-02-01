import _implicitStylesheets from "./chevronleft.css";

import _implicitScopedStylesheets from "./chevronleft.scoped.css?scoped=true";

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
      "d": "M34.2 47.7L13.4 27.2c-.6-.6-.6-1.6 0-2.2L34.2 4.5c.6-.6 1.6-.6 2.2 0l2.2 2.2c.6.6.6 1.6 0 2.2L22.1 25c-.6.6-.6 1.6 0 2.2l16.3 16.1c.6.6.6 1.6 0 2.2l-2.2 2.2c-.5.5-1.4.5-2 0z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_chevronleft"
