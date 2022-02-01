import _implicitStylesheets from "./assignment.css";

import _implicitScopedStylesheets from "./assignment.scoped.css?scoped=true";

import {registerTemplate} from "lwc";
function tmpl($api, $cmp, $slotset, $ctx) {
  const {h: api_element} = $api;
  return [api_element("svg", {
    className: $cmp.computedClass,
    attrs: {
      "focusable": "false",
      "data-key": $cmp.name,
      "aria-hidden": "true",
      "viewBox": "0 0 100 100"
    },
    key: 0,
    svg: true
  }, [api_element("g", {
    key: 1,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M22 54.9h56c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM22 37.1h56c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H22c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_assignment"
