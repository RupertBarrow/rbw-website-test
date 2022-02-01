import _implicitStylesheets from "./clear.css";

import _implicitScopedStylesheets from "./clear.scoped.css?scoped=true";

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
      "d": "M26 2C12.7 2 2 12.7 2 26s10.7 24 24 24 24-10.7 24-24S39.3 2 26 2zm4.9 24.8l7.8 7.8c.4.4.4 1 0 1.4l-2.8 2.8c-.4.4-1 .4-1.4 0L26.7 31c-.4-.4-1-.4-1.4 0l-7.8 7.8c-.4.4-1 .4-1.4 0L13.3 36c-.4-.4-.4-1 0-1.4l7.8-7.8c.4-.4.4-1 0-1.4l-7.9-7.9c-.4-.4-.4-1 0-1.4l2.8-2.8c.4-.4 1-.4 1.4 0l7.9 7.9c.4.4 1 .4 1.4 0l7.8-7.8c.4-.4 1-.4 1.4 0l2.8 2.8c.4.4.4 1 0 1.4l-7.8 7.8c-.3.4-.3 1 0 1.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_clear"
