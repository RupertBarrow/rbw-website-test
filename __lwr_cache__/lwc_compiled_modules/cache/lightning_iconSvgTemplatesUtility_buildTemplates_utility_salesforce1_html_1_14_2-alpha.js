import _implicitStylesheets from "./salesforce1.css";

import _implicitScopedStylesheets from "./salesforce1.scoped.css?scoped=true";

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
      "d": "M21.7 11.9c1.7-1.7 4-2.8 6.6-2.8 3.4 0 6.4 1.9 8 4.7 1.4-.6 2.9-1 4.5-1C47 12.8 52 17.8 52 24s-5 11.2-11.2 11.2c-.8 0-1.5-.1-2.2-.2-1.4 2.5-4.1 4.2-7.2 4.2-1.3 0-2.5-.3-3.6-.8-1.4 3.3-4.7 5.6-8.6 5.6-4 0-7.5-2.5-8.8-6.1-.6.1-1.2.2-1.8.2-4.8 0-8.7-3.9-8.7-8.7 0-3.2 1.7-6 4.3-7.5-.5-1.2-.8-2.6-.8-4 0-5.5 4.5-10 10.1-10 3.5.1 6.4 1.6 8.2 4"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtility_salesforce1"
