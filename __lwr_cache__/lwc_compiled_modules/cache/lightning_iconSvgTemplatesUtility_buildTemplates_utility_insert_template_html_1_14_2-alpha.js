import _implicitStylesheets from "./insert_template.css";

import _implicitScopedStylesheets from "./insert_template.scoped.css?scoped=true";

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
      "d": "M48.5 38H44v-4.5c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5V38h-4.5c-.8 0-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5H38v4.5c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5V44h4.5c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zM34 29.5c0-.8.7-1.5 1.5-1.5H38V6c0-2.2-1.8-4-4-4H6C3.8 2 2 3.8 2 6v28c0 2.2 1.8 4 4 4h22v-2.5c0-.8.7-1.5 1.5-1.5H34v-4.5zM16 11c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1V9c0-.6.4-1 1-1h6c.6 0 1 .4 1 1v2zm12 16c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h18c.6 0 1 .4 1 1v2zm4-8c0 .6-.4 1-1 1H9c-.6 0-1-.4-1-1v-2c0-.6.4-1 1-1h22c.6 0 1 .4 1 1v2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_insert_template"
