import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fserialized_product.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_serialized_product_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fserialized_product.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_serialized_product_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M77 20H23a3 3 0 00-3 3v11.9a3 3 0 003 3h54a3 3 0 003-3V23a3 3 0 00-3-3zm-22.1 9a4.91 4.91 0 01-4.9 4.9 5 5 0 114.9-5.1zM77 41H23a3 3 0 00-3 3v11.9a3 3 0 003 3h54a3 3 0 003-3V44a3 3 0 00-3-3zm-30.1 8.9a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zM77 62H23a3 3 0 00-3 3v12a3 3 0 003 3h54a3 3 0 003-3V65a3 3 0 00-3-3zm-37.1 8.9a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1zm15 0a4.81 4.81 0 01-4.9 5 5 5 0 114.9-5.1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_serialized_product"
}
