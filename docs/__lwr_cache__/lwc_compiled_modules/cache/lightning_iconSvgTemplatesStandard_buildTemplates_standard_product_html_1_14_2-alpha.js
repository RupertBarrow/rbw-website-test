import _implicitStylesheets from "./product.css";

import _implicitScopedStylesheets from "./product.scoped.css?scoped=true";

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
      "d": "M22 66h5c1.1 0 2-.9 2-2V33c0-1.1-.9-2-2-2h-5c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2zM78 31h-5c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h5c1.1 0 2-.9 2-2V33c0-1.1-.9-2-2-2zM53 66c1.1 0 2-.9 2-2V33c0-1.1-.9-2-2-2h-6c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h6zM65 66c1.1 0 2-.9 2-2V33c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h2zM39 66c1.1 0 2-.9 2-2V33c0-1.1-.9-2-2-2h-2c-1.1 0-2 .9-2 2v31c0 1.1.9 2 2 2h2zM78 72H22c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2zM78 20H22c-1.1 0-2 .9-2 2v2c0 1.1.9 2 2 2h56c1.1 0 2-.9 2-2v-2c0-1.1-.9-2-2-2z"
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
tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_product"
