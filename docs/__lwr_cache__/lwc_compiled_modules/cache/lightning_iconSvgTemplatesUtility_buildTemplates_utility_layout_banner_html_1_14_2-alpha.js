import _implicitStylesheets from "./layout_banner.css";

import _implicitScopedStylesheets from "./layout_banner.scoped.css?scoped=true";

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
      "d": "M2 4.88A2.88 2.88 0 014.88 2h42.24A2.88 2.88 0 0150 4.88v42.24A2.88 2.88 0 0147.12 50H4.88A2.88 2.88 0 012 47.12zm7.2 17.28a2.39 2.39 0 012.4-2.4h27.84a2.4 2.4 0 110 4.8H11.6a2.39 2.39 0 01-2.4-2.4zm8.16 5.28a2.4 2.4 0 100 4.8h16.32a2.4 2.4 0 000-4.8z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_layout_banner"
