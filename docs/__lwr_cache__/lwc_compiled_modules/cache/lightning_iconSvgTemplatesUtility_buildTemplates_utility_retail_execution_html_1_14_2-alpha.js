import _implicitStylesheets from "./retail_execution.css";

import _implicitScopedStylesheets from "./retail_execution.scoped.css?scoped=true";

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
  }, [api_element("g", {
    key: 2,
    svg: true
  }, [api_element("path", {
    attrs: {
      "d": "M17.4 11.6h17.3c.9 0 1.6-.7 1.6-1.6V6.8c0-2.6-2.1-4.8-4.7-4.8h-11c-2.6 0-4.7 2.2-4.7 4.8V10c-.1.9.6 1.6 1.5 1.6z"
    },
    key: 3,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M43.3 6h-1.6c-.5 0-.8.3-.8.8V10c0 3.5-2.8 6.4-6.3 6.4H17.4c-3.5 0-6.3-2.9-6.3-6.4V6.8c0-.5-.3-.8-.8-.8H8.7C6.1 6 4 8.2 4 10.8v34.4C4 47.8 6.1 50 8.7 50h34.6c2.6 0 4.7-2.2 4.7-4.8V10.8C48 8.2 45.9 6 43.3 6zm-6.6 21.1l-12 12c-.5.5-1 .7-1.6.7-.5 0-1.2-.2-1.6-.7l-5.8-5.8c-.5-.5-.5-1.2 0-1.6l1.6-1.6c.5-.5 1.2-.5 1.6 0l4.2 4.2L33.4 24c.5-.5 1.2-.5 1.6 0l1.6 1.6c.5.3.5 1.1.1 1.5z"
    },
    key: 4,
    svg: true
  }, [])])])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_retail_execution"
