import _implicitStylesheets from "./account.css";

import _implicitScopedStylesheets from "./account.scoped.css?scoped=true";

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
      "d": "M79 51.1c.1-2.1-1.4-2.7-2-2.7H55.2c-1.9 0-2.2 2-2.2 2.2V74h26V51.1zM64 67.9c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm10 10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M59 40.3V28.7c.1-2.1-1.4-2.7-2-2.7H23.2c-1.9 0-2.2 2-2.2 2.2V74h26V44.7s0-2.4 2.2-2.4h7.9c1.1 0 1.9-1.2 1.9-2zM32 66.9c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.3c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm11 30.7c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.3c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm0-10.2c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2zm11 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v2z"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_account"
