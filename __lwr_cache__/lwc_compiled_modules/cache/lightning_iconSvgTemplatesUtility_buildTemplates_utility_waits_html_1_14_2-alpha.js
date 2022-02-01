import _implicitStylesheets from "./waits.css";

import _implicitScopedStylesheets from "./waits.scoped.css?scoped=true";

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
      "d": "M50 18.4c0-.8-.7-1.5-1.5-1.5h-21c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h14.3L26.3 41.8v.1c-.2.2-.3.5-.3.8v3c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-14l15.2-18.6c.2-.3.3-.7.3-1v-3.2zM26 6.3c0-.8-.7-1.5-1.5-1.5h-21c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h14.3L2.3 29.7v.1c-.2.2-.3.5-.3.8v3c0 .8.7 1.5 1.5 1.5h21c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5h-14l15.2-18.6c.2-.3.3-.7.3-1V6.3z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_waits"
