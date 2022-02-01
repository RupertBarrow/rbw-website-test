import _implicitStylesheets from "./dashboard_ea.css";

import _implicitScopedStylesheets from "./dashboard_ea.scoped.css?scoped=true";

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
      "d": "M22.5 19.7h20c1.4 0 2.5 1.1 2.5 2.5v54.9c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.2c0-1.4 1.1-2.5 2.5-2.5zM57.5 19.6h20c1.4 0 2.5 1.1 2.5 2.5V42c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V22.1c0-1.4 1.1-2.5 2.5-2.5zM57.5 54.6h20c1.4 0 2.5 1.1 2.5 2.5V77c0 1.4-1.1 2.5-2.5 2.5h-20c-1.4 0-2.5-1.1-2.5-2.5V57.1c0-1.3 1.1-2.5 2.5-2.5z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_dashboard_ea"
