import _implicitStylesheets from "./add.css";

import _implicitScopedStylesheets from "./add.scoped.css?scoped=true";

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
      "d": "M30 29h16.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5H30c-.6 0-1-.4-1-1V5.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V22c0 .6-.4 1-1 1H5.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H22c.6 0 1 .4 1 1v16.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V30c0-.6.4-1 1-1z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_add"
