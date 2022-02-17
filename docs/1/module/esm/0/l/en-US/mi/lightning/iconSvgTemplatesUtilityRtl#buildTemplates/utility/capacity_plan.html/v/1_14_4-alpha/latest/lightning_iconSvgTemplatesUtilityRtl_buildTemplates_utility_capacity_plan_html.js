import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fcapacity_plan.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_capacity_plan_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Fcapacity_plan.scoped.css?scoped=true%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_capacity_plan_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M43.3 6h-1.73a.74.74 0 00-.67.8V10a6.37 6.37 0 01-6.3 6.4H17.4a6.37 6.37 0 01-6.3-6.4V6.67a.74.74 0 00-.8-.67H8.7A4.77 4.77 0 004 10.8v34.4A4.77 4.77 0 008.7 50h34.6a4.77 4.77 0 004.7-4.8V10.8A4.77 4.77 0 0043.3 6zM25.92 45a12 12 0 01.16-24 12 12 0 01-.16 24z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M16.91 11.6h17.86a1.59 1.59 0 001.63-1.55V6.8A4.81 4.81 0 0031.6 2H20.4a4.82 4.82 0 00-4.8 4.8V10a1.47 1.47 0 001.31 1.6zM32.23 27.2A9.09 9.09 0 0026 24.4v8.8h8.77a7.32 7.32 0 00-2.54-6z"
  },
  key: 3,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_capacity_plan"
}
