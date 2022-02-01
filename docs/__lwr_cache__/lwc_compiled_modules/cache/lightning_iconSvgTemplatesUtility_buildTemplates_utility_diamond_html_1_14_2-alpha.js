import _implicitStylesheets from "./diamond.css";

import _implicitScopedStylesheets from "./diamond.scoped.css?scoped=true";

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
      "fill-rule": "evenodd",
      "clip-rule": "evenodd",
      "d": "M24.4 49.2c.9.9 2.2.9 3.1 0l21.9-21.9c.9-.9.9-2.2 0-3.1L27.6 2.4c-.9-.9-2.2-.9-3.1 0L2.6 24.3c-.9.9-.9 2.2 0 3.1l21.8 21.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_diamond"
