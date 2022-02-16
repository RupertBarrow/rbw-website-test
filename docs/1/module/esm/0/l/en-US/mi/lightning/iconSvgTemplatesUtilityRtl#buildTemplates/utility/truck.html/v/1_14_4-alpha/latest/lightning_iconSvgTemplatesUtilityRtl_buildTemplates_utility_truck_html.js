import _implicitStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftruck.css%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_truck_css.js";

import _implicitScopedStylesheets from "/1/module/esm/0/l/en-US/mi/lightning%2FiconSvgTemplatesUtilityRtl%23buildTemplates%2Futility%2Ftruck.scoped.css%3Fscoped%3Dtrue%2Fv%2F1_14_4-alpha/latest/lightning_iconSvgTemplatesUtilityRtl_buildTemplates_utility_truck_scoped_css?scoped=true.js";

import {registerTemplate} from "/1/module/esm/0/l/en-US/mi/lwc%2Fv%2F2_9_0/latest/lwc.js";
const stc0 = {
  key: 1,
  svg: true
};
const stc1 = {
  attrs: {
    "d": "M49.55 23.68l-5.85-5.86a1.52 1.52 0 00-1.05-.44H36.5a1.5 1.5 0 00-1.5 1.5v12a.74.74 0 001 .67 8.84 8.84 0 013.45-.67 9.05 9.05 0 017.88 4.65.76.76 0 001.12.22A4.58 4.58 0 0050 32.38v-7.66a1.45 1.45 0 00-.45-1.04z"
  },
  key: 2,
  svg: true
};
const stc2 = {
  attrs: {
    "d": "M29 10.62H3.5a1.5 1.5 0 00-1.5 1.5v20.26a4.58 4.58 0 001.5 3.37.72.72 0 001.12-.22 9 9 0 0116.2.9.74.74 0 00.68.45H26a4.52 4.52 0 004.5-4.5V12.12a1.51 1.51 0 00-1.5-1.5z"
  },
  key: 3,
  svg: true
};
const stc3 = {
  attrs: {
    "cx": "39.5",
    "cy": "39.88",
    "r": "4.5"
  },
  key: 4,
  svg: true
};
const stc4 = {
  attrs: {
    "cx": "12.5",
    "cy": "39.88",
    "r": "4.5"
  },
  key: 5,
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
  }, [api_element("g", stc0, [api_element("path", stc1), api_element("path", stc2), api_element("circle", stc3), api_element("circle", stc4)])])];
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
  tmpl.stylesheetToken = "lightning-iconSvgTemplatesUtilityRtl_truck"
}
