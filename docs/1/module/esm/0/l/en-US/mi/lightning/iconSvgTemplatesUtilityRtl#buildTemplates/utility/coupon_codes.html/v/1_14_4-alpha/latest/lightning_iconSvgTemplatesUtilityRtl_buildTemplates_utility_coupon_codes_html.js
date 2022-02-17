import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/coupon_codes.css/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_coupon_codes_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning/iconSvgTemplatesUtilityRtl#buildTemplates/utility/coupon_codes.scoped.css?scoped=true/v/1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_coupon_codes_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc/v/2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M50 19.6v-7.2a2.39 2.39 0 00-2.4-2.4H16.4v1.6h-1.6V10H4.4A2.39 2.39 0 002 12.4v7.2a6.4 6.4 0 010 12.8v7.2A2.39 2.39 0 004.4 42h10.4v-1.6h1.6V42h31.2a2.39 2.39 0 002.4-2.4v-7.2a6.4 6.4 0 010-12.8zM16.4 37.2h-1.6V34h1.6zm0-6.4h-1.6v-3.2h1.6zm0-6.4h-1.6v-3.2h1.6zm0-6.4h-1.6v-3.2h1.6zm10.4 10.9L25.31 30l-1.62-2.2L22 30l-1.48-1.1 1.63-2.33-2.48-.76.55-1.74 2.44.79V22h2v2.82l2.44-.79.55 1.74-2.49.76zm12.67 0L38 30l-1.62-2.2-1.7 2.2-1.49-1.1 1.63-2.33-2.49-.76.55-1.74 2.44.79V22h2v2.82l2.44-.79.55 1.74-2.48.76z"
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
      "viewBox": "0 0 52 52"
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_coupon_codes"
}
