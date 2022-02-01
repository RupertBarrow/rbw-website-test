import _implicitStylesheets from "./poll.css";

import _implicitScopedStylesheets from "./poll.scoped.css?scoped=true";

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
      "d": "M76 20H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM51 32v-8h25v8H51zM76 42H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM42 54v-8h34v8H42zM76 64H24c-2.2 0-4 1.8-4 4v8c0 2.2 1.8 4 4 4h52c2.2 0 4-1.8 4-4v-8c0-2.2-1.8-4-4-4zM60 76v-8h16v8H60z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_poll"
