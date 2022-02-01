import _implicitStylesheets from "./quip_sheet.css";

import _implicitScopedStylesheets from "./quip_sheet.scoped.css?scoped=true";

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
      "d": "M31.9 38.8h-10c-1 0-1.9.9-1.9 1.9v31.9c0 2.8 2.2 5 5 5h6.9c1 0 1.9-.9 1.9-1.9v-35c0-1.1-.9-1.9-1.9-1.9zm46.2 0H40.6c-1 0-1.9.9-1.9 1.9v35c0 1 .9 1.9 1.9 1.9H75c2.8 0 5-2.2 5-5v-32c0-1-.9-1.8-1.9-1.8zM75 22.5H25c-2.8 0-5 2.2-5 5v4.4c0 1 .9 1.9 1.9 1.9h56.2c1 0 1.9-.9 1.9-1.9v-4.4c0-2.7-2.2-5-5-5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_quip_sheet"
