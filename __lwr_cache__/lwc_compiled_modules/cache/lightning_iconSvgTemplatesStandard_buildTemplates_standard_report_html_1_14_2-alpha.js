import _implicitStylesheets from "./report.css";

import _implicitScopedStylesheets from "./report.scoped.css?scoped=true";

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
      "d": "M39 32h22c1.1 0 2-.9 2-2v-4c0-3.3-2.7-6-6-6H43c-3.3 0-6 2.7-6 6v4c0 1.1.9 2 2 2z"
    },
    key: 2,
    svg: true
  }, []), api_element("path", {
    attrs: {
      "d": "M72 25h-2c-.6 0-1 .4-1 1v4c0 4.4-3.6 8-8 8H39c-4.4 0-8-3.6-8-8v-4c0-.6-.4-1-1-1h-2c-3.3 0-6 2.7-6 6v43c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V31c0-3.3-2.7-6-6-6zM43 66c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V56c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v10zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V47c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v19zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V51c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v15z"
    },
    key: 3,
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_report"
