import _implicitStylesheets from "./lead_list.css";

import _implicitScopedStylesheets from "./lead_list.scoped.css?scoped=true";

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
      "d": "M37.1 62.3H77c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM25 70.3h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM25 52.4h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM25 34.5h-4c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v4c.1 1-.7 1.9-1.8 2H25zM37.1 44.4h35.1c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2zM37.1 26.6H77c1.1 0 2 .9 2 2v4c0 1.1-.9 2-2 2H37.1c-1.1 0-2-.9-2-2v-4c0-1.1.9-2 2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_lead_list"
