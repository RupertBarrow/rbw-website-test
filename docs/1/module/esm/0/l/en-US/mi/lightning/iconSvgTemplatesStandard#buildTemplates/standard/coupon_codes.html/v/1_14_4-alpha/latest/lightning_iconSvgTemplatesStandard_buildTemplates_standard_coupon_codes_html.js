import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fcoupon_codes.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_coupon_codes_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesStandard%23buildTemplates%2Fstandard%2Fcoupon_codes.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesStandard_buildTemplates_standard_coupon_codes_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M80 42v-9a3 3 0 00-3-3H38v2h-2v-2H23a3 3 0 00-3 3v9a8 8 0 010 16v9a3 3 0 003 3h13v-2h2v2h39a3 3 0 003-3v-9a8 8 0 010-16zM38 64h-2v-4h2zm0-8h-2v-4h2zm0-8h-2v-4h2zm0-8h-2v-4h2zm13 13.62L49.13 55l-2-2.75L45 55l-1.87-1.33 2-2.9-3.11-1 .69-2.18 3 1v-3.54h2.53v3.52l3-1 .68 2.18-3.11 1zm15.84 0L65 55l-2-2.75L60.85 55 59 53.62l2-2.9-3.11-1 .68-2.18 3 1v-3.49h2.53v3.52l3-1 .69 2.18-3.11 1z"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesStandard_coupon_codes"
}
