import _implicitStylesheets from "./filter_criteria.css";

import _implicitScopedStylesheets from "./filter_criteria.scoped.css?scoped=true";

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
      "d": "M38.86 32h21.81a2 2 0 002-2v-4a6 6 0 00-5.95-6H42.83a6 6 0 00-5.95 6v4a2 2 0 001.98 2z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M29.93 25a.94.94 0 011 1v4a8 8 0 007.93 8h21.81a8 8 0 007.94-8v-4a.94.94 0 011-1h2a6 6 0 016 6v43a6 6 0 01-6 6H28a6 6 0 01-6-6V31a6 6 0 016-6h2zm31.22 23h-22.3a.86.86 0 00-.65 1.41l9.74 11.39a2.08 2.08 0 01.45 1.31v7.23a.82.82 0 00.81.75h1.5a.73.73 0 00.71-.75v-7.23A1.84 1.84 0 0152 60.8l9.8-11.39a.86.86 0 00-.65-1.41z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_filter_criteria"
