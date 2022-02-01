import _implicitStylesheets from "./task2.css";

import _implicitScopedStylesheets from "./task2.scoped.css?scoped=true";

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
      "d": "M42.6 71c-1.2 0-2.4-.5-3.3-1.4L20.6 50.9c-.8-.8-.8-2 0-2.8l3.7-3.7c.8-.8 2-.8 2.8 0l15.5 15.4 30.3-30.3c.8-.8 2-.8 2.8 0l3.7 3.7c.8.8.8 2 0 2.8L45.8 69.6c-.9.9-2 1.4-3.2 1.4z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_task2"
