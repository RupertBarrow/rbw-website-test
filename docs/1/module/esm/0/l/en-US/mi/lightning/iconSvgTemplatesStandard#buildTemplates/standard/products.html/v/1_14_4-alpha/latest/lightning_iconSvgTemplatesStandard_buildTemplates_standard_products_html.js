import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fproducts.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_products_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fproducts.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_products_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M57.6 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.78 1.78 0 001.9 1.9zM75 67.4h3.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9H75a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9zM48.7 67.4a1.81 1.81 0 002-1.9v-31a1.78 1.78 0 00-1.9-1.9h-.1a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM37.8 67.4h1.9a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-1.9a1.78 1.78 0 00-1.9 1.9v31a1.73 1.73 0 001.9 1.9zM21.1 67.4h7.7a1.78 1.78 0 001.9-1.9v-31a1.78 1.78 0 00-1.9-1.9h-7.7a1.78 1.78 0 00-1.9 1.9v31a1.84 1.84 0 001.9 1.9z"
  },
  key: 2,
  svg: true
};
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
  }, [api_element("g", stc0, [api_element("path", stc1)])])];
}
export default registerTemplate(tmpl);
tmpl.stylesheets = [];


if (_implicitStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitStylesheets)
}
if (_implicitScopedStylesheets) {
  tmpl.stylesheets.push.apply(tmpl.stylesheets, _implicitScopedStylesheets)
}
if (_implicitStylesheets || _implicitScopedStylesheets) {
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_products"
}
