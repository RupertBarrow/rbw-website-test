import _implicitStylesheets from "./call.css";

import _implicitScopedStylesheets from "./call.scoped.css?scoped=true";

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
      "d": "M77.7 63.9l-6.2-5a6.002 6.002 0 00-7.3-.2L58.3 63c-.8.6-1.899.5-2.6-.2L46 54l-8.9-9.8c-.7-.7-.8-1.8-.2-2.6l4.3-5.9c1.6-2.2 1.5-5.2-.2-7.3l-5-6.2c-2.2-2.8-6.4-3-8.9-.5l-5.4 5.4c-1.2 1.2-1.8 2.9-1.8 4.5.7 12.7 6.5 24.8 15 33.3s20.5 14.3 33.3 15c1.7.1 3.3-.601 4.5-1.801l5.4-5.399c2.7-2.4 2.4-6.6-.4-8.8z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_call"
