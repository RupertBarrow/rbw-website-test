import _implicitStylesheets from "./percent.css";

import _implicitScopedStylesheets from "./percent.scoped.css?scoped=true";

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
      "d": "M39.55 26A10.5 10.5 0 1050 36.5 10.5 10.5 0 0039.55 26zm0 16.14a5.65 5.65 0 115.6-5.64 5.64 5.64 0 01-5.6 5.64zM23 15.5a10.48 10.48 0 10-3.07 7.43A10.5 10.5 0 0023 15.5zm-10.5 5.64a5.65 5.65 0 114-1.65 5.63 5.63 0 01-4.01 1.65zm26.71-15A.8.8 0 0038.49 5h-3a.83.83 0 00-.64.4l-22 40.41a.78.78 0 000 .78.79.79 0 00.68.39h3a.8.8 0 00.64-.4l22-40.41z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_percent"
