import _implicitStylesheets from "./rows.css";

import _implicitScopedStylesheets from "./rows.scoped.css?scoped=true";

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
      "d": "M46.5 14h-41c-.8 0-1.5-.7-1.5-1.5v-3C4 8.7 4.7 8 5.5 8h41c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5zM46.5 28.9h-41c-.8 0-1.5-.7-1.5-1.5v-3c0-.7.7-1.4 1.5-1.4h41c.8 0 1.5.7 1.5 1.5v3c0 .7-.7 1.4-1.5 1.4zM46.5 44h-41c-.8 0-1.5-.7-1.5-1.5v-3c0-.8.7-1.5 1.5-1.5h41c.8 0 1.5.7 1.5 1.5v3c0 .8-.7 1.5-1.5 1.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_rows"
