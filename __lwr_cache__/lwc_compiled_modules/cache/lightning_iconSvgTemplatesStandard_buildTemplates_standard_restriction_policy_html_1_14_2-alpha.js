import _implicitStylesheets from "./restriction_policy.css";

import _implicitScopedStylesheets from "./restriction_policy.scoped.css?scoped=true";

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
      "d": "M64 48a16 16 0 1016 16 16 16 0 00-16-16zm7 19H57a3 3 0 010-6h14a3 3 0 010 6zM36 20H26a6 6 0 00-6 6v9a6 6 0 006 6h10a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-1a4.5 4.5 0 010-9h1a4.5 4.5 0 010 9zM54 41h10a6 6 0 006-6v-9a6 6 0 00-6-6H54a6 6 0 00-6 6v9a6 6 0 006 6zm4.5-15h1a4.5 4.5 0 010 9h-1a4.5 4.5 0 010-9zM36 47H26a6 6 0 00-6 6v9a6 6 0 006 6h10a6 6 0 006-6v-9a6 6 0 00-6-6zm-4.5 15h-1a4.5 4.5 0 010-9h1a4.5 4.5 0 010 9z",
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_restriction_policy"
