import _implicitStylesheets from "./process.css";

import _implicitScopedStylesheets from "./process.scoped.css?scoped=true";

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
      "d": "M16.2 23.2l8.5-10.6c.6-.8 1.8-.8 2.4 0l8.5 10.7c.3.4.7.7 1.2.7h9.6c.8 0 1.6-.7 1.6-1.5V8c0-2.2-1.9-4-4.1-4H8C5.8 4 4 5.8 4 8v14.5c0 .8.7 1.5 1.5 1.5H15c.5 0 .9-.4 1.2-.8zM35.7 28.8l-8.5 10.6c-.6.8-1.8.8-2.4 0l-8.5-10.7c-.4-.3-.8-.7-1.3-.7H5.5c-.8 0-1.5.7-1.5 1.5V44c0 2.2 1.8 4 4 4h36c2.2 0 4-1.8 4-4V29.5c0-.8-.7-1.5-1.5-1.5h-9.6c-.5 0-.9.4-1.2.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_process"
