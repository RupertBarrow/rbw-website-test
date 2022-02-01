import _implicitStylesheets from "./event.css";

import _implicitScopedStylesheets from "./event.scoped.css?scoped=true";

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
      "d": "M76 42H24c-1.1 0-2 .9-2 2v30c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V44c0-1.1-.9-2-2-2zM40 70c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm0-14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm14 14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm0-14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm14 14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zm0-14c0 1.1-.9 2-2 2h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4zM72 26h-5v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2H41v-2c0-2.2-1.8-4-4-4s-4 1.8-4 4v2h-5c-3.3 0-6 2.7-6 6v2c0 1.1.9 2 2 2h52c1.1 0 2-.9 2-2v-2c0-3.3-2.7-6-6-6z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_event"
