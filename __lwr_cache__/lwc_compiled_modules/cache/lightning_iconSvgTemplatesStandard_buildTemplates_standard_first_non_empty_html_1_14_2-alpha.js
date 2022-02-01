import _implicitStylesheets from "./first_non_empty.css";

import _implicitScopedStylesheets from "./first_non_empty.scoped.css?scoped=true";

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
      "d": "M55.9 49.3l22.7-22.8c.8-.8.8-2 0-2.9l-2.7-2.9c-.8-.8-2-.8-2.9 0L50.1 43.6c-.5.5-1.4.5-1.9 0l-22.8-23c-.8-.8-2-.8-2.9 0l-2.9 2.9c-.8.8-.8 2 0 2.9l22.8 22.8c.5.5.5 1.4 0 1.9L19.6 74c-.8.8-.8 2 0 2.9l2.9 2.9c.8.8 2 .8 2.9 0L48.2 57c.5-.5 1.4-.5 1.9 0l22.6 22.6c.8.8 2 .8 2.9 0l2.9-2.9c.8-.8.8-2 0-2.9L55.9 51.2c-.6-.6-.6-1.4 0-1.9z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_first_non_empty"
