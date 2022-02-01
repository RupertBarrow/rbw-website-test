import _implicitStylesheets from "./metrics.css";

import _implicitScopedStylesheets from "./metrics.scoped.css?scoped=true";

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
      "d": "M72 22H28c-3.3 0-6 2.7-6 6v44c0 3.3 2.7 6 6 6h44c3.3 0 6-2.7 6-6V28c0-3.3-2.7-6-6-6zM38 66c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V55c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v11zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V40c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v26zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V34c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v32zm10 0c0 1.1-.9 2-2 2h-2c-1.1 0-2-.9-2-2V47c0-1.1.9-2 2-2h2c1.1 0 2 .9 2 2v19z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_metrics"
