import _implicitStylesheets from "./merge.css";

import _implicitScopedStylesheets from "./merge.scoped.css?scoped=true";

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
      "d": "M42.3 44c-5.6-2.7-9.6-7.5-11.6-13-.8-2-1.3-4.3-1.5-6.3v-3.5H40c.8 0 1.4-.9.8-1.8l-14.2-17c-.5-.6-1.6-.6-2 0l-13.8 17c-.5.6 0 1.8.8 1.8h10.9v3.5c-.3 2.1-.8 4.4-1.5 6.3-2 5.5-6 10.3-11.6 13-.8.3-1.1 1.3-.8 2l1.3 3.1c.4.8 1.3 1.1 2.1.6 6-2.9 10.8-7.5 13.7-13 3 5.5 7.7 10.1 13.8 13 .8.4 1.8.3 2.1-.6l1.3-3.1c.6-.7.2-1.6-.6-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_merge"
