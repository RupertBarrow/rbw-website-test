import _implicitStylesheets from "./calculated_insights.css";

import _implicitScopedStylesheets from "./calculated_insights.scoped.css?scoped=true";

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
      "d": "M72.51 26a7.5 7.5 0 00-6 12l-6.24 11a5 5 0 00-.77 0 7.5 7.5 0 00-3.76 1l-7.93-5.84A7.1 7.1 0 0048 42.5a7.5 7.5 0 10-13.41 4.59L28.14 59h-.64a7.5 7.5 0 105.91 2.88L39.86 50h.64a7.47 7.47 0 003.75-1l7.93 5.84A7.67 7.67 0 0052 56.5 7.5 7.5 0 1065.49 52l6.24-11h.77a7.5 7.5 0 000-15zM72.5 26h.01-.01z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_calculated_insights"
