import _implicitStylesheets from "./unified_health_score.css";

import _implicitScopedStylesheets from "./unified_health_score.scoped.css?scoped=true";

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
      "d": "M74 29.49H26a6 6 0 00-6 6v28.98a6 6 0 006 6h48a6 6 0 006-6v-29a6 6 0 00-6-5.98zM27.61 42.81a5.89 5.89 0 018.33-.28 3.7 3.7 0 01.28.28l.46.57a.73.73 0 001 .15.75.75 0 00.16-.15l.39-.48a5.84 5.84 0 014.38-2A5.77 5.77 0 0147 42.78a6.64 6.64 0 010 9.06s-5.26 5.68-8.07 8.61a2.24 2.24 0 01-3.16.14l-.13-.14c-2.75-3-8-8.55-8-8.58-1.93-2.4-1.38-6.23-.03-9.06zM53 57.92v-3a2 2 0 012-2h15.1a2 2 0 012 2v3a2 2 0 01-2 2H55A2 2 0 0153 58zm19-12.09a2 2 0 01-2 2h-9.06a2 2 0 01-2-2v-3a2 2 0 012-2H70a2 2 0 012 2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_unified_health_score"
